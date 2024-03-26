"use client";

import { Button } from "@/components/button";
import { Logo } from "@/components/logo";
import Link from "next/link";

export const MainNav = () => {
  return (
    <div className="bg-neutral-0 py-3">
      <div className="container flex items-center justify-between gap-x-10">
        <Logo />
        <div className="flex items-center flex-1 gap-x-10">
          {[
            "Dịch vụ di động",
            "Ưu đãi iWow",
            "Mua sắm",
            "Giải trí",
            "Dịch vụ",
            "Hỗ trợ",
            "Hướng dẫn",
          ].map((item) => {
            return (
              <div key={item} className="text-sm font-bold text-neutral-800">
                <Link href="/">{item}</Link>
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
