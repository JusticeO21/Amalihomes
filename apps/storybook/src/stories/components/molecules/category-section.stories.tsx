import { Category, CategorySection } from "@amalihomes/ui";
import type { Meta, StoryObj } from "@storybook/react";

// Mock data using our own Category interface
const mockCategories: Category[] = [
  {
    id: "cat1",
    title: "Sofas",
    imageUrl: "https://placehold.co/300x300/png?text=Sofas",
    imageAlt: "Beautiful modern sofa",
  },
  {
    id: "cat2",
    title: "Chairs",
    imageUrl: "https://placehold.co/300x300/png?text=Chairs",
    imageAlt: "Elegant dining chair",
  },
  {
    id: "cat3",
    title: "Tables",
    imageUrl: "https://placehold.co/300x300/png?text=Tables",
    imageAlt: "Modern coffee table",
  },
  {
    id: "cat4",
    title: "Lighting",
    imageUrl: "https://placehold.co/300x300/png?text=Lighting",
    imageAlt: "Contemporary lamp",
  },
  {
    id: "cat5",
    title: "Bedding",
    imageUrl: "https://placehold.co/300x300/png?text=Bedding",
    imageAlt: "Comfortable bed set",
  },
];

const meta: Meta<typeof CategorySection> = {
  title: "Components/Molecules/CategorySection",
  component: CategorySection,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    heading: {
      control: "text",
      description: "Section main heading",
    },
    categories: {
      control: "object",
      description: "Array of product categories",
    },
    className: {
      control: "text",
      description: "Additional CSS classes",
    },
  },
  decorators: [
    (Story) => (
      <div className="max-w-screen-xl mx-auto px-4">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof CategorySection>;

// Default implementation with mock data
export const Default: Story = {
  args: {
    heading: "Shop by Category",
    categories: mockCategories,
    className: "mb-4",
  },
};

// With fewer categories
export const FewerCategories: Story = {
  args: {
    heading: "Popular Categories",
    categories: mockCategories.slice(0, 3),
    className: "mb-4",
  },
};

// With custom heading
export const CustomHeading: Story = {
  args: {
    heading: "Explore Our Collections",
    categories: mockCategories,
    className: "mb-4",
  },
};

// With custom styling
export const CustomStyling: Story = {
  args: {
    heading: "Shop by Category",
    categories: mockCategories,
    className: "mb-8 bg-gray-50 py-6 px-4 rounded-lg",
  },
};
