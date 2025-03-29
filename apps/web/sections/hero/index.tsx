import { Container } from "@amalihomes/ui/components/container/index";

import Image from "next/image";
import type { FC } from "react";

const Hero: FC = () => {
  return (
    <section
      role="banner"
      aria-label="Amali Homes Hero Section"
    >
      <Container className="grid lg:grid-cols-2 md:gap-12 h-[802.06px] sm:h-[1053px] lg:h-[687px]">
        <Container
          aria-labelledby="hero-heading"
          paddingX={0}
          paddingY={0}
        >
          <h1
            id="hero-heading"
            className="leading-[32px] text-h6 sm:text-h4 md:text-[56px] lg:text-[48px] font-bold md:leading-[64px] tracking-tight mb-[40px]"
          >
            Quality Furniture for Every Home & Office
          </h1>
          <p className="leading-[24px] md:leading-[26px] text-body sm:text-[18px] text-muted-foreground mb-[40px] max-w-prose">
            Your ultimate destination for premium furniture that blends elegance, comfort, and functionality. Whether
            you're revamping your living room, upgrading your office ,we bring you an exquisite collection tailored to
            your taste
          </p>
          <Container
            paddingX={0}
            paddingY={0}
            maxWidth={"sm"}
            className="grid grid-cols-2 gap-x-4 mx-0"
          >
            {" "}
            <button
              type="button"
              className=" p-3 rounded-sm shadow-md transition"
              aria-label="Get started with Amali Homes"
            >
              shop now
            </button>
            <button
              type="button"
              className=" px-6 py-3 rounded-sm shadow-md transition "
              aria-label="Get started with Amali Homes"
            >
              shop now
            </button>
          </Container>
        </Container>

        <Container
          paddingX={0}
          paddingY={0}
          className="m-0"
        >
          <Image
            src="/images/hero-media-slider.png"
            alt="Modern house exterior"
            width={600}
            height={400}
            priority
            className="w-full h-full "
          />
        </Container>
      </Container>
    </section>
  );
};

export default Hero;
