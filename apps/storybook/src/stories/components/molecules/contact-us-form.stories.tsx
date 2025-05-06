import { ContactUsForm } from "@amalihomes/ui";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta = {
  title: "Components/Molecules/Forms/ContactUsForm",
  component: ContactUsForm,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    formTitle: { control: "text", description: "Title of the form" },
    nameInputLabel: { control: "text", description: "Label for the name input" },
    nameInputPlaceholder: { control: "text", description: "Placeholder for the name input" },
    emailInputLabel: { control: "text", description: "Label for the email input" },
    emailInputPlaceholder: { control: "text", description: "Placeholder for the email input" },
    messageInputLabel: { control: "text", description: "Label for the message input" },
    messageInputPlaceholder: { control: "text", description: "Placeholder for the message input" },
    submitButtonLabel: { control: "text", description: "Label for the submit button" },
  },
};

export default meta;

type Story = StoryObj<typeof ContactUsForm>;

export const Default: Story = {
  args: {
    formTitle: "Fill the form Below",
    nameInputLabel: "Name",
    nameInputPlaceholder: "Enter your name",
    emailInputLabel: "Email",
    emailInputPlaceholder: "Enter your email",
    messageInputLabel: "Message",
    messageInputPlaceholder: "Enter your message",
    submitButtonLabel: "Submit",
  },
};
