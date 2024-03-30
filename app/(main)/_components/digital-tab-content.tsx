"use client";

import { Button } from "@/components/button";
import clsx from "clsx";
import Image from "next/image";

interface DigitalTabContentProps {
  name: string;
  desc: string;
  isActive?: boolean;
  src: string;
}

export const DigitalTabContent = ({
  desc,
  name,
  isActive,
  src,
}: DigitalTabContentProps) => {
  return (
    <div className={clsx("flex-1", isActive ? "block" : "hidden")}>
      <div className="block-img block-square">
        <div className="absolute left-[-10%] top-[-10%] h-[120%] w-[120%]">
          <Image
            alt=""
            src={src}
            width={0}
            height={0}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="absolute inset-0 h-full w-full object-cover transition-all duration-500"
            loading="lazy"
          />
        </div>
      </div>
      <div className="space-y-6 p-8 rounded-3xl bg-neutral-100 w-full max-w-[40.5rem] -mt-[5.875rem] relative">
        <div className="space-y-2">
          <p className="text-2xl text-neutral-800 font-bold">{name}</p>
          <p className="text-neutral-500 font-medium text-base">{desc}</p>
        </div>
        <Button type="primary">Trải nghiệm ngay</Button>
      </div>
    </div>
  );
};
