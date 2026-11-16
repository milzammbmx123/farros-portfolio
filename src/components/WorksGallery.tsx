"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { worksData } from "@/data/portfolio";
import { WorkItem } from "@/types";
import LightboxModal from "./LightboxModal";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

type CategoryKey = "Semua" | WorkItem["category"];

const FILTERS: { key: CategoryKey; label: string }[] = [
  { key: "Semua", label: "Semua" },
  { key: "3D Architecture", label: "Arsitektur" },
  { key: "3D Interior", label: "Interior" },
  { key: "3D Character", label: "Karakter" },
];

function WorkCard({
  work,
  index,
  onOpen,
  className = "",
}: {
  work: WorkItem;
  index: number;
  onOpen: () => void;
  className?: string;
}) {
  const badgeRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const badge = badgeRef.current;
    if (!badge) return;
    const rect = e.currentTarget.getBoundingClientRect();
    badge.style.transform = `translate(${e.clientX - rect.left}px, ${
      e.clientY - rect.top
    }px) translate(-50%, -50%)`;
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
    const badge = badgeRef.current;
    if (!badge) return;
    const rect = e.currentTarget.getBoundingClientRect();
    badge.style.transform = `translate(${rect.width / 2}px, ${
      rect.height / 2
    }px) translate(-50%, -50%)`;
  };

  return (
    <button
      type="button"
      onClick={onOpen}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      aria-label={`Buka karya ${work.title}`}
      className={`group block w-full cursor-pointer text-left ${className}`}
    >
      <div className="relative overflow-hidden border border-line bg-ink">
        <div className="relative aspect-[4/3] w-full">
          <Image
            src={work.image}
            alt={work.title}
            fill
            className={`${
              work.imageFit === "contain" ? "object-contain" : "object-cover"
            } transition-transform duration-[900ms] ease-out group-hover:scale-[1.04]`}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>

        <span className="absolute left-3 top-3 bg-paper px-2 py-1 font-mono text-[10px] tracking-[0.12em] text-ink">
          {String(index + 1).padStart(2, "0")}
        </span>

        <div
          ref={badgeRef}
          aria-hidden="true"
          className="pointer-events-none absolute left-0 top-0 hidden h-[76px] w-[76px] place-items-center rounded-full bg-accent text-accent-ink opacity-0 transition-opacity duration-200 group-hover:opacity-100 md:grid"
        >
          <span className="font-mono text-[9px] uppercase tracking-[0.14em]">
            Buka ↗
          </span>
        </div>
      </div>

      <div className="mt-3.5 flex items-start justify-between gap-4">
        <div>
          <h3 className="text-[15px] font-medium leading-snug tracking-[-0.01em] sm:text-base">
            {work.title}
          </h3>
          <p className="mono-label mt-1.5">
            {work.tools[0]} · {work.year}
          </p>
        </div>
        <ArrowUpRight
          className="mt-0.5 h-4 w-4 shrink-0 text-muted transition-all duration-300 group-hover:-translate-y-0.5 group-hover:text-accent"
          strokeWidth={1.5}
        />
      </div>
    </button>
  );
}

export default function WorksGallery() {
  const [selected, setSelected] = useState<CategoryKey>("Semua");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const filtered =
    selected === "Semua"
      ? worksData
      : worksData.filter((work) => work.category === selected);

  const countFor = (key: CategoryKey) =>
    key === "Semua"
      ? worksData.length
      : worksData.filter((work) => work.category === key).length;

  return (
    <section id="karya" className="section-block">
      <div className="container-x">
        <Reveal>
          <SectionHeading
            index="02"
            label="Karya"
            note="07 karya terpilih"
            title={
              <>
                Dirender dari nol — model, material, sampai{" "}
                <em className="font-serif italic tracking-[-0.01em] text-accent">
                  cahaya
                </em>
                .
              </>
            }
          />
        </Reveal>

        {/* Filters */}
        <Reveal delay={60}>
          <div className="mt-10 flex flex-wrap items-baseline gap-x-7 gap-y-3 border-b border-line pb-3">
            {FILTERS.map((filter) => (
              <button
                key={filter.key}
                type="button"
                onClick={() => setSelected(filter.key)}
                aria-pressed={selected === filter.key}
                className={`group flex items-baseline gap-1.5 font-mono text-[10px] uppercase tracking-[0.16em] transition-colors duration-200 ${
                  selected === filter.key
                    ? "text-ink"
                    : "text-muted hover:text-ink"
                }`}
              >
                {filter.label}
                <span
                  className={`text-[9px] ${
                    selected === filter.key ? "text-accent" : "text-muted"
                  }`}
                >
                  {countFor(filter.key)}
                </span>
              </button>
            ))}
            <span className="mono-label ml-auto hidden sm:block">
              Klik untuk memperbesar
            </span>
          </div>
        </Reveal>

        {/* Grid */}
        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-12 lg:grid-cols-3 lg:gap-x-8">
          {filtered.map((work, idx) => {
            const originalIndex = worksData.findIndex((w) => w.id === work.id);
            return (
              <Reveal key={work.id} delay={(idx % 3) * 70}>
                <WorkCard
                  work={work}
                  index={originalIndex}
                  onOpen={() => setActiveIndex(originalIndex)}
                />
              </Reveal>
            );
          })}
        </div>
      </div>

      <LightboxModal
        works={worksData}
        currentIndex={activeIndex}
        onClose={() => setActiveIndex(null)}
        onNavigate={setActiveIndex}
      />
    </section>
  );
}
