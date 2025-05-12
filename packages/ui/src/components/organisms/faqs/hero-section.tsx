import { Typography } from "../../atoms";

interface HeroSectionProps {
  backgroundImageUrl: string;
  backgroundImageAlt: string;
  title: string;
  description: string;
}

const FaqHeroSection = ({ backgroundImageAlt, backgroundImageUrl, title, description }: HeroSectionProps) => {
  return (
    <div
      className="w-full h-[528px] relative flex justify-center items-end px-32 pb-[128px] bg-no-repeat bg-center bg-cover"
      style={{ backgroundImage: `url(${backgroundImageUrl})` }}
      aria-label={backgroundImageAlt}
    >
      <div className={`absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#00000022] to-[#000000e3]`}></div>
      <div className={`relative z-10 text-center flex flex-col items-center space-y-16 md:space-y-20 `}>
        <Typography
          variant="h3"
          className={
            "!text-h3-sm md:!text-40 lg:!text-48 text-white font-semibold leading-40 md:leading-48 lg:leading-56 "
          }
        >
          {title}
        </Typography>
        <Typography
          variant="p"
          className={`text-16 md:text-18 text-white font-normal leading-24 md:leading-26 max-w-[328px] md:max-w-[563px] lg:max-w-[864px]`}
        >
          {description}
        </Typography>
      </div>
    </div>
  );
};

export default FaqHeroSection;
