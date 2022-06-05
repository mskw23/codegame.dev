import React, { useCallback, useEffect, useRef, useState } from "react";
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
  const [ended, setEnded] = useState(false);
  const [isError, setIsError] = useState(false);
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

  useEffect(() => {
    if (isError) {
      setResult([]);
    }
  }, [isError]);

  const handleVerify = () => {
    if (equals(correct, result)) {
      makeShot(0.25);
      makeShot(0.75);
      setEnded(true);
    } else if (!isError) {
      setIsError(true);
      setTimeout(() => {
        setIsError(false);
      }, 2000);
    }
  };

  const makeShot = useCallback((x: number) => {
    refConfetti.current &&
      refConfetti.current({
        colors: ["#e9c46a", "#f4a261", "#e76f51"],
        origin: { y: 1.2, x },
        particleCount: 200,
      });
  }, []);

  const getInstance = useCallback((instance: confetti.CreateTypes | null) => {
    refConfetti.current = instance;
  }, []);

  const onClear = () => {
    setEnded(false);
    setResult([]);
  };

  const onHint = () => {
    setResult((r) => {
      let isCorrect = true;
      if (r.length === 0) {
        isCorrect = false;
      } else {
        r.forEach((e, i) => {
          if (correct[i] !== e) {
            isCorrect = false;
          }
        });
      }
      if (isCorrect) {
        const clear = [...r];
        const nextIndex = clear.length;
        clear.push(correct[nextIndex]);
        return clear;
      } else {
        return [correct[0]];
      }
    });
  };

  return (
    <>
      <main className="flex flex-col items-center min-h-screen justify-center">
        <div className="max-w-2xl">
          <button
            onClick={onHint}
            className="bg-primary text-background text-white font-bold py-2 px-4 rounded mb-3">
            Hint
          </button>
          <SyntaxHighlighter
            showLineNumbers
            language="javascript"
            wrapLines
            wrapLongLines
            sty
            // style={{ overflowX: "inherit" }}
            lineProps={(lineNumber) => {
              const isValid = correct.includes(lineNumber);
              const isChecked = result.includes(lineNumber);
              return {
                "data-number": `${result.indexOf(lineNumber) + 1}`,
                class: clsx("block relative", {
                  "hover:bg-primary cursor-pointer": isValid,
                  "bg-primary bg-opacity-50 code-tag": isChecked,
                }),
                onClick:
                  isValid && !ended
                    ? () => handleLineClick(lineNumber)
                    : undefined,
              };
            }}
            customStyle={{ borderRadius: 8, overflowX: "inherit" }}>
            {code}
          </SyntaxHighlighter>
        </div>
        {ended ? (
          <div className="flex">
            <button
              onClick={onCorrect}
              className="bg-accent text-white font-bold py-2 px-4 rounded mt-3">
              Next
            </button>
            <button
              onClick={onClear}
              className="text-white font-bold py-2 px-4 rounded mt-3">
              Clear
            </button>
          </div>
        ) : (
          <div
            className={clsx("flex", {
              "animate__animated animate__shakeX": isError,
            })}>
            <button
              onClick={handleVerify}
              className="bg-accent text-white font-bold py-2 px-4 rounded mt-3">
              Verify
            </button>
            <button
              onClick={onCorrect}
              className="text-white font-bold py-2 px-4 rounded mt-3">
              Skip
            </button>
          </div>
        )}
        <div className="h-12 flex justify-center items-center">
          {isError && <p>Try once again 💩</p>}
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
