import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
export const CodeComponent = () => {
  const codeString = ` <main className="flex flex-col items-center h-screen justify-center">
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
            value={path}`;
  return (
    <main className="flex flex-col items-center pt-32">
      <div className="max-w-2xl">
        <SyntaxHighlighter
          language="javascript"
          customStyle={{ borderRadius: 8 }}
          style={docco}>
          {codeString}
        </SyntaxHighlighter>
      </div>
    </main>
  );
};
