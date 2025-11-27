import type { ComponentProps, ReactNode } from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { baseButton } from "./button";

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

type LinkButtonProps<T extends React.ElementType = "button"> =
  ComponentProps<T> &
    VariantProps<typeof linkButtonVariants> & {
      as?: T;
      children: ReactNode;
    };

export function LinkButton<T extends React.ElementType = "button">({
  children,
  className,
  size,
  color,
  active,
  as,
  ...props
}: LinkButtonProps<T>) {
  const Component = as || "button";

  return (
    <Component
      className={linkButtonVariants({ size, color, active, className })}
      {...(props as React.ComponentPropsWithoutRef<T>)}
    >
      {children}
    </Component>
  );
}
