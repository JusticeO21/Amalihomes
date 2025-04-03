import { SelectGroupProps } from "./types";
import { cn } from "../../lib/utils";

export const SelectGroup = ({ children, className }: SelectGroupProps) => {
  return <div className={cn("py-6", className)}>{children}</div>;
};
