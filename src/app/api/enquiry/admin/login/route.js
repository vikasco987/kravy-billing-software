// src/app/api/admin/login/route.js
import { NextResponse } from "next/server";

const { ADMIN_USERNAME, ADMIN_PASSWORD, ADMIN_SESSION_KEY } = process.env;

export async function POST(req) {
  const { username, password } = await req.json();

  if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
    const res = NextResponse.json({ success: true });

    res.cookies.set("admin_session", ADMIN_SESSION_KEY, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 8, // 8 hours
    });

    return res;
  }

  return NextResponse.json(
    { success: false, error: "Invalid credentials" },
    { status: 401 }
  );
}
