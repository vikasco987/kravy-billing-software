import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const body = await request.json();
    const { phone } = body;

    if (!phone || typeof phone !== "string") {
      return NextResponse.json({ error: "Invalid phone" }, { status: 400 });
    }

    const digits = phone.replace(/\D/g, "");
    if (digits.length !== 10) {
      return NextResponse.json({ error: "Invalid phone format" }, { status: 400 });
    }

    // 👉 Here you integrate your DB
    // Example (pseudo):
    // await prisma.enquiry.create({
    //   data: { phone: digits, createdAt: new Date() },
    // });

    console.log("[ENQUIRY] New lead:", digits);

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("ENQUIRY API ERROR", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
