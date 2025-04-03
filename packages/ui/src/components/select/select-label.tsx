import { cn } from "../../lib/utils";
import { SelectLabelProps } from "./types";

export const SelectLabel = ({ children, className }: SelectLabelProps) => {
  return <div className={cn("px-12 py-6 text-body font-semibold", className)}>{children}</div>;
};
