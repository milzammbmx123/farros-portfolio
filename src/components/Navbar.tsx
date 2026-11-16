"use client";

import React, { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { personalInfo } from "@/data/portfolio";

const NAV_ITEMS = [
  { id: "tentang", label: "Tentang", no: "01" },
  { id: "pengalaman", label: "Pengalaman", no: "02" },
  { id: "studi-kasus", label: "Studi Kasus", no: "03" },
  { id: "karya", label: "Karya", no: "04" },
  { id: "proyek", label: "Proyek", no: "05" },
  { id: "sertifikat", label: "Sertifikat", no: "06" },
  { id: "kontak", label: "Kontak", no: "07" },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? (window.scrollY / max) * 100 : 0);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  useEffect(() => {
    const sections = NAV_ITEMS.map((item) =>
      document.getElementById(item.id)
    ).filter((el): el is HTMLElement => Boolean(el));

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-paper">
        <div className="container-x flex h-16 items-center justify-between gap-4">
          {/* Brand */}
          <a href="#hero" className="group flex items-center gap-3">
            <span className="grid h-8 w-8 place-items-center border border-ink font-mono text-[11px] tracking-tight transition-colors duration-200 group-hover:border-accent group-hover:bg-accent group-hover:text-accent-ink">
              FA
            </span>
            <span className="hidden flex-col sm:flex">
              <span className="text-[13px] font-medium leading-tight tracking-[-0.01em]">
                Farros A. Milzam
              </span>
              <span className="font-mono text-[9px] uppercase leading-tight tracking-[0.18em] text-muted">
                3D · UI/UX · IT
              </span>
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-5 xl:flex">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`relative py-2 font-mono text-[10px] uppercase tracking-[0.16em] transition-colors duration-200 ${
                  active === item.id
                    ? "text-ink"
                    : "text-muted hover:text-ink"
                }`}
              >
                <span
                  className={
                    active === item.id ? "text-accent" : "text-muted"
                  }
                >
                  {item.no}
                </span>{" "}
                {item.label}
                <span
                  className={`absolute bottom-0 left-0 h-px w-full origin-left bg-accent transition-transform duration-300 ${
                    active === item.id ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <button
              onClick={toggleTheme}
              aria-label="Ubah tema terang atau gelap"
              className="grid h-8 w-8 place-items-center border border-line text-ink transition-colors duration-200 hover:border-ink"
            >
              {theme === "dark" ? (
                <Sun className="h-3.5 w-3.5" strokeWidth={1.5} />
              ) : (
                <Moon className="h-3.5 w-3.5" strokeWidth={1.5} />
              )}
            </button>

            <a
              href="#kontak"
              className="hidden items-center gap-2 border border-ink bg-ink px-4 py-2 font-mono text-[10px] uppercase tracking-[0.16em] text-paper transition-colors duration-200 hover:border-accent hover:bg-accent hover:text-accent-ink sm:inline-flex"
            >
              Ajak Kerja Sama
            </a>

            <button
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Buka menu navigasi"
              aria-expanded={menuOpen}
              className="grid h-8 w-8 place-items-center border border-line text-ink transition-colors hover:border-ink xl:hidden"
            >
              <span className="flex flex-col gap-1">
                <span
                  className={`block h-px w-4 bg-current transition-transform duration-300 ${
                    menuOpen ? "translate-y-[3px] rotate-45" : ""
                  }`}
                />
                <span
                  className={`block h-px w-4 bg-current transition-transform duration-300 ${
                    menuOpen ? "-translate-y-[2px] -rotate-45" : ""
                  }`}
                />
              </span>
            </button>
          </div>
        </div>

        {/* Scroll progress */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-[2px] bg-accent transition-[width] duration-150 ease-out"
          style={{ width: `${progress}%` }}
        />
      </header>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 top-16 z-40 bg-paper transition-opacity duration-300 xl:hidden ${
          menuOpen
            ? "visible pointer-events-auto opacity-100"
            : "invisible pointer-events-none opacity-0"
        }`}
      >
        <div className="container-x flex h-full flex-col justify-between gap-8 py-8">
          <nav className="flex flex-col overflow-y-auto">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setMenuOpen(false)}
                className="flex items-baseline justify-between border-b border-line py-3.5 sm:py-4"
              >
                <span className="font-serif text-2xl italic leading-none sm:text-3xl">
                  {item.label}
                </span>
                <span className="mono-label">({item.no})</span>
              </a>
            ))}
          </nav>

          <div className="space-y-3">
            <p className="mono-label">Malang, Indonesia — WIB</p>
            <a
              href={personalInfo.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="link-draw inline-block font-mono text-xs tracking-tight"
            >
              WhatsApp — {personalInfo.whatsappDisplay}
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="link-draw block w-fit font-mono text-xs tracking-tight"
            >
              {personalInfo.email}
            </a>
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
              © {new Date().getFullYear()} Farros Asadudin Milzam
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
