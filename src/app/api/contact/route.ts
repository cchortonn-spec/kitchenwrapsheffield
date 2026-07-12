import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

const MAX_PHOTO_BYTES = 5 * 1024 * 1024;

function getResend() {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return null;
  return new Resend(apiKey);
}

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    const name = String(formData.get("name") || "").trim();
    const phone = String(formData.get("phone") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const postcode = String(formData.get("postcode") || "").trim();
    const message = String(formData.get("message") || "").trim();
    const photo = formData.get("photo");

    if (!name || !phone || !email || !postcode || !message) {
      return NextResponse.json(
        { error: "Please fill in all required fields." },
        { status: 400 }
      );
    }

    const resend = getResend();
    if (!resend) {
      return NextResponse.json(
        {
          error:
            "Email is not configured yet. Please call or WhatsApp us instead.",
        },
        { status: 503 }
      );
    }

    const toEmail =
      process.env.CONTACT_TO_EMAIL || "hello@kitchenwrapsheffield.com";
    const fromEmail =
      process.env.CONTACT_FROM_EMAIL ||
      "Kitchen Wrap Sheffield <hello@kitchenwrapsheffield.com>";

    const attachments: {
      filename: string;
      content: Buffer;
    }[] = [];

    if (photo instanceof File && photo.size > 0) {
      if (photo.size > MAX_PHOTO_BYTES) {
        return NextResponse.json(
          { error: "Photo must be under 5MB." },
          { status: 400 }
        );
      }

      const bytes = Buffer.from(await photo.arrayBuffer());
      attachments.push({
        filename: photo.name || "kitchen-photo.jpg",
        content: bytes,
      });
    }

    const { error } = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      replyTo: email,
      subject: `[Kitchen Wrap Sheffield] New enquiry from ${name}`,
      text: [
        "Site: kitchenwrapsheffield.com",
        "",
        `Name: ${name}`,
        `Phone: ${phone}`,
        `Email: ${email}`,
        `Postcode: ${postcode}`,
        "",
        "Message:",
        message,
        "",
        attachments.length
          ? `Photo attached: ${attachments[0].filename}`
          : "No photo attached",
      ].join("\n"),
      attachments,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Could not send your enquiry. Please try again." },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
