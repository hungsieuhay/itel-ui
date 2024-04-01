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
import { Variants } from "framer-motion";
import { motion } from "framer-motion";
import { useSlide } from "@/hooks/useSlider";

const HomePage = () => {
  const slideItem = useSlide({ totalSlide: 4 });

  const onMouseEnter = (index: number) => {
    slideItem.onChange(index);
  };

  const onMouseLeave = (index: number) => {
    slideItem.onChange(index);
  };

  const onClick = (index: number) => {
    slideItem.onChange(index);
  };

  const inviewVariants: Variants = {
    offscreen: {
      opacity: 0,
    },
    onscreen: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };

  const itemVariants: Variants = {
    offscreen: { y: 40, opacity: 0 },
    onscreen: { y: 0, opacity: 1, transition: { duration: 0.3 } },
  };

  const viewportOptions = { amount: 0.3, margin: "10000px 0px 0px 0px" };

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
      <motion.section
        className="container space-y-16"
        variants={inviewVariants}
        initial="offscreen"
        whileInView="onscreen"
        viewport={viewportOptions}
      >
        <h1 className="section-title">
          <motion.div variants={itemVariants}>
            <span className="text-red-500">ĐỎ Sim số</span>. ĐÃ Data
          </motion.div>
          <motion.div variants={itemVariants}>Dành riêng bạn!</motion.div>
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
      </motion.section>
      <div className="bg-neutral-50 overflow-hidden">
        <motion.section
          className="container text-center relative"
          variants={inviewVariants}
          initial="offscreen"
          whileInView="onscreen"
          viewport={viewportOptions}
        >
          <h1 className="section-title max-w-xl">
            <motion.div variants={itemVariants}>Ưu đãi đang lên</motion.div>
            <motion.div variants={itemVariants} className="text-red-500">
              Shopping tới bến
            </motion.div>
          </h1>
          <motion.p
            variants={itemVariants}
            className="text-base font-medium text-neutral-500 mt-2"
          >
            Thương hiệu lớn, ưu đãi khủng
          </motion.p>
          <motion.img
            alt=""
            src="/images/oppo.png"
            height={300}
            width={1100}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="absolute top-[30%] left-[40%]"
            variants={itemVariants}
          />
          <div className="mt-16 flex gap-x-10 overflow-x-auto overflow-y-hidden no-scrollbar relative">
            {productData.map((product, index) => {
              return (
                <motion.div
                  key={product.id}
                  className={clsx((index + 1) % 2 === 0 ? "mt-16" : "mt-0")}
                  variants={itemVariants}
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
                </motion.div>
              );
            })}
          </div>
        </motion.section>
      </div>
      <motion.section
        className="container"
        variants={inviewVariants}
        initial="offscreen"
        whileInView="onscreen"
        viewport={viewportOptions}
      >
        <div className="flex justify-between">
          <div className="border-r border-neutral-200 w-full max-w-[32.25rem] mr-28 z-10">
            <h1 className="section-title max-w-sm !text-start !mx-0">
              <motion.div variants={itemVariants}>
                Muôn vàn DỊCH VỤ số
              </motion.div>
              <motion.div
                variants={itemVariants}
                className="text-red-500 text-7xl"
              >
                Idigital
              </motion.div>
            </h1>
            <ul className="mt-28">
              {digitals.map((tab, index) => {
                return (
                  <motion.div key={tab.id} variants={itemVariants}>
                    <DigitalTabItem
                      key={tab.id}
                      label={tab.name}
                      src={tab.icon}
                      onMouseEnter={() => onMouseEnter(index)}
                      onMouseLeave={() => onMouseLeave(index)}
                      isActive={index === slideItem.index}
                      onClick={() => onClick(index)}
                    />
                  </motion.div>
                );
              })}
              <motion.div variants={itemVariants} className="mt-4">
                <Button type="ghost">
                  <p className="text-base font-bold text-neutral-800 group-hover:text-red-500">
                    Xem tất cả
                  </p>
                  <Svg
                    src="/icons/arrow-right.svg"
                    className="w-8 h-8 ml-2 text-red-500"
                  />
                </Button>
              </motion.div>
            </ul>
          </div>
          <div className="flex-1">
            <div className="block-img block-square">
              <div className="absolute left-[-10%] top-[-10%] h-[120%] w-[120%]">
                {digitals.map((item, index) => {
                  return (
                    <Image
                      key={item.id}
                      alt=""
                      src={item.img}
                      width={0}
                      height={0}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className={clsx(
                        "absolute inset-0 h-full w-full object-cover transition-all duration-500 transform-gpu",
                        index > slideItem.index && "translate-x-1/4 opacity-0",
                        index < slideItem.index && "-translate-x-1/4 opacity-0"
                      )}
                      loading="lazy"
                    />
                  );
                })}
              </div>
            </div>
            <DigitalTabContent
              desc={digitals[slideItem.index].desc}
              name={digitals[slideItem.index].name}
            />
          </div>
        </div>
      </motion.section>
      <motion.section
        className="space-y-[4.5rem] bg-neutral-50"
        variants={inviewVariants}
        initial="offscreen"
        whileInView="onscreen"
        viewport={viewportOptions}
      >
        <h1 className="section-title max-w-lg">
          <motion.div variants={itemVariants}>Ngập tràn ưu đãi</motion.div>
          <motion.div variants={itemVariants}>
            cùng <span className="text-red-500">iwow</span>
          </motion.div>
        </h1>
        <div className="flex overflow-x-auto overflow-y-hidden no-scrollbar gap-x-12">
          {iwows.map((item, index) => {
            return (
              <motion.div
                variants={itemVariants}
                key={item.id}
                className="shrink-0 space-y-6"
              >
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
              </motion.div>
            );
          })}
        </div>
      </motion.section>
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
