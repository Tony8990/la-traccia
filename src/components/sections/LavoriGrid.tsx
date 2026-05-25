"use client";

import { useState } from "react";
import { Icon } from "@iconify/react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";

type Category = "Tutti" | "Restauro" | "Liuteria" | "Repair";

const lavori = [
  {
    category: "Restauro" as Category,
    icon: "ph:paint-brush-fill",
    tag: "Restauro",
    title: "Chitarra archtop anni '40",
    desc: "Restauro completo di una chitarra jazz archtop d'epoca: ricostruzione del top, rifinitura della vernice originale a gommalacca, sostituzione del manico con legno d'epoca.",
    details: ["Gommalacca originale", "Manico ricostruito", "Top restaurato"],
    accent: true,
  },
  {
    category: "Liuteria" as Category,
    icon: "ph:ruler-fill",
    tag: "Liuteria",
    title: "Setup chitarra classica",
    desc: "Setup professionale su chitarra classica da concerto: correzione del truss rod, livellatura e ricoronatura dei tasti, regolazione del ponte e intonazione.",
    details: ["Tasti ricoronati", "Intonazione", "Setup completo"],
  },
  {
    category: "Repair" as Category,
    icon: "ph:wrench-fill",
    tag: "Repair",
    title: "Sax alto — revisione completa",
    desc: "Revisione totale di sassofono alto vintage: sostituzione di cuscinetti e sugheri, raddrizzatura di chiavi piegate, pulizia profonda e regolazione del meccanismo.",
    details: ["Cuscinetti nuovi", "Chiavi raddrizzate", "Meccanismo revisionato"],
  },
  {
    category: "Restauro" as Category,
    icon: "ph:paint-brush-fill",
    tag: "Restauro",
    title: "Contrabbasso da orchestra — 1920",
    desc: "Recupero di un contrabbasso da orchestra del primo Novecento: riparazione di crepe sul top, rifacimento della vernice, nuovo ponticello e anima su misura.",
    details: ["Crepe riparate", "Vernice rifatta", "Anima su misura"],
    accent: true,
  },
  {
    category: "Liuteria" as Category,
    icon: "ph:ruler-fill",
    tag: "Liuteria",
    title: "Tromba — saldatura campana",
    desc: "Saldatura e raddrizzatura della campana su tromba Bach Stradivarius. Lucidatura del laccato e sostituzione delle valvole con kit originale.",
    details: ["Campana saldata", "Valvole sostituite", "Laccatura restaurata"],
  },
  {
    category: "Repair" as Category,
    icon: "ph:wrench-fill",
    tag: "Repair",
    title: "Pianoforte verticale — meccanica",
    desc: "Riparazione meccanica su pianoforte verticale anni '60: sostituzione di martelletti consumati, riregolazione dell'azione, accordatura e regolazione dei pedali.",
    details: ["Martelletti nuovi", "Azione regolata", "Accordatura"],
  },
  {
    category: "Restauro" as Category,
    icon: "ph:paint-brush-fill",
    tag: "Restauro",
    title: "Mandolino napoletano — 1910",
    desc: "Restauro filologico di mandolino napoletano di pregio: ricostruzione delle fasce, rifacimento della ciotola, restauro della tastiera in ebano originale.",
    details: ["Fasce ricostruite", "Ciotola rifatta", "Tastiera in ebano"],
  },
  {
    category: "Liuteria" as Category,
    icon: "ph:ruler-fill",
    tag: "Liuteria",
    title: "Chitarra elettrica — refret",
    desc: "Refret completo su chitarra elettrica jazz: rimozione di 22 tasti, livellatura del manico, installazione di tasti jumbo in nickel-argento, finitura del binding.",
    details: ["22 tasti nuovi", "Manico livellato", "Jumbo nickel-argento"],
  },
  {
    category: "Repair" as Category,
    icon: "ph:wrench-fill",
    tag: "Repair",
    title: "Clarinetto vintage — pad & tone",
    desc: "Revisione di clarinetto Buffet Crampon d'epoca: sostituzione di tutti i cuscinetti in pelle, sostituzione dei sugheri e regolazione dell'intonazione.",
    details: ["Pad in pelle nuovi", "Sugheri sostituiti", "Intonazione corretta"],
    accent: true,
  },
];

const categories: Category[] = ["Tutti", "Restauro", "Liuteria", "Repair"];

const tagColors: Record<string, string> = {
  Restauro: "bg-[var(--color-burgundy)]/30 text-[var(--color-cream)]/80 border-[var(--color-burgundy-lt)]/40",
  Liuteria: "bg-[var(--color-gold)]/10 text-[var(--color-gold)] border-[var(--color-gold)]/30",
  Repair:   "bg-white/5 text-[var(--color-cream)]/70 border-white/10",
};

