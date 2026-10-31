import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
  try {
    const { email, token, name, phone, state, district } = await request.json();
    if (!email || !token) {
      return NextResponse.json({ message: "Email and OTP token are required" }, { status: 400 });
    }

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    let supabaseVerified = false;

    if (!supabaseUrl || !supabaseAnonKey) {
      if (token.length === 6) {
        supabaseVerified = true;
      }
    } else {
      const res = await fetch(`${supabaseUrl}/auth/v1/verify`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "apikey": supabaseAnonKey,
        },
        body: JSON.stringify({ type: "email", email, token }),
      });

      const data = await res.json();
      if (res.ok && data.access_token) {
        supabaseVerified = true;
      } else {
        return NextResponse.json({ message: data.error_description || data.msg || "Invalid OTP" }, { status: 400 });
      }
    }

    if (supabaseVerified) {
      const isAdmin = email.toLowerCase() === "team.odlix@gmail.com";
      const userRole = isAdmin ? "ADMIN" : "USER";

      let user = await prisma.user.findUnique({
        where: { email },
        include: {
          martProfile: true,
          elearningProfile: true,
          tradingProfile: true,
          agencyProfile: true,
        },
      });

      if (!user) {
        user = await prisma.user.create({
          data: {
            email,
            name: name || email.split("@")[0],
            phone: phone || null,
            state: state || null,
            district: district || null,
            role: userRole,
            passwordHash: "SUPABASE_OTP_AUTH",
            martProfile: { create: {} },
            elearningProfile: { create: {} },
            tradingProfile: { create: {} },
            agencyProfile: { create: {} },
          },
          include: {
            martProfile: true,
            elearningProfile: true,
            tradingProfile: true,
            agencyProfile: true,
          },
        });
      } else {
        user = await prisma.user.update({
          where: { email },
          data: {
            name: name || user.name,
            phone: phone || user.phone,
            state: state || user.state,
            district: district || user.district,
            role: userRole,
          },
          include: {
            martProfile: true,
            elearningProfile: true,
            tradingProfile: true,
            agencyProfile: true,
          },
        });

        if (!user.martProfile) await prisma.martProfile.create({ data: { userId: user.id } }).catch(() => {});
        if (!user.elearningProfile) await prisma.elearningProfile.create({ data: { userId: user.id } }).catch(() => {});
        if (!user.tradingProfile) await prisma.tradingProfile.create({ data: { userId: user.id } }).catch(() => {});
        if (!user.agencyProfile) await prisma.agencyProfile.create({ data: { userId: user.id } }).catch(() => {});
      }

      return NextResponse.json({ success: true, user, message: "Authentication successful" });
    }

    return NextResponse.json({ message: "Verification failed" }, { status: 400 });
  } catch (error: any) {
    return NextResponse.json({ message: error.message || "Internal server error" }, { status: 500 });
  }
}
