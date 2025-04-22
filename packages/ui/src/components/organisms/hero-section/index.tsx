import { Button, Container, HeroCarousel } from "@amalihomes/ui";

export type Asset = { imageUrl: string; imageAlt: string };
export type HeroViewProps = {
  headline: string;
  subtext: string;
  ctaText: string;
  ctaLink: string;
  secondaryCtaLink: string;
  secondaryCtaText: string;
  heroImages: Asset[];
};

export interface ButtonGroupProps {
  ctaText: string;
  ctaLink: string;
  secondaryCtaText: string;
  secondaryCtaLink: string;
}

export interface HeroTextContentProps extends ButtonGroupProps {
  headline: string;
  subtext: string;
}

export interface HeroCarouselWrapperProps {
  images: Asset[];
  altTextPrefix: string;
  fallbackImagePath?: string;
}

export interface HeroSectionProps extends HeroTextContentProps {
  heroImages: Asset[];
}

export const ButtonGroup = ({ ctaText, ctaLink, secondaryCtaText, secondaryCtaLink }: ButtonGroupProps) => {
  return (
    <Container
      paddingX={0}
      paddingY={0}
      className="w-full flex flex-col md:flex-row gap-x-[23px] gap-y-8 mx-0"
    >
      <Button
        href={ctaLink}
        className="leading-24 bg-brand shadow-sm py-12 flex rounded-sm text-white justify-center items-center hover:bg-brand-dark focus:bg-bg-brand-darker disabled:bg-brand-fill disabled:text-brand-stroke-weak px-24"
        aria-label={ctaText}
      >
        {ctaText}
      </Button>
      <Button
        href={secondaryCtaLink}
        className="leading-24 border border-brand py-12 flex justify-center items-center px-24 rounded-sm text-brand hover:text-brand-light hover:border-brand-dark focus:text-brand-dark focus:border-brand-darker disabled:bg-brand-fill disabled:border-brand-fill disabled:text-brand-stroke-weak bg-white hover:bg-white"
        aria-label={secondaryCtaText}
      >
        {secondaryCtaText}
      </Button>
    </Container>
  );
};

export const HeroTextContent = ({
  headline,
  subtext,
  ctaText,
  ctaLink,
  secondaryCtaText,
  secondaryCtaLink,
}: HeroTextContentProps) => {
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

export const HeroCarouselWrapper = ({ images }: HeroCarouselWrapperProps) => {
  return <HeroCarousel images={images} />;
};

export const Hero = ({
  headline,
  subtext,
  ctaText,
  ctaLink,
  secondaryCtaText,
  secondaryCtaLink,
  heroImages,
}: HeroSectionProps) => {
  return (
    <section
      role="banner"
      aria-label="hero-heading"
    >
      <Container className="flex flex-col lg:flex-row gap-y-80 lg:gap-x-[57px]">
        <HeroTextContent
          headline={headline}
          subtext={subtext}
          ctaText={ctaText}
          ctaLink={ctaLink}
          secondaryCtaText={secondaryCtaText}
          secondaryCtaLink={secondaryCtaLink}
        />
        <HeroCarouselWrapper
          images={heroImages}
          altTextPrefix={headline}
        />
      </Container>
    </section>
  );
};
