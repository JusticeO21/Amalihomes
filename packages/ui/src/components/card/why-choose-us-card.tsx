import { WhyChooseUsCardProps } from "./types";

const WhyChooseUsCard = ({ title, description, src, alt }: WhyChooseUsCardProps) => {
  return (
    <div className="space-y-24 w-full">
      <figure
        id={`src-${alt ?? title}`}
        className="bg-brand-fill rounded-lg p-14 w-[64px] h-[64px] relative"
      >
        <img
          src={src}
          alt={alt ?? title}
          className="w-full object-cover"
        />
      </figure>
      <h6 className="text-20 text-Grey-text-strong">{title}</h6>
      <p className="text-body text-Grey-text-weak">{description}</p>
    </div>
  );
};

export default WhyChooseUsCard;
