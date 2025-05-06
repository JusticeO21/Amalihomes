"use client";
import { cn } from "../../../lib/utils";
import { useSelectContext } from "./select-context";
import { SelectContentProps } from "./types";

export const SelectContent = ({ children, className }: SelectContentProps) => {
  const { isOpen } = useSelectContext();

  return isOpen ? (
    <div
      className={cn(
        "absolute top-[100%] mt-2 w-full bg-white border border-Grey-fill rounded-md shadow-md flex flex-col items-center overflow-hidden z-50",
        className,
      )}
    >
      <div className="w-full max-h-288 overflow-y-auto">{children}</div>
    </div>
  ) : null;
};
