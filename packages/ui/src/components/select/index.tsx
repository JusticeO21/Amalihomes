"use client";

import { Check, ChevronDown } from "lucide-react";
import { createContext, ReactNode, useCallback, useContext, useMemo, useState } from "react";
import { cn } from "../../lib/utils";

// Context for Select
type SelectContextType = {
  selected: string;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  handleSelect: (value: string) => void;
};
const SelectContext = createContext<SelectContextType>({} as SelectContextType);

type SelectProps = {
  children: ReactNode;
  className?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
};

// Select Trigger (Button)
export function SelectTrigger({ children, className, ...props }: React.ComponentProps<"button">) {
  const { isOpen, setIsOpen } = useContext(SelectContext);
  return (
    <button
      onClick={() => setIsOpen(!isOpen)}
      className={cn(
        "flex justify-between w-full px-12 py-6 border border-gray-300 rounded-md bg-white text-left text-gray-500 cursor-pointer",
        className,
      )}
      {...props}
    >
      {children}
      <ChevronDown className={`text-inherit ${isOpen ? "rotate-180" : ""} transition-transform duration-300`} />
    </button>
  );
}

// Select Value (Displays selected item)
export function SelectValue({ placeholder }: { placeholder: string }) {
  const { selected } = useContext(SelectContext);
  return <span>{selected || placeholder} </span>;
}

// Select Content (Dropdown Menu)
type SelectContentProps = {
  children: ReactNode;
};

export function SelectContent({ children }: SelectContentProps) {
  const { isOpen } = useContext(SelectContext);
  return isOpen ? (
    <div className="absolute mt-6 w-full bg-white border border-gray-300 rounded-md shadow-md z-100">{children}</div>
  ) : null;
}

// Select Group (Optional)
export function SelectGroup({ children }: { children: ReactNode }) {
  return <div className="p-6">{children}</div>;
}

// Select Label
export function SelectLabel({ children }: { children: ReactNode }) {
  return <div className="px-12 py-6 text-sm font-semibold text-gray-600">{children}</div>;
}

// Select Item
type SelectItemProps = {
  value: string;
  children: ReactNode;
};
export function SelectItem({ value, children }: SelectItemProps) {
  const { handleSelect, selected } = useContext(SelectContext);

  return (
    <button
      key={value}
      id={value}
      onClick={() => handleSelect(value)}
      className={`flex justify-between items-center w-full text-left rounded px-12 py-6 cursor-pointer transition-colors duration-300 hover:bg-gray-100`}
    >
      {children} {value === selected ? <Check size={15} /> : null}
    </button>
  );
}

// Select Component
export function Select({ children, className, defaultValue, onChange }: SelectProps) {
  const [selected, setSelected] = useState(defaultValue || "");
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = useCallback(
    (value: string) => {
      setSelected(value);
      onChange?.(value);
      setIsOpen(false);
    },
    [onChange],
  );

  const contextValue = useMemo(
    () => ({ selected, isOpen, setIsOpen, handleSelect }),
    [selected, isOpen, setIsOpen, handleSelect],
  );

  return (
    <SelectContext.Provider value={contextValue}>
      <div className={cn("relative w-208", className)}>{children}</div>
    </SelectContext.Provider>
  );
}
