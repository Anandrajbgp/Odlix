import { NextResponse } from "next/server";
import { rateLimit } from "@/lib/rate-limit";
import { supabase } from "@/lib/supabase";
import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
  try {
    const ip = request.headers.get("x-forwarded-for") || "127.0.0.1";
    const { email, isLogin } = await request.json();

    if (!email) {
      return NextResponse.json({ message: "Email is required" }, { status: 400 });
    }

    // If it's login, check if user exists in database first
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

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    if (!supabaseUrl || !supabaseAnonKey || supabaseUrl.includes("YOUR_PROJECT_REF")) {
      return NextResponse.json({
        success: true,
        message: "OTP sent successfully (Simulated mode: use any 6-digit code like 123456)"
      });
    }

    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        shouldCreateUser: !isLogin,
      },
    });

    if (error) {
      return NextResponse.json({ message: error.message || "Failed to send OTP" }, { status: 400 });
    }

    return NextResponse.json({ success: true, message: "OTP sent to your email successfully" });
  } catch (error: any) {
    return NextResponse.json({ message: error.message || "Internal server error" }, { status: 500 });
  }
}
