import type { ComponentProps } from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { baseButton } from "./button";

const linkButtonVariants = tv({
  extend: baseButton,
  variants: {
    size: {
      md: "py-5 px-4 text-sm font-semibold",
    },
    color: {
      primary: "text-green-200 hover:text-green-100",
    },
    active: {
      true: "text-green-100",
    },
  },
  defaultVariants: {
    size: "md",
    color: "primary",
    active: false,
  },
});

type LinkButtonProps = Omit<ComponentProps<"a">, "color"> &
  VariantProps<typeof linkButtonVariants> & {
    label: string;
  };

export function LinkButton({
  label,
  size,
  color,
  active,
  ...props
}: LinkButtonProps) {
  return (
    <a className={linkButtonVariants({ size, color, active })} {...props}>
      {label}
    </a>
  );
}
