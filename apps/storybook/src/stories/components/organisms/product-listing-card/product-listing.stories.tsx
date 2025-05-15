import type { Meta, StoryObj } from "@storybook/react";
import { ProductProps, ProductListingCard } from "@amalihomes/ui";

// Sample product data for our stories
const sampleProducts: ProductProps[] = [
  {
    id: "prod-1",
    name: "Ergonomic Office Chair",
    price: 299.99,
    imageUrl: "https://i.postimg.cc/GmPn6HvF/b158126a646e8dcd47b28f505b824b80782c1195.jpg",
    imageAlt: "Black ergonomic office chair with headrest",
    rating: {
      rating: 4.5,
      reviewCount: 120,
    },
  },
  {
    id: "prod-2",
    name: "Adjustable Standing Desk",
    price: 499.99,
    imageUrl: "https://i.postimg.cc/t4fdMHhj/Category-card-image-1.png",
    imageAlt: "Oak wood standing desk with electrical height adjustment",
    discount: 50,
    rating: {
      rating: 4.8,
      reviewCount: 75,
    },
  },
  {
    id: "prod-3",
    name: "Mechanical Keyboard",
    price: 129.99,
    imageUrl: "https://i.postimg.cc/c4FBf3C6/Category-card-image-2.png",
    imageAlt: "Backlit mechanical keyboard with brown switches",
    rating: {
      rating: 4.2,
      reviewCount: 210,
    },
  },
  {
    id: "prod-4",
    name: "Ultra-Wide Monitor",
    price: 799.99,
    imageUrl: "https://i.postimg.cc/wj3c2BR2/Category-card-image-3.png",
    imageAlt: "34-inch curved ultra-wide monitor",
    discount: 100,
    rating: {
      rating: 4.7,
      reviewCount: 88,
    },
  },
  {
    id: "prod-5",
    name: "Wireless Mouse",
    price: 59.99,
    imageUrl: "https://placehold.co/300x300",
    imageAlt: "Ergonomic wireless mouse",
    rating: {
      rating: 4.0,
      reviewCount: 156,
    },
  },
];

// Meta information for the component
const meta: Meta<typeof ProductListingCard> = {
  title: "Components/Organisms/ProductListingCard",
  component: ProductListingCard,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    productCardType: {
      control: { type: "select" },
      options: ["default", "flash-sale", "recommended"],
      description: "Type of product card to display",
    },
    title: {
      control: "text",
      description: "Main heading for the product listing section",
    },
    description: {
      control: "text",
      description: "Description text below the title",
    },
    viewAllLink: {
      control: "text",
      description: 'URL for the "view all" link',
    },
    products: {
      control: "object",
      description: "Array of product objects to display",
    },
  },
};

export default meta;
type Story = StoryObj<typeof ProductListingCard>;

// Default story with standard product cards
export const Default: Story = {
  args: {
    title: "Featured Products",
    description: "Our most popular products based on sales",
    viewAllLink: "/products",
    products: sampleProducts,
    productCardType: "default",
  },
};

// Story with flash sale product cards
export const FlashSale: Story = {
  args: {
    title: "Flash Sales",
    description: "Shop now for exclusive discounts on stylish furniture—before the deals are gone",
    viewAllLink: "/flash-sale",
    products: sampleProducts.map((product) => ({
      ...product,
      discount: product.discount || Math.floor(Math.random() * 30) + 20, // Add discounts to all products
    })),
    productCardType: "flash-sale",
  },
};
export const NewArrivals: Story = {
  args: {
    title: "New Arrivals ",
    description: "Shop now for exclusive discounts on stylish furniture—before the deals are gone",
    viewAllLink: "/flash-sale",
    products: sampleProducts.map((product) => ({
      ...product,
      discount: product.discount || Math.floor(Math.random() * 30) + 20, // Add discounts to all products
    })),
    productCardType: "flash-sale",
  },
};

// Story with recommended product cards
export const Recommended: Story = {
  args: {
    title: "Recommended For You",
    description: "Based on your browsing history and purchases",
    viewAllLink: "/recommended",
    products: sampleProducts,
    productCardType: "recommended",
  },
};

// Story with few products to test carousel behavior
export const FewProducts: Story = {
  args: {
    title: "New Arrivals",
    description: "Just landed in our store",
    viewAllLink: "/new",
    products: sampleProducts.slice(0, 2),
    productCardType: "default",
  },
};

// Story with many products to test carousel scrolling
export const ManyProducts: Story = {
  args: {
    title: "Complete Collection",
    description: "Browse our entire catalog",
    viewAllLink: "/all",
    products: [...sampleProducts, ...sampleProducts.map((product) => ({ ...product, id: `${product.id}-copy` }))],
    productCardType: "default",
  },
};

// Customize how controls are shown in the addons panel
ManyProducts.parameters = {
  controls: {
    exclude: ["products"],
  },
};

// Example of a mobile viewport story
export const Mobile: Story = {
  args: {
    ...Default.args,
  },
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
  },
};

// Example of a responsive design story
export const ResponsiveDemo: Story = {
  args: {
    ...Default.args,
  },
  parameters: {
    docs: {
      description: {
        story: "This story demonstrates how the component behaves across different viewport sizes.",
      },
    },
    chromatic: { viewports: [320, 768, 1200] },
  },
};
