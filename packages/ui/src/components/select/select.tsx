"use client";

import { useCallback, useMemo, useRef, useState } from "react";
import { useClickOutside } from "../../hooks/use-click-outside/use-click-outside";
import { cn } from "../../lib/utils";
import { SelectContext } from "./select-context";
import { SelectProps } from "./types";

export const Select = ({ children, className, defaultValue, hasSearch, delay, onChange }: SelectProps) => {
  const [selected, setSelected] = useState(defaultValue ?? "");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [search, setSearch] = useState<string>("");

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
    }),
    [selected, delay, hasSearch, isOpen, handleSelect, search, handleSearch],
  );
  const selectRef = useRef<HTMLDivElement>(null);

  useClickOutside(selectRef, () => setIsOpen(false));

  return (
    <SelectContext.Provider value={contextValue}>
      <div
        id="select"
        className={cn("relative w-sm text-18", className)}
        ref={selectRef}
      >
        {children}
      </div>
    </SelectContext.Provider>
  );
};
