import { Icon } from "@iconify/react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";

const services = [
  {
    id: "repair",
    num: "01",
    icon: "ph:wrench-fill",
    title: "Repair",
    subtitle: "Riparazioni Esperte",
    description:
      "Riparazione professionale di qualsiasi strumento musicale: archi, fiati, ottoni, chitarre, bassi, tastiere e percussioni. Diagnosi accurata, ricambi originali e tempi certi.",
    features: ["Tutti gli strumenti", "Ricambi originali", "Tempi rapidi", "Garanzia sul lavoro"],
    photoLabel: "Foto officina / riparazione",
    photoIcon: "ph:wrench-fill",
  },
  {
    id: "liuteria",
    num: "02",
    icon: "ph:guitar-fill",
    title: "Liuteria",
    subtitle: "Setup & Artigianato",
    description:
      "Setup professionale, regolazione dell'azione, intonazione e verniciature artigianali per strumenti a corda. Ogni intervento è personalizzato sulle esigenze del suonatore.",
    features: ["Setup personalizzato", "Regolazione azione", "Intonazione professionale", "Verniciature artigianali"],
    photoLabel: "Foto laboratorio liuteria",
    photoIcon: "ph:guitar-fill",
    reverse: true,
  },
  {
    id: "restore",
    num: "03",
    icon: "ph:clock-counterclockwise-fill",
    title: "Restore",
    subtitle: "Restauro Vintage",
    description:
      "Restauro filologico di strumenti antichi e vintage: rispettiamo i materiali originali e riportiamo alla luce il suono autentico di strumenti d'epoca, con documentazione fotografica dell'intervento.",
    features: ["Strumenti d'epoca", "Materiali originali conservati", "Pulizia e protezione", "Documentazione fotografica"],
    photoLabel: "Foto restauro vintage",
    photoIcon: "ph:clock-counterclockwise-fill",
  },
];

