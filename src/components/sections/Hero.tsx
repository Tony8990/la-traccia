"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Icon } from "@iconify/react";

const teasers = [
  { icon: "ph:guitar-fill",            label: "Strumenti",        href: "#products" },
  { icon: "ph:wrench-fill",            label: "Repair & Restore", href: "#repair"   },
  { icon: "ph:clock-counter-clockwise-fill", label: "Portfolio Lavori", href: "/lavori" },
  { icon: "ph:person-simple-run-fill", label: "Ballo & DJ",       href: "/ballo"    },
];

const stagger = {
  visible: { transition: { staggerChildren: 0.12 } },
};
const fadeUp = {
  hidden:  { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.0, ease: "easeOut" as const } },
};

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex flex-col bg-[var(--color-dark)] overflow-hidden">

      {/* ── Deco grid bg ── */}
      <div className="absolute inset-0 deco-grid opacity-100 pointer-events-none" />

      {/* ── Multi-layer radial glow ── */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_40%,rgba(107,26,34,0.55)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[60vw] h-[60vw] bg-[radial-gradient(circle,rgba(200,151,58,0.07)_0%,transparent_60%)] pointer-events-none" />

      {/* ── Floating notes ── */}
      {["♪","♫","♩","♬","♭","♪","♫"].map((note, i) => (
        <motion.span
          key={i}
          className="absolute text-[var(--color-gold)] pointer-events-none select-none"
          style={{
            left: `${8 + i * 13}%`,
            bottom: "-2rem",
            fontSize: `${0.8 + (i % 3) * 0.5}rem`,
            opacity: 0.15 + (i % 3) * 0.08,
          }}
          animate={{ y: [0, -1300], opacity: [0.3, 0] }}
          transition={{ duration: 22 + i * 3, repeat: Infinity, delay: i * 2.5, ease: "linear" }}
        >
          {note}
        </motion.span>
      ))}

      {/* ── Vinyl ── */}
      <div className="absolute right-[-8vw] top-[10%] w-[min(50vw,600px)] h-[min(50vw,600px)] pointer-events-none opacity-[0.09]">
        <motion.div
          className="w-full h-full rounded-full"
          style={{
            background: "conic-gradient(#2E1A1E 0deg,#1a0d0f 25deg,#2E1A1E 50deg,#1a0d0f 75deg,#2E1A1E 100deg,#1a0d0f 125deg,#2E1A1E 150deg,#1a0d0f 175deg,#2E1A1E 200deg,#1a0d0f 225deg,#2E1A1E 250deg,#1a0d0f 275deg,#2E1A1E 300deg,#1a0d0f 325deg,#2E1A1E 350deg,#1a0d0f 360deg)",
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[26%] h-[26%] rounded-full bg-[var(--color-burgundy)] border-2 border-[var(--color-gold-dk)] flex items-center justify-center text-[var(--color-gold)] text-4xl">♪</div>
        {/* Rings */}
        {[38,52,66].map(s => (
          <div key={s} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[var(--color-gold)]/10" style={{ width: `${s}%`, height: `${s}%` }} />
        ))}
      </div>

      {/* ── Gold corner ornament ── */}
      <div className="absolute top-24 left-0 w-32 h-32 pointer-events-none hidden lg:block">
        <div className="absolute top-8 left-8 w-16 h-16 border-t-2 border-l-2 border-[var(--color-gold)]/30" />
        <div className="absolute top-10 left-10 w-12 h-12 border-t border-l border-[var(--color-gold)]/15" />
      </div>

      {/* ── Main content ── */}
      <div className="relative z-10 flex flex-col flex-1 justify-center max-w-6xl mx-auto px-6 pt-28 pb-10">
        <motion.div
          className="max-w-3xl"
          initial="hidden"
          animate="visible"
          variants={stagger}
        >
          {/* Est. label */}
          <motion.div variants={fadeUp} className="flex items-center gap-3 mb-6">
            <span className="h-px w-12 bg-[var(--color-gold)]" />
            <span className="font-[family-name:var(--font-sans)] text-[0.72rem] font-bold tracking-[0.45em] uppercase text-[var(--color-gold)]">
              Collegno · Torino
            </span>
            <span className="h-px w-12 bg-[var(--color-gold)]" />
          </motion.div>

          {/* Logo */}
          <motion.div variants={fadeUp} className="mb-8">
            <Image
              src="/logo.png"
              alt="La Traccia"
              width={600}
              height={240}
              className="w-full max-w-[340px] md:max-w-[520px] h-auto object-contain"
              style={{ width: "100%", height: "auto" }}
              priority
            />
          </motion.div>

          {/* Subtitle */}
          <motion.p variants={fadeUp} className="font-[family-name:var(--font-serif)] text-xl md:text-2xl text-[var(--color-cream)]/80 leading-relaxed mb-3 max-w-xl">
            Strumenti musicali, riparazione e restauro.<br />
            <em className="text-[var(--color-gold)] not-italic font-semibold">Un'attività di famiglia</em> a Collegno, dal 1990.
          </motion.p>

          {/* Divider */}
          <motion.p variants={fadeUp} className="text-[var(--color-gold)] tracking-[0.6em] text-xs mb-8">—— ♦ ——</motion.p>

          {/* CTAs */}
          <motion.div variants={fadeUp} className="flex flex-wrap gap-4 mb-16">
            <Button href="#products">Esplora i Prodotti</Button>
            <Button href="#repair" variant="outline">Repair & Restore</Button>
          </motion.div>
        </motion.div>

        {/* ── Teaser cards ── */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-3"
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.1, delayChildren: 1.1 } } }}
        >
          {teasers.map((t) => (
            <motion.a
              key={t.label}
              href={t.href}
              variants={fadeUp}
              className="group flex flex-col items-center gap-3 p-5 bg-white/[0.03] border border-[var(--color-gold)]/15 hover:border-[var(--color-gold)]/50 hover:bg-white/[0.07] transition-all duration-400 text-center cursor-pointer"
            >
              <span className="w-12 h-12 rounded-full border border-[var(--color-gold)]/40 flex items-center justify-center group-hover:bg-[var(--color-gold)]/15 transition-colors">
                <Icon icon={t.icon} className="text-xl text-[var(--color-gold)]" />
              </span>
              <span className="font-[family-name:var(--font-sans)] text-[0.72rem] font-bold tracking-[0.12em] uppercase text-[var(--color-cream)]/70 group-hover:text-[var(--color-gold)] transition-colors">
                {t.label}
              </span>
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* ── Scroll hint ── */}
      <motion.div
        className="relative z-10 flex justify-center pb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
      >
        <a
          href="#repair"
          className="flex flex-col items-center gap-1 text-[var(--color-gold)]/60 hover:text-[var(--color-gold)] transition-colors font-[family-name:var(--font-sans)] text-[0.65rem] tracking-[0.25em] uppercase"
        >
          <span>Scorri</span>
          <motion.span animate={{ y: [0, 6, 0] }} transition={{ duration: 2, repeat: Infinity }} className="text-base">↓</motion.span>
        </a>
      </motion.div>
    </section>
  );
}

