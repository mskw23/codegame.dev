import * as React from "react";
import { AcademicCapIcon, CheckCircleIcon } from "@heroicons/react/solid";
import { RadioGroup } from "@headlessui/react";

const paths = [{ name: "JavaScript" }, { name: "React" }];

export function MainComponent() {
  const [selected, setSelected] = React.useState(paths[0]);
  return (
    <main className="flex flex-col items-center h-screen justify-center">
      <h1 className="text-4xl my-10">Learn</h1>
      <h3 className="text-2xl mb-10 flex items-center">
        Choose your path
        <AcademicCapIcon width={24} height={24} className="ml-1" />
      </h3>
      <div className="w-60 mb-10">
        <RadioGroup value={selected} onChange={setSelected}>
          <RadioGroup.Label className="sr-only">Learning path</RadioGroup.Label>
          <div className="space-y-2">
            {paths.map((path) => (
              <RadioGroup.Option
                key={path.name}
                value={path}
                className={({ active, checked }) =>
                  `${active ? "ring-2 ring-primary" : ""}
              ${
                checked
                  ? "bg-primary text-background font-bold"
                  : "bg-background"
              }
                relative flex cursor-pointer rounded-lg px-5 py-4 shadow-md focus:outline-none`
                }>
                {({ active, checked }) => (
                  <>
                    <div className="flex w-full items-center justify-between h-6">
                      <div className="flex items-center">
                        <div className="text-sm">
                          <RadioGroup.Label
                            as="p"
                            className={`${
                              checked
                                ? "text-white font-semibold"
                                : "text-gray-900"
                            }`}>
                            {path.name}
                          </RadioGroup.Label>
                        </div>
                      </div>
                      {checked && (
                        <div className="shrink-0 text-white">
                          <CheckCircleIcon className="h-6 w-6" />
                        </div>
                      )}
                    </div>
                  </>
                )}
              </RadioGroup.Option>
            ))}
          </div>
        </RadioGroup>
      </div>

      <button className="bg-primary rounded px-8 py-2 text-background font-semibold transition-shadow hover:drop-shadow-lg">
        Start
      </button>
    </main>
  );
}