export function Repair() {
  return (
    <section id="repair" className="py-28 bg-[var(--color-ivory)] overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <SectionHeader
            label="Il nostro laboratorio"
            title={
              <>
                Repair · Liuteria ·{" "}
                <em className="italic text-[var(--color-burgundy)]">Restore</em>
              </>
            }
            intro="Specializzati nella riparazione e nel restauro di strumenti antichi e moderni. Ogni intervento è eseguito con cura artigianale e rispetto per la storia dello strumento."
          />
        </Reveal>

        <div className="flex flex-col gap-24">
          {services.map((s) => (
            <div
              key={s.id}
              className={`grid md:grid-cols-2 gap-12 lg:gap-20 items-center ${
                s.reverse ? "md:[&>*:first-child]:order-2" : ""
              }`}
            >
              {/* Photo block */}
              <Reveal direction={s.reverse ? "right" : "left"}>
                <div className="relative">
                  {/* Main photo area */}
                  <div className="aspect-[4/3] bg-[var(--color-dark)] border-2 border-[var(--color-gold)]/30 relative overflow-hidden group photo-placeholder">
                    {/* Pattern overlay */}
                    <div
                      className="absolute inset-0 opacity-30"
                      style={{
                        backgroundImage:
                          "repeating-linear-gradient(45deg,transparent,transparent 12px,rgba(200,151,58,0.06) 12px,rgba(200,151,58,0.06) 13px)",
                      }}
                    />
                    {/* Placeholder content */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                      <Icon
                        icon={s.photoIcon}
                        className="text-7xl text-[var(--color-gold)] opacity-20"
                      />
                      <span className="font-[family-name:var(--font-sans)] text-[0.7rem] tracking-[0.2em] uppercase text-[var(--color-cream)]/30">
                        {s.photoLabel}
                      </span>
                    </div>
                    {/* Gold corner frames */}
                    <span className="absolute top-3 left-3 w-8 h-8 border-t-2 border-l-2 border-[var(--color-gold)]/50" />
                    <span className="absolute bottom-3 right-3 w-8 h-8 border-b-2 border-r-2 border-[var(--color-gold)]/50" />
                    <span className="absolute top-3 right-3 w-8 h-8 border-t-2 border-r-2 border-[var(--color-gold)]/25" />
                    <span className="absolute bottom-3 left-3 w-8 h-8 border-b-2 border-l-2 border-[var(--color-gold)]/25" />
                  </div>

                  {/* Small accent photo */}
                  <div className="absolute -bottom-5 md:-right-5 right-0 w-28 h-28 bg-[var(--color-burgundy)] border-2 border-[var(--color-gold)] flex flex-col items-center justify-center gap-1 shadow-xl">
                    <Icon icon={s.icon} className="text-3xl text-[var(--color-gold)]" />
                    <span className="font-[family-name:var(--font-sans)] text-[0.55rem] font-bold tracking-widest uppercase text-[var(--color-cream)]/70">
                      {s.title}
                    </span>
                  </div>
                </div>
              </Reveal>

              {/* Text block */}
              <Reveal direction={s.reverse ? "left" : "right"}>
                <div>
                  {/* Big number */}
                  <p className="font-[family-name:var(--font-display)] text-[7rem] font-black text-[var(--color-cream-dk)] leading-none mb-[-1.5rem] select-none">
                    {s.num}
                  </p>

                  {/* Title */}
                  <h3 className="font-[family-name:var(--font-display)] text-5xl font-black text-[var(--color-dark)] relative z-10 mb-1">
                    {s.title}
                  </h3>
                  <p className="font-[family-name:var(--font-script)] text-xl text-[var(--color-burgundy)] mb-5">
                    {s.subtitle}
                  </p>

                  {/* Gold divider */}
                  <div className="flex items-center gap-3 mb-5">
                    <span className="h-px flex-1 bg-gradient-to-r from-[var(--color-gold)]/50 to-transparent" />
                    <span className="text-[var(--color-gold)] text-xs">♦</span>
                  </div>

                  <p className="font-[family-name:var(--font-serif)] text-lg leading-relaxed text-[var(--color-dark-lt)] mb-6">
                    {s.description}
                  </p>

                  <ul className="grid grid-cols-2 gap-2 mb-8">
                    {s.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-center gap-2 font-[family-name:var(--font-sans)] text-[0.75rem] font-semibold tracking-wide text-[var(--color-dark-lt)]"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-gold)] shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <Button href="#contatti" size="sm">
                    Richiedi un preventivo
                  </Button>
                </div>
              </Reveal>
            </div>
          ))}
        </div>

        {/* ── Portfolio teaser ── */}
        <Reveal>
          <div className="mt-20 relative overflow-hidden border border-[var(--color-burgundy)]/40 bg-[var(--color-dark)] px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Gold top line */}
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[var(--color-gold)] to-transparent" />

            {/* Samples row */}
            <div className="flex items-center gap-4 flex-wrap justify-center md:justify-start">
              {[
                { icon: "ph:palette-fill", label: "Restauro" },
                { icon: "ph:ruler-fill",        label: "Liuteria" },
                { icon: "ph:wrench-fill",       label: "Repair"   },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-2 border border-[var(--color-gold)]/20 px-4 py-2 bg-[var(--color-gold)]/5">
                  <Icon icon={item.icon} className="text-[var(--color-gold)] text-base" />
                  <span className="font-[family-name:var(--font-sans)] text-[0.68rem] font-bold tracking-[0.15em] uppercase text-[var(--color-cream)]/60">{item.label}</span>
                </div>
              ))}
            </div>

            {/* Text + CTA */}
            <div className="text-center md:text-right">
              <p className="font-[family-name:var(--font-display)] text-xl md:text-2xl font-bold text-[var(--color-cream)] mb-1">
                Vuoi vedere i lavori realizzati?
              </p>
              <p className="font-[family-name:var(--font-serif)] text-sm text-[var(--color-cream)]/45 italic mb-5">
                Sfoglia il nostro portfolio di restauri, liuteria e riparazioni.
              </p>
              <Button href="/lavori">Vedi il Portfolio →</Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
