"use client";
import { Container } from "@amalihomes/ui/components/container";
import Link from "next/link";

interface ButtonGroupProps {
  ctaText: string;
  ctaLink: string;
  secondaryCtaLink: string;
  secondaryCtaText: string;
}

export const ButtonGroup = ({ ctaText, ctaLink, secondaryCtaText, secondaryCtaLink }: ButtonGroupProps) => {
  return (
    <Container
      paddingX={0}
      paddingY={0}
      className="w-full flex flex-col md:flex-row  gap-x-[23px] gap-y-8 mx-0"
    >
      <Link
        href={ctaLink}
        className=" leading-24 bg-brand shadow-sm py-12 flex rounded-sm text-white justify-center items-center hover:bg-brand-dark focus:bg-bg-brand-darker disabled:bg-brand-fill disabled:text-brand-stroke-weak px-24"
        aria-label={ctaText}
      >
        {ctaText}
      </Link>
      <Link
        href={secondaryCtaLink}
        className=" leading-24 border border-brand py-12 flex justify-center items-center px-24 rounded-sm  text-brand hover:text-brand-light hover:border-brand-dark focus:text-brand-dark focus:border-brand-darker disabled:bg-brand-fill disabled:border-brand-fill disabled:text-brand-stroke-weak"
        aria-label={secondaryCtaText}
      >
        {secondaryCtaText}
      </Link>
    </Container>
  );
};
