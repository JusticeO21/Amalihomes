"use client";

import { cn } from "../../../lib/utils";

export interface TabListProps {
  children: React.ReactNode;
  className?: string;
}

export const TabsList = ({ children, className }: TabListProps) => {
  return <div className={cn("flex gap-2", className)}>{children}</div>;
};
