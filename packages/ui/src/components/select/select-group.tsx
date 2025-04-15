import { cn } from "../../lib/utils";
import { SelectGroupProps } from "./types";

export const SelectGroup = ({ children, groupLabel, className }: SelectGroupProps) => {
  return (
    <div className={cn("py-6", className)}>
      {groupLabel && <label className="text-12 font-semibold text-Grey-text-strong">{groupLabel}</label>}
      {children}
    </div>
  );
};
