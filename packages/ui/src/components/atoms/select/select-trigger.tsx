"use client";
import { ChevronDown } from "lucide-react";
import { useEffect } from "react";
import { cn } from "../../../lib/utils";
import { useSelectContext } from "./select-context";
import SelectSearch from "./select-search";
import { SelectTriggerProps } from "./types";

export const SelectTrigger = ({ children, className }: SelectTriggerProps) => {
  const { isOpen, setIsOpen, label, hasSearch, handleSearch } = useSelectContext();

  useEffect(() => {
    if (hasSearch) handleSearch("");
  }, [hasSearch, handleSearch, isOpen]);

  return (
    <button
      onClick={() => setIsOpen(!isOpen)}
      id={label ? label.replaceAll(" ", "-").toLocaleLowerCase() : "select-trigger"}
      className={cn(
        `flex justify-between w-full px-12 py-16 border border-Grey-fill rounded-md bg-white text-left cursor-pointer text-Grey-stroke-weaker`,
        className,
      )}
      type="button"
    >
      {isOpen && hasSearch ? <SelectSearch onSearch={handleSearch} /> : children}
      <ChevronDown
        aria-label="dropdown icon"
        className={`text-Grey-stroke-strong ${isOpen ? "rotate-180" : ""} transition-transform duration-300`}
      />
    </button>
  );
};
