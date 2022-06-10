import clsx from "clsx";
import SyntaxHighlighter from "react-syntax-highlighter";

type CodeBlockComponentProps = {
  code: string;
  correct: any;
  result: any;
  onLinePress(lineNumber: number): void;
};

export function CodeBlockComponent({
  code,
  correct,
  result,
  onLinePress,
}: CodeBlockComponentProps) {
  return (
    <SyntaxHighlighter
      showLineNumbers
      language="javascript"
      wrapLines
      wrapLongLines
      sty
      lineProps={(lineNumber) => {
        const isValid = correct.includes(lineNumber);
        const isChecked = result.includes(lineNumber);
        return {
          "data-number": `${result.indexOf(lineNumber) + 1}`,
          class: clsx("block relative", {
            "hover:bg-primary cursor-pointer": isValid,
            "bg-primary bg-opacity-50 code-tag": isChecked,
          }),
          onClick: isValid ? () => onLinePress(lineNumber) : undefined,
        };
      }}
      customStyle={{ borderRadius: 8, overflowX: "inherit" }}>
      {code}
    </SyntaxHighlighter>
  );
}
