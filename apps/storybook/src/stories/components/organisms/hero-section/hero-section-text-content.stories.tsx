// File: components/Hero/HeroTextContent.stories.tsx
import { HeroTextContent } from "@amalihomes/ui";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof HeroTextContent> = {
  title: "Components/Organisms/Hero/HeroTextContent",
  component: HeroTextContent,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    headline: {
      control: "text",
      description: "Main headline for the hero section",
    },
    subtext: {
      control: "text",
      description: "Supporting text below the headline",
    },
    ctaText: {
      control: "text",
      description: "Text for the primary call-to-action button",
    },
    ctaLink: {
      control: "text",
      description: "URL for the primary call-to-action button",
    },
    secondaryCtaText: {
      control: "text",
      description: "Text for the secondary call-to-action button",
    },
    secondaryCtaLink: {
      control: "text",
      description: "URL for the secondary call-to-action button",
    },
  },
};

export default meta;
type Story = StoryObj<typeof HeroTextContent>;

export const Default: Story = {
  args: {
    headline: "Find Your Dream Home Today",
    subtext:
      "Discover beautiful properties in prime locations with exceptional amenities and flexible financing options.",
    ctaText: "Browse Properties",
    ctaLink: "/properties",
    secondaryCtaText: "Contact Us",
    secondaryCtaLink: "/contact",
  },
};

export const ShortHeadline: Story = {
  args: {
    headline: "Modern Living",
    subtext: "Luxury apartments in the heart of the city.",
    ctaText: "View Now",
    ctaLink: "/apartments",
    secondaryCtaText: "Learn More",
    secondaryCtaLink: "/about",
  },
};

export const LongContent: Story = {
  args: {
    headline: "Experience Luxury Living Like Never Before With Our Premium Properties",
    subtext:
      "Our carefully curated selection of premium properties combines state-of-the-art amenities with exceptional locations, ensuring that you find not just a house, but a place to call home. With flexible financing options and dedicated support staff, your journey to homeownership has never been easier.",
    ctaText: "Explore Properties",
    ctaLink: "/explore",
    secondaryCtaText: "Schedule a Tour",
    secondaryCtaLink: "/schedule",
  },
};
