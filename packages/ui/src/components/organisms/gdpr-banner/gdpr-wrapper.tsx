"use client";

import { cn } from "../../../lib/utils";

export interface GdprWrapperProps {
  children: React.ReactNode;
  className?: string;
}

export const GdprWrapper = ({ children, className }: GdprWrapperProps) => {
  return <div className={cn("absolute top-full z-100 w-full", className)}>{children}</div>;
};
