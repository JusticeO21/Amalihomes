"use client";

import * as React from "react";
import { AccordionContextProps } from "./types";

export const AccordionContext = React.createContext<AccordionContextProps | undefined>(undefined);

export const ItemContext = React.createContext<string | null>(null);

export function useAccordion() {
  const context = React.useContext(AccordionContext);
  if (!context) {
    throw new Error("useAccordion must be used within an Accordion");
  }
  return context;
}
