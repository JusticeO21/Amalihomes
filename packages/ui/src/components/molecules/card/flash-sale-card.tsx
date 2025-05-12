"use client";

import { Button, Image, Typography } from "../../atoms";
import { FlashSaleViewProps } from "../../organisms";

const FlashSaleCard = ({ title, description, ctaUrl, imageUrl, imageAlt, ctaLabel, promoCode }: FlashSaleViewProps) => {
  return (
    <div
      className="flex !flex-col rounded-lg items-between overflow-hidden min-h-[616px] md:min-h-[314px] md:h-[314px] lg:min-h-[442px] w-full md:!flex-row
    "
    >
      <figure className="h-[312px] md:h-full md:w-[50%] relative">
        <Image
          className="object-cover w-full h-full"
          alt={imageAlt}
          src={imageUrl}
        />
      </figure>
      <div className="bg-Grey-fill-strong flex-1 flex flex-col justify-center gap-40 px-24 py-40 text-white">
        <div className="space-y-8">
          <Typography
            variant="h6"
            className="font-bold leading-28 md:leading-32 text-20 md:text-24"
          >
            {title}
          </Typography>
          <Typography className="text-16 leading-24 font-normal">{description}</Typography>
        </div>
        <Button
          className="md:w-fit text-16 font-bold justify-center leading-24 py-12 px-24"
          href={promoCode ? `${ctaUrl}?code=${promoCode}` : ctaUrl}
        >
          {ctaLabel}
        </Button>
      </div>
    </div>
  );
};

export default FlashSaleCard;
