"use client";

import { ReactNode } from "react";
import { SubNav } from "./sub-nav";
import { MainNav } from "./main-nav";
import { NavBar } from "./nav-bar";

export const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <NavBar />
      <div className="h-full">{children}</div>
    </>
  );
};
