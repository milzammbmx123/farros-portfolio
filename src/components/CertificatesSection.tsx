"use client";

import React, { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { certificatesData } from "@/data/portfolio";
import { CertificateItem } from "@/types";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

type CategoryKey = "Semua" | CertificateItem["category"];

const FILTERS: { key: CategoryKey; label: string }[] = [
  { key: "Semua", label: "Semua" },
  { key: "Data Science & AI", label: "Data & AI" },
  { key: "Academic & Language", label: "Akademik" },
  { key: "Achievement & Community", label: "Komunitas" },
];

const SHORT_CATEGORY: Record<CertificateItem["category"], string> = {
  "Data Science & AI": "Data & AI",
  "Academic & Language": "Akademik",
  "Achievement & Community": "Komunitas",
};

export default function CertificatesSection() {
  const [selected, setSelected] = useState<CategoryKey>("Semua");

  const filtered =
    selected === "Semua"
      ? certificatesData
      : certificatesData.filter((cert) => cert.category === selected);

  const countFor = (key: CategoryKey) =>
    key === "Semua"
      ? certificatesData.length
      : certificatesData.filter((cert) => cert.category === key).length;

  return (
    <section id="sertifikat" className="section-block">
      <div className="container-x">
        <Reveal>
          <SectionHeading
            index="04"
            label="Sertifikat"
            note={`${certificatesData.length} dokumen`}
            title={
              <>
                Yang sudah saya pelajari, lengkap dengan{" "}
                <em className="font-serif italic tracking-[-0.01em] text-accent">
                  buktinya
                </em>
                .
              </>
            }
          />
        </Reveal>

        <Reveal delay={60}>
          <div className="mt-10 flex flex-wrap items-baseline gap-x-7 gap-y-3 border-b border-line pb-3">
            {FILTERS.map((filter) => (
              <button
                key={filter.key}
                type="button"
                onClick={() => setSelected(filter.key)}
                aria-pressed={selected === filter.key}
                className={`flex items-baseline gap-1.5 font-mono text-[10px] uppercase tracking-[0.16em] transition-colors duration-200 ${
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
              Dokumen terbuka di tab baru
            </span>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="hidden border-b border-line py-2.5 md:grid md:grid-cols-[36px_1fr_150px_128px_64px] md:gap-4">
            <span className="mono-label">No</span>
            <span className="mono-label">Sertifikat</span>
            <span className="mono-label">Kategori</span>
            <span className="mono-label">Tanggal</span>
            <span className="mono-label text-right">Berkas</span>
          </div>

          {filtered.length === 0 ? (
            <p className="py-12 text-center text-sm text-muted">
              Belum ada dokumen di kategori ini.
            </p>
          ) : (
            <div>
              {filtered.map((cert, idx) => {
                const fileType = cert.fileUrl.toLowerCase().endsWith(".pdf")
                  ? "PDF"
                  : "IMG";

                return (
                  <a
                    key={cert.id}
                    href={cert.fileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group -mx-2 grid grid-cols-[28px_1fr_20px] items-baseline gap-4 border-b border-line px-2 py-4 transition-colors duration-200 hover:bg-ink hover:text-paper md:grid-cols-[36px_1fr_150px_128px_64px] md:items-center"
                  >
                    <span className="font-mono text-[10px] text-muted transition-colors duration-200 group-hover:text-accent">
                      {String(idx + 1).padStart(2, "0")}
                    </span>

                    <span className="min-w-0">
                      <span className="block truncate text-[14px] font-medium leading-snug tracking-[-0.01em] sm:text-[15px]">
                        {cert.title}
                      </span>
                      <span className="mt-0.5 block truncate text-[12px] text-muted transition-colors duration-200 group-hover:text-paper">
                        {cert.issuer}
                      </span>
                      <span className="mono-label mt-1.5 flex items-center gap-2 md:hidden">
                        {SHORT_CATEGORY[cert.category]} · {cert.issueDate} ·{" "}
                        {fileType}
                      </span>
                    </span>

                    <span className="mono-label hidden transition-colors duration-200 group-hover:text-paper md:block">
                      {SHORT_CATEGORY[cert.category]}
                    </span>

                    <span className="hidden font-mono text-[11px] text-muted transition-colors duration-200 group-hover:text-paper md:block">
                      {cert.issueDate}
                    </span>

                    <span className="hidden items-center justify-end gap-1.5 font-mono text-[10px] tracking-[0.1em] text-muted transition-colors duration-200 group-hover:text-accent md:flex">
                      {fileType}
                      <ArrowUpRight
                        className="h-3 w-3 transition-transform duration-300 group-hover:-translate-y-0.5"
                        strokeWidth={1.5}
                      />
                    </span>

                    <ArrowUpRight
                      className="h-3.5 w-3.5 justify-self-end text-muted transition-all duration-300 group-hover:-translate-y-0.5 group-hover:text-accent md:hidden"
                      strokeWidth={1.5}
                    />
                  </a>
                );
              })}
            </div>
          )}
        </Reveal>
      </div>
    </section>
  );
}
