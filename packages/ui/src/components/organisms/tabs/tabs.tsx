"use client";

import { cn } from "../../../lib/utils";
import { createContext, useCallback, useEffect, useState } from "react";

export interface TabBarProps {
  children: React.ReactNode;
  className?: string;
  currentTab?: string;
  onTabChange?: (tab: string) => void;
  isControlled?: boolean;
}

export interface TabsContextProps {
  currentTab: string;
  setCurrentTab: (tab: string) => void;
  className?: string;
}

export const TabsContext = createContext<TabsContextProps | null>(null);

export const Tabs = ({ children, currentTab: tab, onTabChange, className, isControlled }: TabBarProps) => {
  const [internalTab, setInternalTab] = useState<string>(tab || "");

  const isControlledMode = !!isControlled;
  const currentTab = isControlledMode ? tab || "" : internalTab;

  const setCurrentTab = useCallback(
    (newTab: string) => {
      if (!isControlledMode) {
        setInternalTab(newTab);
      }
      onTabChange?.(newTab);
    },
    [isControlledMode, onTabChange],
  );

  useEffect(() => {
    if (isControlledMode && tab !== undefined && tab !== internalTab) {
      setInternalTab(tab);
    }
  }, [tab, isControlledMode, internalTab]);

  return (
    <TabsContext.Provider value={{ currentTab, setCurrentTab }}>
      <div className={cn("", className)}>{children}</div>
    </TabsContext.Provider>
  );
};
