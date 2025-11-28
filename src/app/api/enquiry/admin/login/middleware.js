// middleware.js
import { NextResponse } from "next/server";

export function middleware(req) {
  const { pathname } = req.nextUrl;

  // Only protect /admin routes
  if (!pathname.startsWith("/admin")) {
    return NextResponse.next();
  }

  // Allow login page without check
  if (pathname === "/admin/login") {
    return NextResponse.next();
  }

  const session = req.cookies.get("admin_session")?.value;
  const key = process.env.ADMIN_SESSION_KEY;

  if (!session || session !== key) {
    const loginUrl = new URL("/admin/login", req.url);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
