import { cva, VariantProps } from "class-variance-authority";
import { cn } from "../../../lib/utils";
import { Image } from "../../atoms";
import { FigureProps } from "./types";

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
    borderRadius: "md",
  },
});

const ProductCard = ({
  imageUrl,
  imageAlt,
  cardClassName,
  imageClassName,
  caption,
  captionClassName,
  borderRadius,
}: FigureProps & VariantProps<typeof figureVariants>) => {
  return (
    <figure
      id={`figure-${imageUrl}`}
      className={cn(`flex flex-col gap-24 items-center`, cardClassName)}
      aria-label={caption ?? imageAlt ?? "image"}
      role="figure"
    >
      <Image
        src={imageUrl}
        alt={imageAlt}
        id={`img-${imageUrl}`}
        className={cn(
          figureVariants({ borderRadius }),
          "min-w-[203px] h-[203px] md:min-w-[270px] md:h-[270px] lg:min-w-[361px] lg:h-[361px] object-cover relative hover:brightness-75 transition-all duration-300 ",
          imageClassName,
        )}
      />
      {caption && (
        <figcaption
          id={`caption-${caption}`}
          className={cn("text-14 md:text-20 text-gray-600 font-normal md:font-semibold text-center", captionClassName)}
        >
          {caption}
        </figcaption>
      )}
    </figure>
  );
};

export default ProductCard;
