"use client";

import React from "react";
import { experienceData } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function ExperienceSection() {
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

        <div className="mt-12 border-t border-line lg:mt-16">
          {experienceData.map((exp, idx) => (
            <Reveal key={exp.id} delay={idx * 80}>
              <article className="group grid gap-6 border-b border-line py-8 transition-colors duration-300 lg:grid-cols-12 lg:gap-10 lg:py-10">
                {/* Period column */}
                <div className="lg:col-span-3">
                  <span className="mono-label flex items-center gap-2 text-ink">
                    {exp.current ? (
                      <span className="h-1.5 w-1.5 animate-blink bg-accent" />
                    ) : (
                      <span className="h-px w-3 bg-line-strong" />
                    )}
                    {exp.period}
                  </span>
                  <p className="mono-label mt-2">{exp.type}</p>
                  <p className="mono-label mt-1 normal-case tracking-[0.12em]">
                    {exp.location}
                  </p>
                </div>

                {/* Role + summary */}
                <div className="lg:col-span-5">
                  <span className="font-mono text-[10px] tracking-[0.12em] text-muted">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-1.5 text-xl font-medium leading-snug tracking-[-0.02em] sm:text-2xl">
                    {exp.role}
                  </h3>
                  <p className="mt-1.5 text-[13px] text-accent">{exp.org}</p>
                  <p className="mt-4 max-w-md text-[14px] leading-relaxed text-muted">
                    {exp.summary}
                  </p>

                  <ul className="mt-5 flex flex-wrap items-center gap-x-2.5 gap-y-1 font-mono text-[10px] uppercase tracking-[0.14em] text-muted">
                    {exp.tags.map((tag, i) => (
                      <li key={tag} className="flex items-center gap-2.5">
                        {i > 0 && (
                          <span aria-hidden="true" className="text-line-strong">
                            /
                          </span>
                        )}
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Detail points */}
                <div className="lg:col-span-4">
                  <span className="mono-label">Yang saya kerjakan</span>
                  <ul className="mt-3 space-y-3">
                    {exp.points.map((point) => (
                      <li
                        key={point}
                        className="flex gap-3 text-[13px] leading-relaxed text-muted"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-[9px] h-px w-3.5 shrink-0 bg-accent"
                        />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
