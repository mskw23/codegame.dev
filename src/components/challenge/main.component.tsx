import * as React from "react";
import Link from "next/link";
import { PathPicker } from "../pathPicker";
import { paths } from "../../utils/config";

export function MainComponent() {
  const [selected, setSelected] = React.useState(paths[0]);
  return (
    <main className="flex flex-col items-center h-screen justify-center">
      <h1 className="text-4xl my-10">Learn</h1>
      <PathPicker selected={selected} onSelect={setSelected} />

      <Link href={`/challenge/${selected.id}`}>
        <a className="bg-primary rounded px-8 py-2 text-background font-semibold transition-shadow hover:drop-shadow-lg">
          Start
        </a>
      </Link>
    </main>
  );
}
