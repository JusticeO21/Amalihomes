import { HeroCarousel } from "@amalihomes/ui/components/carousel/hero-carousel";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof HeroCarousel> = {
  title: "Components/Carousels/HeroCarousel",
  component: HeroCarousel,
  tags: ["autodocs"],
  argTypes: {},
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

type Story = StoryObj<typeof HeroCarousel>;

export const Default: Story = {
  args: {
    images: [
      {
        imageUrl:
          "https://img.freepik.com/free-psd/sunset-hibiscus-flower-isolated-transparent-background_191095-33228.jpg?ga=GA1.1.1998860054.1743707263&semt=ais_hybrid&w=740",
        imageAlt: "Hero Image 1",
      },
      {
        imageUrl:
          "https://img.freepik.com/free-psd/dried-tree-branch-isolated-white-background-rustic-wood-nature-element-design-element-decoration-design-projects_632498-30463.jpg?ga=GA1.1.1998860054.1743707263&semt=ais_hybrid&w=740",

        imageAlt: "Hero Image 2",
      },
      {
        imageUrl:
          "https://img.freepik.com/free-psd/french-fries-with-sauce-round-wooden-bowl-transparent-background_84443-1439.jpg?ga=GA1.1.1998860054.1743707263&semt=ais_hybrid&w=740",

        imageAlt: "Hero Image 3",
      },
      {
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE-gNl0xQOFxXTR39FFexQuk0Q4fLNzyKiTQ&s",
        imageAlt: "Hero Image 4",
      },
    ],
  },
};
