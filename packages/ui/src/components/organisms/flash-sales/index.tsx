"use client";
import { Container, FlashSaleCard } from "@amalihomes/ui";
export type FlashSaleViewProps = {
  title: string;
  description: string;
  ctaUrl: string;
  ctaLabel: string;
  imageUrl: string;
  imageAlt: string;
  promoCode?: string;
};

export const FlashSale = ({ title, description, ctaUrl, imageUrl, imageAlt, ctaLabel }: FlashSaleViewProps) => {
  return (
    <Container>
      <FlashSaleCard
        ctaUrl={ctaUrl}
        title={title}
        description={description}
        imageUrl={imageUrl}
        imageAlt={imageAlt}
        ctaLabel={ctaLabel}
      />
    </Container>
  );
};
