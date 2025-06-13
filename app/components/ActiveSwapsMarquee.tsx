"use client";

import React from "react";

type Swap = {
  skill: string;
  with: string;
  progress: string;
};

interface Props {
  swaps: Swap[];
}

export default function ActiveSwapsMarquee({ swaps }: Props) {
  return (
    <div className="overflow-hidden whitespace-nowrap py-4 bg-[#FFF7ED] border-t border-b border-[#F97316] shadow-inner">
      <div
        className="inline-block animate-marquee text-[#1F2937] font-nunito font-semibold"
        style={{ animationDuration: `${swaps.length * 6}s` }}
      >
        {swaps.map((swap, index) => (
          <span
            key={index}
            className="inline-block mx-8 px-4 py-2 rounded-lg bg-[#F97316]/20 text-[#F97316] shadow-md"
          >
            {swap.skill} with {swap.with} ({swap.progress})
          </span>
        ))}
      </div>
      <div
        aria-hidden="true"
        className="inline-block animate-marquee text-[#1F2937] font-nunito font-semibold"
        style={{ animationDuration: `${swaps.length * 6}s` }}
      >
        {/* Repeat for seamless loop */}
        {swaps.map((swap, index) => (
          <span
            key={"repeat-" + index}
            className="inline-block mx-8 px-4 py-2 rounded-lg bg-[#F97316]/20 text-[#F97316] shadow-md"
          >
            {swap.skill} with {swap.with} ({swap.progress})
          </span>
        ))}
      </div>
    </div>
  );
}
