import React from "react";

export function HeaderComponent() {
  return (
    <header className="h-24 w-full flex items-center justify-center pl-5 pr-5 fixed">
      <h3 className="text-5xl font-bold pointer-events-none">
        CODEGAME<span className="text-primary">.DEV</span>
      </h3>
    </header>
  );
}
