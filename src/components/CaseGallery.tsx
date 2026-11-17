"use client";

import React, { useCallback, useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";
import { CaseStudyItem } from "@/types";

interface Shot {
  src: string;
  alt: string;
  caption: string;
}

/** Frame stays this shape so the layout never jumps between screenshots. */
const FRAME = "16 / 10";

export default function CaseGallery({ study }: { study: CaseStudyItem }) {
  const shots = useMemo<Shot[]>(() => {
    const list: Shot[] = [];

    if (study.image) {
      list.push({
        src: study.image,
        alt: study.imageAlt ?? `Tampilan ${study.title}`,
        caption: study.imageNote ?? `Tampilan ${study.title}`,
      });
    }

    study.screens?.forEach((screen) => list.push(screen));

    return list;
  }, [study]);

  const [active, setActive] = useState(0);
  const [zoomed, setZoomed] = useState(false);
  const [mounted, setMounted] = useState(false);
  const total = shots.length;

  useEffect(() => setMounted(true), []);

  const step = useCallback(
    (dir: number) => setActive((i) => (i + dir + total) % total),
    [total]
  );

  useEffect(() => {
    if (!zoomed) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setZoomed(false);
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [zoomed, step]);

  if (!total) return null;

  const shot = shots[active];
  const counter = `${String(active + 1).padStart(2, "0")} / ${String(
    total
  ).padStart(2, "0")}`;

  return (
    <div onKeyDown={(e) => {
      if (e.key === "ArrowRight") {
        e.preventDefault();
        step(1);
      }
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        step(-1);
      }
    }}>
      {/* Main frame */}
      <button
        type="button"
        onClick={() => setZoomed(true)}
        aria-label={`Perbesar tangkapan layar ${active + 1}: ${shot.alt}`}
        className="group relative block w-full cursor-zoom-in overflow-hidden border border-line bg-paper text-left transition-colors duration-300 hover:border-line-strong"
      >
        <span className="relative block w-full" style={{ aspectRatio: FRAME }}>
          <Image
            key={shot.src}
            src={shot.src}
            alt={shot.alt}
            fill
            priority={active === 0}
            sizes="(max-width: 1024px) 100vw, 760px"
            className="animate-rise object-contain p-1.5 sm:p-2.5"
            style={{ animationDuration: "420ms" }}
          />
        </span>

        <span className="pointer-events-none absolute left-2 top-2 flex items-center gap-1.5 border border-line bg-paper/90 px-2 py-1 font-mono text-[9px] uppercase tracking-[0.14em] text-muted">
          {counter}
        </span>

        <span className="pointer-events-none absolute bottom-2 right-2 flex items-center gap-1.5 border border-line bg-paper/90 px-2 py-1 font-mono text-[9px] uppercase tracking-[0.14em] text-ink opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
          <Maximize2 className="h-2.5 w-2.5" strokeWidth={1.5} />
          Perbesar
        </span>
      </button>

      {/* Caption + arrows */}
      <div className="mt-3 flex flex-col gap-3 border-b border-line pb-3 sm:flex-row sm:items-start sm:justify-between sm:gap-8">
        <p className="flex min-h-[34px] max-w-2xl gap-2 text-[12px] leading-snug text-muted">
          <span className="mono-label mt-[3px] shrink-0 text-accent">
            {String(active + 1).padStart(2, "0")}
          </span>
          <span>{shot.caption}</span>
        </p>

        <div className="flex shrink-0 items-center gap-2">
          <button
            type="button"
            onClick={() => step(-1)}
            aria-label="Tangkapan layar sebelumnya"
            className="grid h-7 w-7 place-items-center border border-line text-ink transition-colors duration-200 hover:border-ink hover:bg-ink hover:text-paper"
          >
            <ChevronLeft className="h-3.5 w-3.5" strokeWidth={1.5} />
          </button>
          <span className="min-w-[54px] text-center font-mono text-[10px] uppercase tracking-[0.14em] text-muted">
            {counter}
          </span>
          <button
            type="button"
            onClick={() => step(1)}
            aria-label="Tangkapan layar berikutnya"
            className="grid h-7 w-7 place-items-center border border-line text-ink transition-colors duration-200 hover:border-ink hover:bg-ink hover:text-paper"
          >
            <ChevronRight className="h-3.5 w-3.5" strokeWidth={1.5} />
          </button>
        </div>
      </div>

      {/* Thumbnail rail */}
      <div
        aria-label={`Tangkapan layar ${study.title}`}
        className="mt-3 flex gap-2 overflow-x-auto pb-1"
      >
        {shots.map((item, i) => {
          const isActive = i === active;
          return (
            <button
              key={item.src}
              type="button"
              aria-pressed={isActive}
              onClick={() => setActive(i)}
              aria-label={`Tampilkan tangkapan ${i + 1}: ${item.alt}`}
              className={`group relative w-[86px] shrink-0 border transition-colors duration-200 sm:w-[104px] ${
                isActive
                  ? "border-accent"
                  : "border-line hover:border-line-strong"
              }`}
            >
              <span
                className="relative block w-full bg-paper"
                style={{ aspectRatio: FRAME }}
              >
                <Image
                  src={item.src}
                  alt=""
                  fill
                  sizes="104px"
                  className={`object-contain p-0.5 transition-opacity duration-200 ${
                    isActive
                      ? "opacity-100"
                      : "opacity-70 group-hover:opacity-100"
                  }`}
                />
              </span>
              <span
                className={`absolute left-0 top-0 px-1 py-0.5 font-mono text-[8px] tracking-[0.1em] ${
                  isActive
                    ? "bg-accent text-accent-ink"
                    : "bg-paper/90 text-muted"
                }`}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
            </button>
          );
        })}
      </div>

      <p className="mono-label mt-3 flex items-center gap-2">
        <Maximize2 className="h-2.5 w-2.5" strokeWidth={1.5} />
        Klik gambar untuk memperbesar
      </p>

      {/* Lightbox */}
      {zoomed && mounted
        ? createPortal(
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Pratinjau ${study.title}: ${shot.alt}`}
          onClick={() => setZoomed(false)}
          className="fixed inset-0 z-[70] flex items-center justify-center bg-black/85 p-3 backdrop-blur-sm sm:p-6 md:p-8"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative flex max-h-[94vh] w-full max-w-6xl animate-rise flex-col border border-line-strong bg-paper shadow-[10px_10px_0_0_rgba(0,0,0,0.45)]"
          >
            <div className="flex items-center justify-between gap-4 border-b border-line px-4 py-3">
              <div className="flex min-w-0 items-baseline gap-3">
                <span className="mono-label truncate text-ink">
                  <span className="text-accent">{counter}</span>{" "}
                  {study.title}
                </span>
              </div>

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
                  onClick={() => setZoomed(false)}
                  aria-label="Tutup pratinjau"
                  className="grid h-7 w-7 place-items-center border border-line text-ink transition-colors hover:border-accent hover:bg-accent hover:text-accent-ink"
                >
                  <X className="h-4 w-4" strokeWidth={1.5} />
                </button>
              </div>
            </div>

            <div className="relative flex min-h-[240px] flex-1 items-center justify-center overflow-hidden bg-[#0b0b0a] sm:min-h-[360px]">
              <Image
                key={shot.src}
                src={shot.src}
                alt={shot.alt}
                width={1800}
                height={1200}
                className="max-h-[66vh] w-auto max-w-full object-contain"
                sizes="(max-width: 1024px) 100vw, 1100px"
                priority
              />

              <button
                type="button"
                onClick={() => step(-1)}
                aria-label="Tangkapan layar sebelumnya"
                className="absolute left-3 top-1/2 grid h-9 w-9 -translate-y-1/2 place-items-center border border-white/15 bg-black/55 text-white transition-colors hover:border-accent hover:bg-accent hover:text-accent-ink"
              >
                <ChevronLeft className="h-4 w-4" strokeWidth={1.5} />
              </button>
              <button
                type="button"
                onClick={() => step(1)}
                aria-label="Tangkapan layar berikutnya"
                className="absolute right-3 top-1/2 grid h-9 w-9 -translate-y-1/2 place-items-center border border-white/15 bg-black/55 text-white transition-colors hover:border-accent hover:bg-accent hover:text-accent-ink"
              >
                <ChevronRight className="h-4 w-4" strokeWidth={1.5} />
              </button>
            </div>

            <div className="flex items-start gap-2 border-t border-line px-4 py-3">
              <span className="mono-label mt-[3px] shrink-0 text-accent">
                {String(active + 1).padStart(2, "0")}
              </span>
              <p className="text-[12.5px] leading-snug text-muted">
                {shot.caption}
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
