import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { sendRsvpConfirmation } from "@/lib/email";

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function sanitizeString(str: string): string {
  return str.trim().replace(/[<>]/g, "");
}

export async function POST(request: NextRequest) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const { name, email, attending } = body as Record<string, unknown>;

  // Validate
  const errors: Record<string, string> = {};
  if (!name || typeof name !== "string" || name.trim().length === 0) {
    errors.name = "Name is required";
  }
  if (!email || typeof email !== "string" || !isValidEmail(email)) {
    errors.email = "A valid email is required";
  }
  if (attending === undefined || attending === null || typeof attending !== "boolean") {
    errors.attending = "Attendance confirmation is required";
  }

  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ errors }, { status: 400 });
  }

  // Sanitize
  const safeName = sanitizeString(name as string);
  const safeEmail = sanitizeString(email as string).toLowerCase();

  try {
    const rsvp = await prisma.rSVP.create({
      data: {
        name: safeName,
        email: safeEmail,
        attending: attending as boolean,
      },
    });

    // Send confirmation email (non-blocking — don't fail the request if email fails)
    sendRsvpConfirmation(safeEmail, safeName, attending as boolean).catch(
      (err) => console.error("Email send failed:", err)
    );

    return NextResponse.json(
      { message: "RSVP submitted successfully!", id: rsvp.id },
      { status: 200 }
    );
  } catch (err) {
    console.error("RSVP save error:", err);
    return NextResponse.json(
      { error: "Failed to save RSVP. Please try again." },
      { status: 500 }
    );
  }
}
