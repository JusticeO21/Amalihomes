import { Check } from "lucide-react";
import { cn } from "../../../lib/utils";
import { useSelectContext } from "./select-context";
import { SelectItemProps } from "./types";

export const SelectItem = ({ value, children, className }: SelectItemProps) => {
  const { handleSelect, selected, search } = useSelectContext();

  if (!value.toLowerCase().includes(search)) return null;

  return (
    <button
      id={`select-item-${value}`}
      onClick={() => handleSelect(value)}
      className={cn(
        `flex justify-between items-center w-full text-left rounded px-16 py-8 cursor-pointer transition-colors duration-300 hover:bg-brand-50 hover:text-Grey-text-strong ${
          value === selected ? "text-Grey-text-strong" : "text-Grey-stroke-weaker"
        }`,
        className,
      )}
    >
      {children} {value === selected ? <Check size={15} /> : null}
    </button>
  );
};
