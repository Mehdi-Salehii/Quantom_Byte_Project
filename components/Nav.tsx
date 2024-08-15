import Link from "next/link";
import React from "react";
export type ClassProps = {
  className?: string;
};
export const Nav = ({ className }: ClassProps) => {
  const routes = [
    { url: "/", name: "Home" },
    { url: "/tickets", name: "Tickets" },
  ];
  return (
    <nav className={className}>
      {routes.map((route, i) => (
        <Link href={route.url} key={i}>
          <div className="px-2">{route.name}</div>
        </Link>
      ))}
    </nav>
  );
};
