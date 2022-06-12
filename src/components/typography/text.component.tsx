import clsx from "clsx";
import { DetailedHTMLProps, HTMLAttributes } from "react";

export function TextComponent({
  children,
  className,
  ...props
}: DetailedHTMLProps<
  HTMLAttributes<HTMLParagraphElement>,
  HTMLParagraphElement
>) {
  return (
    <p className={clsx("mb-4", className)} {...props}>
      {children}
    </p>
  );
}
