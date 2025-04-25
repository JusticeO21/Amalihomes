import { ProductCard } from "@amalihomes/ui";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ProductCard> = {
  title: "Components/Molecules/Cards/ProductCard",
  component: ProductCard,
  argTypes: {
    borderRadius: {
      control: { type: "select" },
      options: ["default", "none", "md", "lg", "full"],
    },
    imageUrl: {
      control: { type: "text" },
      description: "url of image to be displayed",
    },
    imageAlt: {
      control: { type: "text" },
      description: "alternative description of image when it cannot be displayed",
    },
    caption: {
      control: { type: "text" },
      description: "label for image description",
    },
    captionClassName: {
      control: { type: "text" },
      description: "class name for caption",
    },
    cardClassName: {
      control: { type: "text" },
      description: "class name for card container",
    },
    imageClassName: {
      control: { type: "text" },
      description: "class name for image",
    },
  },
  args: {
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV1RlrbxJfEqwRJACDSVzfUmCqSdrP8QUkYA&s",
    imageAlt: "image of a dog",
    borderRadius: "default",
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
    caption: "image of a dog",
  },

  render: (args) => (
    <ProductCard
      {...args}
      imageClassName="min-w-[236px] h-[316px] sm:min-w-[316px] sm:h-[422px] md:min-w-[421px] md:h-[526px]"
    />
  ),
};
export const WithoutCaption: Story = {
  args: {
    borderRadius: "md",
  },
};
