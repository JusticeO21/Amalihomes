import type { Meta, StoryFn } from "@storybook/react";
import { MetricCard, MetricCardProps } from "@amalihomes/ui";
const meta: Meta<MetricCardProps> = {
  title: "Components/molecules/MetricCard",
  component: MetricCard,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "The `MetricCard` component displays a metric (e.g., '30+') and label (e.g., 'Years of Excellence') using `TextPair` within a styled container. Designed for stats sections or CMS-driven content (e.g., Contentful) in a Next.js app, it supports Tailwind CSS, `class-variance-authority`, and WCAG 2.1 accessibility via `TextPair`. Offers customizable number styling (font size, color). **Note**: Requires explicit `id` for `aria-labelledby` to avoid `TextPair`'s random `id` generation. Uses custom Tailwind breakpoints (md: 834px, lg: 1112px) and font (`text-body` as Inter).",
      },
    },
  },
  argTypes: {
    number: {
      description: "The metric value (e.g., '30+').",
      control: { type: "text" },
    },
    label: {
      description: "The metric description (e.g., 'Years of Excellence').",
      control: { type: "text" },
    },
    numberClass: {
      description: "Custom Tailwind classes for the number (appends to default styling).",
      control: { type: "text" },
    },
    labelClass: {
      description: "Custom Tailwind classes for the label (appends to default styling).",
      control: { type: "text" },
    },
    className: {
      description: "Custom Tailwind classes for the container.",
      control: { type: "text" },
    },
    id: {
      description: "Required unique ID for `TextPair`'s `aria-labelledby`.",
      control: { type: "text" },
    },
    ariaLabel: {
      description: "Custom ARIA label for screen readers (defaults to `${number} ${label}`).",
      control: { type: "text" },
    },
    variant: {
      description: "Card styling variant.",
      control: { type: "select" },
      options: ["primary", "secondary", "minimal"],
    },
  },
};

export default meta;

const Template: StoryFn<MetricCardProps> = (args) => <MetricCard {...args} />;

export const PrimaryVariant = Template.bind({});
PrimaryVariant.args = {
  number: "30+",
  label: "Years of Excellence",
  numberClass: "text-blue-500",
  id: "metric-years",
  variant: "primary",
  ariaLabel: "30 plus years of excellence",
};
PrimaryVariant.parameters = {
  docs: {
    description: {
      story:
        "A metric card with primary styling (background and border), ideal for prominent stats in a CMS-driven section.",
    },
  },
};

export const SecondaryVariant = Template.bind({});
SecondaryVariant.args = {
  number: "500+",
  label: "Happy Clients",
  numberClass: "text-green-500",
  id: "metric-clients",
  variant: "secondary",
};
SecondaryVariant.parameters = {
  docs: {
    description: {
      story:
        "A metric card with secondary styling, suitable for secondary stats in a stats section or Contentful-driven content.",
    },
  },
};

export const MinimalVariant = Template.bind({});
MinimalVariant.args = {
  number: "1000+",
  label: "Projects Completed",
  numberClass: "text-red-500",
  id: "metric-projects",
  variant: "minimal",
};
MinimalVariant.parameters = {
  docs: {
    description: {
      story:
        "A metric card with minimal styling (default, no background or border), versatile for subtle stats or CMS-driven content.",
    },
  },
};
