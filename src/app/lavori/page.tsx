import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { PageHero } from "@/components/ui/PageHero";
import { Marquee } from "@/components/ui/Marquee";
import { LavoriGrid } from "@/components/sections/LavoriGrid";
import { Contatti } from "@/components/sections/Contatti";
import { BackToTop } from "@/components/BackToTop";

export const metadata: Metadata = {
  title: "Portfolio Lavori — Restauro, Liuteria & Repair",
  description:
    "Scopri i lavori realizzati da La Traccia: restauro di strumenti vintage, liuteria artigianale, riparazioni su misura. Ogni strumento ha una storia.",
};

export default function LavoriPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          label="I Nostri Lavori"
          title="Portfolio"
          titleAccent="Lavori"
          subtitle="Ogni strumento che passa per il nostro laboratorio porta con sé una storia. Ecco alcuni dei restauri, riparazioni e interventi di liuteria che abbiamo realizzato negli anni."
        />
        <Marquee />
        <LavoriGrid />
        <Marquee dark />
        <Contatti />
      </main>
      <BackToTop />
    </>
  );
}
