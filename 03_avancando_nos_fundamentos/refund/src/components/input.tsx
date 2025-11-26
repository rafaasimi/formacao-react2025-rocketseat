import { cn } from "@/lib/utils";
import { useState, type ComponentProps } from "react";
import { tv, type VariantProps } from "tailwind-variants";

const inputLabelVariants = tv({
  base: "uppercase",
  variants: {
    size: {
      md: "text-[.625rem]",
    },
    isFocused: {
      true: "font-bold text-green-100",
    },
  },
  defaultVariants: {
    size: "md",
    isFocused: false,
  },
});

const inputVariants = tv({
  base: "rounded-[8px] outline-none border border-gray-300 w-full",
  variants: {
    size: {
      md: "p-[.9375rem] px-4 text-sm font-normal min-h-auto h-12",
    },
    color: {
      primary:
        "placeholder:text-gray-200 text-gray-100 border-[1.5px] focus:border-green-100 caret-green-100",
    },
  },
  defaultVariants: {
    size: "md",
    color: "primary",
  },
});

interface InputProps
  extends Omit<ComponentProps<"input">, "size" | "color">,
    VariantProps<typeof inputLabelVariants>,
    VariantProps<typeof inputVariants> {
  label?: string;
}

export function Input({ size, label, className, ...props }: InputProps) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className={cn("flex flex-col gap-2", className)}>
      {label && (
        <label
          htmlFor={props.id}
          className={inputLabelVariants({ size, isFocused })}
        >
          {label}
        </label>
      )}
      <input
        className={inputVariants({ size })}
        {...props}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
    </div>
  );
}
