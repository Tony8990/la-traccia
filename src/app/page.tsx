import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Repair } from "@/components/sections/Repair";
import { Products } from "@/components/sections/Products";
import { Contatti } from "@/components/sections/Contatti";
import { BackToTop } from "@/components/BackToTop";
import { Marquee } from "@/components/ui/Marquee";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Marquee dark />
        <Repair />
        <Marquee />
        <Products />
        <Marquee dark />
        <Contatti />
      </main>
      <BackToTop />
    </>
  );
}

