import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md cursor-pointer outline-none uppercase font-bold text-sm",
  {
    variants: {
      variant: {
        default:
          "bg-yellow text-gray-900 border-2 border-yellow uppercase hover:border-yellow-light",
      },
      size: {
        default: "h-14 px-4 py-4.5 w-full",
      },
      disabled: {
        true: "opacity-30 cursor-not-allowed hover:border-yellow",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      disabled: false,
    },
  }
);

function Button({
  className,
  variant,
  size,
  disabled,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, disabled, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
