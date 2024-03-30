"use client";

import { MainNav } from "./main-nav";
import { SubNav } from "./sub-nav";

export const NavBar = () => {
  return (
    <div className="sticky inset-0 z-50 shadow-lg">
      <SubNav />
      <MainNav />
    </div>
  );
};
