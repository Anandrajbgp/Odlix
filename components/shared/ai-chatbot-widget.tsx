"use client";

import { FormEvent, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Bot, Mic, Send, Volume2, X } from "lucide-react";

type ChatRole = "user" | "assistant";

type ChatMessage = {
  id: string;
  role: ChatRole;
  content: string;
};

declare global {
  interface Window {
    webkitSpeechRecognition?: new () => SpeechRecognition;
    SpeechRecognition?: new () => SpeechRecognition;
  }

  interface SpeechRecognition extends EventTarget {
    continuous: boolean;
    interimResults: boolean;
    lang: string;
    onresult: ((event: SpeechRecognitionEvent) => void) | null;
    onerror: ((event: Event) => void) | null;
    onend: (() => void) | null;
    start: () => void;
    stop: () => void;
  }

  interface SpeechRecognitionEvent extends Event {
    results: SpeechRecognitionResultList;
  }
}

export function AiChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [input, setInput] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: crypto.randomUUID(),
      role: "assistant",
      content:
        "Welcome. I am EcoBot, your assistant for this digital ecosystem. I can help with clear next steps for learning, growth, tools, and services.",
    },
  ]);

  const recognitionRef = useRef<SpeechRecognition | null>(null);
  const shouldReduceMotion = useReducedMotion();

  const speechSupported = useMemo(
    () => typeof window !== "undefined" && ("webkitSpeechRecognition" in window || "SpeechRecognition" in window),
    []
  );

  const startListening = () => {
    if (!speechSupported || isListening || isSending) {
      return;
    }

    const SpeechRecognitionCtor = window.SpeechRecognition ?? window.webkitSpeechRecognition;
    if (!SpeechRecognitionCtor) {
      return;
    }

    const recognition = new SpeechRecognitionCtor();
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = "hi-IN";

    recognition.onresult = (event: SpeechRecognitionEvent) => {
      const transcript = event.results[0]?.[0]?.transcript?.trim() ?? "";
      if (transcript.length > 0) {
        setInput(transcript);
        void sendMessage(transcript);
      }
    };

    recognition.onerror = () => {
      setError("Mic capture failed. Please type your message.");
    };

    recognition.onend = () => {
      setIsListening(false);
      recognitionRef.current = null;
    };

    recognitionRef.current = recognition;
    setError(null);
    setIsListening(true);
    recognition.start();
  };

  const speak = (text: string) => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) {
      return;
    }

    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "hi-IN";
    window.speechSynthesis.speak(utterance);
  };

  const sendMessage = async (explicitMessage?: string) => {
    const text = (explicitMessage ?? input).trim();

    if (text.length === 0 || isSending) {
      return;
    }

    const userMessage: ChatMessage = {
      id: crypto.randomUUID(),
      role: "user",
      content: text,
    };

    const nextMessages = [...messages, userMessage];
    setMessages(nextMessages);
    setInput("");
    setError(null);
    setIsSending(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: text,
          history: messages.map((message) => ({
            role: message.role,
            content: message.content,
          })),
        }),
      });

      const data = (await response.json()) as { reply?: string; message?: string };
      const replyText = typeof data.reply === "string" ? data.reply : "";

      if (!response.ok || replyText.length === 0) {
        throw new Error(data.message ?? "AI response unavailable.");
      }

      setMessages((prev) => [
        ...prev,
        {
          id: crypto.randomUUID(),
          role: "assistant",
          content: replyText,
        },
      ]);
    } catch (err) {
      const message = err instanceof Error ? err.message : "Failed to send message.";
      setError(message);
    } finally {
      setIsSending(false);
    }
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    void sendMessage();
  };

  return (
    <div className="relative z-[51]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            layout
            id="ai-chatbot-panel"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 12, scale: 0.98 }}
            animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
            exit={shouldReduceMotion ? undefined : { opacity: 0, y: 12, scale: 0.98 }}
            className="mb-4 w-[22rem] max-w-[calc(100vw-2rem)] rounded-2xl border border-border bg-card text-card-foreground shadow-2xl overflow-hidden"
          >
            <div className="bg-primary text-primary-foreground p-4">
              <h3 className="font-bold">EcoBot Assistant</h3>
              <p className="text-xs opacity-90">Professional, action-first guidance across the digital ecosystem</p>
            </div>

            <div className="h-72 overflow-y-auto bg-background px-3 py-3 space-y-2">
              {messages.map((message) => (
                <div key={message.id} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[88%] rounded-2xl px-3 py-2 text-sm ${
                      message.role === "user" ? "bg-primary text-primary-foreground" : "bg-muted text-foreground"
                    }`}
                  >
                    <p className="whitespace-pre-wrap">{message.content}</p>
                    {message.role === "assistant" && (
                      <button
                        type="button"
                        onClick={() => speak(message.content)}
                        className="mt-2 inline-flex items-center gap-1 text-[11px] font-semibold opacity-80 hover:opacity-100"
                        aria-label="Read response aloud"
                      >
                        <Volume2 className="h-3.5 w-3.5" /> Speak
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-border bg-background p-3">
              {error && <p className="mb-2 text-xs text-red-500">{error}</p>}

              <form onSubmit={onSubmit} className="flex items-center gap-2">
                <input
                  value={input}
                  onChange={(event) => setInput(event.target.value)}
                  placeholder="Ask about the digital ecosystem, growth, or next steps"
                  className="h-10 flex-1 rounded-xl border border-border bg-background px-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
                />

                <button
                  type="button"
                  onClick={startListening}
                  disabled={!speechSupported || isListening || isSending}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border disabled:opacity-50"
                  aria-label="Start voice input"
                  title={speechSupported ? "Voice input" : "Voice input not supported"}
                >
                  <Mic className={`h-4 w-4 ${isListening ? "text-cyan-500" : ""}`} />
                </button>

                <button
                  type="submit"
                  disabled={isSending}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground disabled:opacity-50"
                  aria-label="Send message"
                >
                  <Send className="h-4 w-4" />
                </button>
              </form>

            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-2xl hover:scale-105 transition-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        type="button"
        aria-expanded={isOpen}
        aria-controls="ai-chatbot-panel"
        aria-label={isOpen ? "Close AI chatbot" : "Open AI chatbot"}
      >
        {isOpen ? <X className="w-6 h-6" /> : <Bot className="w-6 h-6" />}
      </button>
    </div>
  );
}
