"use client";
import { useEffect } from "react";
import { cn } from "../../lib/utils";
import { useSelectContext } from "./select-context";
import SelectSearch from "./select-search";
import { SelectContentProps } from "./types";

export const SelectContent = ({ children, className }: SelectContentProps) => {
  const { isOpen, hasSearch, handleSearch } = useSelectContext();

  useEffect(() => {
    if (hasSearch) handleSearch("");
  }, [hasSearch, handleSearch, isOpen]);

  return isOpen ? (
    <div
      className={cn(
        "absolute mt-2 w-full bg-[#fff] border border-Grey-fill rounded-md shadow-md flex flex-col items-center p-12 z-50",
        className,
      )}
    >
      {hasSearch && <SelectSearch onSearch={handleSearch} />}
      <div className="w-full">{children}</div>
    </div>
  ) : null;
};
