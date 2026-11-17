"use client";

import React, { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";
import { ExperiencePhoto } from "@/types";

interface ExperiencePhotosProps {
  photos: ExperiencePhoto[];
  title: string;
}

/** Caption "Gbr. 01 — teks" dipecah supaya nomornya bisa jadi label sendiri. */
function splitCaption(caption: string) {
  const match = caption.match(/^(Gbr\.\s*\d+)\s*—\s*(.*)$/);
  return match
    ? { label: match[1], text: match[2] }
    : { label: null, text: caption };
}

export default function ExperiencePhotos({
  photos,
  title,
}: ExperiencePhotosProps) {
  const [active, setActive] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const step = useCallback(
    (dir: number) =>
      setActive((current) =>
        current === null
          ? current
          : (current + dir + photos.length) % photos.length
      ),
    [photos.length]
  );

  useEffect(() => {
    if (active === null) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [active, step]);

  if (!photos.length) return null;

  const current = active === null ? null : photos[active];
  const counter =
    active === null
      ? null
      : `${String(active + 1).padStart(2, "0")} / ${String(
          photos.length
        ).padStart(2, "0")}`;

  return (
    <div>
      {/* Deretan foto: tinggi seragam, lebar mengikuti rasio asli,
          jadi tidak ada bagian yang terpotong maupun bilah kosong. */}
      <ul className="flex snap-x snap-mandatory items-start gap-2.5 overflow-x-auto pb-1 sm:gap-3 lg:justify-between">
        {photos.map((photo, i) => (
          <li key={photo.src} className="shrink-0 snap-start">
            <button
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Perbesar foto ${i + 1}: ${photo.alt}`}
              className="group relative block cursor-zoom-in overflow-hidden border border-line transition-colors duration-300 hover:border-line-strong"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                width={photo.width}
                height={photo.height}
                sizes="(max-width: 640px) 320px, 520px"
                className="h-[188px] w-auto max-w-none object-cover transition-transform duration-500 group-hover:scale-[1.03] sm:h-[216px] lg:h-[246px]"
              />

              <span className="pointer-events-none absolute left-0 top-0 border-b border-r border-line bg-paper/90 px-1.5 py-0.5 font-mono text-[9px] tracking-[0.12em] text-ink">
                {String(i + 1).padStart(2, "0")}
              </span>

              <span className="pointer-events-none absolute inset-0 grid place-items-center bg-ink/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
                <span className="grid h-7 w-7 place-items-center border border-paper/40 bg-paper/90 text-ink">
                  <Maximize2 className="h-3 w-3" strokeWidth={1.5} />
                </span>
              </span>
            </button>
          </li>
        ))}
      </ul>

      {/* Legenda bernomor, lebar kolom seragam supaya teks tidak sempit */}
      <ol className="mt-3 grid gap-x-8 gap-y-2.5 border-t border-line pt-3 sm:grid-cols-2">
        {photos.map((photo, i) => {
          const { label, text } = splitCaption(photo.caption);
          return (
            <li key={photo.src} className="flex gap-2">
              <span className="mono-label mt-[1px] shrink-0 text-accent">
                {label ?? String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-[11px] leading-snug text-muted">
                {text}
              </span>
            </li>
          );
        })}
      </ol>

      <p className="mono-label mt-3 flex items-center gap-2">
        <Maximize2 className="h-2.5 w-2.5" strokeWidth={1.5} />
        <span className="sm:hidden">Geser &amp; klik foto untuk memperbesar</span>
        <span className="hidden sm:inline">Klik foto untuk memperbesar</span>
      </p>

      {current && mounted
        ? createPortal(
            <div
              role="dialog"
              aria-modal="true"
              aria-label={`Pratinjau foto ${title}: ${current.alt}`}
              onClick={() => setActive(null)}
              className="fixed inset-0 z-[70] flex items-center justify-center bg-black/85 p-3 backdrop-blur-sm sm:p-6 md:p-8"
            >
              <div
                onClick={(e) => e.stopPropagation()}
                className="relative flex max-h-[94vh] w-full max-w-5xl animate-rise flex-col border border-line-strong bg-paper shadow-[10px_10px_0_0_rgba(0,0,0,0.45)]"
              >
                <div className="flex items-center justify-between gap-4 border-b border-line px-4 py-3">
                  <span className="mono-label min-w-0 truncate text-ink">
                    <span className="text-accent">{counter}</span> {title}
                  </span>

                  <div className="flex items-center gap-3">
                    <span className="mono-label hidden items-center gap-1.5 md:flex">
                      <kbd className="border border-line px-1.5 py-0.5 text-[9px]">
                        ←
                      </kbd>
                      <kbd className="border border-line px-1.5 py-0.5 text-[9px]">
                        →
                      </kbd>
                      <kbd className="border border-line px-1.5 py-0.5 text-[9px]">
                        Esc
                      </kbd>
                    </span>
                    <button
                      type="button"
                      onClick={() => setActive(null)}
                      aria-label="Tutup pratinjau"
                      className="grid h-7 w-7 place-items-center border border-line text-ink transition-colors hover:border-accent hover:bg-accent hover:text-accent-ink"
                    >
                      <X className="h-4 w-4" strokeWidth={1.5} />
                    </button>
                  </div>
                </div>

                <div className="relative flex min-h-[240px] flex-1 items-center justify-center overflow-hidden bg-[#0b0b0a] sm:min-h-[360px]">
                  <Image
                    key={current.src}
                    src={current.src}
                    alt={current.alt}
                    width={current.width}
                    height={current.height}
                    className="max-h-[68vh] w-auto max-w-full object-contain"
                    sizes="(max-width: 1024px) 100vw, 960px"
                    priority
                  />

                  <button
                    type="button"
                    onClick={() => step(-1)}
                    aria-label="Foto sebelumnya"
                    className="absolute left-3 top-1/2 grid h-9 w-9 -translate-y-1/2 place-items-center border border-white/15 bg-black/55 text-white transition-colors hover:border-accent hover:bg-accent hover:text-accent-ink"
                  >
                    <ChevronLeft className="h-4 w-4" strokeWidth={1.5} />
                  </button>
                  <button
                    type="button"
                    onClick={() => step(1)}
                    aria-label="Foto berikutnya"
                    className="absolute right-3 top-1/2 grid h-9 w-9 -translate-y-1/2 place-items-center border border-white/15 bg-black/55 text-white transition-colors hover:border-accent hover:bg-accent hover:text-accent-ink"
                  >
                    <ChevronRight className="h-4 w-4" strokeWidth={1.5} />
                  </button>
                </div>

                <div className="border-t border-line px-4 py-3">
                  <p className="text-[12.5px] leading-snug text-muted">
                    {current.caption}
                  </p>
                </div>
              </div>
            </div>,
            document.body
          )
        : null}
    </div>
  );
}
