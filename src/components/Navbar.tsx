"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { clsx } from "clsx";
import { Menu, X } from "lucide-react";
import Image from "next/image";

// anchor = smooth-scroll on home page; page = Next.js route
const links: { href: string; label: string; type: "anchor" | "page"; cta?: boolean }[] = [
  { href: "#home",     label: "Home",            type: "anchor" },
  { href: "#about",    label: "Chi Siamo",        type: "anchor" },
  { href: "#repair",   label: "Repair & Restore", type: "anchor" },
  { href: "#products", label: "Negozio",          type: "anchor" },
  { href: "/lavori",   label: "Portfolio",        type: "page"   },
  { href: "/ballo",    label: "Ballo & DJ",       type: "page"   },
  { href: "#contatti", label: "Contattaci",       type: "anchor", cta: true },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const handleAnchor = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
    setOpen(false);
    document.body.style.overflow = "";
    if (isHome) {
      e.preventDefault();
      const target = document.querySelector(hash);
      if (target) {
        window.scrollTo({ top: (target as HTMLElement).offsetTop - 80, behavior: "smooth" });
      }
    }
    // on sub-pages: let browser navigate to /#hash naturally
  };

  const toggleMenu = () => {
    setOpen((v) => {
      document.body.style.overflow = !v ? "hidden" : "";
      return !v;
    });
  };

  const closeMenu = () => {
    setOpen(false);
    document.body.style.overflow = "";
  };

  const anchorHref = (hash: string) => (isHome ? hash : `/${hash}`);

  const baseLink =
    "font-[family-name:var(--font-sans)] text-[0.78rem] font-semibold tracking-[0.12em] uppercase text-[var(--color-cream)] relative group transition-colors hover:text-[var(--color-gold)]";
  const ctaLink =
    "font-[family-name:var(--font-sans)] text-[0.78rem] font-bold tracking-[0.12em] uppercase bg-[var(--color-gold)] text-[var(--color-dark)] px-5 py-2 rounded-sm hover:bg-[var(--color-gold-lt)] hover:-translate-y-0.5 transition-all";

  return (
    <>
      <header
        className={clsx(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "bg-[var(--color-dark)]/95 backdrop-blur-md py-3 shadow-[0_2px_20px_rgba(0,0,0,0.4)]"
            : "py-5"
        )}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group" aria-label="La Traccia - Home">
            <Image
              src="/logo.png"
              alt="La Traccia logo"
              width={120}
              height={48}
              className="h-10 w-auto object-contain opacity-90 group-hover:opacity-100 transition-opacity"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {links.map((l) => {
              if (l.type === "page") {
                return (
                  <Link
                    key={l.href}
                    href={l.href}
                    className={clsx(baseLink, pathname === l.href && "text-[var(--color-gold)]")}
                  >
                    {l.label}
                    <span className={clsx(
                      "absolute -bottom-0.5 left-0 h-px bg-[var(--color-gold)] transition-all duration-300",
                      pathname === l.href ? "w-full" : "w-0 group-hover:w-full"
                    )} />
                  </Link>
                );
              }
              return l.cta ? (
                <a key={l.href} href={anchorHref(l.href)} onClick={(e) => handleAnchor(e, l.href)} className={ctaLink}>
                  {l.label}
                </a>
              ) : (
                <a key={l.href} href={anchorHref(l.href)} onClick={(e) => handleAnchor(e, l.href)} className={baseLink}>
                  {l.label}
                  <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-[var(--color-gold)] group-hover:w-full transition-all duration-300" />
                </a>
              );
            })}
          </nav>

          {/* Burger */}
          <button
            className="md:hidden text-[var(--color-cream)] p-1"
            onClick={toggleMenu}
            aria-label={open ? "Chiudi menu" : "Apri menu"}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        className={clsx(
          "fixed inset-0 z-40 bg-[var(--color-dark)] transition-transform duration-500",
          open ? "translate-x-0" : "translate-x-full"
        )}
      >
        <nav className="flex flex-col gap-7 pt-28 px-10">
          {links.map((l) => {
            const mobileClass = clsx(
              "font-[family-name:var(--font-display)] text-3xl font-bold transition-colors",
              l.cta ? "text-[var(--color-gold)]" : "text-[var(--color-cream)] hover:text-[var(--color-gold)]"
            );
            if (l.type === "page") {
              return (
                <Link key={l.href} href={l.href} onClick={closeMenu} className={mobileClass}>
                  {l.label}
                </Link>
              );
            }
            return (
              <a key={l.href} href={anchorHref(l.href)} onClick={(e) => handleAnchor(e, l.href)} className={mobileClass}>
                {l.label}
              </a>
            );
          })}
        </nav>
      </div>
    </>
  );
}
