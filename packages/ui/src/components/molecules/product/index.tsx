import Link from "next/link";
import { Image, Rating } from "../../atoms";

import { IconCart } from "../../icons";
import { cn } from "../../../lib/utils";
import { Discount } from "./product-discount";

type ProductCardType = "default" | "flash-sale" | "recommended";

interface ProductProps {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  imageAlt: string;
  discount?: number;
  rating: {
    rating: number;
    reviewCount: number;
  };
  cardType?: ProductCardType;
  className?: string;
}

export const Product = ({
  id,
  name,
  price,
  imageUrl,
  imageAlt,
  discount,
  rating,
  cardType,
  className,
}: ProductProps) => {
  return (
    <div className={cn("flex flex-col w-254  hover:shadow-md relative gap-16", className)}>
      <div>
        <Image
          className="w-full h-184 rounded-md"
          src={imageUrl}
          alt={imageAlt}
          width={254}
          height={184}
        />
      </div>
      <div className={"flex flex-col gap-8"}>
        <h2 className="text-20 font-bold leading-28 line-clamp-2 hover:text-brand-500">
          <Link
            href={`/shop/products/${id}`}
            role="link"
          >
            {name}
          </Link>
        </h2>
        <div className={"flex flex-col gap-8"}>
         <Rating rating={rating} />
          <Discount
            discount={discount}
            price={price}
          />
        </div>
      </div>
      {cardType === "flash-sale" && discount && (
        <div className="absolute top-9 right-[8.2px] bg-brand-500 rounded-sm px-16 py-2">
          <p className="text-12 font-bold leading-28 text-white">-{discount}%</p>
        </div>
      )}
      {cardType === "default" && (
        <Link
          href={""}
          className="h-50 w-50 rounded-full flex items-center justify-center absolute top-12 right-12 bg-brand-500"
        >
          <IconCart
            color="white"
            width={24}
            height={24}
          />
        </Link>
      )}
    </div>
  );
};
