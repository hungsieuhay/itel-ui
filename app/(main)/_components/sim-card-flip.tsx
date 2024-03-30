"use client";

import { Button } from "@/components/button";
import { Svg } from "@/icon/svg";
import Image from "next/image";

interface SimCardFlipProp {
  title: string;
  textLeft: string;
  labelLeft: string;
  src: string;
  category: string;
  number: string;
  textRight: string;
  labelRight: string;
}

export const SimCardFlip = ({
  title,
  labelLeft,
  textLeft,
  category,
  labelRight,
  number,
  src,
  textRight,
}: SimCardFlipProp) => {
  return (
    <div className="flex items-center gap-x-18">
      <div className="text-end space-y-32">
        <div className="space-y-6">
          <h1 className="text-neutral-800 text-5xl font-bold max-w-xs">
            {title}
          </h1>
          <p className="text-neutral-500 text-base font-medium max-w-xs">
            {textLeft}
          </p>
        </div>
        <div className="mt-auto">
          <div className="flex items-center justify-end">
            <p className="text-xl font-bold text-red-500 uppercase">
              {labelLeft}
            </p>
            <Svg src="/icons/right.svg" className="w-10 h-10 text-red-500" />
          </div>
        </div>
      </div>
      <div className="w-[25.5rem] h-full aspect-3/4 rounded-3xl overflow-hidden">
        <Image
          src={src}
          alt=""
          height={0}
          width={0}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="w-full h-full object-cover "
        />
      </div>
      <div className="text-start space-y-14">
        <div className="space-y-3">
          <p className="text-red-400 text-xl font-bold uppercase">{category}</p>
          <p className="text-neutral-800 text-4xl font-bold">{number}</p>
          <p className="text-neutral-500 text-base font-medium max-w-xs mt-3">
            {textRight}
          </p>
        </div>
        <div className="mt-auto">
          <Button type="primary">{labelRight}</Button>
        </div>
      </div>
    </div>
  );
};
