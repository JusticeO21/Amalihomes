import { FooterContacts } from "@amalihomes/ui";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof FooterContacts> = {
  title: "Components/Organisms/Footer/FooterContacts",
  component: FooterContacts,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    label: {
      control: "text",
      description: "Label for the contacts section",
    },
    contacts: {
      control: "object",
      description: "Array of contacts",
    },
    className: {
      control: "text",
      description: "Additional CSS classes",
    },
  },
};

export default meta;

type Story = StoryObj<typeof FooterContacts>;

export const Default: Story = {
  args: {
    label: "Contact Us",
    contacts: ["support@example.com", "https://www.example.com", "+11234567890", "123 Main Street, City"],
    className: "bg-gray-500 p-16 w-max",
  },
};
