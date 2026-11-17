"use client";

import React, { useEffect, useState } from "react";
import { ArrowUpRight, Check, Copy, Download, MessageCircle } from "lucide-react";
import { personalInfo } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [time, setTime] = useState("--:--");

  useEffect(() => {
    const tick = () => {
      setTime(
        new Date().toLocaleTimeString("en-GB", {
          timeZone: "Asia/Jakarta",
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        })
      );
    };

    tick();
    const id = setInterval(tick, 20000);
    return () => clearInterval(id);
  }, []);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(personalInfo.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch (err) {
      console.warn("Gagal menyalin email:", err);
    }
  };

  return (
    <section id="kontak" className="section-block">
      <div className="container-x">
        <Reveal>
          <SectionHeading
            index="07"
            label="Kontak"
            note="WIB — GMT+7"
            title={
              <>
                Mari bikin sesuatu yang layak{" "}
                <em className="font-serif italic tracking-[-0.01em] text-accent">
                  dilihat
                </em>
                .
              </>
            }
          />
        </Reveal>

        <div className="mt-12 grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-8" delay={80}>
            <p className="max-w-xl text-[15px] leading-relaxed text-muted">
              Terbuka untuk posisi penuh waktu, magang, maupun proyek lepas di
              bidang visualisasi 3D, desain antarmuka, dan dukungan teknis.
              Ceritakan kebutuhannya — saya biasanya membalas dalam sehari.
            </p>

            <a
              href={`mailto:${personalInfo.email}`}
              className="group mt-10 block border-y border-line py-6"
            >
              <span className="mono-label">Email langsung</span>
              <span className="mt-3 block break-all font-serif text-[clamp(1.4rem,4.4vw,2.9rem)] italic leading-[1.05] tracking-[-0.015em] transition-colors duration-300 group-hover:text-accent">
                {personalInfo.email}
              </span>
            </a>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a href={`mailto:${personalInfo.email}`} className="btn-ink group">
                Kirim Pesan
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>

              <a
                href={personalInfo.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost group"
              >
                <MessageCircle
                  className="h-3.5 w-3.5 text-accent"
                  strokeWidth={1.5}
                />
                WhatsApp
              </a>

              <a href={personalInfo.cvUrl} download className="btn-ghost group">
                <Download className="h-3.5 w-3.5" strokeWidth={1.5} />
                Unduh CV
              </a>

              <button
                type="button"
                onClick={handleCopy}
                className="link-draw inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-muted transition-colors hover:text-ink"
                aria-live="polite"
              >
                {copied ? (
                  <>
                    <Check className="h-3.5 w-3.5 text-accent" strokeWidth={1.75} />
                    Email tersalin
                  </>
                ) : (
                  <>
                    <Copy className="h-3.5 w-3.5" strokeWidth={1.5} />
                    Salin email
                  </>
                )}
              </button>
            </div>
          </Reveal>

          <Reveal
            className="lg:col-span-4 lg:border-l lg:border-line lg:pl-10"
            delay={160}
          >
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-1">
              <div>
                <span className="mono-label">Waktu lokal</span>
                <p className="mt-2 font-mono text-2xl tracking-tight">
                  {time}
                  <span className="ml-1.5 font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
                    WIB
                  </span>
                </p>
                <p className="mt-1 text-[13px] text-muted">
                  {personalInfo.location}
                </p>
              </div>

              <div>
                <span className="mono-label">Saluran</span>
                <div className="mt-2 flex flex-col gap-1.5">
                  <a
                    href={personalInfo.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-draw group inline-flex w-fit items-center gap-1.5 text-[13px]"
                  >
                    WhatsApp
                    <span className="text-muted transition-colors group-hover:text-accent">
                      ↗
                    </span>
                  </a>
                  <a
                    href={personalInfo.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-draw group inline-flex w-fit items-center gap-1.5 text-[13px]"
                  >
                    LinkedIn
                    <span className="text-muted transition-colors group-hover:text-accent">
                      ↗
                    </span>
                  </a>
                  <a
                    href={personalInfo.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-draw group inline-flex w-fit items-center gap-1.5 text-[13px]"
                  >
                    Instagram
                    <span className="text-muted transition-colors group-hover:text-accent">
                      ↗
                    </span>
                  </a>
                  {personalInfo.githubPublic && (
                    <a
                      href={personalInfo.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-draw group inline-flex w-fit items-center gap-1.5 text-[13px]"
                    >
                      GitHub
                      <span className="text-muted transition-colors group-hover:text-accent">
                        ↗
                      </span>
                    </a>
                  )}
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="link-draw group inline-flex w-fit items-center gap-1.5 text-[13px]"
                  >
                    Email
                    <span className="text-muted transition-colors group-hover:text-accent">
                      ↗
                    </span>
                  </a>
                </div>
              </div>

              <div>
                <span className="mono-label">Ketersediaan</span>
                <p className="mt-2 flex items-center gap-2 text-[13px]">
                  <span className="h-1.5 w-1.5 animate-blink bg-accent" />
                  Terbuka untuk peluang baru
                </p>
                <p className="mt-1 text-[13px] text-muted">
                  Full-time, Internship, &amp; Proyek.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
