// File: components/Hero/ButtonGroup.stories.tsx
import { ButtonGroup } from "@amalihomes/ui";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ButtonGroup> = {
  title: "Components/Organisms/Hero/ButtonGroup",
  component: ButtonGroup,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
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
type Story = StoryObj<typeof ButtonGroup>;

export const Default: Story = {
  args: {
    ctaText: "Get Started",
    ctaLink: "/get-started",
    secondaryCtaText: "Learn More",
    secondaryCtaLink: "/learn-more",
  },
};

export const LongButtonText: Story = {
  args: {
    ctaText: "Book a Virtual Tour Now",
    ctaLink: "/book-tour",
    secondaryCtaText: "Download Our Complete Brochure",
    secondaryCtaLink: "/brochure",
  },
};

export const ShortButtonText: Story = {
  args: {
    ctaText: "Buy",
    ctaLink: "/buy",
    secondaryCtaText: "Rent",
    secondaryCtaLink: "/rent",
  },
};
