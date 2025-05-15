import { create } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";

// Define the store state type
interface LiveChatState {
  isChatWidgetVisible: boolean;
  isWindowOpen: boolean;
  isBackBtnVisible: boolean;
  currentWindowTab: LiveChatBottomNavBarState;
  activeHomePage: HomePageState;
  isBottomNavVisible: boolean;
}

export type LiveChatBottomNavBarState = "HOME" | "MESSAGE" | "FAQ";

export enum HomePageState {
  INITIAL,
  PRODUCT_ENQUIRY,
  ORDER_ENQUIRY,
  GENERAL_ENQUIRY,
  COMPLETED,
}

// Define the store actions type
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
  currentWindowTab: "HOME",
  activeHomePage: HomePageState.INITIAL,
  isBottomNavVisible: true,
};

// Combine state and actions for the complete store type
type LiveChatStore = LiveChatState & LiveChatActions;

// Create the store with middleware
export const useLiveChatStore = create<LiveChatStore>()(
  devtools(
    persist(
      (set) => ({
        ...initState,
        setTab: (tab) =>
          set((state) => {
            let currentState = { ...state, currentWindowTab: tab };
            if (tab === "MESSAGE") {
              currentState = {
                ...currentState,
                isChatWidgetVisible: true,
              };
            }
            return currentState;
          }),
        toggleWindow: () =>
          set((state) => ({
            ...state,
            isWindowOpen: !state.isWindowOpen,
          })),
        closeChatWindow: () => set((state) => ({ ...state, ...initState })),
        openChatWidget: () =>
          set((state) => ({ ...state, isChatWidgetVisible: true, isBottomNavVisible: false, isBackBtnVisible: true })),
        setCurrentHomePge: (page) =>
          set((state) => ({
            ...state,
            activeHomePage: page,
            isBottomNavVisible: page == HomePageState.INITIAL,
            isBackBtnVisible: page !== HomePageState.INITIAL,
          })),
        goBack: () =>
          set((state) => {
            return {
              ...state,
              ...initState,
              isWindowOpen: true,
            };
          }),
      }),
      {
        name: "live-chat-window-storage",
        storage: createJSONStorage(() => localStorage),
        partialize: () => {
          return {};
        },
      },
    ),
  ),
);
