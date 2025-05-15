"use client";

import { useTabs } from "../../../hooks/use-tabs/use-tabs";
import { cn } from "../../../lib/utils";

interface TabTriggerProps {
  render: (currentTab: string) => React.ReactNode;
  value: string;
  className?: string;
  onClick?: () => void;
}

export const TabTrigger = ({ render, value, className, onClick }: TabTriggerProps) => {
  const { setCurrentTab, currentTab } = useTabs();
  return (
    <button
      type="button"
      onClick={() => {
        setCurrentTab(value);
        onClick?.();
      }}
      className={cn("", className)}
    >
      {render(currentTab)}
    </button>
  );
};
