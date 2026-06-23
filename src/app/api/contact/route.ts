import { Resend } from "resend";

export async function POST(request: Request) {
  let body: { name?: string; email?: string; message?: string };
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "invalid_body" }, { status: 400 });
  }

  const name = body.name?.trim();
  const email = body.email?.trim();
  const message = body.message?.trim();

  if (!name || !email || !message) {
    return Response.json({ error: "missing_fields" }, { status: 400 });
  }
  // Simple email sanity check
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return Response.json({ error: "invalid_email" }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL ?? "onboarding@resend.dev";

  // Not configured yet → fail clearly so the client can fall back to mailto.
  if (!apiKey || !to) {
    return Response.json({ error: "not_configured" }, { status: 503 });
  }

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: `Fahrschule Kendirci <${from}>`,
      to: [to],
      replyTo: email,
      subject: `Kontaktanfrage von ${name}`,
      text: `Name: ${name}\nE-Mail: ${email}\n\n${message}`,
    });
    if (error) {
      return Response.json({ error: "send_failed" }, { status: 502 });
    }
    return Response.json({ ok: true });
  } catch {
    return Response.json({ error: "send_failed" }, { status: 502 });
  }
}
