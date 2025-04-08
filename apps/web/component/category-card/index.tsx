import { Container } from "@amalihomes/ui/components/container";
import Image from "next/image";

interface CategoryCardProps {
  imageURL: string;
  title: string;
}

function CategoryCard({ imageURL, title }: CategoryCardProps) {
  return (
    <Container
      paddingX={0}
      paddingY={0}
      className="grid grid-cols-1 gap-[24px] text-center min-w-[203px] sm:min-w-[240px] md:min-w-[361px]"
    >
      <Container
        paddingX={0}
        paddingY={0}
        className="m-0 p-0"
      >
        <Image
          src={imageURL}
          alt="Modern house exterior"
          width={600}
          height={400}
          priority
          className="w-full h-full"
        />
      </Container>
      <h3 className="text-[20px] font-bold leading-[28px] tracking-[0%]">{title}</h3>
    </Container>
  );
}

export default CategoryCard;
