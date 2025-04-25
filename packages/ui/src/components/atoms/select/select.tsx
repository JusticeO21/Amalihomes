"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useClickOutside } from "../../../hooks/use-click-outside/use-click-outside";
import { cn } from "../../../lib/utils";
import { SelectContext } from "./select-context";
import { SelectProps } from "./types";

export const Select = ({ children, className, defaultValue, hasSearch, delay, onChange, label }: SelectProps) => {
  const [selected, setSelected] = useState(defaultValue ?? "");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [search, setSearch] = useState<string>("");

  useEffect(() => {
    if (defaultValue) setSelected(defaultValue);
  }, [defaultValue]);

  const handleSelect = useCallback(
    (value: string) => {
      setSelected(value);
      onChange?.(value);
      setIsOpen(false);
    },
    [onChange],
  );

  const handleSearch = useCallback((value: string) => {
    setSearch(value);
  }, []);

  const contextValue = useMemo(
    () => ({
      selected,
      isOpen,
      setIsOpen,
      handleSelect,
      search,
      handleSearch,
      hasSearch: hasSearch ?? false,
      delay: delay ?? 0,
      label: label ?? "",
    }),
    [selected, delay, hasSearch, isOpen, handleSelect, search, handleSearch, label],
  );
  const selectRef = useRef<HTMLDivElement>(null);

  useClickOutside(selectRef, () => setIsOpen(false));

  return (
    <SelectContext.Provider value={contextValue}>
      <div
        id="select"
        className={cn("relative w-sm text-18 flex flex-col gap-4", className)}
        ref={selectRef}
      >
        {label && (
          <label
            className={cn("py-6 text-body font-bold text-Grey-text-strong", className)}
            htmlFor={label.replaceAll(" ", "-").toLocaleLowerCase()}
          >
            {label}
          </label>
        )}
        {children}
      </div>
    </SelectContext.Provider>
  );
};
