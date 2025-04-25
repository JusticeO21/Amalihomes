import { ProductCarousel } from "@amalihomes/ui";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ProductCarousel> = {
  title: "Components/Molecules/Carousels/ProductCarousel",
  component: ProductCarousel,
  tags: ["autodocs"],
  args: {
    showControls: true,
  },
  argTypes: {
    showControls: {
      control: "boolean",
      description: "Shows navigation arrows on the sides",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
      },
    },
    className: {
      control: "text",
      description: "Additional CSS classes for the carousel container",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: '""' },
      },
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
A responsive carousel component that displays multiple items with partial preview.
Supports auto-rotation, custom spacing, and responsive item counts.
        `,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof ProductCarousel>;

const createCarouselItems = (count: number) =>
  Array.from({ length: count }, (_, i) => (
    <div
      key={i}
      className="max-w-4xl mx-auto"
      style={{
        background: "#ccccccab",
        height: "250px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "20px",
        minWidth: "316px",
      }}
    >
      Item {i + 1}
    </div>
  ));

export const Default: Story = {
  args: {
    children: createCarouselItems(5),
  },
};

export const WithHeading: Story = {
  args: {
    children: createCarouselItems(5),
    heading: "Product Category",
  },
};
