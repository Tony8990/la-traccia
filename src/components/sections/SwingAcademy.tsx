import { Icon } from "@iconify/react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";

const styles = [
  {
    num: "01",
    icon: "ph:person-simple-run-fill",
    title: "Lindy Hop",
    subtitle: "Il cuore dello swing",
    description:
      "Nato ad Harlem negli anni '20, il Lindy Hop è la radice di tutto. Energico, improvvisato, liberatorio. Si balla in coppia su musica jazz e big band, con movimenti ampi e creativi. Ogni lezione è un viaggio nel suono.",
    tags: ["Principianti", "Intermedi", "Avanzati", "Social Dancing"],
    photoLabel: "Foto Lindy Hop",
  },
  {
    num: "02",
    icon: "ph:music-notes-fill",
    title: "Solo Jazz",
    subtitle: "La danza del jazz puro",
    description:
      "Il Solo Jazz è la forma più autentica e libera del ballo swing. Improvvisazione, ritmo e personalità: si balla da soli sulla musica jazz degli anni '30 e '40. Perfetto per sviluppare musicalità e stile personale.",
    tags: ["Solo", "Improvvisazione", "Musicalità", "Tutti i livelli"],
    photoLabel: "Foto Solo Jazz",
    reverse: true,
  },
  {
    num: "03",
    icon: "ph:metronome-fill",
    title: "Tiptap",
    subtitle: "Ritmo sotto i piedi",
    description:
      "Il Tiptap — o Tap Dance — trasforma i piedi in strumenti musicali. Ogni passo è un colpo, ogni sequenza è una frase ritmica. Radici afroamericane, anima jazz, tecnica infinita.",
    tags: ["Principianti", "Tecnica", "Ritmo", "Jazz Tap"],
    photoLabel: "Foto Tiptap",
  },
  {
    num: "04",
    icon: "ph:heart-fill",
    title: "Balboa",
    subtitle: "Eleganza e precisione",
    description:
      "Nato nelle sale da ballo affollate degli anni '30, il Balboa è danza di dettagli: piedi, connessione, ritmo. Pure Bal e Bal-Swing per chi ama la profondità tecnica e l'intesa con il partner.",
    tags: ["Pure Bal", "Bal-Swing", "Tecnica", "Workshop"],
    photoLabel: "Foto Balboa",
    reverse: true,
  },
];

