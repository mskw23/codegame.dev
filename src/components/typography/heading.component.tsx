import clsx from "clsx";
import { DetailedHTMLProps, HTMLAttributes } from "react";

export function HeadingComponent({
  children,
  className,
  ...props
}: DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>) {
  return (
    <h1 className={clsx("text-3xl font-semibold mb-6", className)} {...props}>
      {children}
    </h1>
  );
}
