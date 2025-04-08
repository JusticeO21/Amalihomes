import { cn } from "../../lib/utils";
import { SelectLabelProps } from "./types";

export const SelectLabel = ({ children, className, htmlFor }: SelectLabelProps) => {
  return <label className={cn("py-6 text-body font-semibold", className)} htmlFor={htmlFor}>{children}</label>;
};
