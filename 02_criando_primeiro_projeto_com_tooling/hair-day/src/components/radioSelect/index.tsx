import * as React from "react";
import { cn } from "@/lib/utils";

export interface RadioChipOption {
  value: string;
  label: string;
  disabled?: boolean;
}

interface RadioChipGroupProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "onChange"> {
  name: string;
  value?: string;
  defaultValue?: string;
  options: RadioChipOption[];
  onChange?: (value: string) => void;
}

export function RadioChipGroup({
  name,
  value,
  defaultValue,
  options,
  onChange,
  className,
  ...props
}: RadioChipGroupProps) {
  const isControlled = value !== undefined;
  const [internalValue, setInternalValue] = React.useState<string | undefined>(
    defaultValue
  );

  const selectedValue = isControlled ? value : internalValue;

  function handleSelect(nextValue: string) {
    if (!isControlled) {
      setInternalValue(nextValue);
    }
    onChange?.(nextValue);
  }

  return (
    <div className={cn("flex flex-wrap gap-2", className)} {...props}>
      {options.map((opt) => {
        const id = `${name}-${opt.value}`;
        const checked = selectedValue === opt.value;

        return (
          <div key={opt.value} className="relative">
            <input
              id={id}
              name={name}
              type="radio"
              value={opt.value}
              checked={checked}
              defaultChecked={!isControlled && defaultValue === opt.value}
              onChange={(e) => handleSelect(e.target.value)}
              disabled={opt.disabled}
              className="peer sr-only"
            />

            <label
              htmlFor={id}
              className={cn(
                "inline-flex h-10 min-w-20 items-center justify-center rounded-md border px-5 py-2 text-base uppercase transition-[color,box-shadow,border-color] outline-none cursor-pointer",
                // Base colors
                "bg-gray-600 border-gray-500 text-gray-200",
                // Hover/focus
                "hover:bg-gray-500  focus-visible:border-yellow",
                // Disabled
                "peer-disabled:text-gray-600 peer-disabled:border-gray-600 peer-disabled:bg-transparent peer-disabled:pointer-events-none",
                // Checked state
                checked && "border-yellow text-yellow"
              )}
            >
              {opt.label}
            </label>
          </div>
        );
      })}
    </div>
  );
}
