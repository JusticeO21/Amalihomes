import type { Meta, StoryObj } from "@storybook/react";
import { GridContainer } from "@amalihomes/ui";

const SampleItem = ({ index }: { index: number }) => (
  <div className="bg-red-400 text-white p-18 rounded-sm text-center">Item {index}</div>
);

const meta: Meta<typeof GridContainer> = {
  title: "Components/Atoms/GridContainer",
  component: GridContainer,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
          The \`GridContainer\` component is a flexible, responsive grid layout built with Tailwind CSS, clsx, and class-variance-authority. 
          It allows customization of column counts, gap sizes, flow direction, and responsive scaling, making it ideal for creating structured layouts 
          such as card grids, galleries, or dashboards.
        `,
      },
    },
  },
  argTypes: {
    columns: {
      control: "select",
      options: [1, 2, 3, 4, 6],
      description: "Sets the number of columns in the grid for the base layout.",
    },
    responsive: {
      control: "select",
      options: ["sm", "md", "lg", "xl", null],
      description: "Defines responsive breakpoints to scale the number of columns on larger screens.",
    },
    gap: {
      control: "select",
      options: ["sm", "md", "lg", "xl"],
      description: "Controls the gap size between grid items.",
    },
    className: {
      control: "text",
      description: "Additional CSS classes to customize the container’s appearance.",
    },
  },
};

export default meta;

type Story = StoryObj<typeof GridContainer>;

export const Default: Story = {
  args: {
    columns: 1,
    gap: "md",
    children: [...Array(6)].map((_, index) => (
      <SampleItem
        key={index}
        index={index + 1}
      />
    )),
  },
  parameters: {
    docs: {
      description: {
        component: `
      GridContainer is a reusable, responsive grid component built with Tailwind CSS, clsx, and class-variance-authority. 
      It allows flexible configuration of column counts, gap sizes, and flow direction, with support for responsive layouts 
      that scale columns based on screen size. Use it to create consistent grid layouts for lists, galleries, or dashboards.
    `,
      },
    },
  },
};

export const TwoColumns: Story = {
  args: {
    columns: 2,
    gap: "md",
    children: [...Array(6)].map((_, index) => (
      <SampleItem
        key={index}
        index={index + 1}
      />
    )),
  },
  parameters: {
    docs: {
      description: {
        story:
          "Shows a 2-column grid with medium gap and forward direction. Ideal for simple two-up layouts on smaller screens.",
      },
    },
  },
};

export const FourColumns: Story = {
  args: {
    columns: 4,
    gap: "lg",
    children: [...Array(8)].map((_, index) => (
      <SampleItem
        key={index}
        index={index + 1}
      />
    )),
  },
  parameters: {
    docs: {
      description: {
        story:
          "Demonstrates a 4-column grid with large gap and forward direction. Useful for content-heavy layouts on desktop screens.",
      },
    },
  },
};

export const Responsive: Story = {
  args: {
    columns: 1,
    responsive: "md",
    gap: "md",
    children: [...Array(8)].map((_, index) => (
      <SampleItem
        key={index}
        index={index + 1}
      />
    )),
  },
  parameters: {
    docs: {
      description: {
        story:
          "Highlights responsive behavior with 1 column on mobile, scaling to 3 columns at md (768px), 4 at lg (1024px), and 6 at xl (1280px). Test with Storybook viewports.",
      },
    },
  },
};

export const ReverseDirection: Story = {
  args: {
    columns: 3,
    gap: "md",
    children: [...Array(6)].map((_, index) => (
      <SampleItem
        key={index}
        index={index + 1}
      />
    )),
  },
  parameters: {
    docs: {
      description: {
        story:
          "Shows a 3-column grid with reverse direction, ordering items from last to first using [&>*]:order-last. Useful for right-to-left or bottom-to-top layouts.",
      },
    },
  },
};

export const WithCustomClass: Story = {
  args: {
    columns: 4,
    gap: "lg",
    className: "p-6 bg-gray-100 rounded-xl",
    children: [...Array(8)].map((_, index) => (
      <SampleItem
        key={index}
        index={index + 1}
      />
    )),
  },
  parameters: {
    docs: {
      description: {
        story:
          "Applies a custom className to add padding, background color, and rounded corners to a 4-column grid. Demonstrates styling customization.",
      },
    },
  },
};
