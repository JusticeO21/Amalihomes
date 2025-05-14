"use client";

import { useTabs } from "../../../hooks/use-tabs/use-tabs";
import { cn } from "../../../lib/utils";

interface TabBarBodyProps {
  children: React.ReactNode;
  className?: string;
  value: string;
}

export const TabsContent = ({ children, className, value }: TabBarBodyProps) => {
  const { currentTab } = useTabs();
  return (
    <div
      data-state={currentTab === value ? "visible" : "hidden"}
      className={cn("data-[state='hidden']:hidden data-[state='visible']:block", className)}
    >
      {children}
    </div>
  );
};
