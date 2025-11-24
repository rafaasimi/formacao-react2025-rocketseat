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
  base: "uppercase ",
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
  base: "rounded-[8px] outline-none border border-gray-300 ",
  variants: {
    size: {
      md: "p-4 text-sm font-normal",
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

interface SelectProps
  extends Omit<ComponentProps<"select">, "size" | "color">,
    VariantProps<typeof selectLabelVariants>,
    VariantProps<typeof inputVariants> {
  label?: string;
  placeholder?: string;
}

export function Select({ size, label, placeholder, ...props }: SelectProps) {
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
          className="min-h-[48px] w-[180px]"
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
