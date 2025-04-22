import { Avatar } from "@amalihomes/ui";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Avatar> = {
  title: "Components/Atoms/Avatar",
  component: Avatar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    src: {
      control: "text",
      description: "Image source URL for the avatar",
    },
    alt: {
      control: "text",
      description: "Alternative text for the avatar image",
    },
    className: {
      control: "text",
      description: "Additional CSS classes to apply to the avatar",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  args: {
    alt: "Default Avatar",
  },
};

export const CustomImage: Story = {
  args: {
    src: "https://i.pravatar.cc/300",
    alt: "Custom Avatar",
  },
};

export const LargeSize: Story = {
  args: {
    src: "https://i.pravatar.cc/300",
    alt: "Large Avatar",
    className: "w-16 h-16",
  },
};

export const WithBorder: Story = {
  args: {
    src: "https://i.pravatar.cc/300",
    alt: "Avatar with Border",
    className: "border-2 border-blue-500",
  },
};

export const BrokenImage: Story = {
  args: {
    src: "https://non-existent-image-url.jpg",
    alt: "Broken Image Avatar",
  },
};
