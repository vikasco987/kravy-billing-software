// src/lib/mail.js
import nodemailer from "nodemailer";

const {
  SMTP_HOST,
  SMTP_PORT,
  SMTP_USER,
  SMTP_PASS,
  NOTIFY_EMAIL,
} = process.env;

let transporter;

function getTransporter() {
  if (transporter) return transporter;

  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS) {
    console.warn("SMTP env vars not set. Email sending is disabled.");
    return null;
  }

  transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT),
    secure: Number(SMTP_PORT) === 465,
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS,
    },
  });

  return transporter;
}

export async function sendEnquiryEmail(enquiry) {
  const t = getTransporter();
  if (!t) return;

  const toEmail = NOTIFY_EMAIL || SMTP_USER;

  const subject = "New Kravy Enquiry from Website";

  const lines = [
    `Name: ${enquiry.name || "-"} `,
    `Phone: ${enquiry.phone || "-"} `,
    `Product: ${enquiry.productName || "-"} (${enquiry.productId || "-"})`,
    `Source: ${enquiry.source || "-"} `,
    ``,
    `Message:`,
    enquiry.message || "-",
  ];

  await t.sendMail({
    from: `Kravy Website <${SMTP_USER}>`,
    to: toEmail,
    subject,
    text: lines.join("\n"),
  });
}
