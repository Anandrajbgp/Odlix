import { NextRequest, NextResponse } from "next/server";

type ChatRole = "user" | "assistant";

type ChatMessage = {
  role: ChatRole;
  content: string;
};

type ChatRequest = {
  message?: string;
  history?: ChatMessage[];
};

export const runtime = "edge";

const SYSTEM_PROMPT = `You are "EcoBot", the official AI assistant for this digital ecosystem.

Identity & behavior rules:
- Communicate in friendly, professional Hinglish (Hindi + English mix).
- Keep every answer short and actionable in 2-3 sentences.
- Use "digital ecosystem" naturally instead of repeating platform names unless user asks for full breakdown.

Knowledge blueprint:
- E-Learning: High-demand courses. Highlight earning potential when relevant (Web Dev: ₹60k-1.5L/month, Drop Servicing: ₹80k-3L/month).
- Trading: Ask user to download the official trading app and always include: "Trading involves financial risk."
- Test Platform: Competitive mock tests with live timer and negative marking.
- Agency: High-converting drop servicing setup for clients and freelancers.
- Utility Tools: Free bots/tools like image compressors and finance calculators.
- E-Commerce: Dynamic checkout for physical and digital products.

Decision rules:
- If user asks about money, career growth, or skills, prioritize E-Learning/Affiliate guidance and mention earning potential clearly.
- If uncertain, clearly say the limit and provide the best immediate next step.
- Do not provide long explanations, filler, or generic motivational text.`;

const DEFAULT_MODEL = "gemini-1.5-flash";

function normalizeHistory(history: ChatMessage[] | undefined): ChatMessage[] {
  if (!Array.isArray(history)) {
    return [];
  }

  return history
    .filter((message) => (message.role === "user" || message.role === "assistant") && typeof message.content === "string")
    .map((message) => ({
      role: message.role,
      content: message.content.trim(),
    }))
    .filter((message) => message.content.length > 0)
    .slice(-8);
}

export async function POST(request: NextRequest) {
  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    return NextResponse.json(
      {
        message: "Chat service is not configured right now. Please try again shortly.",
      },
      { status: 500 }
    );
  }

  let payload: ChatRequest;

  try {
    payload = (await request.json()) as ChatRequest;
  } catch {
    return NextResponse.json({ message: "Invalid request payload." }, { status: 400 });
  }

  const userMessage = payload.message?.trim() ?? "";

  if (userMessage.length === 0) {
    return NextResponse.json({ message: "Message is required." }, { status: 400 });
  }

  if (userMessage.length > 2000) {
    return NextResponse.json({ message: "Message is too long." }, { status: 400 });
  }

  const model = process.env.GEMINI_MODEL ?? DEFAULT_MODEL;
  const history = normalizeHistory(payload.history);

  const contents = [
    ...history.map((message) => ({
      role: message.role === "assistant" ? "model" : "user",
      parts: [{ text: message.content }],
    })),
    {
      role: "user",
      parts: [{ text: userMessage }],
    },
  ];

  try {
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          systemInstruction: {
            role: "system",
            parts: [{ text: SYSTEM_PROMPT }],
          },
          contents,
          generationConfig: {
            temperature: 0.6,
            maxOutputTokens: 220,
          },
        }),
      }
    );

    if (!response.ok) {
      const errorText = await response.text();

      if (errorText.includes("API_KEY_INVALID") || errorText.includes("invalid API key")) {
        return NextResponse.json(
          {
            message: "Gemini API key invalid hai. Vercel me GEMINI_API_KEY verify karein.",
          },
          { status: 502 }
        );
      }

      if (errorText.includes("PERMISSION_DENIED")) {
        return NextResponse.json(
          {
            message: "Gemini API permission denied. API key restrictions ya project permissions check karein.",
          },
          { status: 502 }
        );
      }

      if (errorText.includes("RESOURCE_EXHAUSTED") || errorText.includes("quota")) {
        return NextResponse.json(
          {
            message: "Gemini quota exceed ho gaya hai. Billing/quota settings check karein.",
          },
          { status: 502 }
        );
      }

      if (errorText.includes("not found") || errorText.includes("models/")) {
        return NextResponse.json(
          {
            message: "Gemini model unavailable hai. GEMINI_MODEL ko gemini-1.5-flash ya gemini-2.0-flash set karein.",
          },
          { status: 502 }
        );
      }

      return NextResponse.json(
        {
          message: "AI service is temporarily unavailable. Please try again shortly.",
        },
        { status: 502 }
      );
    }

    const data = (await response.json()) as {
      candidates?: Array<{
        content?: {
          parts?: Array<{ text?: string }>;
        };
      }>;
    };

    const reply = data.candidates?.[0]?.content?.parts?.map((part) => part.text ?? "").join("\n").trim();

    if (!reply) {
      return NextResponse.json(
        {
          message: "No response received from AI. Please try again.",
        },
        { status: 502 }
      );
    }

    return NextResponse.json({ reply });
  } catch {
    return NextResponse.json(
      {
        message: "Could not process your request right now. Please try again.",
      },
      { status: 502 }
    );
  }
}
