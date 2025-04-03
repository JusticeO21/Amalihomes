import { ChevronDown } from "lucide-react";
import { cn } from "../../lib/utils";
import { useSelectContext } from "./select-context";
import { SelectTriggerProps } from "./types";

export const SelectTrigger = ({ children, className, ...props }: SelectTriggerProps) => {
  const { isOpen, setIsOpen, selected } = useSelectContext();

  return (
    <button
      onClick={() => setIsOpen(!isOpen)}
      className={cn(
        `flex justify-between w-full px-12 py-16 border border-Grey-fill rounded-md bg-white text-left cursor-pointer ${
          selected ? "text-Grey-text-strong" : "text-Grey-stroke-strong"
        }`,
        className,
      )}
      {...props}
    >
      {children}
      <ChevronDown
        className={`text-Grey-stroke-strong ${isOpen ? "rotate-180" : ""} transition-transform duration-300`}
      />
    </button>
  );
};
