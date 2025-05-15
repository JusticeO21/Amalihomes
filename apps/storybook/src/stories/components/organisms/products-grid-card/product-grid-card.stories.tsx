import type { Meta, StoryObj } from "@storybook/react";
import { ProductGridCard } from "@amalihomes/ui";

// Example mock products data
const MOCK_PRODUCTS = Array.from({ length: 40 }, (_, i) => ({
  id: `prod-${i + 1}`,
  name: `Product ${i + 1}`,
  price: 55 + (i % 5) * 5,
  imageUrl: "https://i.postimg.cc/t4fdMHhj/Category-card-image-1.png",
  imageAlt: `Product ${i + 1}`,
  discount: i % 3 === 0 ? 20 : undefined,
  rating: { rating: 4 + (i % 2) * 0.5, reviewCount: 120 },
  cardType: "default" as const,
}));

const meta: Meta<typeof ProductGridCard> = {
  title: "Components/Organisms/ProductGridCard",
  component: ProductGridCard,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof ProductGridCard>;

export const Default: Story = {
  render: (args) => (
    <ProductGridCard
      {...args}
      products={MOCK_PRODUCTS}
    />
  ),
};
