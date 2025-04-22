"use client";
import React from "react";
import { cn } from "../../../lib/utils";

interface DividerProps {
  className?: string;
  orientation?: "horizontal" | "vertical";
}

export const Divider: React.FC<DividerProps> = ({ className, orientation = "horizontal" }) => {
  return (
    <div
      className={cn(
        "bg-Grey-stroke-weak divider",
        orientation === "horizontal" ? "h-1 w-full" : "h-full w-1",
        className,
      )}
      role="separator"
      aria-orientation={orientation}
    />
  );
};
