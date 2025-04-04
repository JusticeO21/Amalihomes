import Image from "next/image";
import { Container } from "@amalihomes/ui/components/container";
import { fetchHeroSection } from "../../lib/contentful/heroSectionService";
import { Asset } from "contentful";
import { getContentfulImage } from "utils/contentful";
import { ButtonGroup } from "./button-group";

async function Hero() {
  const heroData = await fetchHeroSection();

  if (!heroData?.headline || !heroData?.heroImage) {
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
      heroImage={heroData.heroImage as Asset}
    />
  );
}

interface HeroViewProps {
  headline: string;
  subtext: string;
  ctaText: string;
  ctaLink: string;
  secondaryCtaLink: string;
  secondaryCtaText: string;
  heroImage: Asset;
}

function HeroView({
  headline,
  subtext,
  ctaText,
  ctaLink,
  secondaryCtaText,
  secondaryCtaLink,
  heroImage,
}: HeroViewProps) {
  const { imageUrl, imageAlt } = getContentfulImage(heroImage, `/images/hero.png`, `Amali Homes`);

  return (
    <section
      role="banner"
      aria-label="Amali Homes Hero Section"
    >
      <Container className="grid lg:grid-cols-2 md:gap-12 h-[802.06px] sm:h-[1053px] lg:h-[687px]">
        <TextContent
          headline={headline}
          subtext={subtext}
          ctaText={ctaText}
          ctaLink={ctaLink}
          secondaryCtaText={secondaryCtaText}
          secondaryCtaLink={secondaryCtaLink}
        />
        <HeroImage
          imageUrl={imageUrl}
          imageAlt={imageAlt}
        />
      </Container>
    </section>
  );
}

interface TextContentProps {
  headline: string;
  subtext: string;
  ctaText: string;
  ctaLink: string;
  secondaryCtaLink: string;
  secondaryCtaText: string;
}

function TextContent({ headline, subtext, ctaText, ctaLink, secondaryCtaText, secondaryCtaLink }: TextContentProps) {
  return (
    <Container
      aria-labelledby="hero-heading"
      paddingX={0}
      paddingY={0}
    >
      <h1
        id="hero-heading"
        className="leading-32 text-h6 sm:text-h4 md:text-56 lg:text-48 font-bold md:leading-56 tracking-tight mb-24 text-black"
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
}

interface HeroImageProps {
  imageUrl: string;
  imageAlt: string;
}

function HeroImage({ imageUrl, imageAlt }: HeroImageProps) {
  return (
    <Container
      paddingX={0}
      paddingY={0}
      className="m-0"
    >
      <Image
        src={imageUrl}
        alt={imageAlt}
        width={600}
        height={400}
        priority
        className="w-full h-full"
      />
    </Container>
  );
}

export default Hero;
