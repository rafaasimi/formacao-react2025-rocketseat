import type { ComponentProps } from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { baseButton } from "./button";

const iconButtonVariants = tv({
  extend: baseButton,
  variants: {
    size: {
      md: "p-3 text-2xl",
    },
    color: {
      primary: "bg-green-100 hover:bg-green-200 text-white",
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

interface IconButtonProps
  extends Omit<ComponentProps<"button">, "color">,
    VariantProps<typeof iconButtonVariants> {
  icon: React.ReactNode;
}

export function IconButton({
  icon,
  size,
  color,
  disabled,
  ...props
}: IconButtonProps) {
  return (
    <button
      type="button"
      className={iconButtonVariants({ size, color, disabled })}
      disabled={disabled}
      {...props}
    >
      {icon}
    </button>
  );
}
