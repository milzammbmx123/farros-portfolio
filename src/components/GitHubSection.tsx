"use client";

import React, { useEffect, useState } from "react";
import { ArrowUpRight, Star } from "lucide-react";
import { GitHubRepo } from "@/types";
import { personalInfo, fallbackRepos } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

const LANGUAGE_COLORS: Record<string, string> = {
  TypeScript: "#3178c6",
  JavaScript: "#f1e05a",
  Python: "#3572A5",
  "Jupyter Notebook": "#DA5B0B",
  HTML: "#e34c26",
  CSS: "#563d7c",
  ShaderLab: "#222c37",
  "3D Blender": "#e87d0d",
  "C#": "#178600",
  Dart: "#00B4AB",
  C: "#555555",
  "C++": "#f34b7d",
  Java: "#b07219",
  Default: "#8a8577",
};

export default function GitHubSection() {
  const [repos, setRepos] = useState<GitHubRepo[]>(fallbackRepos);
  const [loading, setLoading] = useState(true);
  const [isLive, setIsLive] = useState(false);

  useEffect(() => {
    let cancelled = false;

    const fetchRepos = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/users/${personalInfo.githubUsername}/repos?sort=updated&per_page=12`,
          { headers: { Accept: "application/vnd.github.v3+json" } }
        );

        if (response.ok) {
          const data: GitHubRepo[] = await response.json();
          if (!cancelled && Array.isArray(data) && data.length > 0) {
            setRepos(data);
            setIsLive(true);
          }
        }
      } catch (err) {
        console.warn("Memakai data repositori kurasi:", err);
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    fetchRepos();
    return () => {
      cancelled = true;
    };
  }, []);

  const gridTemplate = isLive
    ? "md:grid-cols-[36px_1fr_120px_56px_20px]"
    : "md:grid-cols-[36px_1fr_120px_20px]";

  return (
    <section id="proyek" className="section-block">
      <div className="container-x">
        <Reveal>
          <SectionHeading
            index="05"
            label="Proyek"
            note={
              isLive
                ? `github.com/${personalInfo.githubUsername}`
                : "Daftar karya terkurasi"
            }
            title={
              <>
                Kode yang bisa dibuka, dibaca, dan{" "}
                <em className="font-serif italic tracking-[-0.01em] text-accent">
                  dijalankan
                </em>
                .
              </>
            }
          />
        </Reveal>

        <Reveal delay={80}>
          <div className="mt-10 flex items-baseline justify-between border-b border-line pb-2">
            <span className="mono-label">Repositori terbaru</span>
            {isLive ? (
              <a
                href={personalInfo.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="link-draw font-mono text-[10px] uppercase tracking-[0.16em] text-muted transition-colors hover:text-ink"
              >
                Lihat semua di GitHub ↗
              </a>
            ) : (
              <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
                {String(repos.length).padStart(2, "0")} entri
              </span>
            )}
          </div>

          {/* Column labels */}
          <div
            className={`hidden border-b border-line py-2.5 md:grid ${gridTemplate} md:gap-4`}
          >
            <span className="mono-label">No</span>
            <span className="mono-label">Repositori</span>
            <span className="mono-label">Stack</span>
            {isLive ? (
              <span className="mono-label text-right">Stars</span>
            ) : null}
            <span />
          </div>

          {loading ? (
            <div aria-hidden="true">
              {Array.from({ length: 5 }).map((_, i) => (
                <div
                  key={i}
                  className={`grid animate-pulse grid-cols-[28px_1fr] gap-4 border-b border-line py-4 ${gridTemplate} md:items-center md:gap-4`}
                >
                  <div className="h-2.5 w-4 bg-line" />
                  <div className="space-y-2">
                    <div className="h-3 w-1/3 bg-line" />
                    <div className="h-2.5 w-2/3 bg-line" />
                  </div>
                  <div className="hidden h-2.5 w-16 bg-line md:block" />
                  {isLive ? (
                    <div className="hidden h-2.5 w-8 bg-line md:ml-auto md:block" />
                  ) : null}
                </div>
              ))}
            </div>
          ) : (
            <div>
              {repos.map((repo, idx) => {
                const langColor =
                  (repo.language && LANGUAGE_COLORS[repo.language]) ||
                  LANGUAGE_COLORS.Default;

                const rowClass = `group -mx-2 grid grid-cols-[28px_1fr_20px] items-baseline gap-4 border-b border-line px-2 py-4 ${gridTemplate} md:items-center`;

                const rowContent = (
                  <>
                    <span className="font-mono text-[10px] text-muted transition-colors duration-200 group-hover:text-accent">
                      {String(idx + 1).padStart(2, "0")}
                    </span>

                    <span className="min-w-0">
                      <span className="flex items-baseline gap-2">
                        <span className="truncate text-[15px] font-medium tracking-[-0.01em]">
                          {repo.name}
                        </span>
                        <span
                          aria-hidden="true"
                          className="h-1.5 w-1.5 shrink-0 rounded-full"
                          style={{ backgroundColor: langColor }}
                        />
                      </span>
                      <span className="mt-1 block truncate text-[12px] text-muted transition-colors duration-200 group-hover:text-paper">
                        {repo.description || "Tanpa deskripsi."}
                      </span>
                      <span className="mono-label mt-1.5 flex items-center gap-3 md:hidden">
                        {repo.language || "Tidak terdeteksi"}
                        {isLive ? (
                          <span className="inline-flex items-center gap-1">
                            <Star className="h-2.5 w-2.5" strokeWidth={1.5} />
                            {repo.stargazers_count}
                          </span>
                        ) : null}
                      </span>
                    </span>

                    <span className="mono-label hidden transition-colors duration-200 group-hover:text-paper md:block">
                      {repo.language || "Tidak terdeteksi"}
                    </span>

                    {isLive ? (
                      <span className="hidden items-center justify-end gap-1 font-mono text-[11px] transition-colors duration-200 group-hover:text-paper md:flex">
                        <Star className="h-3 w-3" strokeWidth={1.5} />
                        {repo.stargazers_count}
                      </span>
                    ) : null}

                    {isLive ? (
                      <ArrowUpRight
                        className="h-3.5 w-3.5 justify-self-end text-muted transition-all duration-300 group-hover:-translate-y-0.5 group-hover:text-accent"
                        strokeWidth={1.5}
                      />
                    ) : null}
                  </>
                );

                return isLive ? (
                  <a
                    key={repo.id}
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${rowClass} transition-colors duration-200 hover:bg-ink hover:text-paper`}
                  >
                    {rowContent}
                  </a>
                ) : (
                  <div key={repo.id} className={rowClass}>
                    {rowContent}
                  </div>
                );
              })}
            </div>
          )}
        </Reveal>
      </div>
    </section>
  );
}
