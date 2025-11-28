// src/app/api/enquiry/route.js
import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import Enquiry from "@/models/Enquiry";
import { sendEnquiryEmail } from "@/lib/mail";

export async function POST(req) {
  try {
    const body = await req.json();
    const {
      name,
      phone,
      productId,
      productName,
      message,
      source,
    } = body;

    // At least phone OR product info must be there
    if (!phone && !productId && !productName) {
      return NextResponse.json(
        { success: false, error: "Phone or product info is required" },
        { status: 400 }
      );
    }

    await connectToDatabase();

    const enquiry = await Enquiry.create({
      name: name || "",
      phone: phone || "",
      productId: productId || "",
      productName: productName || "",
      message: message || "",
      source: source || "unknown",
    });

    // Try email (non-blocking)
    sendEnquiryEmail(enquiry).catch((err) =>
      console.error("EMAIL_SEND_ERROR", err)
    );

    return NextResponse.json(
      { success: true, id: enquiry._id },
      { status: 201 }
    );
  } catch (err) {
    console.error("ENQUIRY_API_ERROR", err);
    return NextResponse.json(
      { success: false, error: "Something went wrong" },
      { status: 500 }
    );
  }
}
