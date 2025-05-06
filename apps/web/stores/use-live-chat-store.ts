import { LiveChatBottomNavBarState } from "@amalihomes/ui";
import { create } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";

// Define the store state type
interface LiveChatState {
  isChatWidgetVisible: boolean;
  isWindowOpen: boolean;
  isBackBtnVisible: boolean;
  currentWindowTab: LiveChatBottomNavBarState;
  activeHomePage: {
    initial: boolean;
    product: boolean;
    orders: boolean;
    general: boolean;
    completed: boolean;
  };
}

// Define the store actions type
interface LiveChatActions {
  setTab: (tab: LiveChatBottomNavBarState) => void;
  toggleWindow: () => void;
  closeChatWindow: () => void;
}

const initState: LiveChatState = {
  isChatWidgetVisible: false,
  isWindowOpen: false,
  isBackBtnVisible: false,
  currentWindowTab: LiveChatBottomNavBarState.HOME,
  activeHomePage: {
    initial: true,
    orders: false,
    general: false,
    product: false,
    completed: false,
  },
};

// Combine state and actions for the complete store type
type LiveChatStore = LiveChatState & LiveChatActions;

// Create the store with middleware
export const useLiveChatStore = create<LiveChatStore>()(
  devtools(
    persist(
      (set) => ({
        ...initState,

        // Actions
        setTab: (tab) =>
          set((state) => {
            let currentState = { ...state, currentWindowTab: tab };
            if (tab === LiveChatBottomNavBarState.MESSAGE) {
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
