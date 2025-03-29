import type { Meta, StoryFn } from "@storybook/react";
import { Container, ContainerProps } from "@amalihomes/ui/components/container";

const meta: Meta<ContainerProps> = {
  title: "Components/Container",
  component: Container,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "The `Container` component wraps sections of content with consistent spacing, responsive width, borders, and shadows — ideal for layout structure in your UI.",
      },
    },
  },
  argTypes: {
    maxWidth: {
      description: "Sets the maximum width of the container.",
      control: { type: "select" },
      options: ["sm", "md", "lg", "xl", "2xl", "3xl", "4xl", "5xl", "6xl", "7xl", "full", "none"],
    },
    paddingX: {
      description: "Horizontal padding (X axis).",
      control: { type: "select" },
      options: Array.from({ length: 16 }, (_, i) => i),
    },
    paddingY: {
      description: "Vertical padding (Y axis).",
      control: { type: "select" },
      options: Array.from({ length: 16 }, (_, i) => i),
    },
    marginY: {
      description: "Vertical margin (Y axis).",
      control: { type: "select" },
      options: Array.from({ length: 16 }, (_, i) => i),
    },
    rounded: {
      description: "Controls the border radius.",
      control: { type: "select" },
      options: ["none", "sm", "md", "lg", "xl", "2xl", "3xl", "full"],
    },
    border: {
      description: "Controls the border thickness.",
      control: { type: "select" },
      options: ["none", "thin", "normal", "thick"],
    },
    shadow: {
      description: "Adds a box shadow around the container.",
      control: { type: "select" },
      options: ["none", "sm", "md", "lg", "xl", "2xl"],
    },
    bgColor: {
      description: "Background color utility class.",
      control: { type: "select" },
      options: ["white", "transparent", "gray", "brand", "info", "amber", "grey", "red", "green"],
    },
    borderColor: {
      description: "Border color utility class.",
      control: { type: "select" },
      options: ["default", "brand", "info", "amber", "grey", "red", "green"],
    },
  },
};

export default meta;

const Template: StoryFn<ContainerProps> = (args) => (
  <Container {...args}>
    <h1 className="text-lg font-semibold">Hello Container</h1>
    <p className="text-base text-gray-600">This is an example content block inside a container.</p>
  </Container>
);

export const Default = Template.bind({});
Default.args = {
  maxWidth: "full",
  paddingX: 6,
  paddingY: 6,
  marginY: 4,
  rounded: "md",
  border: "thin",
  shadow: "md",
  borderColor: "default",
};

export const WithCustomLayout = Template.bind({});
WithCustomLayout.args = {
  maxWidth: "7xl",
  paddingX: 10,
  paddingY: 10,
  marginY: 6,
  rounded: "sm",
  border: "thin",
  shadow: "none",
  bgColor: "gray",
  borderColor: "brand",
};

export const NoPadding = Template.bind({});
NoPadding.args = {
  maxWidth: "full",
  paddingX: 0,
  paddingY: 0,
  marginY: 4,
  rounded: "sm",
  border: "normal",
  shadow: "lg",
  bgColor: "info",
  borderColor: "red",
};

export const FullyRounded = Template.bind({});
FullyRounded.args = {
  maxWidth: "lg",
  paddingX: 4,
  paddingY: 4,
  marginY: 4,
  rounded: "full",
  border: "normal",
  shadow: "xl",
  bgColor: "info",
  borderColor: "green",
};

export const TransparentBackground = Template.bind({});
TransparentBackground.args = {
  maxWidth: "xl",
  paddingX: 8,
  paddingY: 8,
  marginY: 4,
  rounded: "md",
  border: "thin",
  shadow: "md",
  bgColor: "transparent",
  borderColor: "amber",
};
