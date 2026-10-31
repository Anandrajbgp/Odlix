import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { email } = await request.json();
    if (!email) {
      return NextResponse.json({ message: "Email is required" }, { status: 400 });
    }

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    if (!supabaseUrl || !supabaseAnonKey) {
      return NextResponse.json({
        success: true,
        message: "OTP sent successfully (Simulated mode: use any 6-digit code like 123456)"
      });
    }

    const res = await fetch(`${supabaseUrl}/auth/v1/otp`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "apikey": supabaseAnonKey,
      },
      body: JSON.stringify({ email, create_user: true }),
    });

    const data = await res.json();

    if (!res.ok) {
      return NextResponse.json({ message: data.error_description || data.msg || "Failed to send OTP" }, { status: res.status });
    }

    return NextResponse.json({ success: true, message: "OTP sent to your email successfully" });
  } catch (error: any) {
    return NextResponse.json({ message: error.message || "Internal server error" }, { status: 500 });
  }
}
