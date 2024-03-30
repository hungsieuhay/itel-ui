"use client";

import { ReactNode } from "react";
import { NavBar } from "./nav-bar";

export const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <NavBar />
      {children}
    </>
  );
};
