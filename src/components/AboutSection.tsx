"use client";

import React from "react";
import { personalInfo, skillsList } from "@/data/portfolio";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

const PILLARS = [
  {
    no: "01",
    title: "3D Visualization",
    text: "Visualisasi arsitektur dan interior, kebanyakan pada suasana malam dengan pencahayaan Cycles. Termasuk hard surface modeling dan rekonstruksi ruang.",
    tags: ["Blender", "Cycles", "ArchViz"],
  },
  {
    no: "02",
    title: "Data & Machine Learning",
    text: "Dari membersihkan data sampai membangun model klasifikasi sederhana. Perangkat utamanya Python, Pandas, dan Scikit-learn.",
    tags: ["Python", "Pandas", "Scikit-learn"],
  },
  {
    no: "03",
    title: "Web Engineering",
    text: "Antarmuka yang rapi, ringan, dan enak dipakai — dibangun dengan Next.js, TypeScript, dan Tailwind. Termasuk situs yang sedang Anda baca.",
    tags: ["Next.js", "TypeScript", "Tailwind"],
  },
];

export default function AboutSection() {
  return (
    <section id="tentang" className="section-block">
      <div className="container-x">
        <Reveal>
          <SectionHeading
            index="01"
            label="Tentang"
            note="7 karya · 10 sertifikat · 6 repositori"
            title={
              <>
                Sebagian hari saya render, sebagian lagi saya{" "}
                <em className="font-serif italic tracking-[-0.01em] text-accent">
                  ngoding
                </em>
                .
              </>
            }
          />
        </Reveal>

        <div className="mt-12 grid gap-12 lg:mt-16 lg:grid-cols-12 lg:gap-14">
          {/* Narrative */}
          <Reveal className="lg:col-span-5" delay={80}>
            <div className="border-t border-line pt-6 lg:sticky lg:top-24">
              <span className="mono-label">Profil</span>
              <div className="mt-5 space-y-4 text-[15px] leading-relaxed text-muted">
                {personalInfo.detailedBio.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>

              <div className="mt-7 flex items-end gap-3">
                <svg
                  viewBox="0 0 120 30"
                  className="h-7 w-24 text-accent"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M2 22c10-9 17-13 22-9s-4 13 2 12 12-11 19-12 3 12 9 10 14-15 22-18 9 11 18 5"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                  />
                </svg>
                <span className="font-serif text-xl italic leading-none">
                  Farros
                </span>
              </div>

              <dl className="mt-8 space-y-2.5 border-t border-line pt-5">
                <div className="flex items-baseline justify-between gap-4">
                  <dt className="mono-label">Kampus</dt>
                  <dd className="text-right text-[13px]">
                    {personalInfo.institution}
                  </dd>
                </div>
                <div className="flex items-baseline justify-between gap-4">
                  <dt className="mono-label">Lokasi</dt>
                  <dd className="text-right text-[13px]">
                    {personalInfo.location}
                  </dd>
                </div>
              </dl>
            </div>
          </Reveal>

          {/* Pillars + toolkit */}
          <div className="lg:col-span-7">
            <Reveal delay={120}>
              <span className="mono-label">Bidang</span>
              <div className="mt-5 border-t border-line">
                {PILLARS.map((pillar) => (
                  <div
                    key={pillar.no}
                    className="group grid grid-cols-[auto_1fr] gap-5 border-b border-line py-6 sm:gap-8"
                  >
                    <span className="font-mono text-[10px] tracking-[0.12em] text-muted transition-colors duration-300 group-hover:text-accent">
                      {pillar.no}
                    </span>
                    <div className="transition-transform duration-300 ease-out group-hover:translate-x-1">
                      <h3 className="flex items-baseline gap-2 text-lg font-medium tracking-[-0.015em]">
                        {pillar.title}
                        <ArrowUpRight
                          className="h-3.5 w-3.5 -translate-x-1 translate-y-1 text-accent opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:opacity-100"
                          strokeWidth={1.5}
                        />
                      </h3>
                      <p className="mt-2 max-w-lg text-[14px] leading-relaxed text-muted">
                        {pillar.text}
                      </p>
                      <ul className="mt-3 flex flex-wrap items-center gap-x-2.5 gap-y-1 font-mono text-[10px] uppercase tracking-[0.14em] text-muted">
                        {pillar.tags.map((tag, i) => (
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
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={180} className="mt-12">
              <div className="flex items-baseline justify-between">
                <span className="mono-label">Toolkit</span>
                <span className="mono-label">{skillsList.length} entri</span>
              </div>

              <div className="mt-5 grid gap-x-10 sm:grid-cols-2">
                {skillsList.map((skill, idx) => (
                  <div
                    key={skill.name}
                    className="group flex items-baseline gap-3 border-b border-line py-2.5"
                  >
                    <span className="w-4 font-mono text-[9px] text-muted">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[13px] transition-colors group-hover:text-accent">
                      {skill.name}
                    </span>
                    <span
                      aria-hidden="true"
                      className="mt-auto flex-1 translate-y-[-3px] border-b border-dotted border-line"
                    />
                    <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-muted">
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
