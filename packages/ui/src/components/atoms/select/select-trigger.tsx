import { ChevronDown } from "lucide-react";
import { cn } from "../../../lib/utils";
import { useSelectContext } from "./select-context";
import { SelectTriggerProps } from "./types";

export const SelectTrigger = ({ children, className }: SelectTriggerProps) => {
  const { isOpen, setIsOpen, label } = useSelectContext();

  return (
    <button
      onClick={() => setIsOpen(!isOpen)}
      id={label && label.replaceAll(" ", "-").toLocaleLowerCase()}
      className={cn(
        `flex justify-between w-full px-12 py-16 border border-Grey-fill rounded-md bg-white text-left cursor-pointer text-Grey-stroke-weaker`,
        className,
      )}
      type="button"
    >
      {children}
      <ChevronDown
        aria-label="dropdown icon"
        className={`text-Grey-stroke-strong ${isOpen ? "rotate-180" : ""} transition-transform duration-300`}
      />
    </button>
  );
};
