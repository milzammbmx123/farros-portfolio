import React from "react";

interface SectionHeadingProps {
  index: string;
  label: string;
  title: React.ReactNode;
  note?: string;
}

export default function SectionHeading({
  index,
  label,
  title,
  note,
}: SectionHeadingProps) {
  return (
    <header className="border-t border-line-strong pt-3">
      <div className="flex items-start justify-between gap-6">
        <span className="mono-label text-ink">
          <span className="text-accent">({index})</span> {label}
        </span>
        {note ? (
          <span className="mono-label hidden text-right sm:block">{note}</span>
        ) : null}
      </div>
      <h2 className="mt-7 max-w-4xl text-[clamp(1.85rem,4.2vw,3.35rem)] font-medium leading-[1.04] tracking-[-0.035em]">
        {title}
      </h2>
    </header>
  );
}
