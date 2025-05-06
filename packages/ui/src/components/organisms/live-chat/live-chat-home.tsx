import { Avatar } from "../../atoms";
import { LiveChatEnquiryCard } from "./live-chat-enquiry-card";
import { ImageProps } from "./live-chat.types";

export interface LiveChatHomeProps {
  introduction: string;
  description: string;
  image: ImageProps;
  cards: {
    label: string;
    icon: ImageProps;
    onClick?(): void;
  }[];
}

export const LiveChatHome = ({ image, cards, introduction, description }: LiveChatHomeProps) => {
  return (
    <div className="flex flex-col gap-24  h-full">
      <div className="flex flex-col flex-1">
        <div>
          <Avatar
            src={image.url}
            alt={image?.alt ?? ""}
            className="w-64 h-64"
          />
        </div>

        <h4 className="text-24 text-gray-950 font-bold">{introduction}</h4>
        <p className="text-16 text-gray-600">{description}</p>
      </div>
      <div className="rounded-md p-4 flex flex-col gap-4 w-full bg-gray-50">
        {cards.map((card, i) => (
          <LiveChatEnquiryCard
            key={`${card.label}-${i}`}
            icon={card.icon}
            label={card.label}
            onClick={card.onClick}
          />
        ))}
      </div>
    </div>
  );
};