export function LavoriGrid() {
  const [active, setActive] = useState<Category>("Tutti");

  const filtered = active === "Tutti" ? lavori : lavori.filter((l) => l.category === active);

  return (
    <section className="bg-[var(--color-dark)] py-24">
      <div className="max-w-6xl mx-auto px-6">

        <Reveal>
          <SectionHeader
            label="Portfolio"
            title="I Nostri Lavori"
            intro="Una selezione di interventi recenti. Ogni strumento è trattato con la stessa cura che si riserva a un'opera d'arte."
            light
          />
        </Reveal>

        {/* Filter tabs */}
        <Reveal>
          <div className="flex flex-wrap gap-2 mb-14 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`font-[family-name:var(--font-sans)] text-[0.72rem] font-bold tracking-[0.2em] uppercase px-5 py-2 border transition-all duration-300
                  ${active === cat
                    ? "bg-[var(--color-gold)] text-[var(--color-dark)] border-[var(--color-gold)]"
                    : "bg-transparent text-[var(--color-cream)]/50 border-[var(--color-gold)]/20 hover:border-[var(--color-gold)]/50 hover:text-[var(--color-cream)]"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08}>
              <article
                className={`group relative flex flex-col border transition-all duration-500 overflow-hidden
                  hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(0,0,0,0.5)]
                  ${item.accent
                    ? "bg-[var(--color-burgundy)]/15 border-[var(--color-gold)]/30 hover:border-[var(--color-gold)]/60"
                    : "bg-white/[0.03] border-[var(--color-gold)]/12 hover:border-[var(--color-gold)]/35"
                  }`}
              >
                {/* Animated top line */}
                <span className="absolute top-0 left-0 h-0.5 w-0 bg-gradient-to-r from-[var(--color-gold)] to-[var(--color-gold-lt)] group-hover:w-full transition-all duration-700" />

                {/* Photo placeholder */}
                <div className="relative h-52 photo-placeholder overflow-hidden">
                  {/* Corner frames */}
                  <div className="absolute top-2 left-2 w-5 h-5 border-t border-l border-[var(--color-gold)]/50" />
                  <div className="absolute top-2 right-2 w-5 h-5 border-t border-r border-[var(--color-gold)]/50" />
                  <div className="absolute bottom-2 left-2 w-5 h-5 border-b border-l border-[var(--color-gold)]/50" />
                  <div className="absolute bottom-2 right-2 w-5 h-5 border-b border-r border-[var(--color-gold)]/50" />

                  {/* Category badge */}
                  <span className={`absolute top-3 right-3 font-[family-name:var(--font-sans)] text-[0.6rem] font-bold tracking-[0.18em] uppercase px-2.5 py-1 border ${tagColors[item.tag]}`}>
                    {item.tag}
                  </span>

                  {/* Center icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Icon icon={item.icon} className="text-5xl text-[var(--color-gold)]/20 group-hover:text-[var(--color-gold)]/35 transition-colors" />
                  </div>

                  {/* Before/After indicator */}
                  <div className="absolute bottom-3 left-3 flex gap-1">
                    <span className="font-[family-name:var(--font-sans)] text-[0.55rem] font-bold tracking-widest uppercase bg-[var(--color-dark)]/70 text-[var(--color-gold)]/60 px-2 py-0.5">Prima</span>
                    <span className="font-[family-name:var(--font-sans)] text-[0.55rem] font-bold tracking-widest uppercase bg-[var(--color-gold)]/80 text-[var(--color-dark)] px-2 py-0.5">Dopo</span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-6">
                  <h3 className="font-[family-name:var(--font-display)] text-xl font-bold text-[var(--color-cream)] mb-2 group-hover:text-[var(--color-gold)] transition-colors">
                    {item.title}
                  </h3>
                  <p className="font-[family-name:var(--font-serif)] text-sm leading-relaxed text-[var(--color-cream)]/55 mb-4 flex-1">
                    {item.desc}
                  </p>

                  {/* Detail tags */}
                  <div className="flex flex-wrap gap-1.5 mt-auto">
                    {item.details.map((d) => (
                      <span key={d} className="font-[family-name:var(--font-sans)] text-[0.6rem] font-bold tracking-wide uppercase text-[var(--color-gold)]/60 border border-[var(--color-gold)]/20 px-2 py-0.5">
                        {d}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom animated line */}
                <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-[var(--color-gold)] group-hover:w-full transition-all duration-500" />
              </article>
            </Reveal>
          ))}
        </div>

        {/* CTA */}
        <Reveal>
          <div className="mt-20 text-center">
            <p className="font-[family-name:var(--font-serif)] text-lg text-[var(--color-cream)]/50 italic mb-6">
              Hai uno strumento che necessita di cure? Parliamone.
            </p>
            <Button href="/#contatti">Richiedi un Preventivo</Button>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
