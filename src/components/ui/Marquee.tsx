const items = [
  "♪ La Traccia",
  "Strumenti Musicali",
  "♫ Liuteria Artigianale",
  "Repair & Restore",
  "♩ Solo Jazz",
  "Lindy Hop · Balboa",
  "♬ DJ Swing Nights",
  "Tiptap · Vinili",
  "♭ Collegno · Torino",
];

interface MarqueeProps {
  dark?: boolean;
}

export function Marquee({ dark }: MarqueeProps) {
  // Duplicate so -50% lands exactly at the start of the second copy → seamless loop
  const repeated = [...items, ...items];

  return (
    <div
      className={`relative overflow-hidden py-3.5 border-y ${
        dark
          ? "bg-[var(--color-gold)] border-[var(--color-gold-dk)]"
          : "bg-[var(--color-dark)] border-[var(--color-gold)]/20"
      }`}
    >
      <div className="marquee-track">
        {repeated.map((item, i) => (
          <span
            key={i}
            className={`font-[family-name:var(--font-sans)] text-[0.7rem] font-bold tracking-[0.3em] uppercase shrink-0 px-6 ${
              dark ? "text-[var(--color-dark)]" : "text-[var(--color-gold)]"
            }`}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
