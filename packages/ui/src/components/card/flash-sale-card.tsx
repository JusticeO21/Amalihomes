"use client";
import { FlashSaleCardProps } from "./types";

const FlashSaleCard = ({ imageAlt, imageUrl, ctaLabel, ctaUrl, promoCode, title, description }: FlashSaleCardProps) => {
  return (
    <div
      className="flex !flex-col rounded-lg items-between overflow-hidden min-h-[616px] md:min-h-[314px] md:h-[314px] lg:h-[442px] w-full md:!flex-row
    "
    >
      <figure className="h-[312px] md:h-full md:w-[50%] relative">
        <img
          className="object-cover w-full h-full"
          alt={imageAlt}
          src={imageUrl}
        />
      </figure>
      <div className="bg-Grey-fill-strong flex-1 flex flex-col justify-center gap-40 px-24 py-40 text-white">
        <h6 className="font-bold text-20 md:text-h6-lg">{title}</h6>
        <p className="text-body">{description}</p>
        <a
          href={promoCode ? `${ctaUrl}?code=${promoCode}` : ctaUrl}
          className="rounded-sm bg-brand shadow-sm hover:bg-brand-dark focus:bg-brand-darker text-white font-bold text-16 py-12 px-24 md:w-fit"
        >
          {ctaLabel}
        </a>
      </div>
    </div>
  );
};

export default FlashSaleCard;
