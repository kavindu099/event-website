import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS,
  },
});

export async function sendRsvpConfirmation(
  to: string,
  name: string,
  attending: boolean
): Promise<void> {
  const attendingText = attending ? "attending" : "unable to attend";
  const subject = attending
    ? "🎉 RSVP Confirmed — We'll see you there!"
    : "RSVP Received — We'll miss you!";

  const html = `
    <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 32px;">
      <h2 style="color: #1a1a2e;">Hi ${name},</h2>
      <p style="font-size: 16px; color: #333;">
        Thank you for your RSVP! We've received your response that you are
        <strong>${attendingText}</strong> for the event.
      </p>
      ${
        attending
          ? `<p style="font-size: 16px; color: #333;">
              We're so excited to have you join us. Stay tuned for more details!
             </p>`
          : `<p style="font-size: 16px; color: #333;">
              We'll miss you but appreciate you letting us know.
             </p>`
      }
      <hr style="border: none; border-top: 1px solid #eee; margin: 24px 0;" />
      <p style="font-size: 14px; color: #888;">
        If you have any questions, feel free to reach out to us via the contact section on our event page.
      </p>
    </div>
  `;

  await transporter.sendMail({
    from: `"Event Team" <${process.env.GMAIL_USER}>`,
    to,
    subject,
    html,
  });
}
