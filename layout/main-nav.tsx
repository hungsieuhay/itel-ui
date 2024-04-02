"use client";

import { Button } from "@/components/button";
import { Logo } from "@/components/logo";
import { Svg } from "@/icon/svg";
import { mainNavBar } from "@/mock";
import clsx from "clsx";
import Link from "next/link";

export const MainNav = () => {
  return (
    <div className="bg-neutral-0 py-3">
      <div className="container flex items-center justify-between gap-x-10">
        <Logo />
        <div className="flex items-center flex-1 gap-x-10">
          {mainNavBar.map(({ id, label, href, children }) => {
            return (
              <div key={id} className="relative group/nav">
                <div className="text-sm font-bold text-neutral-800 ">
                  <Link href={href as string}>{label}</Link>
                </div>
                <ul className="flex-col items-end absolute p-6 rounded-3xl shadow-2xl bg-neutral-0 left-0 top-full cursor-pointer hidden group-hover/nav:flex">
                  {children &&
                    children.map(({ label, id, desc, icon }) => {
                      return (
                        <li
                          key={id}
                          className="p-4 flex items-center justify-end w-fit gap-x-3 group/child hover:bg-neutral-100 rounded-xl"
                        >
                          {icon && (
                            <div
                              className={clsx("p-2 rounded-sm bg-neutral-100")}
                            >
                              <Svg
                                src={icon}
                                className="w-8 h-8 text-neutral-800 group-hover/child:text-red-500"
                              />
                            </div>
                          )}
                          <div className="flex items-center">
                            <div className="mr-16">
                              <p className="text-base text-neutral-800 font-bold whitespace-nowrap">
                                {label}
                              </p>
                              <p className="text-sm text-neutral-500 font-medium whitespace-nowrap">
                                {desc}
                              </p>
                            </div>
                            <Svg
                              src="/icons/arrow-right.svg"
                              className="w-8 h-8 text-neutral-800 group-hover/child:text-red-500 -translate-x-4 transition ease-linear duration-300 group-hover/child:translate-x-0"
                            />
                          </div>
                        </li>
                      );
                    })}
                </ul>
              </div>
            );
          })}
        </div>
        <div className="flex items-center gap-x-4 ml-auto">
          <Button type="tertiary" shape="circle"></Button>
          <Button type="tertiary" shape="circle"></Button>
          <Button type="tertiary" shape="circle"></Button>
          <Button type="primary">Đăng nhập</Button>
        </div>
      </div>
    </div>
  );
};
