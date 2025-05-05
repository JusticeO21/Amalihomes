import { Suspense } from "react";
import FaqHeroSection from "./hero-section";
import Questions from "./questions";
import { FaqsProps } from "./types";

const Faqs = ({ mainImage, title, description, questionCategories }: FaqsProps) => {
  return (
    <main>
      <FaqHeroSection
        title={title}
        description={description}
        backgroundImageUrl={mainImage.imageUrl}
        backgroundImageAlt={mainImage.imageAlt}
      />
      <Suspense>
        <Questions questionCategories={questionCategories} />
      </Suspense>
    </main>
  );
};

export default Faqs;
