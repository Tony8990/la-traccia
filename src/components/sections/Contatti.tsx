"use client";

import { useState } from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";

const infoBlocks = [
  { icon: "ph:map-pin-fill",  title: "Dove siamo",      body: "C.so Francia, 276\n10093 Collegno (TO)" },
  { icon: "ph:clock-fill",    title: "Orari Negozio",   body: "Lun – Ven: 09:00 – 19:30\nSabato: 09:00 – 18:00\nDomenica: Chiuso" },
  { icon: "ph:phone-fill",    title: "Telefono",        body: "011 415 0071", href: "tel:+390114150071" },
  { icon: "ph:envelope-fill", title: "Email",           body: "info@latraccia.it",  href: "mailto:info@latraccia.it" },
];

export function Contatti() {
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200)); // simulate
    setLoading(false);
    setSuccess(true);
    (e.target as HTMLFormElement).reset();
    setTimeout(() => setSuccess(false), 5000);
  };

  return (
    <>
      {/* ── CONTATTI ── */}
      <section id="contatti" className="relative py-28 bg-[var(--color-burgundy-dk)] deco-stripe overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 relative">
          <Reveal>
            <SectionHeader label="Vieni a trovarci" title="Contattaci" light />
          </Reveal>

          <div className="grid md:grid-cols-2 gap-14 items-start">

            {/* Form */}
            <Reveal direction="left">
              <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
                {[
                  { id: "nome",      label: "Nome *",    type: "text",  placeholder: "Il tuo nome",     required: true },
                  { id: "email",     label: "Email *",   type: "email", placeholder: "la.tua@email.it", required: true },
                ].map((f) => (
                  <div key={f.id} className="flex flex-col gap-1.5">
                    <label htmlFor={f.id} className="font-[family-name:var(--font-sans)] text-[0.7rem] font-bold tracking-[0.15em] uppercase text-[var(--color-cream)]/65">{f.label}</label>
                    <input
                      id={f.id} name={f.id} type={f.type} placeholder={f.placeholder} required={f.required}
                      className="bg-white/[0.06] border border-[var(--color-gold)]/30 text-[var(--color-cream)] placeholder:text-[var(--color-cream)]/25 px-4 py-3 rounded-sm outline-none focus:border-[var(--color-gold)] focus:bg-white/10 transition-all"
                    />
                  </div>
                ))}

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="interesse" className="font-[family-name:var(--font-sans)] text-[0.7rem] font-bold tracking-[0.15em] uppercase text-[var(--color-cream)]/65">Interesse</label>
                  <select id="interesse" name="interesse" defaultValue=""
                    className="bg-[var(--color-burgundy-dk)] border border-[var(--color-gold)]/30 text-[var(--color-cream)] px-4 py-3 rounded-sm outline-none focus:border-[var(--color-gold)] transition-all appearance-none"
                  >
                    <option value="" disabled>Seleziona…</option>
                    {["Strumenti musicali","Riparazione strumento","Restauro vintage","Lezioni di ballo","Preventivo","Altro"].map(o => (
                      <option key={o} value={o.toLowerCase().replace(/ /g,"-")}>{o}</option>
                    ))}
                  </select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="messaggio" className="font-[family-name:var(--font-sans)] text-[0.7rem] font-bold tracking-[0.15em] uppercase text-[var(--color-cream)]/65">Messaggio *</label>
                  <textarea id="messaggio" name="messaggio" rows={4} required placeholder="Scrivici qualcosa…"
                    className="bg-white/[0.06] border border-[var(--color-gold)]/30 text-[var(--color-cream)] placeholder:text-[var(--color-cream)]/25 px-4 py-3 rounded-sm outline-none focus:border-[var(--color-gold)] focus:bg-white/10 transition-all resize-y min-h-[110px]"
                  />
                </div>

                <button
                  type="submit" disabled={loading}
                  className="flex items-center justify-center gap-2 w-full bg-[var(--color-gold)] hover:bg-[var(--color-gold-lt)] text-[var(--color-dark)] font-[family-name:var(--font-sans)] text-[0.8rem] font-bold tracking-[0.15em] uppercase py-3 rounded-sm transition-all hover:-translate-y-0.5 disabled:opacity-60"
                >
                  <Icon icon="ph:paper-plane-tilt-fill" />
                  {loading ? "Invio in corso…" : "Invia il Messaggio"}
                </button>

                {success && (
                  <p className="text-center font-[family-name:var(--font-sans)] text-sm font-semibold text-[var(--color-gold)] tracking-wide border border-[var(--color-gold)]/30 bg-[var(--color-gold)]/8 py-3 rounded-sm">
                    ♪ Messaggio inviato! Ti risponderemo presto. ♪
                  </p>
                )}
              </form>
            </Reveal>

            {/* Info + Map */}
            <Reveal direction="right">
              <div className="flex flex-col gap-6">

                {/* Info blocks: 2-column grid */}
                <div className="grid grid-cols-2 gap-x-6 gap-y-5">
                  {infoBlocks.map((b) => (
                    <div key={b.title} className="flex gap-3 items-start">
                      <div className="w-9 h-9 border border-[var(--color-gold)]/40 flex items-center justify-center shrink-0 text-[var(--color-gold)]">
                        <Icon icon={b.icon} />
                      </div>
                      <div>
                        <h4 className="font-[family-name:var(--font-sans)] text-[0.65rem] font-bold tracking-[0.15em] uppercase text-[var(--color-gold)] mb-0.5">{b.title}</h4>
                        {b.href ? (
                          <a href={b.href} className="font-[family-name:var(--font-serif)] text-sm text-[var(--color-cream)]/70 hover:text-[var(--color-gold)] transition-colors">
                            {b.body}
                          </a>
                        ) : (
                          <p className="font-[family-name:var(--font-serif)] text-sm text-[var(--color-cream)]/70 whitespace-pre-line leading-relaxed">{b.body}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Social */}
                <div className="flex gap-3">
                  {[
                    { icon: "ph:instagram-logo-fill", label: "Instagram", href: "https://www.instagram.com/latraccia" },
                    { icon: "ph:facebook-logo-fill",  label: "Facebook",  href: "https://www.facebook.com/latraccia" },
                    { icon: "ph:youtube-logo-fill",   label: "YouTube",   href: "https://www.youtube.com/@latraccia" },
                  ].map((s) => (
                    <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                      className="w-10 h-10 border border-[var(--color-gold)]/30 flex items-center justify-center text-[var(--color-cream)]/55 text-lg hover:bg-[var(--color-gold)] hover:text-[var(--color-dark)] hover:border-[var(--color-gold)] hover:-translate-y-1 transition-all"
                    >
                      <Icon icon={s.icon} />
                    </a>
                  ))}
                </div>

                {/* Google Maps — full width inside the column */}
                <div className="border border-[var(--color-gold)]/20 overflow-hidden">
                  <div className="bg-[var(--color-gold)]/10 px-3 py-2 flex items-center gap-2 border-b border-[var(--color-gold)]/15">
                    <Icon icon="ph:map-pin-fill" className="text-[var(--color-gold)] text-sm shrink-0" />
                    <span className="font-[family-name:var(--font-sans)] text-[0.62rem] font-bold tracking-[0.15em] uppercase text-[var(--color-gold)]/80">
                      C.so Francia, 276 · 10093 Collegno (TO)
                    </span>
                    <a
                      href="https://maps.google.com/?q=Corso+Francia+276+Collegno+TO"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-auto font-[family-name:var(--font-sans)] text-[0.58rem] font-bold tracking-wider uppercase text-[var(--color-gold)]/50 hover:text-[var(--color-gold)] transition-colors shrink-0"
                    >
                      Apri ↗
                    </a>
                  </div>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2818.4!2d7.5720!3d45.0748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47886d4c8b0f7c0f%3A0x0!2sCorso+Francia%2C+276%2C+10093+Collegno+TO!5e0!3m2!1sit!2sit!4v1700000000000"
                    width="100%"
                    height="220"
                    style={{ border: 0, display: "block" }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="La Traccia Strumenti Musicali — Collegno (TO)"
                  />
                </div>

              </div>
            </Reveal>

          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="relative bg-[var(--color-dark)] py-16 overflow-hidden">
        <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "repeating-linear-gradient(90deg,transparent,transparent 30px,rgba(200,151,58,0.03) 30px,rgba(200,151,58,0.03) 31px)" }} />
        <div className="max-w-6xl mx-auto px-6 relative flex flex-col items-center gap-6 text-center">
          <Image src="/logo.png" alt="La Traccia" width={160} height={64} className="h-14 w-auto opacity-80" />
          <p className="font-[family-name:var(--font-serif)] text-[var(--color-cream)]/45 italic -mt-2">Strumenti Musicali · Liuteria · Swing — Collegno (TO)</p>

          {/* Footer social */}
          <div className="flex gap-4 -mt-1">
            {[
              { icon: "ph:instagram-logo-fill", label: "Instagram", href: "https://www.instagram.com/latraccia" },
              { icon: "ph:facebook-logo-fill",  label: "Facebook",  href: "https://www.facebook.com/latraccia" },
              { icon: "ph:youtube-logo-fill",   label: "YouTube",   href: "https://www.youtube.com/@latraccia" },
            ].map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                className="w-9 h-9 rounded-full border border-[var(--color-gold)]/30 flex items-center justify-center text-[var(--color-gold)]/50 hover:text-[var(--color-gold)] hover:border-[var(--color-gold)] transition-all"
              >
                <Icon icon={s.icon} className="text-lg" />
              </a>
            ))}
          </div>

          <nav className="flex flex-wrap justify-center gap-6 mt-2">
            {["#home","#repair","#products","#academy","#contatti"].map((href, i) => (
              <a key={href} href={href}
                className="font-[family-name:var(--font-sans)] text-[0.7rem] font-semibold tracking-[0.15em] uppercase text-[var(--color-cream)]/40 hover:text-[var(--color-gold)] transition-colors"
              >
                {["Home","Repair","Prodotti","Academy","Contatti"][i]}
              </a>
            ))}
          </nav>

          <p className="font-[family-name:var(--font-sans)] text-[0.75rem] text-[var(--color-cream)]/25 mt-2">
            © {new Date().getFullYear()} La Traccia. Tutti i diritti riservati.<br />
            <span className="text-[0.7rem]">Sito realizzato con ♥ e tanto swing</span>
          </p>
        </div>
      </footer>
    </>
  );
}
