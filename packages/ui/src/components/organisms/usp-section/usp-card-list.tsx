import { Container, WhyChooseUsCard } from "@amalihomes/ui";

export interface UspCard {
  id: string;
  title: string;
  description: string;
  iconUrl: string;
  iconAlt: string;
}
export type UspCardListProps = {
  cards: UspCard[];
};

export const UspCardList = ({ cards }: UspCardListProps) => {
  return (
    <Container
      paddingX={0}
      paddingY={0}
      className="grid grid-cols-1 md:grid-cols-2 gap-24 mx-0"
      role="list"
    >
      {cards.map(({ id, title, description, iconUrl, iconAlt }) => (
        <WhyChooseUsCard
          key={id}
          title={title as unknown as string}
          description={description as unknown as string}
          iconUrl={iconUrl}
          iconAlt={iconAlt}
        />
      ))}
    </Container>
  );
};
