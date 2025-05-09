import { UspCardList } from "../usp-section/usp-card-list";
import { UspContentWrapper } from "../usp-section/usp-content-wrapper";
import { UspHeader } from "../usp-section/usp-header";
import { UspImage } from "../usp-section/usp-image";
import { UspSectionWrapper } from "../usp-section/usp-section-wrapper";
import type { UspCard } from "../usp-section/usp-card-list";

export type KeyFeaturesSetionProps = {
  heading: string;
  description: string;
  cards: UspCard[];
  imageUrl: string;
  imageAlt: string;
  gridDirection?: "forward" | "reverse";
  headingClass?: string;
  descriptionClass?: string;
};
export const KeyFeaturesSetion = ({
  heading,
  description,
  cards,
  imageAlt,
  imageUrl,
  gridDirection,
  headingClass,
  descriptionClass,
}: KeyFeaturesSetionProps) => {
  return (
    <UspSectionWrapper gridClass={`${gridDirection === "reverse" ? "direction-rtl" : ""}`}>
      <UspContentWrapper className={`${gridDirection === "reverse" ? "direction-ltr" : ""}`}>
        <UspHeader
          heading={heading}
          description={description}
          headingClass={headingClass}
          descriptionClass={descriptionClass}
        />
        <UspCardList cards={cards} />
      </UspContentWrapper>
      <UspImage
        className="!block h-[357px] md:h-[560px] lg:!h-full"
        imageUrl={imageUrl}
        imageAlt={imageAlt}
        imageClass="!object-center"
      />
    </UspSectionWrapper>
  );
};
