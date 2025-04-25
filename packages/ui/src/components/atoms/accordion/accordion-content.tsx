"use client";

import * as React from "react";
import { ItemContext, useAccordion } from "./accordion.context";
import { AccordionContentProps } from "./types";

export const AccordionContent = ({ children, className = "" }: AccordionContentProps) => {
  const { value } = useAccordion();
  const itemValue = React.useContext(ItemContext);

  if (!itemValue) {
    throw new Error("AccordionContent must be used within an AccordionItem");
  }

  const isOpen = value.includes(itemValue);

  return (
    <div
      className={`text-18 text-gray-600 font-normal leading-26 transition-all duration-300 overflow-hidden px-20 bg-Grey-fill-weaker ${isOpen ? "visible max-h-screen opacity-100 pt-12 pb-16 " : "max-h-0 opacity-0 invisible"} ${className}`}
      data-state={isOpen ? "open" : "closed"}
    >
      {children}
    </div>
  );
};
