import { Resend } from "resend";
import { NextResponse } from "next/server";

const TO_EMAIL = "tchessipre@gmail.com";
const FROM_EMAIL = "Dog's Family <onboarding@resend.dev>";

export async function POST(request: Request) {
  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json({ error: "Configuration manquante." }, { status: 500 });
  }
  const resend = new Resend(process.env.RESEND_API_KEY);
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const { name, email, phone, message } = body as Record<string, string>;

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return NextResponse.json({ error: "Champs requis manquants." }, { status: 422 });
  }

  const { error } = await resend.emails.send({
    from: FROM_EMAIL,
    to: TO_EMAIL,
    replyTo: email,
    subject: `Nouveau message de ${name} — Dog's Family`,
    html: `
      <div style="font-family:sans-serif;max-width:560px;margin:0 auto;color:#1a0a2e">
        <h2 style="font-size:20px;font-weight:600;margin-bottom:24px">
          Nouveau message via le site Dog's Family
        </h2>
        <table style="width:100%;border-collapse:collapse">
          <tr>
            <td style="padding:10px 0;border-bottom:1px solid #e8e0f0;width:110px;color:#6b5a80;font-size:14px">Nom</td>
            <td style="padding:10px 0;border-bottom:1px solid #e8e0f0;font-size:14px">${escHtml(name)}</td>
          </tr>
          <tr>
            <td style="padding:10px 0;border-bottom:1px solid #e8e0f0;color:#6b5a80;font-size:14px">Email</td>
            <td style="padding:10px 0;border-bottom:1px solid #e8e0f0;font-size:14px">
              <a href="mailto:${escHtml(email)}" style="color:#7c3aed">${escHtml(email)}</a>
            </td>
          </tr>
          ${phone ? `
          <tr>
            <td style="padding:10px 0;border-bottom:1px solid #e8e0f0;color:#6b5a80;font-size:14px">Téléphone</td>
            <td style="padding:10px 0;border-bottom:1px solid #e8e0f0;font-size:14px">${escHtml(phone)}</td>
          </tr>` : ""}
        </table>
        <div style="margin-top:24px">
          <p style="margin:0 0 8px;color:#6b5a80;font-size:14px">Message</p>
          <p style="margin:0;font-size:15px;line-height:1.7;white-space:pre-wrap">${escHtml(message)}</p>
        </div>
        <hr style="margin:32px 0;border:none;border-top:1px solid #e8e0f0" />
        <p style="font-size:12px;color:#9c8db0">
          Envoyé depuis le formulaire de contact — dogsfamily.fr
        </p>
      </div>
    `,
  });

  if (error) {
    console.error("[contact] Resend error:", error);
    return NextResponse.json({ error: "Erreur lors de l'envoi." }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}

function escHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
