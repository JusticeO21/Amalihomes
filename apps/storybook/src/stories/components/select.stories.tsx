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
  argTypes: {},
  args: {},
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof Select>;

export const Default: Story = {
  render: () => (
    <Select>
      <SelectTrigger>
        <SelectValue placeholder="Select country" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Africa</SelectLabel>
          <SelectItem value="Ghana">Ghana</SelectItem>
          <SelectItem value="Togo">Togo</SelectItem>
        </SelectGroup>
        <SelectGroup>
          <SelectLabel>Asia</SelectLabel>
          <SelectItem value="Japan">Japan</SelectItem>
          <SelectItem value="South Korea">South Korea</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  ),
};

export const WithDefaultValue: Story = {
  render: () => (
    <Select defaultValue="Ghana">
      <SelectTrigger>
        <SelectValue placeholder="Select country" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Africa</SelectLabel>
          <SelectItem value="Ghana">Ghana</SelectItem>
          <SelectItem value="Togo">Togo</SelectItem>
        </SelectGroup>
        <SelectGroup>
          <SelectLabel>Asia</SelectLabel>
          <SelectItem value="Japan">Japan</SelectItem>
          <SelectItem value="South Korea">South Korea</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  ),
};

export const WithoutContent: Story = {
  render: () => (
    <Select>
      <SelectTrigger>
        <SelectValue placeholder="Select country" />
      </SelectTrigger>
    </Select>
  ),
};
