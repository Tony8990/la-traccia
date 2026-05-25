"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { Icon } from "@iconify/react";

interface DanceMediaCardProps {
  photo: string;
  youtubeId?: string;
  alt: string;
  isSoloJazz?: boolean;
  icon: string;
}

export function DanceMediaCard({ photo, youtubeId, alt, isSoloJazz }: DanceMediaCardProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [playing, setPlaying] = useState(false);
  const [iframeSrc, setIframeSrc] = useState("");

  function startVideo() {
    if (!youtubeId) return;
    setIframeSrc(
      `https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&mute=1&loop=1&playlist=${youtubeId}&controls=0&rel=0&modestbranding=1&playsinline=1`
    );
    setPlaying(true);
  }

  function stopVideo() {
    // Clearing src stops playback immediately
    setIframeSrc("");
    setPlaying(false);
  }

  function handleClick() {
    if (!youtubeId) return;
    playing ? stopVideo() : startVideo();
  }

  return (
    <div
      className="aspect-[4/3] relative overflow-hidden border border-[var(--color-gold)]/25 bg-[var(--color-dark)] group cursor-pointer select-none"
      onMouseEnter={startVideo}
      onMouseLeave={stopVideo}
      onClick={handleClick}
    >
      {/* Photo — fades out when video plays */}
      <Image
        src={photo}
        alt={alt}
        fill
        className={`object-cover transition-all duration-700 group-hover:scale-105 ${playing ? "opacity-0" : "opacity-100"}`}
        sizes="(max-width: 768px) 100vw, 50vw"
        style={isSoloJazz ? { filter: "saturate(0.55) brightness(0.9)" } : undefined}
      />

      {/* YouTube iframe — mounted only when src is set */}
      {iframeSrc && (
        <iframe
          ref={iframeRef}
          src={iframeSrc}
          allow="autoplay; encrypted-media"
          allowFullScreen={false}
          className="absolute inset-0 w-full h-full pointer-events-none"
          style={{ border: "none" }}
          title={alt}
        />
      )}

      {/* Dark overlay */}
      <div className={`absolute inset-0 transition-colors duration-700 pointer-events-none ${playing ? "bg-transparent" : "bg-[var(--color-dark)]/20 group-hover:bg-[var(--color-dark)]/5"}`} />

      {/* Play hint — visible when video exists and not playing */}
      {youtubeId && !playing && (
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div className="w-16 h-16 rounded-full bg-[var(--color-gold)]/90 flex items-center justify-center shadow-[0_0_40px_rgba(200,151,58,0.6)] backdrop-blur-sm">
            <Icon icon="ph:play-fill" className="text-2xl text-[var(--color-dark)] ml-1" />
          </div>
        </div>
      )}

      {/* Stop hint — visible when playing */}
      {youtubeId && playing && (
        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div className="w-8 h-8 rounded-full bg-[var(--color-dark)]/70 flex items-center justify-center backdrop-blur-sm">
            <Icon icon="ph:stop-fill" className="text-sm text-[var(--color-gold)]" />
          </div>
        </div>
      )}

      {/* Art Deco corner frames */}
      <span className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-[var(--color-gold)]/40 group-hover:border-[var(--color-gold)]/80 transition-colors duration-700 pointer-events-none" />
      <span className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-[var(--color-gold)]/40 group-hover:border-[var(--color-gold)]/80 transition-colors duration-700 pointer-events-none" />
      <span className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-[var(--color-gold)]/20 pointer-events-none" />
      <span className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-[var(--color-gold)]/20 pointer-events-none" />
    </div>
  );
}
