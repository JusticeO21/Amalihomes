import React from "react";
import { Container } from "@amalihomes/ui/components/container";
import Image from "next/image";

interface CardProps {
  imageUrl: string;
  title: string;
  description: string;
}
function Card({ imageUrl, title, description }: CardProps) {
  return (
    <Container
      paddingX={0}
      paddingY={0}
      className="grid gap-[24px] "
    >
      <Container
        paddingX={0}
        paddingY={0}
        className="w-[64px] h-[64px] m-0"
        borderColor={"default"}
      >
        <Image
          src={imageUrl}
          alt="Modern house exterior"
          width={600}
          height={400}
          priority
          className="w-full h-full "
        />
      </Container>
      <Container
        paddingX={0}
        paddingY={0}
        className="grid gap-[16px]"
      >
        <h3 className="text-[20px] font-bold leading-[28px] tracking-[0%]">{title}</h3>
        <p className="text-body leading-[24px] tracking-[0%] text-Gray-fill-bright">{description}</p>
      </Container>
    </Container>
  );
}

export default Card;
