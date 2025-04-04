import { Container } from "@amalihomes/ui/components/container";
import Image from "next/image";
import { fetchUspSection } from "../../lib/contentful/why-choose-us-service";
import { Asset, Entry, EntrySkeletonType } from "contentful";
import Card from "../../component/card";
import { getContentfulImage } from "utils/contentful";

interface UspCardFields {
  title: string;
  description: string;
  icon: Asset;
}

type UspCardSkeleton = EntrySkeletonType<UspCardFields, "uspCard">;

async function Usp() {
  const uspData = await fetchUspSection();

  if (!uspData?.heading || !uspData?.cards?.length || !uspData?.image) {
    return null;
  }

  return (
    <UspSectionView
      heading={uspData.heading as string}
      description={uspData.description as string}
      cards={uspData.cards as Entry<UspCardSkeleton>[]}
      image={uspData.image as Asset}
    />
  );
}

interface UspSectionViewProps {
  heading: string;
  description: string;
  cards: Entry<UspCardSkeleton>[];
  image: Asset;
}

function UspSectionView({ heading, description, cards, image }: UspSectionViewProps) {
  const { imageUrl, imageAlt } = getContentfulImage(
    image,
    "/images/usp-image.png",
    "A beautifully furnished living room",
  );

  return (
    <section
      aria-labelledby="usp-heading"
      aria-label="Unique selling points section"
      id="usp"
    >
      <Container className="grid lg:grid-cols-[1.8fr_1.2fr] gap-[47px] bg-white">
        <UspContent
          heading={heading}
          description={description}
          cards={cards}
        />
        <UspImage
          imageUrl={imageUrl}
          imageAlt={imageAlt}
        />
      </Container>
    </section>
  );
}

interface UspContentProps {
  heading: string;
  description: string;
  cards: Entry<UspCardSkeleton>[];
}

function UspContent({ heading, description, cards }: UspContentProps) {
  return (
    <Container
      paddingX={0}
      paddingY={0}
      className="grid gap-40 mx-0"
    >
      <UspHeader
        heading={heading}
        description={description}
      />
      <UspCardList cards={cards} />
    </Container>
  );
}

interface UspHeaderProps {
  heading: string;
  description: string;
}

function UspHeader({ heading, description }: UspHeaderProps) {
  return (
    <div className="p-0">
      <h2
        id="usp-heading"
        className="text-40 font-semibold leading-48 md:leading-64 tracking-tight mb-24"
      >
        {heading}
      </h2>
      <p className="leading-26 text-18 text-muted-foreground mb-24  text-Gray-fill-bright">{description}</p>
    </div>
  );
}

interface UspCardListProps {
  cards: Entry<UspCardSkeleton>[];
}

function UspCardList({ cards }: UspCardListProps) {
  return (
    <Container
      paddingX={0}
      paddingY={0}
      className="grid grid-cols-1 md:grid-cols-2 gap-24 mx-0"
      role="list"
    >
      {cards.map((cardEntry) => (
        <UspCard
          key={cardEntry.sys.id}
          cardEntry={cardEntry}
        />
      ))}
    </Container>
  );
}

interface UspCardProps {
  cardEntry: Entry<UspCardSkeleton>;
}

function UspCard({ cardEntry }: UspCardProps) {
  const { title, description, icon } = cardEntry.fields as { title: string; description: string; icon: unknown };
  const { imageUrl: cardImageUrl } = getContentfulImage(icon as Asset, `/images/usp-${title}.png`, `${title} card`);

  return (
    <Card
      imageUrl={cardImageUrl}
      title={title}
      description={description}
    />
  );
}

interface UspImageProps {
  imageUrl: string;
  imageAlt: string;
}

function UspImage({ imageUrl, imageAlt }: UspImageProps) {
  return (
    <div className=" hidden lg:block m-0 rounded-md overflow-hidden">
      <Image
        src={imageUrl}
        alt={imageAlt}
        width={482}
        height={400}
        priority
        className="w-full h-full object-cover"
      />
    </div>
  );
}

export default Usp;
