"use client";

import { Svg } from "@/icon/svg";

interface DigitalTabItem {
  label: string;
  src: string;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

export const DigitalTabItem = ({
  label,
  src,
  onMouseEnter,
  onMouseLeave,
}: DigitalTabItem) => {
  return (
    <div
      className="flex items-center justify-between py-6 px-8 group hover:bg-neutral-100 border-t border-t-neutral-200"
      role="button"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="flex items-center gap-6">
        <Svg
          src={src}
          className="w-10 h-10 text-neutral-800 group-hover:text-red-500"
        />
        <p className="text-neutral-800 text-xl font-bold whitespace-nowrap">
          {label}
        </p>
      </div>
      <Svg src="/icons/arrow-right.svg" className="w-8 h-8 text-neutral-800" />
    </div>
  );
};
