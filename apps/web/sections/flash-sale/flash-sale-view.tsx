"use client";
import { FlashSaleCard } from "@amalihomes/ui/components/card";
import { Container } from "@amalihomes/ui/components/container";
import { useRouter } from "next/navigation";
import { getContentfulImage } from "@/utils/contentful";
import { FlashSaleViewProps } from "@/sections/types";

export const FlashSaleView = ({ title, description, ctaUrl, image }: FlashSaleViewProps) => {
  const { imageUrl, imageAlt } = getContentfulImage(image, `/images/flashsale-image.png`, `Flash sale promotion`);
  const router = useRouter();
  const handleButtonClick = (link: string) => {
    router.push(link);
  };
  return (
    <Container>
      <FlashSaleCard
        onClick={() => handleButtonClick(ctaUrl)}
        title={title}
        description={description}
        src={imageUrl}
        alt={imageAlt}
      />
    </Container>
  );
};
