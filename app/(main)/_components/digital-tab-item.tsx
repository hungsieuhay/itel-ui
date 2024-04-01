"use client";

import { Svg } from "@/icon/svg";
import clsx from "clsx";

interface DigitalTabItem {
  label: string;
  src: string;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  isActive?: boolean;
  onClick?: () => void;
}

export const DigitalTabItem = ({
  label,
  src,
  onMouseEnter,
  onMouseLeave,
  isActive,
  onClick,
}: DigitalTabItem) => {
  return (
    <div
      className={clsx(
        "flex w-full items-center justify-between py-6 px-8 group hover:bg-neutral-100 border-t border-t-neutral-200",
        isActive && "bg-neutral-100"
      )}
      role="button"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="flex items-center gap-6">
        <Svg
          src={src}
          className={clsx(
            "w-10 h-10 text-neutral-800 group-hover:text-red-500",
            isActive && "text-red-500"
          )}
        />
        <p className="text-neutral-800 text-xl font-bold whitespace-nowrap">
          {label}
        </p>
      </div>
      <Svg
        src="/icons/arrow-right.svg"
        className={clsx(
          "w-8 h-8 opacity-0 text-neutral-800 translate-x-0 transition duration-300 group-hover:translate-x-4 group-hover:opacity-100",
          isActive && "translate-x-4 opacity-100"
        )}
      />
    </div>
  );
};
