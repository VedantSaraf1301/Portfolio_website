import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { name, email, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: "All fields are required." }, { status: 400 });
  }

  const { error } = await resend.emails.send({
    from: "Portfolio Contact <onboarding@resend.dev>",
    to: "vedantsaraf1301@gmail.com",
    replyTo: email,
    subject: `New message from ${name} — Portfolio`,
    html: `
      <div style="font-family: sans-serif; max-width: 520px; margin: 0 auto; padding: 32px; background: #111; color: #f5f5f5; border-radius: 12px;">
        <h2 style="color: #f5c518; margin-bottom: 4px;">New Contact Form Message</h2>
        <p style="color: #888; margin-top: 0; font-size: 13px;">via vedantsaraf.dev portfolio</p>
        <hr style="border: none; border-top: 1px solid #222; margin: 20px 0;" />
        <p><strong style="color: #ccc;">From:</strong> ${name}</p>
        <p><strong style="color: #ccc;">Email:</strong> <a href="mailto:${email}" style="color: #f5c518;">${email}</a></p>
        <p><strong style="color: #ccc;">Message:</strong></p>
        <p style="background: #1a1a1a; padding: 16px; border-radius: 8px; line-height: 1.6; white-space: pre-wrap;">${message}</p>
        <hr style="border: none; border-top: 1px solid #222; margin: 20px 0;" />
        <p style="font-size: 12px; color: #555;">Hit reply to respond directly to ${name}.</p>
      </div>
    `,
  });

  if (error) {
    return NextResponse.json({ error: "Failed to send email." }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
