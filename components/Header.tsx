import React from "react";
import { ClassProps, Nav } from "./Nav";
import { ModeToggle } from "./ModeToggle";
import { Logo } from "./Logo";

export const Header = ({ className }: ClassProps) => {
  return (
    <header className={className}>
      <Logo className="mr-auto" />
      <Nav className="divide-x-[1px] divide-slate-100 flex  font-semibold" />
      <ModeToggle className="" />
    </header>
  );
};
