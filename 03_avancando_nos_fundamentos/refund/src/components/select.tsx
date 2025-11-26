import { useState, type ComponentProps } from "react";
import { tv, type VariantProps } from "tailwind-variants";
import {
  Select as SelectRoot,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

const selectLabelVariants = tv({
  base: "uppercase",
  variants: {
    size: {
      md: "text-[10px]",
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
  base: "rounded-[.5rem] outline-none border border-gray-300 w-full",
  variants: {
    size: {
      md: "p-4 text-sm font-normal min-h-12",
    },
    color: {
      primary:
        "placeholder:text-gray-200 text-gray-100 border-[.0938rem] focus:border-green-100 caret-green-100",
    },
    disabled: {
      true: "pointer-events-none",
    },
  },
  defaultVariants: {
    size: "md",
    color: "primary",
  },
});

interface SelectProps
  extends Omit<ComponentProps<"select">, "size" | "color">,
    VariantProps<typeof selectLabelVariants>,
    VariantProps<typeof inputVariants> {
  label?: string;
  placeholder?: string;
}

export function Select({
  size,
  disabled,
  color,
  label,
  placeholder,
  ...props
}: SelectProps) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label
          htmlFor={props.id}
          className={selectLabelVariants({ size, isFocused })}
        >
          {label}
        </label>
      )}

      <SelectRoot defaultValue="alimentacao">
        <SelectTrigger
          className={inputVariants({ size, color, disabled })}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        >
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="alimentacao">Alimentação</SelectItem>
            <SelectItem value="hospedagem">Hospedagem</SelectItem>
            <SelectItem value="transporte">Transporte</SelectItem>
            <SelectItem value="servicos">Serviços</SelectItem>
            <SelectItem value="outros">Outros</SelectItem>
          </SelectGroup>
        </SelectContent>
      </SelectRoot>
    </div>
  );
}
