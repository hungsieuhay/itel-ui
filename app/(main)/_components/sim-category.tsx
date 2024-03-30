"use client";

import { Svg } from "@/icon/svg";

interface SimCategoryProp {
  title: string;
  subTitle: string;
  src: string;
}

export const SimCategory = ({ title, subTitle, src }: SimCategoryProp) => {
  return (
    <div className="text-center gap-y-4 py-14 group hover:bg-[url('/images/sim-category-bg.png')] hover:bg-cover hover:bg-center">
      <div className="flex justify-center">
        <Svg
          src={src}
          className="text-neutral-900 group-hover:text-neutral-0 w-14 h-14"
        />
      </div>
      <div>
        <p className="text-xl font-bold text-neutral-900 group-hover:text-neutral-0">
          {title}
        </p>
        <p className="text-base font-medium text-neutral-500 group-hover:text-neutral-0/90">
          {subTitle}
        </p>
      </div>
    </div>
  );
};
