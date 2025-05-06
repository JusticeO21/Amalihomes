import { LiveChatFaqCard } from "./live-chat-faq-card";

export interface LiveChatFaqWindowProps {
  title: string;
  description: string;
  cards: {
    label: string;
    count: number;
  }[];
}

export const LiveChatFaqWindow = ({ title, description, cards }: LiveChatFaqWindowProps) => {
  return (
    <div className="flex flex-col gap-24 h-full">
      <div className="flex flex-col gap-8 flex-1">
        <h4 className="text-24 text-gray-950 font-bold">{title}</h4>
        <p className="text-16 text-gray-600">{description}</p>
      </div>
      <div className="rounded-md p-4 flex flex-col gap-4 w-full bg-gray-50">
        {cards.map((card, i) => (
          <LiveChatFaqCard
            {...card}
            key={`${card.label}-${i}`}
          />
        ))}
      </div>
    </div>
  );
};