export function SwingAcademy({ standalone = false }: { standalone?: boolean }) {
  const contactHref = standalone ? "/#contatti" : "#contatti";
  const phoneHref = "tel:+390114150071";

  return (
    <section id="academy" className="bg-[var(--color-ivory)] overflow-hidden">

      {/* ── Section intro ── */}
      <div className="py-28">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal>
            <SectionHeader
              label="La nostra scuola"
              title={
                <>
                  Swing{" "}
                  <em className="italic text-[var(--color-burgundy)]">Academy</em>
                </>
              }
              intro={
                <>
                  Impara a ballare come si faceva negli anni &apos;40. Tre stili, un&apos;unica
                  passione. Per maggiori informazioni e orari,{" "}
                  <a href={contactHref} className="underline underline-offset-4 text-[var(--color-burgundy)] hover:text-[var(--color-gold-dk)] transition-colors">
                    contattaci direttamente
                  </a>
                  .
                </>
              }
            />
          </Reveal>

          {/* Dance styles */}
          <div className="flex flex-col gap-28">
            {styles.map((s) => (
              <div
                key={s.title}
                className={`grid md:grid-cols-2 gap-12 lg:gap-20 items-center ${
                  s.reverse ? "md:[&>*:first-child]:order-2" : ""
                }`}
              >
                {/* Photo */}
                <Reveal direction={s.reverse ? "right" : "left"}>
                  <div className="relative">
                    {/* Main photo container — swap src with real img later */}
                    <div className="aspect-[4/3] relative overflow-hidden border border-[var(--color-gold)]/25 bg-[var(--color-dark)] group photo-placeholder">
                      {/* Diagonal pattern */}
                      <div
                        className="absolute inset-0"
                        style={{
                          backgroundImage:
                            "repeating-linear-gradient(45deg,transparent,transparent 14px,rgba(200,151,58,0.04) 14px,rgba(200,151,58,0.04) 15px)",
                        }}
                      />
                      {/* Placeholder — replace div with <Image> when ready */}
                      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                        <Icon
                          icon={s.icon}
                          className="text-[6rem] text-[var(--color-gold)] opacity-[0.18]"
                        />
                        <span className="font-[family-name:var(--font-sans)] text-[0.65rem] tracking-[0.25em] uppercase text-[var(--color-cream)]/25">
                          {s.photoLabel}
                        </span>
                      </div>

                      {/* Art Deco corner frames */}
                      <span className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-[var(--color-gold)]/40 group-hover:border-[var(--color-gold)]/80 transition-colors duration-700" />
                      <span className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-[var(--color-gold)]/40 group-hover:border-[var(--color-gold)]/80 transition-colors duration-700" />
                      <span className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-[var(--color-gold)]/20" />
                      <span className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-[var(--color-gold)]/20" />

                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-[var(--color-burgundy)]/0 group-hover:bg-[var(--color-burgundy)]/10 transition-colors duration-700" />
                    </div>

                    {/* Badge */}
                    <div className="absolute -bottom-5 -right-4 md:-right-5 bg-[var(--color-gold)] flex flex-col items-center justify-center px-5 py-3 shadow-xl">
                      <span className="font-[family-name:var(--font-display)] text-4xl font-black text-[var(--color-dark)] leading-none">{s.num}</span>
                      <span className="font-[family-name:var(--font-sans)] text-[0.55rem] font-black tracking-[0.2em] uppercase text-[var(--color-dark)]/70 mt-0.5">{s.title}</span>
                    </div>
                  </div>
                </Reveal>

                {/* Text */}
                <Reveal direction={s.reverse ? "left" : "right"} delay={0.15}>
                  <div>
                    {/* Ornament line */}
                    <div className="flex items-center gap-3 mb-5">
                      <span className="h-px w-8 bg-[var(--color-gold)]" />
                      <Icon icon={s.icon} className="text-lg text-[var(--color-gold)]" />
                      <span className="h-px flex-1 bg-gradient-to-r from-[var(--color-gold)]/40 to-transparent" />
                    </div>

                    <h3 className="font-[family-name:var(--font-display)] text-5xl font-black text-[var(--color-dark)] leading-tight mb-2">
                      {s.title}
                    </h3>
                    <p className="font-[family-name:var(--font-script)] text-xl text-[var(--color-burgundy)] mb-5">
                      {s.subtitle}
                    </p>

                    <p className="font-[family-name:var(--font-serif)] text-lg leading-[1.9] text-[var(--color-dark-lt)]/80 mb-6">
                      {s.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {s.tags.map((tag) => (
                        <span
                          key={tag}
                          className="font-[family-name:var(--font-sans)] text-[0.65rem] font-bold tracking-[0.15em] uppercase border border-[var(--color-burgundy)]/30 text-[var(--color-burgundy)] px-3 py-1 hover:bg-[var(--color-burgundy)] hover:text-[var(--color-cream)] transition-colors cursor-default"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <p className="font-[family-name:var(--font-serif)] text-sm italic text-[var(--color-dark-lt)]/50 mb-4">
                      Per orari, livelli e disponibilità — contattaci per maggiori informazioni.
                    </p>

                    <Button href={contactHref} size="sm">
                      Contattaci per info
                    </Button>
                  </div>
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── CTA band ── */}
      <Reveal>
        <div className="relative bg-[var(--color-dark)] py-20 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_50%_50%,rgba(107,26,34,0.5),transparent)] pointer-events-none" />

          {/* Corner ornaments */}
          <span className="absolute top-8 left-8 w-16 h-16 border-t-2 border-l-2 border-[var(--color-gold)]/20 hidden md:block" />
          <span className="absolute bottom-8 right-8 w-16 h-16 border-b-2 border-r-2 border-[var(--color-gold)]/20 hidden md:block" />
          <span className="absolute top-8 right-8 w-16 h-16 border-t-2 border-r-2 border-[var(--color-gold)]/10 hidden md:block" />
          <span className="absolute bottom-8 left-8 w-16 h-16 border-b-2 border-l-2 border-[var(--color-gold)]/10 hidden md:block" />

          <div className="relative max-w-2xl mx-auto px-6 text-center">
            <p className="font-[family-name:var(--font-sans)] text-[0.7rem] font-bold tracking-[0.4em] uppercase text-[var(--color-gold)] mb-4">
              — Inizia il tuo viaggio —
            </p>
            <h3 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl font-black text-[var(--color-cream)] leading-tight mb-3">
              Pronto a ballare<br />
              <span className="italic text-transparent" style={{ WebkitTextStroke: "1.5px var(--color-gold)" }}>
                come negli anni &apos;40?
              </span>
            </h3>
            <p className="font-[family-name:var(--font-serif)] text-lg text-[var(--color-cream)]/60 mb-8 leading-relaxed">
              Per informazioni su lezioni, livelli, orari e costi,<br className="hidden md:block" />
              scrivici o chiamaci. Siamo felici di risponderti.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button href={contactHref}>Scrivici ora</Button>
              <Button href={phoneHref} variant="outline">
                <Icon icon="ph:phone-fill" className="text-sm" />
                Chiamaci
              </Button>
            </div>
          </div>
        </div>
      </Reveal>

    </section>
  );
}
