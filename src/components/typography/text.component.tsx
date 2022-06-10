import { DetailedHTMLProps, HTMLAttributes } from "react";

export function TextComponent({
  children,
  ...props
}: DetailedHTMLProps<
  HTMLAttributes<HTMLParagraphElement>,
  HTMLParagraphElement
>) {
  return <p {...props}>{children}</p>;
}
