import { ProductCard } from "@amalihomes/ui/components/card";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ProductCard> = {
  title: "Components/Cards/ProductCard",
  component: ProductCard,
  argTypes: {
    isCategory: {
      control: { type: "boolean" },
      defaultValue: true,
      description: "flag to determine if card is a category or a new arrival item",
    },
    borderRadius: {
      control: { type: "select" },
      options: ["default", "none", "md", "lg", "full"],
    },
    src: {
      control: { type: "text" },
      description: "url of image to be displayed",
    },
    alt: {
      control: { type: "text" },
      description: "alternative description of image when it cannot be displayed",
    },
    caption: {
      control: { type: "text" },
      description: "label for image description",
    },
  },
  args: {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV1RlrbxJfEqwRJACDSVzfUmCqSdrP8QUkYA&s",
    alt: "image of a dog",
    borderRadius: "default",
    isCategory: true,
  },
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: "Card component to render Image with optional caption",
    },
  },
};

export default meta;

type Story = StoryObj<typeof ProductCard>;

export const Default: Story = {
  args: {
    caption: "image of a dog",
  },
};
export const NewArrival: Story = {
  args: {
    isCategory: false,
    caption: "image of a dog",
  },
};
export const WithoutCaption: Story = {
  args: {
    borderRadius: "md",
  },
};
