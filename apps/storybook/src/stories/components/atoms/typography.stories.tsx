import { Typography } from "@amalihomes/ui";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Typography> = {
  title: "Components/Atoms/Typography",
  component: Typography,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["xs", "sm", "base", "lg", "xl", "text-2xl", "text-3xl", "text-4xl"],
    },
    weight: {
      control: "select",
      options: ["normal", "medium", "semibold", "bold"],
    },
    colors: {
      control: "select",
      options: [
        "text-brand",
        "text-brand-darker",
        "text-brand-dark",
        "text-brand-fill",
        "text-brand-stroke-weak",
        "text-brand-stroke-strong",
        "text-brand-text",
        "text-info-fill",
        "text-info-stroke-weak",
        "text-info-stroke-strong",
        "text-info-text",
        "text-Amber-fill",
        "text-Amber-stroke-weak",
        "text-Amber-stroke-strong",
        "text-Amber-text",
        "text-grey-fill-weaker",
        "text-grey-fill",
        "text-grey-stroke-weak",
        "text-grey-stroke-strong",
        "text-grey-text-weak",
        "text-grey-text-strong",
        "text-Red-fill",
        "text-Red-stroke-weak",
        "text-Red-stroke-strong",
        "text-Red-text",
        "text-Green-fill",
        "text-Green-stroke-weak",
        "text-Green-stroke-strong",
        "text-Green-text",
      ],
    },
    as: {
      control: "select",
      options: ["h1", "h2", "h3", "h4", "h5", "h6", "p", "blockquote", "ul", "ol", "span", "div"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Typography>;

export const Default: Story = {
  args: {
    children: "Typography Example",
    size: "base",
    weight: "normal",
    colors: "text-brand",
    as: "p",
  },
};

export const Heading: Story = {
  args: {
    children: "Heading Example",
    size: "text-4xl",
    weight: "bold",
    colors: "text-brand-darker",
    as: "h1",
  },
};

export const Paragraph: Story = {
  args: {
    children: "This is a paragraph example with different styling options.",
    size: "sm",
    weight: "medium",
    colors: "text-grey-text-strong",
    as: "p",
  },
};

export const CustomElement: Story = {
  args: {
    children: "Custom Element Example",
    size: "xl",
    weight: "semibold",
    colors: "text-info-text",
    as: "div",
  },
};
