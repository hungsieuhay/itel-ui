"use client";

import { Button } from "@/components/button";
import { Chip } from "@/components/chip";
import { Svg } from "@/icon/svg";
import Image from "next/image";

interface ProductCardProps {
  size: string;
  ram: string;
  capacity: string;
  src: string;
  name: string;
  price: string;
  salePrice: string;
  rate: string;
  sale: string;
  saleOff: string;
}

export const ProductCard = ({
  size,
  ram,
  capacity,
  name,
  price,
  rate,
  sale,
  saleOff,
  salePrice,
  src,
}: ProductCardProps) => {
  return (
    <div className="rounded-2xl overflow-hidden shrink-0">
      <div className="aspect-4/3 w-[18rem]">
        <Image
          alt=""
          src={src}
          height={0}
          width={0}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="w-full h-full"
        />
      </div>
      <div className="pt-4 px-6 pb-6 bg-white space-y-4">
        <div className="flex gap-x-2">
          <Chip label={`${size}''`} />
          <Chip label={`${ram}GB`} />
          <Chip label={`${capacity}GB`} />
        </div>
        <div className="space-y-2 text-start">
          <p className="text-xl font-bold text-neutral-900">{name}</p>
          <div className="flex items-center gap-x-2">
            <p className="text-base text-neutral-700 font-medium">
              {salePrice}
            </p>
            <p className="text-sm text-neutral-500 font-medium line-through">
              {price}
            </p>
          </div>
          <div className="flex gap-x-2 items-center">
            <div className="flex items-center">
              {rate}
              <Svg src="/icons/star.svg" className="h-5 w-5" />
            </div>
            <div className="h-5 w-[1px] bg-neutral-200" />
            <p className="text-neutral-500 text-sm">Đã bán {sale}</p>
          </div>
        </div>
        <Button type="secondary">Mua ngay</Button>
      </div>
    </div>
  );
};
