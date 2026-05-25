import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const INTERESSE_LABELS = {
  "strumenti-musicali":    "🎸 Strumenti musicali",
  "riparazione-strumento": "🔧 Riparazione strumento",
  "restauro-vintage":      "🎨 Restauro vintage",
  "lezioni-di-ballo":      "💃 Lezioni di ballo",
  "preventivo":            "📋 Preventivo",
  "altro":                 "✉️ Altro",
};

export const handler = async (event) => {
  const payload = JSON.parse(event.body);
  const data = payload.payload?.data ?? {};

  const nome      = data.nome      || "—";
  const email     = data.email     || "—";
  const interesse = INTERESSE_LABELS[data.interesse] || data.interesse || "—";
  const messaggio = data.messaggio || "—";
  const dataOra   = new Date().toLocaleString("it-IT", { timeZone: "Europe/Rome" });

  const html = `
<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
</head>
<body style="margin:0;padding:0;background:#1A0D0F;font-family:'Georgia',serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#1A0D0F;padding:40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

          <!-- Header -->
          <tr>
            <td style="background:#6B1A22;padding:0;">
              <div style="height:3px;background:linear-gradient(90deg,transparent,#C8973A,transparent);"></div>
              <div style="padding:36px 40px 28px;text-align:center;">
                <p style="margin:0 0 6px;font-family:'Arial',sans-serif;font-size:10px;font-weight:700;letter-spacing:4px;text-transform:uppercase;color:#C8973A;">
                  La Traccia Strumenti Musicali
                </p>
                <h1 style="margin:0;font-family:'Georgia',serif;font-size:28px;font-weight:700;color:#F5EDD8;line-height:1.2;">
                  Nuovo messaggio ricevuto
                </h1>
                <p style="margin:10px 0 0;font-family:'Arial',sans-serif;font-size:11px;color:#F5EDD8;opacity:0.5;letter-spacing:1px;">
                  ${dataOra}
                </p>
              </div>
              <div style="height:1px;background:linear-gradient(90deg,transparent,#C8973A,transparent);"></div>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="background:#2E1A1E;padding:36px 40px;">

              <!-- Interesse badge -->
              <div style="text-align:center;margin-bottom:28px;">
                <span style="display:inline-block;background:#C8973A;color:#1A0D0F;font-family:'Arial',sans-serif;font-size:11px;font-weight:700;letter-spacing:2px;text-transform:uppercase;padding:8px 20px;">
                  ${interesse}
                </span>
              </div>

              <!-- Dati -->
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding-bottom:20px;border-bottom:1px solid rgba(200,151,58,0.15);">
                    <p style="margin:0 0 4px;font-family:'Arial',sans-serif;font-size:10px;font-weight:700;letter-spacing:3px;text-transform:uppercase;color:#C8973A;">Nome</p>
                    <p style="margin:0;font-size:18px;color:#F5EDD8;">${nome}</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding:20px 0;border-bottom:1px solid rgba(200,151,58,0.15);">
                    <p style="margin:0 0 4px;font-family:'Arial',sans-serif;font-size:10px;font-weight:700;letter-spacing:3px;text-transform:uppercase;color:#C8973A;">Email</p>
                    <p style="margin:0;font-size:16px;">
                      <a href="mailto:${email}" style="color:#C8973A;text-decoration:none;">${email}</a>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td style="padding-top:20px;">
                    <p style="margin:0 0 10px;font-family:'Arial',sans-serif;font-size:10px;font-weight:700;letter-spacing:3px;text-transform:uppercase;color:#C8973A;">Messaggio</p>
                    <div style="background:#1A0D0F;border-left:3px solid #C8973A;padding:16px 20px;border-radius:0 2px 2px 0;">
                      <p style="margin:0;font-size:15px;color:#F5EDD8;line-height:1.7;white-space:pre-wrap;">${messaggio}</p>
                    </div>
                  </td>
                </tr>
              </table>

              <!-- CTA rispondi -->
              <div style="text-align:center;margin-top:32px;">
                <a href="mailto:${email}?subject=Re: ${interesse} - La Traccia"
                   style="display:inline-block;background:#C8973A;color:#1A0D0F;font-family:'Arial',sans-serif;font-size:12px;font-weight:700;letter-spacing:2px;text-transform:uppercase;padding:14px 32px;text-decoration:none;">
                  ✉ Rispondi a ${nome}
                </a>
              </div>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:#1A0D0F;padding:24px 40px;text-align:center;border-top:1px solid rgba(200,151,58,0.1);">
              <p style="margin:0 0 4px;font-family:'Arial',sans-serif;font-size:10px;color:#C8973A;letter-spacing:3px;text-transform:uppercase;">
                La Traccia Strumenti Musicali
              </p>
              <p style="margin:0;font-family:'Arial',sans-serif;font-size:11px;color:#F5EDD8;opacity:0.35;">
                C.so Francia 276, 10093 Collegno (TO) · 011 415 0071
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;

  try {
    await resend.emails.send({
      from:    "La Traccia <noreply@latraccia.it>",
      to:      "tonyfava90@gmail.com",
      replyTo: email,
      subject: `✉ ${nome} — ${interesse}`,
      html,
    });
    return { statusCode: 200 };
  } catch (err) {
    console.error("Resend error:", err);
    return { statusCode: 500, body: "Email send failed" };
  }
};
