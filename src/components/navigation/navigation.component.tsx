import Link from "next/link";
import React from "react";

const LINKS = [
  { to: "/about", label: "About" },
  { to: "/learn", label: "Learn" },
  { to: "/challenge", label: "Challenge" },
  { to: "/contribute", label: "Contribute" },
];

export function NavigationComponent({ className, ...props }: any) {
  return (
    <nav
      className={`flex flex-col md:items-start items-center ${className}`}
      {...props}>
      {LINKS.map(({ to, label }) => (
        <Link key={to} href={to}>
          <a className="sm:text-5xl text-4xl font-semibold uppercase mb-8 hover:text-primary">
            {label}
          </a>
        </Link>
      ))}
    </nav>
  );
}
