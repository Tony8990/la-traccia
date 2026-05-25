import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@iconify/react";

const pillars = [
  {
    icon: "ph:guitar-fill",
    title: "Strumenti di ogni tipo",
    body: "Archi, fiati, ottoni, legni, chitarre, bassi, percussioni, tastiere. Lavoriamo con tutti i brand e possiamo richiedere preventivi e disponibilità per qualsiasi articolo non in negozio.",
  },
  {
    icon: "ph:wrench-fill",
    title: "Riparazione & Restauro",
    body: "Specializzati nel riparare e restaurare strumenti antichi e moderni. Ogni intervento è eseguito con cura artigianale e rispetto per la storia dello strumento.",
  },
  {
    icon: "ph:books-fill",
    title: "Spartiti, libri & multimedia",
    body: "Ampia selezione di libri di musica importati, canzonieri, spartiti e DVD/CD didattici per studenti, insegnanti, bande e professionisti.",
  },
  {
    icon: "ph:handshake-fill",
    title: "Scuole & istituzioni",
    body: "Collaboriamo attivamente con scuole medie, elementari e istituti musicali del territorio. Usato garantito e strumenti in conto vendita sempre disponibili.",
  },
];

export function About() {
  return (
    <section id="about" className="py-28 bg-[var(--color-ivory)] overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Left: story text */}
          <Reveal direction="left">
            <div>
              {/* Label */}
              <p className="font-[family-name:var(--font-sans)] text-[0.7rem] font-bold tracking-[0.45em] uppercase text-[var(--color-burgundy)] mb-4">
                Chi siamo
              </p>

              {/* Heading */}
              <h2 className="font-[family-name:var(--font-display)] text-[clamp(2.2rem,5vw,3.8rem)] font-black leading-[1.0] text-[var(--color-dark)] mb-6">
                Una storia di{" "}
                <em className="italic text-[var(--color-burgundy)]">passione</em>
                <br />per la musica
              </h2>

              {/* Ornament */}
              <div className="flex items-center gap-3 mb-7">
                <span className="h-px w-12 bg-[var(--color-gold)]" />
                <span className="text-[var(--color-gold)] text-xs">✦</span>
                <span className="h-px w-6 bg-[var(--color-gold)]/30" />
              </div>

              <div className="flex flex-col gap-5 font-[family-name:var(--font-serif)] text-base leading-relaxed text-[var(--color-dark-lt)]/80">
                <p>
                  <strong className="font-semibold text-[var(--color-dark)]">La Traccia Strumenti Musicali</strong> è
                  un negozio di strumenti musicali a <strong className="font-semibold text-[var(--color-dark)]">Collegno</strong>,
                  alle porte di Torino. Vendiamo strumenti di ogni tipo: archi, ottoni, legni, chitarre, bassi,
                  accessori e molto altro.
                </p>
                <p>
                  Siamo anche specializzati nella <strong className="font-semibold text-[var(--color-dark)]">riparazione e nel restauro</strong> di
                  strumenti antichi e moderni, con una cura artigianale che ci ha resi un punto di riferimento nel territorio
                  e oltre.
                </p>
                <p>
                  Un'attività a conduzione familiare nata negli anni Novanta, diventata nel tempo un luogo di incontro
                  per musicisti, appassionati, insegnanti e studenti. Collaboriamo con scuole medie, elementari
                  e istituti musicali della zona.
                </p>
                <p>
                  Trattare ogni strumento con la stessa dedizione, dall'accessorio più piccolo
                  al restauro più complesso: questa è la nostra filosofia.
                </p>
              </div>

              {/* Est. badge */}
              <div className="mt-8 inline-flex items-center gap-3 border border-[var(--color-burgundy)]/25 bg-[var(--color-burgundy)]/5 px-5 py-3">
                <span className="font-[family-name:var(--font-display)] text-3xl font-black text-[var(--color-burgundy)]">&#39;90</span>
                <div>
                  <p className="font-[family-name:var(--font-sans)] text-[0.62rem] font-bold tracking-[0.2em] uppercase text-[var(--color-dark-lt)]/50">Fondato negli anni</p>
                  <p className="font-[family-name:var(--font-sans)] text-[0.68rem] font-bold tracking-[0.1em] uppercase text-[var(--color-dark-lt)]/70">Collegno · Torino</p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Right: pillar cards */}
          <Reveal direction="right">
            <div className="grid sm:grid-cols-2 gap-4">
              {pillars.map((p, i) => (
                <div
                  key={p.title}
                  className={`group p-6 border transition-all duration-400 hover:-translate-y-1
                    ${i % 2 === 0
                      ? "bg-[var(--color-dark)] border-[var(--color-gold)]/15 hover:border-[var(--color-gold)]/40"
                      : "bg-[var(--color-burgundy)]/8 border-[var(--color-burgundy)]/20 hover:border-[var(--color-burgundy)]/50"
                    }`}
                >
                  {/* Top accent line */}
                  <span className={`block h-0.5 w-0 group-hover:w-full transition-all duration-600 mb-4
                    ${i % 2 === 0 ? "bg-[var(--color-gold)]" : "bg-[var(--color-burgundy)]"}`}
                  />
                  <div className={`w-10 h-10 flex items-center justify-center mb-3 border
                    ${i % 2 === 0
                      ? "border-[var(--color-gold)]/30 text-[var(--color-gold)] bg-[var(--color-gold)]/5"
                      : "border-[var(--color-burgundy)]/30 text-[var(--color-burgundy)] bg-[var(--color-burgundy)]/5"
                    }`}
                  >
                    <Icon icon={p.icon} className="text-lg" />
                  </div>
                  <h3 className={`font-[family-name:var(--font-display)] text-base font-bold mb-2
                    ${i % 2 === 0 ? "text-[var(--color-cream)]" : "text-[var(--color-dark)]"}`}
                  >
                    {p.title}
                  </h3>
                  <p className={`font-[family-name:var(--font-serif)] text-sm leading-relaxed
                    ${i % 2 === 0 ? "text-[var(--color-cream)]/55" : "text-[var(--color-dark-lt)]/65"}`}
                  >
                    {p.body}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}
