import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { rateLimit } from "@/lib/rate-limit";

export async function PATCH(request: Request) {
  try {
    const ip = request.headers.get("x-forwarded-for") || "127.0.0.1";
    const { email, name, phone, state, district, image } = await request.json();

    if (!email) {
      return NextResponse.json({ message: "Email is required" }, { status: 400 });
    }

    // Rate limit: max 10 profile updates per minute per user/IP
    const limiter = rateLimit(`profile-update-${email}-${ip}`, 10, 60 * 1000);
    if (!limiter.success) {
      return NextResponse.json({ message: "Too many update requests. Please try again later." }, { status: 429 });
    }

    const updatedUser = await prisma.user.update({
      where: { email },
      data: {
        name: name !== undefined ? name : undefined,
        phone: phone !== undefined ? phone : undefined,
        state: state !== undefined ? state : undefined,
        district: district !== undefined ? district : undefined,
        image: image !== undefined ? image : undefined,
      },
    });

    return NextResponse.json({ success: true, user: updatedUser, message: "Profile updated successfully" });
  } catch (error: any) {
    return NextResponse.json({ message: error.message || "Internal server error" }, { status: 500 });
  }
}
