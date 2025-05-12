"use client";

import { ChevronDown } from "lucide-react";
import * as React from "react";
import { ItemContext, useAccordion } from "./accordion.context";
import { AccordionTriggerProps } from "./types";

export const AccordionTrigger = ({ label, className = "" }: AccordionTriggerProps) => {
  const { value, onValueChange } = useAccordion();
  const itemValue = React.useContext(ItemContext);

  if (!itemValue) {
    throw new Error("AccordionTrigger must be used within an AccordionItem");
  }

  const isOpen = value.includes(itemValue);

  return (
    <button
      type="button"
      className={`p-16 m-0 flex justify-between items-center w-full text-left transition-all duration-300 md:text-20 md:leading-28 cursor-pointer rounded-md hover:bg-Grey-fill-weaker hover:font-bold hover:text-gray-600 font-lato ${isOpen ? "text-18 text-gray-600 font-bold leading-26 rounded-b-none bg-Grey-fill-weaker" : "text-16 font-normal leading-24 text-gray-950"} ${className}`}
      onClick={() => onValueChange(itemValue)}
    >
      <h4>{label}</h4>
      <ChevronDown
        width={24}
        className={`transition-transform duration-300 text-gray-950 ${isOpen ? "rotate-180" : ""}`}
      />
    </button>
  );
};
