import type { Meta, StoryObj } from "@storybook/react";
import { Product } from "@amalihomes/ui";

const meta: Meta<typeof Product> = {
  title: "Components/Molecules/Product",
  component: Product,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    name: {
      control: "text",
      description: "The name of the product",
    },
    price: {
      control: "number",
      description: "The price of the product in cents/pennies",
    },
    imageUrl: {
      control: "text",
      description: "URL of the product image",
    },
    imageAlt: {
      control: "text",
      description: "Alt text for the product image",
    },
    discount: {
      control: "number",
      description: "Discount percentage (if applicable)",
    },
    rating: {
      control: "object",
      description: "Product rating information",
    },
    cardType: {
      control: "select",
      options: ["default", "flash-sale", "recommended"],
      description: "Type of product card display",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Product>;

// Base product data
const baseProduct = {
  name: "Wireless Headphones",
  price: 12999, // $129.99
  imageUrl: "https://i.postimg.cc/GmPn6HvF/b158126a646e8dcd47b28f505b824b80782c1195.jpg",
  imageAlt: "Black wireless over-ear headphones",
  rating: {
    rating: 4,
    reviewCount: 128,
  },
};

// Default Card
export const Default: Story = {
  args: {
    ...baseProduct,
    cardType: "default",
  },
};

// Flash Sale Card
export const FlashSale: Story = {
  args: {
    ...baseProduct,
    discount: 20,
    cardType: "flash-sale",
  },
};
export const Recommended: Story = {
  args: {
    ...baseProduct,
    discount: 20,
    cardType: "recommended",
  },
};

// No Discount
export const NoDiscount: Story = {
  args: {
    ...baseProduct,
    cardType: "default",
  },
};

// With Discount
export const WithDiscount: Story = {
  args: {
    ...baseProduct,
    discount: 15,
    cardType: "default",
  },
};

// High Rating
export const HighRating: Story = {
  args: {
    ...baseProduct,
    rating: {
      rating: 5,
      reviewCount: 328,
    },
    cardType: "recommended",
  },
};

// Low Rating
export const LowRating: Story = {
  args: {
    ...baseProduct,
    rating: {
      rating: 2,
      reviewCount: 24,
    },
    cardType: "default",
  },
};

// Long Product Name
export const LongProductName: Story = {
  args: {
    ...baseProduct,
    name: "Premium Noise-Cancelling Wireless Bluetooth Headphones with Extra Bass and Long Battery Life",
    cardType: "default",
  },
};

// Different Product
export const DifferentProduct: Story = {
  args: {
    name: "Smart Watch",
    price: 24999, // $249.99
    imageUrl: "https://i.postimg.cc/GmPn6HvF/b158126a646e8dcd47b28f505b824b80782c1195.jpg",
    imageAlt: "Black smartwatch with heart rate monitor",
    discount: 10,
    rating: {
      rating: 4,
      reviewCount: 86,
    },
    cardType: "default",
  },
};

// Flash Sale with High Discount
export const FlashSaleBigDiscount: Story = {
  args: {
    ...baseProduct,
    discount: 50,
    cardType: "flash-sale",
  },
};

// Products Grid Example
export const ProductsGrid: Story = {
  decorators: [
    (Story) => (
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "1rem",
          maxWidth: "800px",
        }}
      >
        {Array(6)
          .fill(0)
          .map((_, i) => (
            <Story key={i} />
          ))}
      </div>
    ),
  ],
  args: {
    ...baseProduct,
    cardType: "default",
  },
};
