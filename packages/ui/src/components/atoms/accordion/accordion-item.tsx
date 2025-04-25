"use client";

import { ItemContext, useAccordion } from "./accordion.context";
import { AccordionItemProps } from "./types";

export const AccordionItem = ({ value, children, className = "" }: AccordionItemProps) => {
  const { value: openItems } = useAccordion();
  const isOpen = openItems.includes(value);
  return (
    <ItemContext.Provider value={value}>
      <div
        className={`w-full space-y-8 rounded-md transition-all duration-1000 overflow-hidden ${className}`}
        data-state={isOpen ? "open" : "closed"}
        aria-expanded={isOpen}
      >
        {children}
      </div>
    </ItemContext.Provider>
  );
};
