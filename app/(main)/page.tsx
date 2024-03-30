"use client";

import { Button } from "@/components/button";
import {
  digitalTabs,
  digitals,
  iwows,
  productData,
  simCardFlip,
  simCategory,
  supports,
} from "@/mock";
import { SimCategory } from "./_components/sim-category";
import { SimCardFlip } from "./_components/sim-card-flip";
import { ProductCard } from "./_components/product-card";
import clsx from "clsx";
import Image from "next/image";
import { Svg } from "@/icon/svg";
import { DigitalTabItem } from "./_components/digital-tab-item";
import { useState } from "react";
import { DigitalTabContent } from "./_components/digital-tab-content";

const HomePage = () => {
  const [digitalTabsId, setDigitalTabsId] = useState<number>(1);

  const onMouseEnter = (id: number) => {
    setDigitalTabsId(id);
  };

  return (
    <div className="bg-neutral-0">
      <div className="aspect-video w-full h-full bg-[url('/images/banner.png')] bg-top bg-cover relative">
        <div className="absolute top-1/4 left-1/2 -translate-x-[50%]">
          <Button type="secondary" size="large">
            Khám phá ngay
          </Button>
        </div>
      </div>
      <div className="bg-neutral-50">
        <div className="container">
          <div className="grid grid-cols-4">
            {simCategory.map((sim) => {
              return (
                <SimCategory
                  key={sim.id}
                  subTitle={sim.subTitle}
                  title={sim.title}
                  src={sim.src}
                />
              );
            })}
          </div>
        </div>
      </div>
      <section className="container space-y-16">
        <h1 className="section-title max-w-2xl ">
          ĐỎ Sim số. ĐÃ Data Dành riêng bạn!
        </h1>
        <div className="flex justify-center">
          {simCardFlip.map((item) => {
            return (
              <SimCardFlip
                key={item.id}
                labelLeft={item.labelLeft}
                title={item.title}
                textLeft={item.textLeft}
                category={item.category}
                labelRight={item.labelRight}
                number={item.number}
                src={item.src}
                textRight={item.textRight}
              />
            );
          })}
        </div>
      </section>
      <div className="bg-neutral-50 overflow-hidden">
        <section className="container text-center relative">
          <h1 className="section-title max-w-xl">
            SẮM ĐỒ CÔNG NGHỆ <span className="text-red-500">GHÉ SHOP ITEL</span>
          </h1>
          <p className="text-base font-medium text-neutral-500 mt-2">
            Thương hiệu lớn, ưu đãi khủng
          </p>
          <Image
            alt=""
            src="/images/oppo.png"
            height={300}
            width={1100}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="absolute top-[30%] left-[40%]"
          />
          <div className="mt-16 flex gap-x-10 overflow-x-auto no-scrollbar relative">
            {productData.map((product, index) => {
              return (
                <div
                  key={product.id}
                  className={clsx((index + 1) % 2 === 0 ? "mt-16" : "mt-0")}
                >
                  <ProductCard
                    ram={product.ram}
                    size={product.size}
                    capacity={product.capacity}
                    name={product.name}
                    price={product.price}
                    rate={product.rate}
                    sale={product.sale}
                    saleOff={product.saleOff}
                    salePrice={product.salePrice}
                    src={product.src}
                  />
                </div>
              );
            })}
          </div>
        </section>
      </div>
      <section className="container">
        <div className="flex justify-between">
          <div className="border-r border-neutral-200 w-full max-w-[32.25rem] mr-28">
            <h1 className="section-title max-w-sm !text-start !mx-0">
              Muôn vàn DỊCH VỤ số{" "}
              <span className="text-red-500 text-7xl">Idigital</span>
            </h1>
            <ul className="mt-28">
              {digitals.map((tab) => {
                return (
                  <DigitalTabItem
                    key={tab.id}
                    label={tab.name}
                    src={tab.icon}
                    onMouseEnter={() => onMouseEnter(tab.id)}
                  />
                );
              })}
              <div className="flex items-center gap-x-4 py-4 px-8 border-t border-t-neutral-200">
                <p className="text-base font-bold text-neutral-800">
                  Xem tất cả
                </p>
                <Svg
                  src="/icons/arrow-right.svg"
                  className="w-8 h-8 text-red-500"
                />
              </div>
            </ul>
          </div>
          <>
            {digitals.map((item) => {
              return (
                <DigitalTabContent
                  key={item.id}
                  desc={item.desc}
                  name={item.name}
                  src={item.img}
                  isActive={item.id === digitalTabsId}
                />
              );
            })}
          </>
        </div>
      </section>
      <section className="space-y-[4.5rem] bg-neutral-50">
        <h1 className="section-title max-w-lg">
          Ngập tràn ưu đãi cùng <span className="text-red-500">iwow</span>
        </h1>
        <div className="flex overflow-x-auto no-scrollbar gap-x-12">
          {iwows.map((item, index) => {
            return (
              <div key={item.id} className="shrink-0 space-y-6">
                {index % 2 === 0 && (
                  <p className="text-xl font-bold text-neutral-800 whitespace-pre-line">
                    {item.title}
                  </p>
                )}
                <Image
                  alt=""
                  src={item.img}
                  height={0}
                  width={0}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="w-[20.5rem] aspect-2/3 rounded-2xl"
                />
                {index % 2 !== 0 && (
                  <p className="text-xl font-bold text-neutral-800 whitespace-pre-line">
                    {item.title}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </section>
      <div className="bg-neutral-100 py-20">
        <div className="container">
          <div className="grid grid-cols-4 gap-6">
            {supports.map((sup) => {
              return (
                <div
                  key={sup.id}
                  className="flex gap-4 items-center p-6 rounded-2xl bg-neutral-0 hover:bg-red-500 group"
                >
                  <Svg
                    src={sup.img}
                    className="w-10 h-10 text-neutral-800 group-hover:text-neutral-0"
                  />
                  <p className="text-neutral-800 text-xl font-bold group-hover:text-neutral-0">
                    {sup.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
