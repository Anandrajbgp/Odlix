import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function PATCH(request: Request) {
  try {
    const { email, name, phone, state, district, image } = await request.json();
    if (!email) {
      return NextResponse.json({ message: "Email is required" }, { status: 400 });
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
