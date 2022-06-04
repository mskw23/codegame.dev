import React, { useCallback, useRef, useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import ReactCanvasConfetti from "react-canvas-confetti";
import { equals } from "ramda";
import clsx from "clsx";

interface CodeComponentProps {
  code: string;
  correct: number[];
  onCorrect(): void;
}

export const CodeComponent = ({
  code,
  correct,
  onCorrect,
}: CodeComponentProps) => {
  const [result, setResult] = useState<number[]>([]);
  const refConfetti = useRef<confetti.CreateTypes | null>(null);
  const handleLineClick = (lineNumber: number) => {
    setResult((res) => {
      const arr = [...res];
      if (arr.includes(lineNumber)) {
        return arr.filter((e) => e !== lineNumber);
      } else {
        return [...arr, lineNumber];
      }
    });
  };

  const handleVerify = () => {
    if (equals(correct, result)) {
      makeShot(1, {});
      setTimeout(() => onCorrect(), 1000);
    } else {
      // TODO: handle incorrect
    }
  };

  const makeShot = useCallback((particleRatio: number, opts: any) => {
    refConfetti.current &&
      refConfetti.current({
        ...opts,
        colors: ["#e9c46a", "#f4a261", "#e76f51"],

        origin: { y: 1.1, x: 0.25 },
        particleCount: Math.floor(200 * particleRatio),
      });
  }, []);

  const getInstance = useCallback((instance: confetti.CreateTypes | null) => {
    refConfetti.current = instance;
  }, []);

  return (
    <>
      <main className="flex flex-col items-center min-h-screen justify-center">
        <div className="max-w-2xl">
          <SyntaxHighlighter
            showLineNumbers
            language="javascript"
            wrapLines
            wrapLongLines
            lineProps={(lineNumber) => {
              const isValid = correct.includes(lineNumber);
              return {
                class: clsx("block", {
                  "hover:bg-primary cursor-pointer": isValid,
                  "bg-primary bg-opacity-50": result.includes(lineNumber),
                }),
                onClick: isValid
                  ? () => handleLineClick(lineNumber)
                  : undefined,
              };
            }}
            CodeTag={({ children }) => <div>{children}</div>}
            customStyle={{ borderRadius: 8 }}>
            {code}
          </SyntaxHighlighter>
        </div>
        <button
          onClick={handleVerify}
          className="bg-accent hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-3">
          Verify
        </button>
        <div className="h-12 flex justify-center items-center">
          <p>{result.map((value) => value)}</p>
        </div>
      </main>
      <ReactCanvasConfetti
        style={{
          position: "fixed",
          pointerEvents: "none",
          width: "100%",
          height: "100%",
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
        }}
        refConfetti={getInstance}
      />
    </>
  );
};
