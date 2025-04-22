import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@amalihomes/ui";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Select> = {
  title: "Components/Atoms/Select",
  component: Select,
  argTypes: {
    onChange: {
      action: "onChange",
      description: "returns the value of the selected option",
    },
    defaultValue: {
      description: "sets the default selected option",
      control: "text",
    },
    delay: {
      description: "sets the delay before the searched options are displayed",
    },
    hasSearch: {
      description: "flag to enable search functionality",
      control: "boolean",
    },
  },
  args: {},
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `A customizable select dropdown component for selecting an option from a list.`,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Select>;

export const Default: Story = {
  render: (args) => (
    <Select {...args}>
      <SelectTrigger id="select">
        <SelectValue placeholder="Select country" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="Ghana">Ghana</SelectItem>
        <SelectItem value="Togo">Togo</SelectItem>
      </SelectContent>
    </Select>
  ),
};

export const WithLabel: Story = {
  args: { label: "Language" },
  render: (args) => {
    return (
      <Select {...args}>
        <SelectTrigger>
          <SelectValue placeholder="Select language" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="English">English</SelectItem>
          <SelectItem value="French">French</SelectItem>
        </SelectContent>
      </Select>
    );
  },
};
export const WithSearch: Story = {
  args: { hasSearch: true },
  render: (args) => (
    <Select
      {...args}
      label="Select a country"
    >
      <SelectTrigger>
        <SelectValue placeholder="Select country" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="Ghana">Ghana</SelectItem>
        <SelectItem value="Togo">Togo</SelectItem>
      </SelectContent>
    </Select>
  ),
};
export const WithSearchDelay: Story = {
  args: { hasSearch: true, delay: 1000 },
  render: (args) => (
    <Select
      {...args}
      label="Select a country"
    >
      <SelectTrigger>
        <SelectValue placeholder="Select country" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="Ghana">Ghana</SelectItem>
        <SelectItem value="Togo">Togo</SelectItem>
      </SelectContent>
    </Select>
  ),
};

export const WithGroupings: Story = {
  render: (args) => (
    <Select {...args}>
      <SelectTrigger>
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup groupLabel="Fruits">
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
        </SelectGroup>
        <SelectGroup groupLabel="Vegetables">
          <SelectItem value="carrot">Carrot</SelectItem>
          <SelectItem value="broccoli">Broccoli</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  ),
};
