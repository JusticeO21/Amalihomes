import { ProductEnquiriesForm, ToastContainer } from "@amalihomes/ui";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ProductEnquiriesForm> = {
  title: "Components/Molecules/Forms/Product Enquiries Form",
  component: ProductEnquiriesForm,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    title: {
      control: "text",
      description: "Title of the form",
    },
    description: {
      control: "text",
      description: "Description of the form",
    },
    buttonLabel: {
      control: "text",
      description: "Label for the submit button",
    },
    inputEmailLabel: {
      control: "text",
      description: "Label for the email input field",
    },
    inputEmailPlaceholder: {
      control: "text",
      description: "Placeholder for the email input field",
    },
    inputMessageLabel: {
      control: "text",
      description: "Label for the message input field",
    },
    inputMessagePlaceholder: {
      control: "text",
      description: "Placeholder for the message input field",
    },
    inputSubjectLabel: {
      control: "text",
      description: "Label for the subject input field",
    },
    inputSubjectPlaceholder: {
      control: "text",
      description: "Placeholder for the subject input field",
    },
    inputProductLabel: {
      control: "text",
      description: "Label for the product input field",
    },
    inputProductPlaceholder: {
      control: "text",
      description: "Placeholder for the product input field",
    },
  },
};

export default meta;

type Story = StoryObj<typeof ProductEnquiriesForm>;

export const Default: Story = {
  args: {
    title: "Product Enquiries",
    description: "Please fill out the form below to make an enquiry about this product.",
    buttonLabel: "Submit",
    inputEmailLabel: "Email",
    inputEmailPlaceholder: "Enter your email address",
    inputMessageLabel: "Message",
    inputMessagePlaceholder: "Enter your message",
    inputSubjectLabel: "Subject",
    inputSubjectPlaceholder: "Enter the subject of your enquiry",
    inputProductLabel: "Product",
    inputProductPlaceholder: "Enter the product name or code",
  },
  render: (args) => (
    <div className="w-[393px] p-16">
      <ToastContainer position="bottom-right" />
      <ProductEnquiriesForm {...args} />
    </div>
  ),
};
