import { clsx } from "clsx";

interface ButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: "primary" | "outline";
  size?: "md" | "sm";
  href: string;
  children: React.ReactNode;
}

export function Button({ variant = "primary", size = "md", href, children, className, ...props }: ButtonProps) {
  return (
    <a
      href={href}
      className={clsx(
        "inline-flex items-center gap-2 font-[family-name:var(--font-sans)] font-bold tracking-[0.15em] uppercase rounded-sm transition-all duration-300 relative overflow-hidden",
        size === "md" ? "px-8 py-3 text-[0.8rem]" : "px-6 py-2.5 text-[0.75rem]",
        variant === "primary" && [
          "bg-[var(--color-gold)] text-[var(--color-dark)] border-2 border-[var(--color-gold)]",
          "hover:bg-[var(--color-gold-lt)] hover:border-[var(--color-gold-lt)] hover:-translate-y-1",
          "shadow-[0_4px_30px_rgba(200,151,58,0.35)]",
        ],
        variant === "outline" && [
          "bg-transparent text-[var(--color-cream)] border-2 border-white/30",
          "hover:border-[var(--color-gold)] hover:text-[var(--color-gold)] hover:-translate-y-1",
        ],
        className
      )}
      {...props}
    >
      {children}
    </a>
  );
}
