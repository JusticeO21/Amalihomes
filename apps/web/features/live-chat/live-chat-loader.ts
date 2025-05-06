import { getEntry } from "@/lib/contentful/contentful";
import { TypeLiveSupportSkeleton } from "@/lib/contentful/generated/types/TypeLiveSupport";
import { LiveChatProps } from "./live-chat.types";

export const liveChatLoader = async (): Promise<LiveChatProps> => {
  const response = await getEntry<TypeLiveSupportSkeleton>("liveSupport", { include: 5 });
  const data = response.fields as unknown as LiveChatProps;
  return data;
};
