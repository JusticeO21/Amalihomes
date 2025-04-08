"use client";
import { Button } from "../button";
import { FlashSaleCardProps } from "./types";

const FlashSaleCard = ({ onClick, src, alt, title, description }: FlashSaleCardProps) => {
  return (
    <div
      className="flex !flex-col rounded-lg items-between overflow-hidden min-h-[616px] md:min-h-[314px] md:h-[314px] lg:h-[442px] w-full md:!flex-row
    "
    >
      <figure className="h-[312px] md:h-full md:w-[50%] relative">
        <img
          className="object-cover w-full h-full"
          alt={alt}
          src={src}
        />
      </figure>
      <div className="bg-Grey-fill-strong flex-1 flex flex-col justify-center gap-40 px-24 py-40 text-white">
        <h6 className="font-bold text-20 md:text-h6-lg">{title}</h6>
        <p className="text-body">{description}</p>
        <Button
          onClick={onClick}
          className="md:w-fit"
        >
          Learn More
        </Button>
      </div>
    </div>
  );
};

export default FlashSaleCard;
