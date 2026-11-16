"use client";

import React from "react";
import { ArrowUp, ArrowUpRight } from "lucide-react";
import { personalInfo } from "@/data/portfolio";

const LINKS = [
  { label: "Tentang", href: "#tentang" },
  { label: "Karya", href: "#karya" },
  { label: "Proyek", href: "#proyek" },
  { label: "Sertifikat", href: "#sertifikat" },
  { label: "Kontak", href: "#kontak" },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-line">
      <div className="container-x grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2">
          <p className="text-lg font-medium leading-snug tracking-[-0.02em]">
            {personalInfo.name}
          </p>
          <p className="mono-label mt-1.5">
            3D Artist — Mahasiswa Teknik Informatika
          </p>
          <p className="mt-4 max-w-xs text-[13px] leading-relaxed text-muted">
            Visualisasi arsitektur &amp; interior, eksplorasi data, dan web
            modern. Dikerjakan sendiri, dari model sampai baris kode terakhir.
          </p>
        </div>

        <div>
          <span className="mono-label">Navigasi</span>
          <ul className="mt-3 space-y-1.5">
            {LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="link-draw inline-block text-[13px] text-muted transition-colors hover:text-ink"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <span className="mono-label">Saluran</span>
          <ul className="mt-3 space-y-1.5">
            <li>
              <a
                href={`mailto:${personalInfo.email}`}
                className="group inline-flex items-center gap-1.5 text-[13px] text-muted transition-colors hover:text-ink"
              >
                Email
                <ArrowUpRight
                  className="h-3 w-3 transition-colors group-hover:text-accent"
                  strokeWidth={1.5}
                />
              </a>
            </li>
            <li>
              <a
                href={personalInfo.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1.5 text-[13px] text-muted transition-colors hover:text-ink"
              >
                GitHub
                <ArrowUpRight
                  className="h-3 w-3 transition-colors group-hover:text-accent"
                  strokeWidth={1.5}
                />
              </a>
            </li>
            <li className="pt-1 font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
              Malang, ID
            </li>
          </ul>
        </div>
      </div>

      {/* Oversized wordmark */}
      <div className="container-x overflow-hidden pb-2">
        <p
          aria-hidden="true"
          className="select-none whitespace-nowrap text-[clamp(4rem,17vw,15rem)] font-medium leading-[0.72] tracking-[-0.06em] text-watermark"
        >
          FARROS
        </p>
      </div>

      <div className="border-t border-line">
        <div className="container-x flex flex-col gap-2 py-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
            © {new Date().getFullYear()} {personalInfo.name}
          </p>
          <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
            Dirancang &amp; dibangun di Malang
          </p>
          <button
            type="button"
            onClick={scrollToTop}
            className="group inline-flex w-fit items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.16em] text-muted transition-colors hover:text-ink"
          >
            Ke atas
            <ArrowUp className="h-3 w-3 transition-transform duration-300 group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
