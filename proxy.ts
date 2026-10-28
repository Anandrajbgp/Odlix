import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

const AUTH_ROUTES = ["/login", "/signup"];
const USER_PROTECTED_PREFIXES = ["/elearning/dashboard"];
const ADMIN_PROTECTED_PREFIXES = ["/elearning/admin"];

function pathStartsWithAny(pathname: string, prefixes: readonly string[]): boolean {
  return prefixes.some((prefix) => pathname.startsWith(prefix));
}

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const isAuthRoute = AUTH_ROUTES.includes(pathname);
  const requiresUserAuth = pathStartsWithAny(pathname, USER_PROTECTED_PREFIXES) || pathStartsWithAny(pathname, ADMIN_PROTECTED_PREFIXES);
  const requiresAdmin = pathStartsWithAny(pathname, ADMIN_PROTECTED_PREFIXES);

  const token = await getToken({ req: request, secret: process.env.AUTH_SECRET });
  const isLoggedIn = Boolean(token?.sub);

  if (isAuthRoute && isLoggedIn) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  if (requiresUserAuth && !isLoggedIn) {
    const loginUrl = new URL("/login", request.url);
    loginUrl.searchParams.set("callbackUrl", pathname);
    return NextResponse.redirect(loginUrl);
  }

  if (requiresAdmin && token?.role !== "ADMIN") {
    return NextResponse.redirect(new URL("/elearning/dashboard", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
