import { Input } from "@amalihomes/ui";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Components/Atoms/Input",
  component: Input,
  parameters: {
    docs: {
      description: {
        component: `The Input component is a flexible React form input component that supports various input types`,
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "disabled"],
    },
    type: {
      control: "select",
      options: ["text", "email", "password", "textarea", "search", "number", "tel"],
    },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: "Enter text here...",
    name: "Name",
    label: "Name",
  },
};

export const WithOutLabel: Story = {
  args: {
    placeholder: "Enter name",
    name: "name",
  },
};

export const Disabled: Story = {
  args: {
    label: "Disabled",
    placeholder: "Disabled input",
    variant: "disabled",
    name: "Disabled input",
  },
};

export const Password: Story = {
  args: {
    label: "Password",
    type: "password",
    placeholder: "Enter password",
    name: "Password",
  },
};

export const Email: Story = {
  args: {
    label: "Email",
    type: "email",
    placeholder: "Enter email",
    name: "Email",
  },
};

export const Textarea: Story = {
  args: {
    label: "Textarea",
    type: "textarea",
    placeholder: "Enter text here...",
    name: "Textarea",
  },
};
export const Search: Story = {
  args: {
    label: "Search",
    type: "search",
    placeholder: "search here...",
    name: "Search",
  },
};

export const Tel: Story = {
  args: {
    label: "Phone number",
    type: "tel",
    placeholder: "Enter phone number",
    name: "Tel",
  },
};

export const InputNumber: Story = {
  args: {
    type: "number",
    placeholder: "Enter number",
    name: "Number",
  },
};
