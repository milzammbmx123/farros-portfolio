"use client";

import React from "react";
import Image from "next/image";
import { caseStudiesData } from "@/data/portfolio";
import { CaseStudyItem } from "@/types";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

function WireframeWeb() {
  return (
    <div className="absolute inset-0 p-4 sm:p-7">
      <div className="flex h-full flex-col border border-line-strong bg-paper">
        {/* Browser chrome */}
        <div className="flex items-center gap-1.5 border-b border-line px-2.5 py-2">
          <span className="h-1.5 w-1.5 rounded-full bg-line-strong" />
          <span className="h-1.5 w-1.5 rounded-full bg-line-strong" />
          <span className="h-1.5 w-1.5 rounded-full bg-line-strong" />
          <span className="ml-2 h-[9px] w-24 border border-line bg-line/50" />
          <span className="ml-auto font-mono text-[8px] uppercase tracking-[0.16em] text-muted">
            halaman acara
          </span>
        </div>

        {/* Site nav */}
        <div className="flex items-center justify-between border-b border-line px-3 py-2.5">
          <span className="h-2 w-12 bg-ink/75" />
          <span className="flex items-center gap-2.5">
            <span className="h-1 w-7 bg-line-strong" />
            <span className="h-1 w-7 bg-line-strong" />
            <span className="h-1 w-7 bg-line-strong" />
            <span className="h-3.5 w-12 bg-accent" />
          </span>
        </div>

        {/* Hero */}
        <div className="grid flex-1 grid-cols-5 gap-3 p-3">
          <div className="col-span-3 flex flex-col justify-center gap-2 border border-line p-3">
            <span className="h-1 w-10 bg-accent" />
            <span className="h-2 w-11/12 bg-ink/70" />
            <span className="h-2 w-3/5 bg-ink/45" />
            <span className="mt-1 h-1 w-full bg-line-strong" />
            <span className="h-1 w-4/5 bg-line-strong" />
            <span className="mt-1.5 flex gap-2">
              <span className="h-4 w-14 bg-ink/80" />
              <span className="h-4 w-10 border border-line-strong" />
            </span>
          </div>
          <div className="col-span-2 flex flex-col gap-2">
            <div className="flex-1 border border-dashed border-line-strong bg-line/25" />
            <div className="h-1 w-2/3 bg-line-strong" />
            <div className="h-1 w-1/2 bg-line-strong" />
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-3 gap-3 px-3 pb-3">
          {[0, 1, 2].map((i) => (
            <div key={i} className="flex flex-col gap-1.5 border border-line p-2">
              <span className="h-5 bg-line" />
              <span className="h-1 w-4/5 bg-line-strong" />
              <span className="h-1 w-1/2 bg-line-strong" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function WireframeGame() {
  return (
    <div className="absolute inset-0 p-4 sm:p-7">
      <div className="flex h-full flex-col gap-2 border border-line-strong bg-paper p-2.5">
        {/* Top HUD */}
        <div className="flex items-center justify-between border border-line px-2 py-1.5">
          <span className="flex items-center gap-1.5">
            <span className="h-3 w-3 bg-accent" />
            <span className="h-1.5 w-10 bg-ink/70" />
          </span>
          <span className="flex items-center gap-1.5">
            <span className="h-2 w-8 border border-line-strong" />
            <span className="h-2 w-8 border border-line-strong" />
            <span className="h-2 w-8 border border-line-strong" />
          </span>
          <span className="grid h-3.5 w-3.5 place-items-center border border-line-strong">
            <span className="h-px w-1.5 bg-ink/60" />
          </span>
        </div>

        <div className="grid flex-1 grid-cols-6 gap-2">
          {/* Minimap */}
          <div className="col-span-2 flex flex-col border border-line p-1.5">
            <div className="dot-grid flex-1 border border-line" />
            <span className="mt-1 font-mono text-[7px] uppercase tracking-[0.16em] text-muted">
              peta
            </span>
          </div>

          {/* Play field */}
          <div className="relative col-span-2 border border-dashed border-line-strong bg-line/20">
            <span className="absolute inset-0 grid place-items-center font-mono text-[8px] uppercase tracking-[0.16em] text-muted">
              area main
            </span>
            <span className="absolute left-2 top-2 h-3 w-3 border border-accent" />
            <span className="absolute bottom-2 right-2 h-2 w-2 bg-accent/70" />
          </div>

          {/* Performance panel */}
          <div className="col-span-2 flex flex-col border border-line p-1.5">
            <span className="font-mono text-[7px] uppercase tracking-[0.16em] text-muted">
              performa
            </span>
            <div className="relative mt-1 flex-1 border border-line">
              <div
                aria-hidden="true"
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, var(--line) 1px, transparent 1px), linear-gradient(to bottom, var(--line) 1px, transparent 1px)",
                  backgroundSize: "100% 25%, 25% 100%",
                }}
              />
              <svg
                viewBox="0 0 100 60"
                preserveAspectRatio="none"
                className="absolute inset-0 h-full w-full"
                aria-hidden="true"
              >
                <path
                  d="M2 46 L18 40 L32 43 L48 30 L62 33 L78 20 L96 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  className="text-accent"
                  vectorEffect="non-scaling-stroke"
                />
                <circle cx="96" cy="16" r="1.8" className="fill-accent" />
              </svg>
            </div>
            <span className="mt-1 font-mono text-[7px] uppercase tracking-[0.16em] text-muted">
              fps / frame
            </span>
          </div>
        </div>

        {/* Bottom action bar */}
        <div className="flex items-center gap-1.5 border border-line px-2 py-1.5">
          {[0, 1, 2, 3].map((i) => (
            <span
              key={i}
              className={`h-4 flex-1 border ${
                i === 0 ? "border-accent bg-accent/15" : "border-line"
              }`}
            />
          ))}
          <span className="h-4 w-16 border border-line-strong bg-line/40" />
        </div>
      </div>
    </div>
  );
}

function CaseVisual({ study }: { study: CaseStudyItem }) {
  if (study.image) {
    return (
      <figure>
        <div
          className="relative w-full overflow-hidden border border-line bg-paper"
          style={{ aspectRatio: study.imageRatio ?? "4 / 3" }}
        >
          <Image
            src={study.image}
            alt={study.imageAlt ?? `Tampilan ${study.title}`}
            fill
            className="object-cover object-top"
            sizes="(max-width: 1024px) 100vw, 720px"
          />
        </div>
        {study.imageNote && (
          <figcaption className="mono-label mt-2.5">
            {study.imageNote}
          </figcaption>
        )}
      </figure>
    );
  }

  return (
    <figure>
      <div className="relative aspect-[4/3] overflow-hidden border border-line bg-paper">
        {study.diagram === "web" ? <WireframeWeb /> : <WireframeGame />}
      </div>
      <figcaption className="mono-label mt-2.5">
        {study.imageNote ?? "Diagram wireframe skematik — bukan tangkapan layar"}
      </figcaption>
    </figure>
  );
}

function ScreenStrip({ study }: { study: CaseStudyItem }) {
  if (!study.screens?.length) return null;

  const columns =
    study.screens.length >= 3
      ? "sm:grid-cols-2 lg:grid-cols-4"
      : "sm:grid-cols-2 lg:grid-cols-2";

  return (
    <ul
      className={`mt-8 grid grid-cols-1 gap-x-4 gap-y-6 lg:mt-9 ${columns}`}
    >
      {study.screens.map((screen, i) => (
        <li key={screen.src}>
          <figure>
            <div
              className="relative w-full overflow-hidden border border-line bg-paper"
              style={{ aspectRatio: study.screensAspect ?? "4 / 3" }}
            >
              <Image
                src={screen.src}
                alt={screen.alt}
                fill
                className="object-cover object-top"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 620px"
              />
            </div>
            <figcaption className="mt-2 flex gap-2 text-[11.5px] leading-snug text-muted">
              <span className="mono-label mt-[3px] shrink-0 text-accent">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span>{screen.caption}</span>
            </figcaption>
          </figure>
        </li>
      ))}
    </ul>
  );
}

export default function CaseStudiesSection() {
  return (
    <section id="studi-kasus" className="section-block">
      <div className="container-x">
        <Reveal>
          <SectionHeading
            index="03"
            label="Studi Kasus"
            note="2 proyek UI/UX"
            title={
              <>
                Dua proyek yang menuntut lebih dari sekadar{" "}
                <em className="font-serif italic tracking-[-0.01em] text-accent">
                  render
                </em>
                .
              </>
            }
          />
        </Reveal>

        <div className="mt-12 space-y-14 lg:mt-16 lg:space-y-20">
          {caseStudiesData.map((study, idx) => (
            <Reveal key={study.id} delay={idx * 60}>
              <article className="grid gap-8 border-t border-line-strong pt-8 lg:grid-cols-12 lg:gap-12">
                <div
                  className={`lg:col-span-7 ${
                    idx % 2 === 1 ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <CaseVisual study={study} />
                </div>

                <div
                  className={`lg:col-span-5 ${
                    idx % 2 === 1 ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <div className="flex items-baseline justify-between gap-4">
                    <span className="mono-label text-accent">
                      ({String(idx + 1).padStart(2, "0")})
                    </span>
                    <span className="mono-label">{study.period}</span>
                  </div>

                  <h3 className="mt-3 text-[clamp(1.9rem,4vw,2.8rem)] font-medium leading-[0.98] tracking-[-0.035em]">
                    {study.title}
                  </h3>
                  <p className="mt-2 font-serif text-lg italic leading-snug text-muted">
                    {study.tagline}
                  </p>

                  <p className="mt-5 text-[14px] leading-relaxed text-muted">
                    {study.summary}
                  </p>

                  <dl className="mt-6 grid grid-cols-2 gap-x-6 gap-y-4 border-y border-line py-4">
                    <div>
                      <dt className="mono-label">Peran</dt>
                      <dd className="mt-1 text-[13px] leading-snug">
                        {study.role}
                      </dd>
                    </div>
                    <div>
                      <dt className="mono-label">Konteks</dt>
                      <dd className="mt-1 text-[13px] leading-snug">
                        {study.status}
                      </dd>
                    </div>
                  </dl>

                  <ul className="mt-5 space-y-3.5">
                    {study.contributions.map((item) => (
                      <li
                        key={item.label}
                        className="grid grid-cols-[auto_1fr] gap-3"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-[9px] h-px w-3.5 shrink-0 bg-accent"
                        />
                        <span className="text-[13px] leading-relaxed">
                          <span className="font-medium">{item.label}.</span>{" "}
                          <span className="text-muted">{item.text}</span>
                        </span>
                      </li>
                    ))}
                  </ul>

                  <ul className="mt-5 flex flex-wrap items-center gap-x-2.5 gap-y-1 font-mono text-[10px] uppercase tracking-[0.14em] text-muted">
                    {study.tools.map((tool, i) => (
                      <li key={tool} className="flex items-center gap-2.5">
                        {i > 0 && (
                          <span aria-hidden="true" className="text-line-strong">
                            /
                          </span>
                        )}
                        {tool}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="lg:col-span-12 lg:order-3">
                  <ScreenStrip study={study} />
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
