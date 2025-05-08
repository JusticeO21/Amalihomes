import { Meta, StoryObj } from "@storybook/react";
import { KeyFeaturesSetion } from "@amalihomes/ui";

const meta: Meta<typeof KeyFeaturesSetion> = {
  title: "Components/Organisms/KeyFeaturesSetion",
  component: KeyFeaturesSetion,
  tags: ["autodocs"],
  argTypes: {
    heading: {
      control: "text",
      description: "The main heading of the section",
    },
    description: {
      control: "text",
      description: "The description text of the section",
    },
    cards: {
      control: "object",
      description: "Array of USP cards to display",
    },
    imageUrl: {
      control: "text",
      description: "URL of the image to display",
    },
    imageAlt: {
      control: "text",
      description: "Alt text for the image",
    },
    gridDirection: {
      control: "radio",
      options: ["forward", "reverse"],
      description: "Direction of the grid layout",
    },
  },
};

export default meta;

type Story = StoryObj<typeof KeyFeaturesSetion>;

const defaultCards = [
  {
    id: "1",
    title: "Feature 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    iconUrl:
      "https://media.istockphoto.com/id/2069285270/photo/buttercup-yellow-ranunculus-flower-head-isolated-on-white-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=cZ4b-W-M-18n8sW2M4sZ1ESBvFaqt8zwRyC1PAGnZDM=",
    iconAlt: "Star icon",
  },
  {
    id: "2",
    title: "Feature 2",
    description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    iconUrl:
      "https://media.istockphoto.com/id/2069285270/photo/buttercup-yellow-ranunculus-flower-head-isolated-on-white-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=cZ4b-W-M-18n8sW2M4sZ1ESBvFaqt8zwRyC1PAGnZDM=",
    iconAlt: "Check icon",
  },
  {
    id: "3",
    title: "Feature 3",
    description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
    iconUrl:
      "https://media.istockphoto.com/id/2069285270/photo/buttercup-yellow-ranunculus-flower-head-isolated-on-white-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=cZ4b-W-M-18n8sW2M4sZ1ESBvFaqt8zwRyC1PAGnZDM=",
    iconAlt: "Heart icon",
  },
];

export const Default: Story = {
  args: {
    heading: "Key Features",
    description:
      "Discover the powerful features that make our product stand out. Designed to enhance your experience and deliver exceptional results.",
    cards: defaultCards,
    imageUrl:
      "https://images.unsplash.com/photo-1745827216178-96fb0c6a355a?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageAlt: "Key features illustration",
    gridDirection: "forward",
  },
  storyName: "Default Layout",
};

export const ReverseGrid: Story = {
  args: {
    ...Default.args,
    gridDirection: "reverse",
  },
  storyName: "Reverse Grid Layout",
};

export const CustomContent: Story = {
  args: {
    heading: "Why Choose Us",
    description: "Our unique selling points are tailored to provide unmatched value and performance for all users.",
    cards: [
      {
        id: "1",
        title: "Feature 1",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        iconUrl:
          "https://media.istockphoto.com/id/2069285270/photo/buttercup-yellow-ranunculus-flower-head-isolated-on-white-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=cZ4b-W-M-18n8sW2M4sZ1ESBvFaqt8zwRyC1PAGnZDM=",
        iconAlt: "Star icon",
      },
      {
        id: "2",
        title: "Feature 3",
        description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
        iconUrl:
          "https://media.istockphoto.com/id/2069285270/photo/buttercup-yellow-ranunculus-flower-head-isolated-on-white-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=cZ4b-W-M-18n8sW2M4sZ1ESBvFaqt8zwRyC1PAGnZDM=",
        iconAlt: "Heart icon",
      },
    ],
    imageUrl:
      "https://images.unsplash.com/photo-1746211752403-23b1ade5e20a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageAlt: "Why choose us image",
    gridDirection: "forward",
  },
  storyName: "Custom Content",
};
