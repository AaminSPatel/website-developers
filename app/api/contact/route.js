import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { name, email, phone, contact, service, message, source } = await req.json();

    const isEmail = (v) => /\S+@\S+\.\S+/.test(v || "");

    // Mini hero form sends `contact` (phone or email combined)
    const resolvedEmail = email || (isEmail(contact) ? contact : "");
    const resolvedPhone = phone || (!isEmail(contact) ? contact : "");

    if (!name || (!resolvedEmail && !resolvedPhone)) {
      return NextResponse.json(
        { success: false, error: "Name aur contact detail zaroori hai" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_APP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: `"Business Sathi Website" <${process.env.EMAIL_USER}>`,
      to: process.env.CONTACT_TO_EMAIL,
      replyTo: resolvedEmail || process.env.EMAIL_USER,
      subject: `New Inquiry from ${name} — Business Sathi${source ? ` (${source})` : ""}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto;">
          <h2 style="color:#111;">New Contact Form Inquiry</h2>
          <table style="width:100%; border-collapse: collapse;">
            <tr><td style="padding:8px; font-weight:bold;">Name</td><td style="padding:8px;">${name}</td></tr>
            <tr><td style="padding:8px; font-weight:bold;">Email</td><td style="padding:8px;">${resolvedEmail || "N/A"}</td></tr>
            <tr><td style="padding:8px; font-weight:bold;">Phone</td><td style="padding:8px;">${resolvedPhone || "N/A"}</td></tr>
            <tr><td style="padding:8px; font-weight:bold;">Interested In</td><td style="padding:8px;">${service || "Not specified"}</td></tr>
            <tr><td style="padding:8px; font-weight:bold; vertical-align:top;">Message</td><td style="padding:8px;">${message || "N/A"}</td></tr>
            <tr><td style="padding:8px; font-weight:bold;">Source</td><td style="padding:8px;">${source || "Contact Page"}</td></tr>
          </table>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form email error:", error);
    return NextResponse.json(
      { success: false, error: "Email bhejne me error aayi" },
      { status: 500 }
    );
  }
}