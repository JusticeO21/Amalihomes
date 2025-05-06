import { getEntry } from "@/lib/contentful/contentful";
import { LiveChatProps } from "./live-chat.types";
import { TypeLiveSupportSkeleton } from "@/lib/contentful/types/TypeLiveSupport";

export const liveChatLoader = async (): Promise<LiveChatProps> => {
  const response = await getEntry<TypeLiveSupportSkeleton>("liveSupport", { include: 5 });
  const data = response.fields as unknown as LiveChatProps;
  return data;
};
