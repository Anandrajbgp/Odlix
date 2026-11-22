import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const email = searchParams.get("email");

    if (!email) {
      return NextResponse.json({ message: "Email is required" }, { status: 400 });
    }

    const user = await prisma.user.findUnique({
      where: { email },
      include: {
        elearningProfile: true,
        martProfile: true,
        tradingProfile: true,
        agencyProfile: true,
      },
    });

    if (!user) {
      return NextResponse.json({ message: "User not found in database" }, { status: 404 });
    }

    return NextResponse.json({
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        state: user.state,
        district: user.district,
        image: user.image,
        role: user.role,
      },
      elearning: user.elearningProfile ? {
        courses: JSON.parse(user.elearningProfile.enrolledCourses || "[]"),
        progress: JSON.parse(user.elearningProfile.progress || "{}"),
        certificates: JSON.parse(user.elearningProfile.certificates || "[]"),
      } : { courses: [], progress: {}, certificates: [] },
      mart: user.martProfile ? {
        orders: JSON.parse(user.martProfile.orders || "[]"),
        cart: JSON.parse(user.martProfile.cartData || "{}"),
      } : { orders: [], cart: {} },
    });
  } catch (error: any) {
    console.error("Dashboard data fetch error:", error);
    return NextResponse.json({ message: error.message || "Internal server error" }, { status: 500 });
  }
}
