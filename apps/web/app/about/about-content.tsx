import React from "react";

import {
  AboutHero,
  CompaniesMetrics as AchievementSection,
  KeyFeaturesSetion,
  LeadershipTeam,
  Showroom,
} from "@amalihomes/ui";
import { AboutUsContent } from "./about-page.types";
import { getContentfulImage } from "utils/contentful";
import { transformMetrics, transformUspCards, transformLeaders, transformShowroomData } from "./about-page.utils";

export const AboutContent = (data: AboutUsContent) => {
  const {
    title,
    description,
    mainImage,
    historyTitle,
    historyDescription,
    historyCards,
    uspTitle,
    uspDescription,
    uspImage,
    uspCards,
    teamTitle,
    teamDescription,
    teamCards,
    continents,
    showroomTitle,
    showroomDescription,
  } = data;
  const metrics = transformMetrics(historyCards);
  const features = transformUspCards(uspCards);
  const leaders = transformLeaders(teamCards);
  const showroom = transformShowroomData(continents);
  const { imageUrl: heroImageUrl, imageAlt: heroImageAlt } = getContentfulImage(mainImage, "_", "_");
  const { imageUrl: uspImageUrl, imageAlt: uspImageAlt } = getContentfulImage(uspImage, "_", "_");
  return (
    <main className="font-lato">
      <AboutHero
        title={title}
        description={description}
        overlay="dark"
        text={"onDark"}
        priority={true}
        backgroundImage={heroImageUrl}
        backgroundImageAlt={heroImageAlt}
      />

      <AchievementSection
        gridClassName="grid-cols-1 !gap-y-16"
        className="gap-32"
        titleClass="text-24 leading-32 md:text-32 md:leading-40 lg:text-[40px] lg:leading-48 text-gray-950"
        descriptionClass="!text-gray-600"
        metrics={metrics}
        numberClass="!text-brand-600"
        labelClass="!text-gray-600"
        title={historyTitle}
        description={historyDescription}
      />

      <KeyFeaturesSetion
        heading={uspTitle}
        description={uspDescription}
        imageUrl={uspImageUrl}
        imageAlt={uspImageAlt}
        cards={features}
        descriptionClass="!text-[16px]"
      />

      <LeadershipTeam
        heading={teamTitle}
        description={teamDescription}
        leaders={leaders}
      />

      <Showroom
        tabs={showroom}
        purpose="showroom"
        heading={showroomTitle}
        description={showroomDescription}
      />
    </main>
  );
};
