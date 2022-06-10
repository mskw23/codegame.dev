import Link from "next/link";
import React from "react";

export function HeaderComponent() {
  return (
    <header className="h-24 w-full flex items-center justify-center pl-5 pr-5 fixed">
      <h3 className="sm:text-5xl text-4xl font-bold">
        <Link href="/">
          <a>
            CODEGAME<span className="text-primary">.DEV</span>
          </a>
        </Link>
      </h3>
    </header>
  );
}
