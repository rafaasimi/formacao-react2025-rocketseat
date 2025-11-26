import type { ComponentProps, ReactNode } from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { baseButton } from "./button";
import { Link } from "react-router";

const linkButtonVariants = tv({
  extend: baseButton,
  variants: {
    size: {
      md: "py-5 px-4 text-sm font-semibold",
    },
    color: {
      primary: "text-gray-200 hover:text-green-100",
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

type LinkButtonProps = ComponentProps<typeof Link> &
  VariantProps<typeof linkButtonVariants> & {
    children: ReactNode;
  };

export function LinkButton({
  children,
  className,
  size,
  color,
  active,
  ...props
}: LinkButtonProps) {
  return (
    <Link
      className={linkButtonVariants({ size, color, active, className })}
      {...props}
    >
      {children}
    </Link>
  );
}
