"use client";
import { Container } from "@amalihomes/ui/components/container";
import { Button } from "@amalihomes/ui/components/button";
import { useRouter } from "next/navigation";

interface ButtonGroupProps {
  ctaText: string;
  ctaLink: string;
  secondaryCtaLink: string;
  secondaryCtaText: string;
}

export function ButtonGroup({ ctaText, ctaLink, secondaryCtaText, secondaryCtaLink }: ButtonGroupProps) {
  const router = useRouter();
  const handleButtonClick = (link: string) => {
    router.push(link);
  };

  return (
    <Container
      paddingX={0}
      paddingY={0}
      maxWidth={"sm"}
      className="grid md:grid-cols-2 gap-x-[23px] gap-y-8 mx-0"
    >
      <Button
        type="button"
        className="justify-center cursor-pointer"
        aria-label="Get started with Amali Homes"
        onClick={() => handleButtonClick(ctaLink)}
        variant={"primary"}
      >
        {ctaText}
      </Button>
      <Button
        type="button"
        variant={"secondary"}
        className="justify-center cursor-pointer"
        aria-label="Get started with Amali Homes"
        onClick={() => handleButtonClick(secondaryCtaLink)}
      >
        {secondaryCtaText}
      </Button>
    </Container>
  );
}
