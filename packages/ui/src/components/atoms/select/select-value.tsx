import { cn } from "../../../lib/utils";
import { useSelectContext } from "./select-context";
import { SelectValueProps } from "./types";

export const SelectValue = ({ placeholder, className }: SelectValueProps) => {
  const { selected } = useSelectContext();
  return <span id={cn(`text-18 span-${selected || placeholder}`, className)}>{selected || placeholder}</span>;
};
