import { IconCart, Tab } from "@amalihomes/ui";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Tab> = {
  title: "Components/Atoms/Tab",
  component: Tab,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        story: "Example of tabs used in a navigation group with one active tab",
      },
    },
  },
  argTypes: {
    href: {
      control: "text",
      description: "The URL the tab points to",
    },
    label: {
      control: "text",
      description: "The text content of the tab",
    },
    focused: {
      control: "boolean",
      description: "Whether the tab is in focused/active state",
    },
    icon: {
      control: false, // Disable control as it's a React node
      description: "Optional icon to display alongside the label",
    },
    iconPosition: {
      control: "select",
      descritption: "Optional positioning of icon",
      options: ["right", "left", "top", "bottom"],
    },
    className: {
      control: "text",
      description: "Additional CSS classes",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Tab>;

export const Default: Story = {
  args: {
    href: "#",
    label: "Default Tab",
  },
};

export const Active: Story = {
  args: {
    ...Default.args,
    focused: true,
    label: "Active Tab",
  },
};

export const WithIcon: Story = {
  args: {
    ...Default.args,
    label: "Home",
    icon: <IconCart />,
  },
};

export const ActiveWithIcon: Story = {
  args: {
    ...Active.args,
    label: "Active Home",
    icon: <IconCart className="text-inherit" />,
  },
};

// Multiple Tabs in Navigation
export const TabGroup = () => (
  <div className="flex gap-4 p-4 bg-gray-100 rounded-lg">
    <Tab
      href="#"
      label="Home"
      focused
    />
    <Tab
      href="#"
      label="Products"
    />
    <Tab
      href="#"
      label="About"
    />
    <Tab
      href="#"
      label="Contact"
    />
  </div>
);
