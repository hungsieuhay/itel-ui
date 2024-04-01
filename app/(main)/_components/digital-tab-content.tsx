"use client";

import { Button } from "@/components/button";
import { useSlide } from "@/hooks/useSlider";
import clsx from "clsx";
import Image from "next/image";

interface DigitalTabContentProps {
  name: string;
  desc: string;
}

export const DigitalTabContent = ({ desc, name }: DigitalTabContentProps) => {
  return (
    <div className="space-y-6 p-8 rounded-3xl bg-neutral-100 w-full max-w-[40.5rem] -mt-[5.875rem] relative">
      <div className="space-y-2">
        <p className="text-2xl text-neutral-800 font-bold">{name}</p>
        <p className="text-neutral-500 font-medium text-base">{desc}</p>
      </div>
      <Button type="primary">Trải nghiệm ngay</Button>
    </div>
  );
};
