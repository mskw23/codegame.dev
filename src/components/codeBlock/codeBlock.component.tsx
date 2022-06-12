import clsx from "clsx";
import { CSSProperties } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";

type CodeBlockComponentProps = {
  code: string;
  correct: any;
  result: any;
  onLinePress(lineNumber: number): void;
  style?: CSSProperties | undefined;
};

export function CodeBlockComponent({
  code,
  correct,
  result,
  onLinePress,
  style,
}: CodeBlockComponentProps) {
  const getLineProps = (lineNumber: number) => {
    const isValid = correct.includes(lineNumber);
    const isChecked = result.includes(lineNumber);
    return {
      "data-number": `${result.indexOf(lineNumber) + 1}`,
      class: clsx("block relative", {
        "hover:bg-opacity-100 bg-primary bg-opacity-50 cursor-pointer": isValid,
        "bg-primary bg-opacity-50 code-tag": isChecked,
      }),
      onClick: isValid ? () => onLinePress(lineNumber) : undefined,
    };
  };
  return (
    <SyntaxHighlighter
      showLineNumbers
      language="javascript"
      wrapLines
      wrapLongLines
      lineProps={getLineProps}
      customStyle={{
        borderRadius: 8,
        overflowX: "inherit",
        ...(style ? style : {}),
      }}>
      {code}
    </SyntaxHighlighter>
  );
}
