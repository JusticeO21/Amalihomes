import { Image } from "../../atoms";
import { ImageProps } from "./live-chat.types";

export interface LiveChatEnquiryCardProps {
  label: string;
  icon: ImageProps;
  onClick?(): void;
}
export const LiveChatEnquiryCard = ({ icon, label, onClick }: LiveChatEnquiryCardProps) => {
  return (
    <button
      className="flex gap-8 p-16 rounded-lg bg-white w-full hover:bg-brand-50 transition-colors duration-200 items-center "
      onClick={onClick}
    >
      <div className="w-48 h-48 rounded-full flex items-center justify-center bg-brand-50">
        <Image
          src={icon.url}
          alt={icon.alt}
          width={24}
          height={24}
        />
      </div>
      <h6 className="text-16 font-bold text-gray-950">{label}</h6>
    </button>
  );
};
