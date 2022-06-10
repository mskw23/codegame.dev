import { DetailedHTMLProps, HTMLAttributes } from "react";

export function HeadingComponent({
  children,
  ...props
}: DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>) {
  return (
    <h1 className="text-3xl font-semibold mb-2" {...props}>
      {children}
    </h1>
  );
}
