import { PrismaAdapter } from "@auth/prisma-adapter";
type UserRole = "USER" | "ADMIN";
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { prisma } from "@/lib/prisma";
import { verifyPassword } from "@/lib/password";
import { signInSchema } from "@/lib/validations/auth";

const AUTH_ROUTES = ["/login", "/signup"];
const USER_PROTECTED_PREFIXES = ["/elearning/dashboard"];
const ADMIN_PROTECTED_PREFIXES = ["/elearning/admin"];

function pathStartsWithAny(pathname: string, prefixes: readonly string[]): boolean {
  return prefixes.some((prefix) => pathname.startsWith(prefix));
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: "jwt",
  },
  providers: [
    Credentials({
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const parsed = signInSchema.safeParse(credentials);
        if (!parsed.success) {
          return null;
        }

        const email = parsed.data.email.toLowerCase();
        const user = await prisma.user.findUnique({
          where: { email },
        });

        if (!user) {
          return null;
        }

        const isValid = await verifyPassword(parsed.data.password, user.passwordHash);
        if (!isValid) {
          return null;
        }

        return {
          id: user.id,
          name: user.name,
          email: user.email,
          role: user.role,
        };
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  callbacks: {
    jwt({ token, user }) {
      if (user) {
        token.sub = user.id;
        token.role = (user as { role?: UserRole }).role ?? "USER";
      }
      return token;
    },
    session({ session, token }) {
      if (session.user) {
        session.user.id = token.sub ?? "";
        session.user.role = (token.role as UserRole | undefined) ?? "USER";
      }
      return session;
    },
    authorized({ auth, request: { nextUrl } }) {
      const pathname = nextUrl.pathname;
      const isLoggedIn = Boolean(auth?.user);
      const isAuthRoute = AUTH_ROUTES.includes(pathname);
      const requiresUserAuth = pathStartsWithAny(pathname, USER_PROTECTED_PREFIXES) || pathStartsWithAny(pathname, ADMIN_PROTECTED_PREFIXES);
      const requiresAdmin = pathStartsWithAny(pathname, ADMIN_PROTECTED_PREFIXES);

      if (isAuthRoute) {
        if (isLoggedIn) {
          return Response.redirect(new URL("/", nextUrl));
        }
        return true;
      }

      if (!requiresUserAuth) {
        return true;
      }

      if (!isLoggedIn) {
        return false;
      }

      if (requiresAdmin && auth?.user?.role !== "ADMIN") {
        return Response.redirect(new URL("/elearning/dashboard", nextUrl));
      }

      return true;
    },
  },
});
