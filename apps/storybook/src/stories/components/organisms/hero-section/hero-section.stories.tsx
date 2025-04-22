// File: components/Hero/HeroSection.stories.tsx
import { Asset, ButtonGroup, HeroCarouselWrapper, Hero, HeroTextContent, HeroCarousel } from "@amalihomes/ui";
import type { Meta, StoryObj } from "@storybook/react";

// Reuse mockAssets from HeroCarouselWrapper.stories.tsx or define it here
const mockAssets: Asset[] = [
  {
    imageUrl: "https://i.postimg.cc/MKqwZXqZ/1056b43e-6215-4788-85e7-01095a782c5d-1.png",
    imageAlt: "",
  },
  {
    imageUrl: "https://i.postimg.cc/GpH8Mq5f/brown-sofa-blue-room-removebg-preview.png",
    imageAlt: "",
  },
  {
    imageUrl: "https://i.postimg.cc/q7hqcgtV/colombian-flag-couch-pillows-removebg-preview.png",
    imageAlt: "",
  },
  {
    imageUrl: "https://i.postimg.cc/7hQjNPGd/avant-garde-furniture-design-removebg-preview.png",
    imageAlt: "",
  },
];

const meta: Meta<typeof Hero> = {
  title: "Components/Organisms/Hero/HeroSection",
  component: Hero,
  parameters: {
    layout: "fullscreen",
  },
  subcomponents: {
    ButtonGroup: ButtonGroup,
    HeroCarouselWrapper: HeroCarouselWrapper,
    HeroTextContent: HeroTextContent,
    HeroCarousel: HeroCarousel,
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
    heroImages: {
      control: { type: "object" },
      description: "Array of Contentful Asset objects containing image data",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Hero>;

export const Default: Story = {
  args: {
    headline: "Luxury Living Redefined",
    subtext: "Discover our collection of premium properties in sought-after locations with world-class amenities.",
    ctaText: "Find Your Home",
    ctaLink: "/properties",
    secondaryCtaText: "Learn More",
    secondaryCtaLink: "/about",
    heroImages: mockAssets,
  },
};

export const RealEstateListing: Story = {
  args: {
    headline: "Your Dream Home Awaits",
    subtext: "Browse our exclusive collection of properties in prime locations with flexible financing options.",
    ctaText: "View Properties",
    ctaLink: "/listings",
    secondaryCtaText: "Contact Agent",
    secondaryCtaLink: "/contact",
    heroImages: mockAssets,
  },
};

export const RentalPromotional: Story = {
  args: {
    headline: "Modern Rental Living",
    subtext: "Experience the freedom of flexible rentals in desirable neighborhoods with all utilities included.",
    ctaText: "Browse Rentals",
    ctaLink: "/rentals",
    secondaryCtaText: "Schedule a Tour",
    secondaryCtaLink: "/tour",
    heroImages: mockAssets,
  },
};

export const LuxuryCollection: Story = {
  args: {
    headline: "The Signature Collection",
    subtext:
      "An exclusive portfolio of architectural masterpieces in the world's most coveted locations. Limited availability.",
    ctaText: "Request Private Viewing",
    ctaLink: "/signature-collection",
    secondaryCtaText: "View Brochure",
    secondaryCtaLink: "/brochure",
    heroImages: mockAssets,
  },
};
