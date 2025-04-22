import { Asset, HeroCarouselWrapper } from "@amalihomes/ui";
import type { Meta, StoryObj } from "@storybook/react";

// Mock Contentful Asset objects for testing
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

const meta: Meta<typeof HeroCarouselWrapper> = {
  title: "Components/Organisms/Hero/HeroCarouselWrapper",
  component: HeroCarouselWrapper,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    images: {
      control: { type: "object" },
      description: "Array of Contentful Asset objects containing image data",
    },
    altTextPrefix: {
      control: "text",
      description: "Prefix text to use for image alt attributes",
    },
    fallbackImagePath: {
      control: "text",
      description: "Fallback image path to use if Contentful asset cannot be loaded",
    },
  },
};

export default meta;
type Story = StoryObj<typeof HeroCarouselWrapper>;

export const Default: Story = {
  args: {
    images: mockAssets,
    altTextPrefix: "Luxury Homes",
    fallbackImagePath: "/images/hero.png",
  },
};

export const SingleImage: Story = {
  args: {
    images: [mockAssets[0]],
    altTextPrefix: "Featured Property",
    fallbackImagePath: "/images/hero.png",
  },
};

export const CustomFallbackPath: Story = {
  args: {
    images: mockAssets,
    altTextPrefix: "Premium Properties",
    fallbackImagePath: "/images/custom-fallback.png",
  },
};
