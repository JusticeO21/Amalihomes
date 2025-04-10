import { fetchHeroSection } from "@/lib/contentful/heroSectionService";
import { HeroViewProps, TextContentProps } from "@/sections/types";
import { getContentfulImage } from "@/utils/contentful";
import { HeroCarousel } from "@amalihomes/ui/components/carousel";
import { Container } from "@amalihomes/ui/components/container";
import { Asset } from "contentful";
import { ButtonGroup } from "./button-group";

const Hero = async () => {
  const heroData = await fetchHeroSection();

  if (!heroData?.headline || !heroData?.heroImages) {
    return null;
  }

  return (
    <HeroView
      headline={heroData.headline as string}
      subtext={heroData.subtext as string}
      ctaText={heroData.ctaText as string}
      ctaLink={heroData.ctaLink as string}
      secondaryCtaText={heroData.secondaryCtaText as string}
      secondaryCtaLink={heroData.secondaryCtaUrl as string}
      heroImages={heroData.heroImages as Asset[]}
    />
  );
};

const HeroView = ({
  headline,
  subtext,
  ctaText,
  ctaLink,
  secondaryCtaText,
  secondaryCtaLink,
  heroImages,
}: HeroViewProps) => {
  return (
    <section
      role="banner"
      aria-label="hero-heading"
    >
      <Container
        className="flex flex-col lg:flex-row gap-y-80 lg:gap-x-[57px] min-h-[80vh]"
      >
        <TextContent
          headline={headline}
          subtext={subtext}
          ctaText={ctaText}
          ctaLink={ctaLink}
          secondaryCtaText={secondaryCtaText}
          secondaryCtaLink={secondaryCtaLink}
        />
        <HeroCarousel
          images={heroImages.map((image, index) =>
            getContentfulImage(image, `/images/hero.png`, `${headline} - Image ${index + 1}`),
          )}
        />
      </Container>
    </section>
  );
};

const TextContent = ({ headline, subtext, ctaText, ctaLink, secondaryCtaText, secondaryCtaLink }: TextContentProps) => {
  return (
    <Container
      paddingX={0}
      paddingY={0}
      className="lg:max-w-[531px] mx-0"
    >
      <h1
        id="hero-heading"
        className="leading-32 break-words text-24 md:text-56 lg:text-48 font-bold md:leading-56 tracking-[0%] mb-24 text-black"
      >
        {headline}
      </h1>
      <p className="leading-24 md:leading-26 text-16 md:text-18 text-muted-foreground mb-40 text-Gray-fill-bright font-normal">
        {subtext}
      </p>
      <ButtonGroup
        ctaText={ctaText}
        ctaLink={ctaLink}
        secondaryCtaLink={secondaryCtaLink}
        secondaryCtaText={secondaryCtaText}
      />
    </Container>
  );
};

export default Hero;
