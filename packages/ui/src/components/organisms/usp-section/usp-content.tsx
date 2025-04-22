import { UspCard, UspCardList } from "./usp-card-list";
import { UspContentWrapper } from "./usp-content-wrapper";
import { UspHeader } from "./usp-header";

export type UspContentProps = {
  heading: string;
  description: string;
  cards: UspCard[];
};

export const UspContent = ({ heading, description, cards }: UspContentProps) => {
  return (
    <UspContentWrapper>
      <UspHeader
        heading={heading}
        description={description}
      />
      <UspCardList cards={cards} />
    </UspContentWrapper>
  );
};
