import React from "react";
import { AboutHero } from "@amalihomes/ui";
import { AboutUsContent } from "./about-page.types";
import { getContentfulImage } from "utils/contentful";

export const AboutContent = (data: AboutUsContent) => {
  const { title, description, mainImage } = data;

  const { imageUrl: heroImageUrl, imageAlt: heroImageAlt } = getContentfulImage(mainImage, "_", "_");
  return (
    <main>
      <section>
        <AboutHero
          title={title}
          description={description}
          overlay="dark"
          text={"onDark"}
          priority={true}
          backgroundImage={heroImageUrl}
          backgroundImageAlt={heroImageAlt}
        />
      </section>
    </main>
  );
};
