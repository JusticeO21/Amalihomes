import type { Meta, StoryFn } from "@storybook/react";
import { CompaniesMetrics } from "@amalihomes/ui";

const meta: Meta<typeof CompaniesMetrics> = {
  title: "Components/organisms/CompaniesMetrics",
  component: CompaniesMetrics,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "The `CompaniesMetrics` component displays key metrics in either a grid or horizontal layout with optional title and description. It uses `MetricCard` components within a responsive `Container` and supports full customization of text styles and alignment. Ideal for showcasing company statistics, achievements, or performance indicators.",
      },
    },
  },
  argTypes: {
    title: {
      description: "Main heading text for the metrics section",
      control: { type: "text" },
    },
    description: {
      description: "Supporting description text",
      control: { type: "text" },
    },
    layout: {
      description: "Layout type for the metrics cards",
      control: { type: "radio" },
      options: ["grid", "horizontal"],
    },
    align: {
      description: "Content alignment",
      control: { type: "select" },
      options: ["left", "center", "right"],
    },
    titleAs: {
      description: "Semantic heading level",
      control: { type: "select" },
      options: ["h1", "h2", "h3", "h4", "h5", "h6"],
    },
    titleClass: {
      description: "Additional classes for the title",
      control: { type: "text" },
    },
    descriptionClass: {
      description: "Additional classes for the description",
      control: { type: "text" },
    },
    numberClass: {
      description: "Additional classes for metric numbers",
      control: { type: "text" },
    },
    labelClass: {
      description: "Additional classes for metric labels",
      control: { type: "text" },
    },
    gridClassName: {
      description: "Additional classes for the metrics grid",
      control: { type: "text" },
    },
    className: {
      description: "Additional classes for the container",
      control: { type: "text" },
    },
    metrics: {
      description: "Array of metric objects (max 4 displayed)",
      control: { type: "object" },
    },
  },
  decorators: [(Story) => <Story />],
};

export default meta;

const Template: StoryFn<typeof CompaniesMetrics> = (args) => <CompaniesMetrics {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "Building Dreams Since 1990",
  description: "Founded with a vision to redefine modern living...",
  metrics: [
    { metric: "30", label: "Years of Excellence" },
    { metric: "150", label: "Projects Delivered" },
    { metric: "50", label: "Happy Clients" },
    { metric: "20", label: "Awards Won" },
  ],
  layout: "horizontal",
  align: "center",
};
Default.parameters = {
  docs: {
    description: {
      story: "Default horizontal layout with centered alignment and 4 metrics.",
    },
  },
};

export const GridLayout = Template.bind({});
GridLayout.args = {
  ...Default.args,
  layout: "grid",
  titleClass: "text-primary",
  numberClass: "font-bold !text-brand-600",
};
GridLayout.parameters = {
  docs: {
    description: {
      story: "Grid layout with 2 columns and custom title/number styling.",
    },
  },
};

export const LeftAligned = Template.bind({});
LeftAligned.args = {
  ...Default.args,
  align: "left",
  descriptionClass: "italic",
};
LeftAligned.parameters = {
  docs: {
    description: {
      story: "Left-aligned content with italic description text.",
    },
  },
};

export const CustomMetrics = Template.bind({});
CustomMetrics.args = {
  title: "Our Impact",
  description: "Making a difference through quality craftsmanship",
  metrics: [
    { metric: "10K+", label: "Homes Built" },
    { metric: "100%", label: "Client Satisfaction" },
  ],
  gridClassName: "border border-red-500 gap-8 place-items-center border border-red-500",
  labelClass: "uppercase",
  numberClass: "!text-brand-600",
};
CustomMetrics.parameters = {
  docs: {
    description: {
      story: "Custom metric set with reduced items and uppercase labels.",
    },
  },
};

export const MinimalVariant = Template.bind({});
MinimalVariant.args = {
  title: "By the Numbers",
  metrics: [
    { metric: "1st", label: "Industry Rank" },
    { metric: "24/7", label: "Support" },
  ],
  description: "",
  className: "bg-gray-50 p-8 rounded-lg",
};
MinimalVariant.parameters = {
  docs: {
    description: {
      story: "Minimal variant without description and custom background.",
    },
  },
};
