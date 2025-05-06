"use client";
import Link from "next/link";
import { IconForward } from "../../icons/icon-forward";

export interface LiveChatFaqCardProps {
  label: string;
  count: number;
}

export const LiveChatFaqCard = ({ label, count }: LiveChatFaqCardProps) => {
  const query = new URLSearchParams({ faq: label }).toString();

  const questionLabel = count === 0 ? "No questions" : `${count} question${count === 1 ? "" : "s"}`;

  return (
    <Link
      className="cursor-pointer bg-white rounded-lg p-16 w-full flex flex-row items-center justify-between hover:bg-brand-50"
      href={`/faqs?${query}`}
    >
      <div className="flex flex-col gap-8">
        <h6 className="text-14 font-bold text-gray-950">{label}</h6>
        <p className="text-14 text-gray-600">{questionLabel}</p>
      </div>
      <IconForward />
    </Link>
  );
};
