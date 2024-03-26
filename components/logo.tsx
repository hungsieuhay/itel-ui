"use client";

import Image from "next/image";
import Link from "next/link";

export const Logo = () => {
  return (
    <Link href="/">
      <Image src="/logo.svg" alt="Logo" height={32} width={78} />
    </Link>
  );
};
