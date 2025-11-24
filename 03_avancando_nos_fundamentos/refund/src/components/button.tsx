import type { ComponentProps } from "react";
import { tv, type VariantProps } from "tailwind-variants";

export const baseButton = tv({
  base: "rounded-[8px] hover:cursor-pointer transition[background-color] duration-200",
});

export const buttonVariants = tv({
  extend: baseButton,
  variants: {
    size: {
      md: "py-5 px-4 font-bold text-sm",
    },
    color: {
      primary: "bg-green-100 hover:bg-green-200 text-white font-bold text-sm",
    },
    disabled: {
      true: "opacity-50 pointer-events-none",
    },
  },
  defaultVariants: {
    size: "md",
    color: "primary",
    disabled: false,
  },
});

interface ButtonProps
  extends Omit<ComponentProps<"button">, "color">,
    VariantProps<typeof buttonVariants> {
  label: string;
}

export function Button({
  label,
  size,
  color,
  disabled,
  ...props
}: ButtonProps) {
  return (
    <button
      type="button"
      className={buttonVariants({ size, color, disabled })}
      disabled={disabled}
      {...props}
    >
      {label}
    </button>
  );
}
