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
    <section aria-label="Amali Homes Hero Section">
      <Container className="grid lg:grid-cols-2 md:gap-12 h-[802.06px] sm:h-[1053px] lg:h-[687px]">
        <TextContent
          headline={headline}
          subtext={subtext}
          ctaText={ctaText}
          ctaLink={ctaLink}
          secondaryCtaText={secondaryCtaText}
          secondaryCtaLink={secondaryCtaLink}
        />
        <HeroCarousel
          images={heroImages.map((image) => getContentfulImage(image, `/images/hero.png`, `Amali Homes`))}
        />
      </Container>
    </section>
  );
};

const TextContent = ({ headline, subtext, ctaText, ctaLink, secondaryCtaText, secondaryCtaLink }: TextContentProps) => {
  return (
    <Container
      aria-labelledby="hero-heading"
      paddingX={0}
      paddingY={0}
      className="lg:max-w-[531px] mx-0"
    >
      <h1
        id="hero-heading"
        className="leading-32 text-h6 sm:text-h4 md:text-56 lg:text-48 font-semibold md:leading-56 tracking-tight mb-24 text-black"
      >
        {headline}
      </h1>
      <p className="leading-24 md:leading-26 text-body sm:text-18 text-muted-foreground mb-40 max-w-prose text-Gray-fill-bright">
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
