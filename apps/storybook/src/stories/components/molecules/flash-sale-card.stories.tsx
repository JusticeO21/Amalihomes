import { FlashSaleCard } from "@amalihomes/ui";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof FlashSaleCard> = {
  title: "Components/Molecules/Cards/FlashSaleCard",
  component: FlashSaleCard,
  argTypes: {
    title: {
      control: { type: "text" },
      description: "title of the flash sale",
    },
    imageUrl: {
      control: { type: "text" },
      description: "url of image to be displayed",
    },
    imageAlt: {
      control: { type: "text" },
      description: "alternative description of image when it cannot be displayed",
    },
    description: {
      control: { type: "text" },
      description: "description of the flash sale",
    },
    ctaLabel: {
      control: { type: "text" },
      description: "label for call to action button",
    },
    ctaUrl: {
      control: { type: "text" },
      description: "url for call to action button",
    },
    promoCode: {
      control: { type: "text" },
      description: "promo code to be applied",
    },
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

type Story = StoryObj<typeof FlashSaleCard>;

export const Default: Story = {
  args: {
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV1RlrbxJfEqwRJACDSVzfUmCqSdrP8QUkYA&s",
    imageAlt: "image of a dog",
    description:
      "Refresh your space for less! Use code NEWSPACE at checkout. Ends March 31st. Free shipping on orders over $500",
    title: "FLASH SALE: 25% OFF All Living Room Furniture",
    ctaLabel: "Shop Now",
    ctaUrl: "#",
    promoCode: "NEWSPACE",
  },
};
