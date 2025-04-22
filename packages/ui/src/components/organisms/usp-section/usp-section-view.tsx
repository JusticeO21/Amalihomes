import { UspCard } from "./usp-card-list";
import { UspContent } from "./usp-content";
import { UspImage } from "./usp-image";
import { UspSectionWrapper } from "./usp-section-wrapper";

export type UspSectionViewProps = {
  heading: string;
  description: string;
  cards: UspCard[];
  imageUrl: string;
  imageAlt: string;
};

export const UspSectionView = ({ heading, description, cards, imageUrl, imageAlt }: UspSectionViewProps) => {
  return (
    <UspSectionWrapper>
      <UspContent
        heading={heading}
        description={description}
        cards={cards}
      />
      <UspImage
        imageUrl={imageUrl}
        imageAlt={imageAlt}
      />
    </UspSectionWrapper>
  );
};
