import { liveChatLoader } from "./live-chat-loader";
import { LiveChatSection } from "./live-chat-section";

export const AppLiveChat = async () => {
  const liveChatWidowData = await liveChatLoader();
  return <LiveChatSection data={liveChatWidowData} />;
};
