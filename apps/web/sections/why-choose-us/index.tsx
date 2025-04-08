import { Container } from "@amalihomes/ui/components/container";
import { WhyChooseUsCard } from "@amalihomes/ui/components/card";
import Image from "next/image";
import { Asset, Entry } from "contentful";
import {
  UspCardListProps,
  UspCardSkeleton,
  UspContentProps,
  UspHeaderProps,
  UspImageProps,
  UspSectionViewProps,
} from "@/sections/types";
import { fetchUspSection } from "@/lib/contentful/why-choose-us-service";
import { getContentfulImage } from "@/utils/contentful";

const Usp = async () => {
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
};

const UspSectionView = ({ heading, description, cards, image }: UspSectionViewProps) => {
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
};

const UspContent = ({ heading, description, cards }: UspContentProps) => {
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
};

const UspHeader = ({ heading, description }: UspHeaderProps) => {
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
};

const UspCardList = ({ cards }: UspCardListProps) => {
  return (
    <Container
      paddingX={0}
      paddingY={0}
      className="grid grid-cols-1 md:grid-cols-2 gap-24 mx-0"
      role="list"
    >
      {cards.map((cardEntry) => (
        <WhyChooseUsCard
          key={cardEntry.sys.id}
          title={cardEntry.fields.title as unknown as string}
          description={cardEntry.fields.description as unknown as string}
          src={
            getContentfulImage(
              cardEntry.fields.icon as unknown as Asset,
              `/images/usp-${cardEntry.fields.title}.png`,
              `${cardEntry.fields.title} card`,
            ).imageUrl
          }
          alt={
            getContentfulImage(
              cardEntry.fields.icon as unknown as Asset,
              `/images/usp-${cardEntry.fields.title}.png`,
              `${cardEntry.fields.title} card`,
            ).imageAlt
          }
        />
      ))}
    </Container>
  );
};

const UspImage = ({ imageUrl, imageAlt }: UspImageProps) => {
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
};

export default Usp;
