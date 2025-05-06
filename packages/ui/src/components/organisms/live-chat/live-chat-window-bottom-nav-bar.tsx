import { IconHome } from "../../icons/icon-home";
import { IconInfo } from "../../icons/icon-info";
import { IconMessenger } from "../../icons/icon-messenger";
import { LiveChatBottomNavBarItem } from "./live-chat-window-bottom-nav-bar-item";

export enum LiveChatBottomNavBarState {
  HOME,
  MESSAGE,
  FAQ,
}

export interface LiveChatBottomNavBarProps {
  currentTab?: LiveChatBottomNavBarState;
  setTab?: (tab: LiveChatBottomNavBarState) => void;
}

export const LiveChatWindowBottomNavBar = ({
  currentTab = LiveChatBottomNavBarState.HOME,
  setTab,
}: LiveChatBottomNavBarProps) => {
  return (
    <div className="p-16 rounded-lg flex justify-between items-center bg-brand-50 sticky bottom-0">
      <LiveChatBottomNavBarItem
        icon={IconHome}
        isActive={currentTab == LiveChatBottomNavBarState.HOME}
        toggleActive={() => setTab?.(LiveChatBottomNavBarState.HOME)}
      />
      <LiveChatBottomNavBarItem
        icon={IconMessenger}
        isActive={currentTab == LiveChatBottomNavBarState.MESSAGE}
        toggleActive={() => setTab?.(LiveChatBottomNavBarState.MESSAGE)}
      />
      <LiveChatBottomNavBarItem
        icon={IconInfo}
        isActive={currentTab == LiveChatBottomNavBarState.FAQ}
        toggleActive={() => setTab?.(LiveChatBottomNavBarState.FAQ)}
      />
    </div>
  );
};
