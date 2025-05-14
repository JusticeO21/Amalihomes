import { useContext } from "react";
import { TabsContext, TabsContextProps } from "../../components/organisms";

export const useTabs = (): TabsContextProps => {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error("useTabs must be used within a TabsContext");
  }
  return context;
};
