import { cva, type VariantProps } from "class-variance-authority";
import { Container, TextPair } from "@amalihomes/ui";
import { cn } from "../../../lib/utils";
import Image from "next/image";

const textVariants = cva("", {
  variants: {
    text: {
      onDark: "text-white",
      onLight: "text-gray-900",
      primary: "text-primary",
      muted: "text-gray-600",
    },
  },
  defaultVariants: {
    text: "onLight",
  },
});

const overlayVariants = cva("", {
  variants: {
    overlay: {
      dark: "bg-gradient-to-b from-transparent to-black/80",
      light: "bg-gradient-to-b from-transparent to-white/20",
      primary: "bg-gradient-to-b from-transparent to-primary/70",
      none: "",
    },
  },
  defaultVariants: {
    overlay: "none",
  },
});

const heroVariants = cva("relative flex items-end justify-center  aspect-[16/9] ", {
  variants: {
    height: {
      sm: "h-[360px]",
      md: "h-[460px]",
      lg: "h-[560px]",
      xl: "h-[660px]",
      full: "min-h-screen",
    },
    contentPosition: {
      left: "justify-start",
      center: "justify-center",
      right: "justify-end",
    },
    background: {
      primary: "bg-primary",
      secondary: "bg-secondary",
      dark: "bg-gray-900",
      light: "bg-gray-50",
      none: "",
    },
  },
  defaultVariants: {
    height: "md",
    contentPosition: "center",
    background: "none",
  },
});

type HeroBaseProps = {
  title: string;
  description?: string;
  headerClass?: string;
  descriptionClass?: string;
  headerAs?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  align?: "left" | "center" | "right";
  className?: string;
  backgroundImage?: string;
  backgroundImageAlt?: string;
  imageQuality?: number;
  priority?: boolean;
};

export type HeroProps = HeroBaseProps &
  VariantProps<typeof heroVariants> &
  VariantProps<typeof textVariants> &
  VariantProps<typeof overlayVariants>;

export const AboutHero = ({
  title,
  description,
  className,
  height,
  headerClass,
  descriptionClass,
  backgroundImageAlt = "",
  priority,
  imageQuality,
  background,
  align,
  headerAs = "h2",
  overlay,
  text,
  backgroundImage,
}: HeroProps) => {
  return (
    <Container
      maxWidth="full"
      className={cn(
        heroVariants({
          height,
          background,
          className,
        }),
      )}
    >
      {backgroundImage && (
        <Image
          src={backgroundImage}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 100vw"
          alt={backgroundImageAlt}
          className="object-cover w-full h-full"
          quality={imageQuality}
          priority={priority}
        />
      )}

      {overlay !== "none" && (
        <div
          className={`absolute inset-0 z-0 ${overlayVariants({ overlay })}`}
          aria-hidden="true"
        />
      )}

      <TextPair
        className="z-10 max-w-[920px] mx-auto"
        spacing="sm"
        header={title}
        headerAs={headerAs}
        headerClass={`text-[32px] leading-40 md:text-48 md:leading-56 lg:text-56 lg:leading-64 ${textVariants({
          text,
        })} ${headerClass}`}
        description={description}
        descriptionClass={` text-body leading-24 md:text-18 md:leading-26 ${textVariants({
          text,
        })} ${descriptionClass}`}
        align={align}
      />
    </Container>
  );
};

AboutHero.displayName = "AboutHero";
