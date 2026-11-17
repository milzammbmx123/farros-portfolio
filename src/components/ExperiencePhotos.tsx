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

  const gridCols =
    photos.length >= 5
      ? "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
      : "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4";

  return (
    <div>
      <ul className={`grid gap-x-3 gap-y-5 ${gridCols}`}>
        {photos.map((photo, i) => (
          <li key={photo.src}>
            <figure>
              <button
                type="button"
                onClick={() => setActive(i)}
                aria-label={`Perbesar foto ${i + 1}: ${photo.alt}`}
                className="group relative block w-full cursor-zoom-in overflow-hidden border border-line bg-[var(--tint)] text-left transition-colors duration-300 hover:border-line-strong"
              >
                <span
                  className="relative block w-full"
                  style={{ aspectRatio: "3 / 4" }}
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 240px"
                    className="object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                </span>
                <span className="pointer-events-none absolute bottom-1.5 right-1.5 grid h-6 w-6 place-items-center border border-line bg-paper/90 text-ink opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
                  <Maximize2 className="h-3 w-3" strokeWidth={1.5} />
                </span>
              </button>
              <figcaption className="mt-2 text-[11px] leading-snug text-muted">
                {photo.caption}
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>

      <p className="mono-label mt-3 flex items-center gap-2">
        <Maximize2 className="h-2.5 w-2.5" strokeWidth={1.5} />
        Klik foto untuk memperbesar
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
                    width={1200}
                    height={1600}
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
