"use client";

import { subNavItem } from "@/mock";
import { SubNavItem } from "./sub-nav-item";
import { useState } from "react";
import Link from "next/link";

export const SubNav = () => {
  const [subNavItemId, setSubNavItemId] = useState(1);

  return (
    <div className="bg-neutral-900">
      <div className="flex container items-center justify-between">
        <div className="flex">
          {subNavItem.map((item) => {
            return (
              <SubNavItem
                key={item.id}
                label={item.label}
                href={item.href}
                isActive={item.id === subNavItemId}
                onClick={() => setSubNavItemId(item.id)}
              />
            );
          })}
        </div>
        <p className="text-neutral-0 text-sm">
          Tận hưởng trọn vẹn.
          <span className="text-yellow-400 ml-2">Tải ngay app Itel</span>
        </p>
        <div className="flex gap-2">
          {["Về Itel", "Tin tức", "Tuyển dụng"].map((item) => {
            return (
              <div key={item} className="text-sm text-neutral-0 px-4 py-2">
                <Link href="/">{item}</Link>
              </div>
            );
          })}
          <div className="px-3 py-1 bg-neutral-600 rounded flex items-center cursor-pointer ml-2">
            <p className="text-sm font-bold text-neutral-0 ">VIE</p>
          </div>
        </div>
      </div>
    </div>
  );
};
