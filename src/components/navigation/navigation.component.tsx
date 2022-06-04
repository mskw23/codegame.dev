import Link from "next/link";
import React from "react";

const LINKS = [
  { to: "/about", label: "About" },
  { to: "/learn", label: "Learn" },
  { to: "/challenge", label: "Challenge" },
  { to: "/options", label: "Options" },
];

export function NavigationComponent({ className, ...props }: any) {
  return (
    <nav className={`flex flex-col ${className}`} {...props}>
      {LINKS.map(({ to, label }) => (
        <Link key={to} href={to}>
          <a className="text-5xl font-semibold uppercase mb-8 hover:text-primary">
            {label}
          </a>
        </Link>
      ))}
    </nav>
  );
}
