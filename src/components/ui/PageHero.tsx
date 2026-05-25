import Link from "next/link";

interface PageHeroProps {
  label: string;
  title: string;
  titleAccent?: string;
  subtitle?: string;
  breadcrumb?: string;
}

export function PageHero({ label, title, titleAccent, subtitle, breadcrumb = "Home" }: PageHeroProps) {
  return (
    <section className="relative min-h-[42vh] flex flex-col justify-end bg-[var(--color-dark)] overflow-hidden pt-28 pb-16">
      {/* Deco grid */}
      <div className="absolute inset-0 deco-grid opacity-70 pointer-events-none" />
      {/* Radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_100%,rgba(107,26,34,0.6),transparent)] pointer-events-none" />
      {/* Top gold line */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[var(--color-gold)] to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 mb-8 font-[family-name:var(--font-sans)] text-[0.68rem] tracking-[0.2em] uppercase text-[var(--color-cream)]/40">
          <Link href="/" className="hover:text-[var(--color-gold)] transition-colors">{breadcrumb}</Link>
          <span>›</span>
          <span className="text-[var(--color-gold)]/70">{label}</span>
        </nav>

        {/* Label */}
        <p className="font-[family-name:var(--font-sans)] text-[0.7rem] font-bold tracking-[0.45em] uppercase text-[var(--color-gold)] mb-4">
          {label}
        </p>

        {/* Title */}
        <h1 className="font-[family-name:var(--font-display)] text-[clamp(2.8rem,8vw,6rem)] font-black leading-[0.92] text-[var(--color-cream)] mb-4">
          {title}
          {titleAccent && (
            <>
              {" "}
              <span
                className="italic text-transparent"
                style={{ WebkitTextStroke: "2px var(--color-gold)" }}
              >
                {titleAccent}
              </span>
            </>
          )}
        </h1>

        {/* Divider */}
        <div className="flex items-center gap-3 mb-4">
          <span className="h-px w-16 bg-[var(--color-gold)]" />
          <span className="text-[var(--color-gold)] text-xs">✦</span>
          <span className="h-px w-8 bg-[var(--color-gold)]/30" />
        </div>

        {subtitle && (
          <p className="font-[family-name:var(--font-serif)] text-lg md:text-xl text-[var(--color-cream)]/65 max-w-xl leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
