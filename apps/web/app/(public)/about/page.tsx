import { notFound } from "next/navigation";
import { getSeoTags } from "@/lib/seo/seo";
import { fetchAboutUsContents } from "@/lib/contentful";
import type { AboutUsContent } from "./about-page.types";
import { AboutContent } from "./about-content";

export const generateMetadata = async () =>
  getSeoTags({
    title: "About",
    description: "Learn more about us",
  });
const About = async () => {
  try {
    const aboutUs = (await fetchAboutUsContents()) as unknown as AboutUsContent;

    if (!aboutUs) {
      console.warn("AboutUs data missing required fields", { aboutUs });
      throw new Error("Invalid data format");
    }

    return <AboutContent {...aboutUs} />;
  } catch (error) {
    console.error("AboutPage failed to load", { error });
    return notFound();
  }
};

export default About;
