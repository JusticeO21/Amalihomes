import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@amalihomes/ui/components/select";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Select> = {
  title: "Components/Select",
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
      <SelectTrigger>
        <SelectValue placeholder="Select country" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Africa</SelectLabel>
          <SelectItem value="Ghana">Ghana</SelectItem>
          <SelectItem value="Togo">Togo</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  ),
};
export const WithSearch: Story = {
  args: { hasSearch: true },
  render: (args) => (
    <Select {...args}>
      <SelectTrigger>
        <SelectValue placeholder="Select country" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Africa</SelectLabel>
          <SelectItem value="Ghana">Ghana</SelectItem>
          <SelectItem value="Togo">Togo</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  ),
};
export const WithSearchDelay: Story = {
  args: { hasSearch: true, delay: 1000 },
  render: (args) => (
    <Select {...args}>
      <SelectTrigger>
        <SelectValue placeholder="Select country" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Africa</SelectLabel>
          <SelectItem value="Ghana">Ghana</SelectItem>
          <SelectItem value="Togo">Togo</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  ),
};
