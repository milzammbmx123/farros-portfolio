"use client";

import React from "react";
import Image from "next/image";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { personalInfo } from "@/data/portfolio";

const SPECS = [
  ["Berbasis di", "Malang, ID"],
  ["Fokus", "3D · Data · Web"],
  ["Kampus", "UIN Malang"],
  ["Status", "Terbuka"],
];

export default function HeroSection() {
  return (
    <section id="hero" className="relative overflow-hidden pt-28 sm:pt-32">
      {/* Blueprint grid, fading out downwards */}
      <div
        aria-hidden="true"
        className="dot-grid pointer-events-none absolute inset-0 -z-10 opacity-70"
        style={{
          maskImage:
            "linear-gradient(to bottom, rgba(0,0,0,0.9), rgba(0,0,0,0) 78%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, rgba(0,0,0,0.9), rgba(0,0,0,0) 78%)",
        }}
      />

      <div className="container-x pb-14">
        {/* Eyebrow strip */}
        <div className="flex items-center justify-between gap-4 border-b border-line pb-3">
          <span className="mono-label">Portofolio — 2026</span>
          <span className="mono-label hidden sm:block">
            Lintang 7.98°S / Bujur 112.63°E
          </span>
          <span className="mono-label flex items-center gap-2 text-ink">
            <span className="h-1.5 w-1.5 animate-blink bg-accent" />
            Open for work
          </span>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-14 lg:mt-16 lg:grid-cols-12 lg:gap-10">
          {/* Type block */}
          <div className="lg:col-span-7">
            <h1 className="text-[clamp(3.2rem,11vw,7.6rem)] font-medium leading-[0.86] tracking-[-0.05em]">
              <span className="block animate-rise">Farros</span>
              <span
                className="block animate-rise"
                style={{ animationDelay: "90ms" }}
              >
                Asadudin
              </span>
              <span
                className="block animate-rise font-serif italic tracking-[-0.02em] text-accent"
                style={{ animationDelay: "180ms" }}
              >
                Milzam
              </span>
            </h1>

            <div
              className="mt-9 max-w-xl animate-rise"
              style={{ animationDelay: "260ms" }}
            >
              <p className="mono-label text-ink">
                Mahasiswa Teknik Informatika — 3D Artist
              </p>
              <p className="mt-4 text-[15px] leading-relaxed text-muted sm:text-base">
                {personalInfo.bio}
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-x-7 gap-y-3">
                <a href="#karya" className="btn-ink group">
                  Lihat Karya
                  <ArrowDown className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-y-0.5" />
                </a>
                <a
                  href={personalInfo.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-draw inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.14em]"
                >
                  GitHub
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Portrait + spec sheet */}
          <div className="lg:col-span-5">
            <figure className="relative mx-auto max-w-[360px] lg:ml-auto lg:mr-6">
              <div className="relative -rotate-[2.4deg] border border-ink bg-paper p-2 shadow-[8px_8px_0_0_var(--line-strong)] transition-transform duration-500 ease-out hover:rotate-0">
                <div className="relative aspect-[4/5] overflow-hidden bg-ink">
                  <Image
                    src={personalInfo.profileImage}
                    alt={`Foto ${personalInfo.name}`}
                    fill
                    priority
                    className="object-cover object-top grayscale-[12%] transition-all duration-700 hover:scale-[1.03] hover:grayscale-0"
                    sizes="(max-width: 1024px) 320px, 360px"
                  />
                </div>
                <figcaption className="flex items-baseline justify-between gap-2 pt-2 font-mono text-[9px] uppercase tracking-[0.18em] text-muted">
                  <span>Gbr. 01 — Foto Profil</span>
                  <span>Malang</span>
                </figcaption>
              </div>

              {/* Rotating seal */}
              <div className="absolute -bottom-7 -left-7 z-10 hidden h-24 w-24 rounded-full bg-paper sm:block">
                <svg
                  viewBox="0 0 100 100"
                  className="h-full w-full animate-seal"
                  aria-hidden="true"
                >
                  <defs>
                    <path
                      id="sealPath"
                      d="M50,50 m-37,0 a37,37 0 1,1 74,0 a37,37 0 1,1 -74,0"
                    />
                  </defs>
                  <circle
                    cx="50"
                    cy="50"
                    r="49"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="0.6"
                    className="text-line-strong"
                  />
                  <text
                    className="fill-ink font-mono"
                    fontSize="7.4"
                    letterSpacing="2.2"
                  >
                    <textPath href="#sealPath" startOffset="0">
                      OPEN FOR COLLABORATION • 2026 •
                    </textPath>
                  </text>
                </svg>
                <span className="absolute inset-0 grid place-items-center text-base text-accent">
                  ✳
                </span>
              </div>
            </figure>

            <dl className="mt-16 border-t border-line lg:mt-14">
              {SPECS.map(([label, value]) => (
                <div
                  key={label}
                  className="flex items-baseline justify-between gap-4 border-b border-line py-2.5"
                >
                  <dt className="mono-label">{label}</dt>
                  <dd className="font-mono text-[11px] tracking-tight text-ink">
                    {value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        {/* Bottom strip */}
        <div className="mt-14 flex flex-wrap items-center justify-between gap-4 border-t border-line pt-4">
          <a
            href="#tentang"
            className="group inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-muted transition-colors hover:text-ink"
          >
            Gulir ke bawah
            <ArrowDown className="h-3 w-3 transition-transform duration-300 group-hover:translate-y-0.5" />
          </a>
          <div className="flex items-center gap-5">
            <a
              href={personalInfo.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mono-label transition-colors hover:text-ink"
            >
              GitHub ↗
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="mono-label transition-colors hover:text-ink"
            >
              Email ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
