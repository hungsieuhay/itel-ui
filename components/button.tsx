"use client";

import clsx from "clsx";
import { ReactNode } from "react";

interface ButtonProps {
  children?: ReactNode;
  type?: "primary" | "secondary" | "tertiary" | "ghost";
  size?: "small" | "medium" | "large";
  isActive?: boolean;
  shape?: "default" | "circle";
  disabled?: boolean;
  dataTheme?: "light" | "dark";
}

export const Button = ({
  children,
  size = "medium",
  type = "primary",
  shape = "default",
  disabled = false,
  dataTheme = "light",
  isActive = false,
}: ButtonProps) => {
  return (
    <button
      className={clsx(
        "flex items-center rounded-full font-bold text-base border transition duration-300 group",
        dataTheme,
        size === "small" &&
          `text-sm h-10 ${shape === "circle" ? "w-10" : "px-4"}`,
        size === "medium" && `h-12 ${shape === "circle" ? "w-12" : "px-4"}`,
        size === "large" && `h-14 ${shape === "circle" ? "w-14" : "px-6"}`,
        type === "primary" &&
          `${
            isActive ? "bg-red-600" : "bg-red-500"
          } enabled:hover:bg-red-600 text-white dark:text-red-500 disabled:opacity-30 dark:bg-white dark:disabled:opacity-50`,
        type === "secondary" &&
          "bg-white border-red-500 text-red-500 enabled:hover:bg-red-500 enabled:hover:text-white disabled:border-neutral-500 disabled:text-neutral-800 disabled:bg-white disabled:opacity-50 dark:border-white dark:text-white dark:bg-transparent dark:hover:border-neutral-300",
        type === "tertiary" &&
          "bg-neutral-100 enabled:hover:text-red-500 text-neutral-800 disabled:opacity-50",
        type === "ghost" &&
          "bg-transparent border-none enabled:hover:text-red-500 enabled:hover:bg-neutral-100 text-neutral-800 disabled:opacity-30"
      )}
      type="button"
      disabled={disabled}
    >
      {children}
    </button>
  );
};
