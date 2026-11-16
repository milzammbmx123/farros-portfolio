import React from "react";

interface MarqueeProps {
  items: string[];
  className?: string;
}

export default function Marquee({ items, className = "" }: MarqueeProps) {
  const row = (
    <div className="flex shrink-0 items-center">
      {items.map((item) => (
        <span
          key={item}
          className="flex items-center gap-6 whitespace-nowrap px-6 font-mono text-[11px] uppercase tracking-[0.24em]"
        >
          {item}
          <span aria-hidden="true" className="text-accent">
            ✳
          </span>
        </span>
      ))}
    </div>
  );

  return (
    <div
      className={`marquee overflow-hidden border-y border-line py-3.5 ${className}`}
      aria-hidden="true"
    >
      <div className="marquee-track flex w-max animate-marquee">
        {row}
        {row}
      </div>
    </div>
  );
}
