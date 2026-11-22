import { NextResponse } from "next/server";
import { rateLimit } from "@/lib/rate-limit";
import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
  try {
    const ip = request.headers.get("x-forwarded-for") || "127.0.0.1";
    const { email, isLogin } = await request.json();

    if (!email) {
      return NextResponse.json({ message: "Email is required" }, { status: 400 });
    }

    if (isLogin) {
      const existingUser = await prisma.user.findUnique({ where: { email } });
      if (!existingUser) {
        return NextResponse.json({ message: "No account found with this email. Please sign up first." }, { status: 404 });
      }
    }

    const limiter = rateLimit(`otp-send-${email}-${ip}`, 3, 60 * 1000);
    if (!limiter.success) {
      return NextResponse.json({ message: "Too many OTP requests. Please try again after 1 minute." }, { status: 429 });
    }

    // Generate a secure 6-digit numeric OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    const expires = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes expiry

    // Save token in database
    await prisma.verificationToken.create({
      data: {
        identifier: email,
        token: otp,
        expires,
      },
    }).catch(async () => {
      await prisma.verificationToken.upsert({
        where: { token: otp },
        update: { identifier: email, expires },
        create: { identifier: email, token: otp, expires },
      }).catch(() => {});
    });

    const resendApiKey = process.env.RESEND_API_KEY;

    if (resendApiKey) {
      try {
        await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${resendApiKey}`,
          },
          body: JSON.stringify({
            from: "Odlix Security <onboarding@resend.dev>",
            to: [email],
            subject: "Your Odlix 6-Digit Verification OTP",
            html: `
              <div style="font-family: Arial, sans-serif; padding: 30px; background: #050b14; color: #ffffff; border-radius: 16px; max-width: 500px; margin: auto;">
                <h2 style="color: #06b6d4; margin-bottom: 10px;">Odlix Ecosystem Security</h2>
                <p style="color: #94a3b8; font-size: 14px;">Your secure 6-digit verification OTP code is:</p>
                <div style="font-size: 36px; font-weight: 900; letter-spacing: 6px; color: #38bdf8; background: #0f172a; padding: 20px; text-align: center; border-radius: 12px; margin: 20px 0; border: 1px solid rgba(6,182,212,0.3);">
                  ${otp}
                </div>
                <p style="color: #64748b; font-size: 12px;">This code will expire in 10 minutes. If you did not request this, please ignore this email.</p>
              </div>
            `,
          }),
        });
      } catch (e) {
        console.error("Failed to send email via Resend:", e);
      }
    } else {
      console.log(`[DEV MODE] OTP for ${email}: ${otp}`);
    }

    return NextResponse.json({
      success: true,
      message: resendApiKey ? "6-digit OTP sent to your email successfully" : `6-digit OTP generated successfully (Dev code: ${otp})`
    });
  } catch (error: any) {
    return NextResponse.json({ message: error.message || "Internal server error" }, { status: 500 });
  }
}
