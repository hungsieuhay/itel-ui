"use client";

import clsx from "clsx";
import Link from "next/link";

interface SubNavItem {
  label: string;
  href: string;
  isActive?: boolean;
  onClick?: () => void;
}

export const SubNavItem = ({
  label,
  href,
  isActive = false,
  onClick,
}: SubNavItem) => {
  return (
    <div
      className={clsx(
        "px-6 py-3 text-sm font-bold text-neutral-0 hover:opacity-90 border-b-2 border-transparent transition duration-300",
        isActive && "border-b-red-300 bg-red-500"
      )}
      role="button"
      onClick={onClick}
    >
      <Link href={href} className="block">
        {label}
      </Link>
    </div>
  );
};
