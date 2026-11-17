"use client";

import React, { useState } from "react";
import { Plus } from "lucide-react";
import { experienceData } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function ExperienceSection() {
  const [openIds, setOpenIds] = useState<string[]>(() =>
    experienceData.length ? [experienceData[0].id] : []
  );

  const allOpen = openIds.length === experienceData.length;

  const toggle = (id: string) =>
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );

  return (
    <section id="pengalaman" className="section-block">
      <div className="container-x">
        <Reveal>
          <SectionHeading
            index="02"
            label="Pengalaman"
            note="2 posisi · 2025 — sekarang"
            title={
              <>
                Selain render, saya juga mengajar, merancang, dan{" "}
                <em className="font-serif italic tracking-[-0.01em] text-accent">
                  membetulkan
                </em>
                .
              </>
            }
          />
        </Reveal>

        <Reveal>
          <div className="mt-12 flex items-baseline justify-between gap-4 border-t border-line pt-3 lg:mt-16">
            <span className="mono-label">Rincian peran</span>
            <button
              type="button"
              onClick={() =>
                setOpenIds(allOpen ? [] : experienceData.map((exp) => exp.id))
              }
              className="link-draw font-mono text-[10px] uppercase tracking-[0.16em] text-muted transition-colors hover:text-ink"
            >
              {allOpen ? "Tutup semua" : "Buka semua"}
            </button>
          </div>
        </Reveal>

        <div>
          {experienceData.map((exp, idx) => {
            const isOpen = openIds.includes(exp.id);
            const panelId = `pengalaman-${exp.id}`;

            return (
              <Reveal key={exp.id} delay={idx * 80}>
                <article
                  className={`group relative border-b border-line transition-[background-color] duration-300 before:absolute before:inset-y-0 before:-left-3 before:w-[2px] before:bg-accent before:transition-opacity before:duration-300 hover:bg-[var(--tint)] ${
                    isOpen
                      ? "bg-[var(--tint)] before:opacity-100"
                      : "before:opacity-0"
                  }`}
                >
                  <h3>
                    <button
                      type="button"
                      onClick={() => toggle(exp.id)}
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      className="relative grid w-full cursor-pointer gap-5 py-7 text-left lg:grid-cols-12 lg:gap-10 lg:py-9"
                    >
                      {/* Period */}
                      <span className="lg:col-span-3">
                        <span className="mono-label flex items-center gap-2 text-ink">
                          {exp.current ? (
                            <span className="h-1.5 w-1.5 animate-blink bg-accent" />
                          ) : (
                            <span className="h-px w-3 bg-line-strong" />
                          )}
                          {exp.period}
                        </span>
                        <span className="mono-label mt-2 block">{exp.type}</span>
                        <span className="mono-label mt-1 block normal-case tracking-[0.12em]">
                          {exp.location}
                        </span>
                      </span>

                      {/* Role + summary */}
                      <span className="pr-12 lg:col-span-7 lg:pr-0">
                        <span className="flex items-baseline gap-2.5">
                          <span className="font-mono text-[10px] tracking-[0.12em] text-muted transition-colors duration-300 group-hover:text-accent">
                            {String(idx + 1).padStart(2, "0")}
                          </span>
                          <span className="text-xl font-medium leading-snug tracking-[-0.02em] sm:text-2xl">
                            {exp.role}
                          </span>
                        </span>
                        <span className="mt-1.5 block text-[13px] text-accent">
                          {exp.org}
                        </span>
                        <span className="mt-3 block max-w-xl text-[14px] leading-relaxed text-muted">
                          {exp.summary}
                        </span>
                      </span>

                      {/* Toggle */}
                      <span className="absolute right-0 top-7 flex items-center gap-3 lg:static lg:col-span-2 lg:flex-row lg:items-center lg:justify-end lg:self-start">
                        <span className="mono-label hidden transition-colors duration-300 group-hover:text-ink lg:block">
                          {isOpen ? "Tutup" : "Rincian"}
                        </span>
                        <span
                          aria-hidden="true"
                          className={`grid h-7 w-7 place-items-center border transition-colors duration-300 ${
                            isOpen
                              ? "border-accent bg-accent text-accent-ink"
                              : "border-line-strong text-ink group-hover:border-ink group-hover:bg-ink group-hover:text-paper"
                          }`}
                        >
                          <Plus
                            className={`h-3.5 w-3.5 transition-transform duration-300 ${
                              isOpen ? "rotate-45" : ""
                            }`}
                            strokeWidth={1.5}
                          />
                        </span>
                      </span>
                    </button>
                  </h3>

                  {/* Expandable detail */}
                  <div
                    id={panelId}
                    className={`grid transition-[grid-template-rows] duration-500 ease-out ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div
                        className={`grid gap-5 border-t border-line pt-5 transition-opacity duration-500 lg:grid-cols-12 lg:gap-10 pb-8 lg:pb-9 ${
                          isOpen ? "opacity-100" : "opacity-0"
                        }`}
                        aria-hidden={!isOpen}
                      >
                        <div className="lg:col-span-3">
                          <span className="mono-label">Yang saya kerjakan</span>
                          <span className="mt-2 block font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
                            {String(exp.points.length).padStart(2, "0")} poin
                          </span>
                        </div>

                        <ul className="space-y-3 lg:col-span-6">
                          {exp.points.map((point, pointIdx) => (
                            <li
                              key={point}
                              className="flex gap-3 text-[13px] leading-relaxed text-muted"
                            >
                              <span
                                aria-hidden="true"
                                className="mt-[7px] font-mono text-[9px] leading-none text-accent"
                              >
                                {String(pointIdx + 1).padStart(2, "0")}
                              </span>
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>

                        <div className="lg:col-span-3">
                          <span className="mono-label">Perangkat & metode</span>
                          <ul className="mt-2 flex flex-wrap gap-x-2 gap-y-1 font-mono text-[10px] uppercase tracking-[0.12em] text-muted">
                            {exp.tags.map((tag, i) => (
                              <li
                                key={tag}
                                className="flex items-center gap-2 transition-colors duration-300 hover:text-ink"
                              >
                                {i > 0 && (
                                  <span
                                    aria-hidden="true"
                                    className="text-line-strong"
                                  >
                                    /
                                  </span>
                                )}
                                {tag}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
