import { LiveChatBottomNavBarState } from "@amalihomes/ui";
import { useState } from "react";

export enum HomePageState {
  INITIAL = "INITIAL",
  ORDER_ENQUIRY = "ORDER_ENQUIRY",
  PRODUCT_ENQUIRY = "PRODUCT_ENQUIRY",
  GENERAL_ENQUIRY = "GENERAL_ENQUIRY",
}

export interface LiveChatState {
  isChatWidgetVisible: boolean;
  isWindowOpen: boolean;
  isBackBtnVisible: boolean;
  currentWindowTab: LiveChatBottomNavBarState;
  activeHomePage: HomePageState;
  isBottomNavVisible: boolean;
}

interface LiveChatActions {
  setTab: (tab: LiveChatBottomNavBarState) => void;
  toggleWindow: () => void;
  closeChatWindow: () => void;
  openChatWidget: () => void;
  setCurrentHomePge: (page: HomePageState) => void;
  goBack: () => void;
}

const initState: LiveChatState = {
  isChatWidgetVisible: false,
  isWindowOpen: false,
  isBackBtnVisible: false,
  currentWindowTab: LiveChatBottomNavBarState.HOME,
  activeHomePage: HomePageState.INITIAL,
  isBottomNavVisible: true,
};

export const useLiveChatStore = (initialState: LiveChatState = initState): LiveChatState & LiveChatActions => {
  const [state, setState] = useState<LiveChatState>(initialState);

  const setTab = (tab: LiveChatBottomNavBarState) => {
    setState((prev) => ({ ...prev, currentWindowTab: tab }));
  };

  const toggleWindow = () => {
    setState((prev) => ({ ...prev, isWindowOpen: !prev.isWindowOpen }));
  };

  const closeChatWindow = () => {
    setState((prev) => ({ ...prev, isWindowOpen: false }));
  };

  const openChatWidget = () => {
    setState((prev) => ({ ...prev, isChatWidgetVisible: true, isBottomNavVisible: false, isBackBtnVisible: true }));
  };

  const setCurrentHomePge = (page: HomePageState) => {
    setState((prev) => ({ ...prev, activeHomePage: page }));
  };

  const goBack = () => {
    setState((prev) => ({ ...prev, ...initState, isWindowOpen: true, isBackBtnVisible: !prev.isBackBtnVisible }));
  };

  return {
    ...state,
    setTab,
    toggleWindow,
    closeChatWindow,
    openChatWidget,
    setCurrentHomePge,
    goBack,
  };
};
