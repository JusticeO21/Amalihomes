import { IconStar } from "../../icons/icon-star";

export function Rating({ rating }: { rating: { rating: number; reviewCount: number } }) {
  return (
    <div className="flex gap-4 items-center justify-start text-16 text-5D5D5D">
      <span className="flex gap-4 w-min">
        {Array.from({ length: Number(rating.rating) }).map((_, index) => (
          <IconStar key={index} />
        ))}
      </span>
      <span>
        {" "}
        {rating.rating} ({rating.reviewCount} Reviews)
      </span>
    </div>
  );
}
