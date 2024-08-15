import Image from "next/image";
import React from "react";
import logo from "@/assets/favicon.png";
import { ClassProps } from "./Nav";
import Link from "next/link";

export const Logo = ({ className }: ClassProps) => {
  return (
    <div className={className}>
      <Link href="/">
        <Image width={30} height={30} src={logo} alt="quant nexus logo" />
      </Link>
    </div>
  );
};
