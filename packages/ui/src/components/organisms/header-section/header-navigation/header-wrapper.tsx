"use client";
import { cn } from "../../../../lib/utils";

export const HeaderWrapper = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return <header className={cn("flex flex-col gap-0 sticky top-0 z-50", className)}>{children}</header>;
};
