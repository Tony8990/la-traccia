import { clsx } from "clsx";

interface SectionHeaderProps {
  label: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  light?: boolean;
  className?: string;
}

export function SectionHeader({ label, title, intro, light, className }: SectionHeaderProps) {
  return (
    <header className={clsx("text-center mb-16", className)}>
      <span
        className={clsx(
          "block font-[family-name:var(--font-sans)] text-[0.72rem] font-bold tracking-[0.35em] uppercase mb-2",
          light ? "text-[var(--color-gold-lt)]" : "text-[var(--color-gold)]"
        )}
      >
        {label}
      </span>
      <h2
        className={clsx(
          "font-[family-name:var(--font-display)] text-4xl md:text-5xl font-bold leading-tight mb-3",
          light ? "text-[var(--color-cream)]" : "text-[var(--color-dark)]"
        )}
      >
        {title}
      </h2>
      <span
        className={clsx(
          "block tracking-[0.4em] text-sm mb-4",
          light ? "text-[var(--color-gold-lt)]" : "text-[var(--color-gold)]"
        )}
      >
        ✦ ✦ ✦
      </span>
      {intro && (
        <p
          className={clsx(
            "font-[family-name:var(--font-serif)] text-lg max-w-xl mx-auto leading-relaxed",
            light ? "text-[var(--color-cream-dk)]" : "text-[var(--color-dark-lt)]/70"
          )}
        >
          {intro}
        </p>
      )}
    </header>
  );
}
