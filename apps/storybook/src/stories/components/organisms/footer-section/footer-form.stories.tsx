import type { Meta, StoryObj } from "@storybook/react";
import { FooterForm } from "@amalihomes/ui";

const meta: Meta<typeof FooterForm> = {
  title: "Components/Organisms/Footer/FooterForm",
  component: FooterForm,
  parameters: {
    layout: "centered",
    controls: {
      exclude: ["onSubmit", "onChange"],
    },
  },
  tags: ["autodocs"],
  argTypes: {
    buttonText: {
      control: "text",
      description: "Text for the submit button",
    },
    inputPlaceholder: {
      control: "text",
      description: "Placeholder text for the input field",
    },
    description: {
      control: "text",
      description: "Description text",
    },
    privacyLink: {
      control: "object",
      description: "Link for privacy policy",
    },
    className: {
      control: "text",
      description: "Additional CSS classes",
    },
  },
};

export default meta;

type Story = StoryObj<typeof FooterForm>;

export const Default: Story = {
  args: {
    buttonText: "Subscribe",
    inputPlaceholder: "Enter your email",
    description: "We care about your privacy",
    privacyLink: {
      href: "/privacy",
      label: "Privacy Policy",
    },
    className: "bg-gray-500 p-16 w-max",
  },
};
