import { NextRequest, NextResponse } from "next/server";

/**
 * Booking / event inquiry endpoint.
 *
 * This validates and logs the inquiry server-side. To actually receive these
 * inquiries by email, wire in a transactional email provider (Resend, Postmark,
 * SendGrid, etc.) at the point marked below — this route is provider-agnostic
 * on purpose, since the choice depends on what the hotel already uses.
 */

interface InquiryPayload {
  name: string;
  phone: string;
  email?: string;
  inquiryType: "room" | "event";
  checkIn?: string;
  checkOut?: string;
  guests?: string;
  eventDate?: string;
  eventType?: string;
  message?: string;
}

function isValidPhone(phone: string): boolean {
  const digits = phone.replace(/\D/g, "");
  return digits.length >= 10 && digits.length <= 13;
}

export async function POST(req: NextRequest) {
  let body: Partial<InquiryPayload>;

  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { error: "Request body must be valid JSON." },
      { status: 400 }
    );
  }

  const { name, phone, inquiryType } = body;

  if (!name || typeof name !== "string" || name.trim().length < 2) {
    return NextResponse.json(
      { error: "Please provide your name." },
      { status: 400 }
    );
  }

  if (!phone || typeof phone !== "string" || !isValidPhone(phone)) {
    return NextResponse.json(
      { error: "Please provide a valid phone number." },
      { status: 400 }
    );
  }

  if (inquiryType !== "room" && inquiryType !== "event") {
    return NextResponse.json(
      { error: "inquiryType must be 'room' or 'event'." },
      { status: 400 }
    );
  }

  const inquiry: InquiryPayload = {
    name: name.trim(),
    phone: phone.trim(),
    email: body.email?.trim(),
    inquiryType,
    checkIn: body.checkIn,
    checkOut: body.checkOut,
    guests: body.guests,
    eventDate: body.eventDate,
    eventType: body.eventType,
    message: body.message?.trim(),
  };

  // --- Wire in real delivery here -------------------------------------
  // Example with Resend (npm install resend), once RESEND_API_KEY is set:
  //
  //   import { Resend } from "resend";
  //   const resend = new Resend(process.env.RESEND_API_KEY);
  //   await resend.emails.send({
  //     from: "Trinetar Gardens Website <inquiries@yourdomain.com>",
  //     to: "hotel-inbox@yourdomain.com",
  //     subject: `New ${inquiry.inquiryType} inquiry from ${inquiry.name}`,
  //     text: JSON.stringify(inquiry, null, 2),
  //   });
  //
  // Until that's wired in, inquiries are logged server-side so nothing is
  // silently dropped during development.
  console.log("[booking-inquiry]", inquiry);
  // ---------------------------------------------------------------------

  return NextResponse.json({ ok: true });
}
