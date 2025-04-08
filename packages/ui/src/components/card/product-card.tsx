"use client";

import { cva, VariantProps } from "class-variance-authority";
import { FigureProps } from "./types";
import { cn } from "../../lib/utils";

const figureVariants = cva("", {
  variants: {
    borderRadius: {
      default: "rounded",
      none: "rounded-none",
      md: "rounded-md",
      lg: "rounded-xl",
      full: "rounded-full",
    },
  },
  defaultVariants: {
    borderRadius: "default",
  },
});

const ProductCard = ({
  src,
  alt,
  className,
  caption,
  borderRadius,
  isCategory = false,
}: FigureProps & VariantProps<typeof figureVariants>) => {
  return (
    <figure
      id={`figure-${src}`}
      className={`flex flex-col gap-20 items-center`}
    >
      <img
        src={src}
        alt={alt}
        id={`img-${src}`}
        className={cn(
          figureVariants({ borderRadius }),
          isCategory
            ? "min-w-[203px] h-[203px] sm:min-w-[270px] sm:h-[270px] md:min-w-[361px] md:h-[361px]"
            : "min-w-[236px] h-[316px] sm:min-w-[316px] sm:h-[422px] md:min-w-[421px] md:h-[526px]",
          "object-cover relative hover:brightness-75 transition-all duration-300",
          className,
        )}
      />
      {caption && (
        <figcaption
          id={`caption-${caption}`}
          className={cn(
            isCategory ? "text-[7.88px] sm:text-sm md:text-20" : "text-18 md:text-20",
            "text-Grey-text-weak font-semibold text-center",
          )}
        >
          {caption}
        </figcaption>
      )}
    </figure>
  );
};

export default ProductCard;
