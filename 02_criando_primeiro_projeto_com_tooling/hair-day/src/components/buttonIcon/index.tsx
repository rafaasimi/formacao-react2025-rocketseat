import { cn } from "@/lib/utils";
import type React from "react";

interface ButtonIconProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: React.ReactNode;
}

export function ButtonIcon({ icon, className, ...props }: ButtonIconProps) {
  return (
    <button
      className={cn(
        "text-[2rem] text-yellow hover:text-yellow-dark cursor-pointer",
        className
      )}
      {...props}
    >
      {icon}
    </button>
  );
}
