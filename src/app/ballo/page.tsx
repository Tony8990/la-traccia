import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { PageHero } from "@/components/ui/PageHero";
import { SwingAcademy } from "@/components/sections/SwingAcademy";
import { DJNights } from "@/components/sections/DJNights";
import { Marquee } from "@/components/ui/Marquee";
import { BackToTop } from "@/components/BackToTop";

export const metadata: Metadata = {
  title: "Ballo & DJ — Swing Academy · La Traccia Milano",
  description:
    "Scuola di danza swing a Milano: Lindy Hop, Solo Jazz, Tiptap, Balboa. DJ set per eventi privati e serate swing. La Traccia Swing Academy.",
};

export default function BalloPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          label="Ballo & DJ"
          title="Swing"
          titleAccent="Academy"
          subtitle="Impara a ballare Lindy Hop, Solo Jazz, Tiptap e Balboa con i nostri insegnanti. E quando la serata chiama, il nostro DJ è pronto a far muovere la pista."
        />
        <Marquee />
        <SwingAcademy standalone />
        <Marquee dark />
        <DJNights standalone />
      </main>
      <BackToTop />
    </>
  );
}
