import { Image, Typography } from "../../atoms";
import { WhyChooseUsCardProps } from "./types";

const WhyChooseUsCard = ({ title, description, iconUrl, iconAlt }: WhyChooseUsCardProps) => {
  return (
    <div
      className="space-y-24 w-full"
      aria-label={title}
    >
      <figure
        id={`src-${iconAlt ?? title}`}
        className="bg-brand-fill rounded-lg p-14 w-[64px] h-[64px] relative"
        aria-label={iconAlt ?? title}
        role="figure"
      >
        <Image
          src={iconUrl}
          alt={iconAlt ?? title}
          width={64}
          height={64}
          id={`img-${iconUrl}`}
          className="w-full object-cover"
        />
      </figure>
      <div className="space-y-16 md:w-[379px]">
        <Typography
          variant="h6"
          className="text-20 text-gray-950 font-semibold"
        >
          {title}
        </Typography>
        <Typography
          variant="p"
          className="text-16 text-gray-600"
        >
          {description}
        </Typography>
      </div>
    </div>
  );
};

export default WhyChooseUsCard;
