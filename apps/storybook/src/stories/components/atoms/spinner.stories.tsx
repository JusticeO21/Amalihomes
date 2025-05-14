import type { Meta, StoryObj } from "@storybook/react";
import { Spinner } from "@amalihomes/ui";

const meta: Meta<typeof Spinner> = {
  title: "Components/Atoms/Loaders/Spinner",
  component: Spinner,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "The `Spinner` component displays a loading animation to indicate that a process is in progress.",
      },
    },
    layout: "centered",
  },
  argTypes: {
    size: {
      control: "number",
      description: "Sets the size of the spinner.",
    },
    firstBlockClassName: {
      control: "text",
      description: "Sets the class name for the first block of the spinner.",
    },
    secondBlockClassName: {
      control: "text",
      description: "Sets the class name for the second block of the spinner.",
    },
    firstBlockColor: {
      control: "color",
      description: "Sets the color of the first block of the spinner.",
    },
    secondBlockColor: {
      control: "color",
      description: "Sets the color of the second block of the spinner.",
    },
    className: {
      control: "text",
      description: "Sets the class name for the spinner.",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Spinner>;

export const Default: Story = {
  render: (args) => <Spinner {...args} />,
};

export const CustomSize: Story = {
  args: {
    className: "m-auto",
    size: 20,
  },
};

export const CustomColor: Story = {
  args: {
    className: "m-auto",
    firstBlockColor: "#ccc",
    secondBlockColor: "#000",
  },
};
