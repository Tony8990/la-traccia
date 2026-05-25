import { Icon } from "@iconify/react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";

const products = [
  { icon: "ph:guitar-fill",       title: "Strumenti Nuovi",   text: "Archi, fiati, ottoni, legni, chitarre, bassi, tastiere e percussioni. Tutti i brand, su ordine se non disponibili.", accent: true },
  { icon: "ph:tag-fill",          title: "Usato & Conto Vendita", text: "Strumenti usati garantiti e in conto vendita. Ottima selezione a prezzi accessibili per ogni livello." },
  { icon: "ph:book-open-fill",    title: "Spartiti & Libri",  text: "Libri di musica importati, canzonieri, spartiti per tutti gli strumenti e livelli. Anche su richiesta." },
  { icon: "ph:disc-fill",         title: "CD & DVD Didattici", text: "Supporti didattici per studenti, insegnanti e bande. Metodi, backing track e video-corsi." },
  { icon: "ph:headphones-fill",   title: "Accessori",         text: "Ance, corde, archetti, boccagli, custodie, supporti: tutto l'essenziale per ogni strumento.", accent: true },
  { icon: "ph:handshake-fill",    title: "Scuole & Bande",    text: "Convenzioni con scuole medie, elementari e istituti musicali. Preventivi dedicati per gruppi e bande." },
];

export function Products() {
  return (
    <section id="products" className="bg-[var(--color-dark)] overflow-hidden">

      {/* ── Shop grid ── */}
      <div className="relative py-28">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(107,26,34,0.45),transparent)] pointer-events-none" />

        <div className="max-w-6xl mx-auto px-6 relative">
          <Reveal>
            <SectionHeader
              label="Il nostro negozio"
              title="Cosa trovi da noi"
              intro="Strumenti nuovi e usati, accessori, spartiti, libri e multimedia. Trattiamo tutti i brand e possiamo ordinare qualsiasi articolo."
              light
            />
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {products.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.15}>
                <article
                  className={`group relative p-7 border transition-all duration-500 overflow-hidden
                    hover:-translate-y-2 hover:shadow-[0_16px_50px_rgba(0,0,0,0.4)]
                    ${p.accent
                      ? "bg-[var(--color-burgundy)]/20 border-[var(--color-gold)]/35 hover:border-[var(--color-gold)]/70"
                      : "bg-white/[0.03] border-[var(--color-gold)]/15 hover:border-[var(--color-gold)]/40"
                    }`}
                >
                  {/* Animated top line */}
                  <span className="absolute top-0 left-0 h-0.5 w-0 bg-gradient-to-r from-[var(--color-gold)] to-[var(--color-gold-lt)] group-hover:w-full transition-all duration-700" />

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-sm border border-[var(--color-gold)]/40 flex items-center justify-center shrink-0 bg-[var(--color-gold)]/5 group-hover:bg-[var(--color-gold)]/15 transition-colors">
                      <Icon icon={p.icon} className="text-xl text-[var(--color-gold)]" />
                    </div>
                    <div>
                      <h3 className="font-[family-name:var(--font-display)] text-lg font-bold text-[var(--color-cream)] mb-2 group-hover:text-[var(--color-gold)] transition-colors">
                        {p.title}
                      </h3>
                      <p className="font-[family-name:var(--font-serif)] text-sm leading-relaxed text-[var(--color-cream)]/55">
                        {p.text}
                      </p>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      {/* ── SWING ACADEMY & DJ NIGHTS teaser ── */}
      <div className="relative border-t border-[var(--color-gold)]/10 bg-[var(--color-dark-lt)]">
        <div className="absolute inset-0 deco-stripe opacity-30 pointer-events-none" />
        <div className="relative max-w-6xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left: icons row */}
          <div className="flex items-center gap-5">
            {[
              { icon: "ph:person-simple-run-fill", label: "Lindy Hop" },
              { icon: "ph:music-notes-fill",       label: "Solo Jazz" },
              { icon: "ph:metronome-fill",          label: "Tiptap"   },
              { icon: "ph:heart-fill",              label: "Balboa"   },
            ].map((s) => (
              <div key={s.label} className="flex flex-col items-center gap-2 opacity-70">
                <div className="w-12 h-12 rounded-full border border-[var(--color-gold)]/40 flex items-center justify-center bg-[var(--color-gold)]/5">
                  <Icon icon={s.icon} className="text-xl text-[var(--color-gold)]" />
                </div>
                <span className="font-[family-name:var(--font-sans)] text-[0.6rem] font-bold tracking-wider uppercase text-[var(--color-cream)]/50">{s.label}</span>
              </div>
            ))}
            <div className="h-10 w-px bg-[var(--color-gold)]/20 mx-1 hidden sm:block" />
            <div className="flex flex-col items-center gap-2 opacity-70">
              <div className="w-12 h-12 rounded-full bg-[var(--color-gold)] flex items-center justify-center shadow-[0_0_30px_rgba(200,151,58,0.3)]">
                <span className="font-[family-name:var(--font-display)] text-xl font-black text-[var(--color-dark)]">♫</span>
              </div>
              <span className="font-[family-name:var(--font-sans)] text-[0.6rem] font-bold tracking-wider uppercase text-[var(--color-cream)]/50">DJ Set</span>
            </div>
          </div>

          {/* Right: text + CTA */}
          <div className="text-center md:text-right max-w-sm">
            <p className="font-[family-name:var(--font-sans)] text-[0.68rem] font-bold tracking-[0.3em] uppercase text-[var(--color-gold)] mb-2">Swing Academy &amp; DJ Nights</p>
            <h3 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-black text-[var(--color-cream)] mb-3">
              Impara a ballare.<br />
              <span className="italic text-[var(--color-gold)]">Vivi la notte swing.</span>
            </h3>
            <p className="font-[family-name:var(--font-serif)] text-sm text-[var(--color-cream)]/50 italic mb-5">
              Lindy Hop, Solo Jazz, Tiptap, Balboa — e serate DJ con musica originale anni &apos;30–&apos;50.
            </p>
            <Button href="/ballo">Scopri Ballo &amp; DJ →</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
