import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const titleVariants = cva("font-bold text-gray-100", {
  variants: {
    size: {
      lg: "text-[2rem]",
      md: "text-[1rem]",
      sm: "text-sm",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export interface TitleProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof titleVariants> {
  as?: React.ElementType;
}

export function Title({ as, className, size, children, ...props }: TitleProps) {
  const Comp = as || "h2";
  return (
    <Comp className={cn(titleVariants({ size }), className)} {...props}>
      {children}
    </Comp>
  );
}
