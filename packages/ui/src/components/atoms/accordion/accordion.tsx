"use client";

import { useCallback, useMemo, useState } from "react";
import { AccordionContext } from "./accordion.context";
import { AccordionProps } from "./types";

export const Accordion = ({ defaultValue = [], type = "single", children, className = "" }: AccordionProps) => {
  const [value, setValue] = useState<string[]>(defaultValue);

  const onValueChange = useCallback(
    (itemValue: string) => {
      setValue((prev) => {
        if (type === "single") {
          return prev.includes(itemValue) ? [] : [itemValue];
        } else {
          return prev.includes(itemValue) ? prev.filter((v) => v !== itemValue) : [...prev, itemValue];
        }
      });
    },
    [type],
  );

  const contextValue = useMemo(() => ({ value, onValueChange }), [value, onValueChange]);

  return (
    <AccordionContext.Provider value={contextValue}>
      <div
        className={`w-full space-y-24 ${className}`}
        aria-label="accordion"
      >
        {children}
      </div>
    </AccordionContext.Provider>
  );
};
