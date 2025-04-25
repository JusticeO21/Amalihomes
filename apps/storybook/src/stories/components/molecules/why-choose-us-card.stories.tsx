import { WhyChooseUsCard } from "@amalihomes/ui";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof WhyChooseUsCard> = {
  title: "Components/Molecules/Cards/WhyChooseUsCard",
  component: WhyChooseUsCard,
  argTypes: {
    iconUrl: {
      control: { type: "text" },
      description: "url of image icon to be displayed",
    },
    iconAlt: {
      control: { type: "text" },
      description: "alternative description of image icon when it cannot be displayed",
    },
    title: {
      control: { type: "text" },
      description: "title of the USP section",
    },
    description: {
      control: { type: "text" },
      description: "description of the USP section",
    },
  },

  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: "Card component to render USP sections",
    },
  },
};

export default meta;

type Story = StoryObj<typeof WhyChooseUsCard>;

export const Default: Story = {
  args: {
    iconUrl: "https://img.icons8.com/?size=100&id=2070&format=png&color=000000",
    iconAlt: "brain icon",
    title: "Premium Quality & Durability",
    description:
      "Our furniture is crafted from top-quality materials, ensuring long-lasting durability, comfort, and timeless style for your home or office.",
  },
};
