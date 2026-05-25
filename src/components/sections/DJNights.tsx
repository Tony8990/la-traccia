import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

interface DJNightsProps {
  /** When true the CTA links back to the home page contact section */
  standalone?: boolean;
}

export function DJNights({ standalone = false }: DJNightsProps) {
  const ctaHref = standalone ? "/#contatti" : "#contatti";

  return (
    <section className="bg-[var(--color-dark-lt)] py-24">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <div className="relative overflow-hidden border border-[var(--color-gold)]/25 bg-[var(--color-burgundy-dk)]">
            {/* Deco pattern */}
            <div
              className="absolute inset-0 opacity-40 pointer-events-none"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(45deg,transparent,transparent 20px,rgba(200,151,58,0.04) 20px,rgba(200,151,58,0.04) 21px)",
              }}
            />
            {/* Gold top bar */}
            <div className="h-1 bg-gradient-to-r from-transparent via-[var(--color-gold)] to-transparent" />

            <div className="relative p-8 md:p-16 grid md:grid-cols-2 gap-12 items-center">
              {/* Left */}
              <div>
                <p className="font-[family-name:var(--font-sans)] text-[0.68rem] font-bold tracking-[0.4em] uppercase text-[var(--color-gold)] mb-3">
                  Serate Swing · DJ Set
                </p>
                <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl font-black text-[var(--color-cream)] leading-tight mb-3">
                  DJ Swing<br />
                  <span className="italic text-[var(--color-gold)]">Nights</span>
                </h2>
                <div className="flex items-center gap-3 mb-6">
                  <span className="h-px w-10 bg-[var(--color-gold)]/50" />
                  <span className="text-[var(--color-gold)] text-xs">♦</span>
                  <span className="h-px flex-1 bg-[var(--color-gold)]/15" />
                </div>
                <p className="font-[family-name:var(--font-serif)] text-lg text-[var(--color-cream)]/75 leading-relaxed mb-4">
                  Il titolare del negozio è disponibile come DJ per eventi privati, feste
                  swing e serate a tema jazz. Repertorio originale degli anni &apos;30–&apos;50
                  selezionato con cura discografica.
                </p>
                <p className="font-[family-name:var(--font-serif)] text-base text-[var(--color-cream)]/55 leading-relaxed mb-8 italic">
                  Disponibile per matrimoni, feste private, eventi aziendali, serate in
                  locale. Contattaci per disponibilità e preventivo.
                </p>
                <div className="flex flex-wrap gap-3 mb-8">
                  {[
                    "Matrimoni & Feste",
                    "Serate in locale",
                    "Musica originale anni '30–50",
                    "Repertorio personalizzabile",
                  ].map((t) => (
                    <span
                      key={t}
                      className="font-[family-name:var(--font-sans)] text-[0.68rem] font-bold tracking-wide uppercase text-[var(--color-gold)] border border-[var(--color-gold)]/30 px-3 py-1"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <Button href={ctaHref} size="sm">
                  Contattaci per Info &amp; Disponibilità
                </Button>
              </div>

              {/* Right: visual */}
              <div className="relative aspect-square max-w-xs mx-auto md:max-w-none flex items-center justify-center">
                {/* Concentric circles */}
                {[90, 75, 60, 45, 30].map((s, i) => (
                  <div
                    key={s}
                    className="absolute rounded-full border border-[var(--color-gold)]"
                    style={{
                      width: `${s}%`,
                      height: `${s}%`,
                      opacity: 0.08 + i * 0.05,
                    }}
                  />
                ))}
                {/* Pulsing outer ring */}
                <div
                  className="absolute rounded-full border-2 border-[var(--color-gold)]/20 animate-ping"
                  style={{ width: "92%", height: "92%", animationDuration: "3s" }}
                />
                {/* Center */}
                <div className="relative z-10 w-32 h-32 rounded-full bg-[var(--color-gold)] flex flex-col items-center justify-center shadow-[0_0_80px_rgba(200,151,58,0.45)]">
                  <span className="font-[family-name:var(--font-display)] text-5xl font-black text-[var(--color-dark)]">♫</span>
                  <span className="font-[family-name:var(--font-sans)] text-[0.55rem] font-black tracking-widest uppercase text-[var(--color-dark)] mt-0.5">DJ Set</span>
                </div>

                {/* Floating style labels */}
                {[
                  { label: "Lindy Hop", deg: -40,  r: 42 },
                  { label: "Balboa",    deg:  80,   r: 42 },
                  { label: "Solo Jazz", deg: 200,   r: 42 },
                  { label: "Tiptap",    deg: 310,   r: 42 },
                ].map(({ label, deg, r }) => {
                  const rad = (deg * Math.PI) / 180;
                  const x = 50 + r * Math.cos(rad);
                  const y = 50 + r * Math.sin(rad);
                  return (
                    <span
                      key={label}
                      className="absolute font-[family-name:var(--font-sans)] text-[0.6rem] font-bold tracking-widest uppercase text-[var(--color-gold)]/70 -translate-x-1/2 -translate-y-1/2"
                      style={{ left: `${x}%`, top: `${y}%` }}
                    >
                      {label}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
