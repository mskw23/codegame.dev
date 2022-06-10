import clsx from "clsx";
import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";

type ButtonProps = Omit<
  DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > & {
    variant?: ButtonVariant;
    text: string;
  },
  "children"
>;

export function ButtonComponent({
  text,
  variant = "primary",
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={clsx(
        "font-bold py-2 px-4 rounded",
        {
          "bg-primary text-background": variant === "primary",
          "bg-accent text-white": variant === "secondary",
          "text-white": variant === "ghost",
        },
        className
      )}
      {...props}>
      {text}
    </button>
  );
}
