"use client";

import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";
import { clsx } from "clsx";

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handler = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Torna in cima"
      className={clsx(
        "fixed bottom-8 right-8 z-50 w-11 h-11 rounded-full bg-[var(--color-gold)] text-[var(--color-dark)] flex items-center justify-center shadow-[0_4px_20px_rgba(200,151,58,0.4)] transition-all duration-400 hover:bg-[var(--color-gold-lt)] hover:-translate-y-1",
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      )}
    >
      <ChevronUp size={20} />
    </button>
  );
}
