"use client";

import React, { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { WorkItem } from "@/types";

interface LightboxModalProps {
  works: WorkItem[];
  currentIndex: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

const CATEGORY_LABEL: Record<WorkItem["category"], string> = {
  "3D Architecture": "Arsitektur",
  "3D Interior": "Interior",
  "3D Character": "Karakter",
};

export default function LightboxModal({
  works,
  currentIndex,
  onClose,
  onNavigate,
}: LightboxModalProps) {
  const isOpen =
    currentIndex !== null && currentIndex >= 0 && currentIndex < works.length;
  const currentWork = isOpen ? works[currentIndex] : null;
  const [showClay, setShowClay] = useState(false);

  useEffect(() => {
    setShowClay(false);
  }, [currentIndex]);

  const handleNext = useCallback(() => {
    if (currentIndex !== null) {
      onNavigate((currentIndex + 1) % works.length);
    }
  }, [currentIndex, works.length, onNavigate]);

  const handlePrev = useCallback(() => {
    if (currentIndex !== null) {
      onNavigate((currentIndex - 1 + works.length) % works.length);
    }
  }, [currentIndex, works.length, onNavigate]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose, handleNext, handlePrev]);

  if (!isOpen || !currentWork) return null;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/85 p-3 backdrop-blur-sm sm:p-6 md:p-8"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`Pratinjau karya: ${currentWork.title}`}
    >
      <div
        className="relative flex max-h-[93vh] w-full max-w-5xl animate-rise flex-col border border-line-strong bg-paper shadow-[10px_10px_0_0_rgba(0,0,0,0.45)]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between gap-4 border-b border-line px-4 py-3">
          <div className="flex items-baseline gap-3">
            <span className="mono-label text-ink">
              <span className="text-accent">
                ({String(currentIndex + 1).padStart(2, "0")})
              </span>{" "}
              {CATEGORY_LABEL[currentWork.category]}
            </span>
            <span className="mono-label hidden sm:block">
              {String(currentIndex + 1).padStart(2, "0")} /{" "}
              {String(works.length).padStart(2, "0")}
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
              onClick={onClose}
              aria-label="Tutup pratinjau"
              className="grid h-7 w-7 place-items-center border border-line text-ink transition-colors hover:border-accent hover:bg-accent hover:text-accent-ink"
            >
              <X className="h-4 w-4" strokeWidth={1.5} />
            </button>
          </div>
        </div>

        {/* Image */}
        <div className="relative flex min-h-[280px] flex-1 items-center justify-center overflow-hidden bg-[#0b0b0a] sm:min-h-[400px]">
          <Image
            key={showClay ? "clay" : "render"}
            src={
              showClay && currentWork.clayImage
                ? currentWork.clayImage
                : currentWork.image
            }
            alt={currentWork.title}
            width={1600}
            height={1000}
            className="max-h-[58vh] w-auto object-contain"
            sizes="(max-width: 1024px) 100vw, 1024px"
            priority
          />

          {currentWork.clayImage ? (
            <div className="absolute left-3 top-3 flex border border-white/20 bg-black/60 font-mono text-[9px] uppercase tracking-[0.14em] text-white">
              <button
                type="button"
                onClick={() => setShowClay(false)}
                aria-pressed={!showClay}
                className={`px-2.5 py-1.5 transition-colors ${
                  showClay ? "hover:bg-white/10" : "bg-accent text-accent-ink"
                }`}
              >
                Render
              </button>
              <button
                type="button"
                onClick={() => setShowClay(true)}
                aria-pressed={showClay}
                className={`border-l border-white/20 px-2.5 py-1.5 transition-colors ${
                  showClay ? "bg-accent text-accent-ink" : "hover:bg-white/10"
                }`}
              >
                Clay / Wire
              </button>
            </div>
          ) : null}

          <button
            onClick={handlePrev}
            aria-label="Karya sebelumnya"
            className="absolute left-3 top-1/2 grid h-9 w-9 -translate-y-1/2 place-items-center border border-white/15 bg-black/55 text-white transition-colors hover:border-accent hover:bg-accent hover:text-accent-ink"
          >
            <ChevronLeft className="h-4 w-4" strokeWidth={1.5} />
          </button>
          <button
            onClick={handleNext}
            aria-label="Karya selanjutnya"
            className="absolute right-3 top-1/2 grid h-9 w-9 -translate-y-1/2 place-items-center border border-white/15 bg-black/55 text-white transition-colors hover:border-accent hover:bg-accent hover:text-accent-ink"
          >
            <ChevronRight className="h-4 w-4" strokeWidth={1.5} />
          </button>
        </div>

        {/* Caption */}
        <div className="grid gap-4 overflow-y-auto border-t border-line px-4 py-4 sm:px-6 md:grid-cols-[1.5fr_1fr] md:gap-10">
          <div>
            <h3 className="text-lg font-medium leading-snug tracking-[-0.015em] sm:text-xl">
              {currentWork.title}
            </h3>
            <p className="mt-2 text-[13px] leading-relaxed text-muted">
              {currentWork.description}
            </p>

            {currentWork.stages ? (
              <div className="mt-4 border-t border-line pt-3">
                <span className="mono-label">Tahapan pengerjaan</span>
                <ol className="mt-2 grid gap-x-5 gap-y-1.5 sm:grid-cols-2">
                  {currentWork.stages.map((stage, stageIdx) => (
                    <li
                      key={stage}
                      className="flex gap-2 text-[11px] leading-snug text-muted"
                    >
                      <span className="font-mono text-[9px] leading-[1.6] text-accent">
                        {String(stageIdx + 1).padStart(2, "0")}
                      </span>
                      <span>{stage}</span>
                    </li>
                  ))}
                </ol>
              </div>
            ) : null}
          </div>

          <dl className="space-y-2 self-start border-t border-line pt-3 md:border-l md:border-t-0 md:pl-6 md:pt-0">
            <div className="flex items-baseline justify-between gap-4">
              <dt className="mono-label">Tahun</dt>
              <dd className="font-mono text-[11px]">{currentWork.year}</dd>
            </div>
            <div className="flex items-baseline justify-between gap-4">
              <dt className="mono-label">Kategori</dt>
              <dd className="text-right text-[12px]">
                {CATEGORY_LABEL[currentWork.category]}
              </dd>
            </div>
            <div className="flex items-baseline justify-between gap-4">
              <dt className="mono-label">Perangkat</dt>
              <dd className="text-right text-[12px]">
                {currentWork.tools.join(", ")}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}
