import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const paragraphVariants = cva("font-normal text-gray-100", {
  variants: {
    size: {
      md: "text-[1rem]",
      sm: "text-[.875rem]",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export interface ParagraphProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof paragraphVariants> {
  as?: React.ElementType;
}

export function Paragraph({
  as,
  className,
  size,
  children,
  ...props
}: ParagraphProps) {
  const Comp = as || "p";
  return (
    <Comp className={cn(paragraphVariants({ size }), className)} {...props}>
      {children}
    </Comp>
  );
}
