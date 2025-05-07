import { OrderEnquiriesForm, ToastContainer } from "@amalihomes/ui";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof OrderEnquiriesForm> = {
  title: "Components/Molecules/Forms/Order Enquiries Form",
  component: OrderEnquiriesForm,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
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
    inputOrderIDLabel: {
      control: "text",
      description: "Label for the orderID input field",
    },
    inputOrderIDPlaceholder: {
      control: "text",
      description: "Placeholder for the orderID input field",
    },
    inputOrderIDs: {
      control: "object",
      description: "List of order IDs and their prices",
    },
  },
};

export default meta;

type Story = StoryObj<typeof OrderEnquiriesForm>;

export const Default: Story = {
  args: {
    title: "Order Enquiries",
    description: "Please fill out the form below to make an enquiry about this product.",
    buttonLabel: "Submit",
    inputEmailLabel: "Email",
    inputEmailPlaceholder: "Enter your email address",
    inputMessageLabel: "Message",
    inputMessagePlaceholder: "Enter your message",
    inputSubjectLabel: "Subject",
    inputSubjectPlaceholder: "Enter the subject of your enquiry",
    inputOrderIDLabel: "Order ID",
    inputOrderIDPlaceholder: "#ORD1234",
    inputOrderIDs: [
      { id: "#ORD1234", price: "$ 100" },
      { id: "#ORD5678", price: "$ 200" },
      { id: "#ORD9101", price: "$ 300" },
    ],
  },
  render: (args) => (
    <div className="w-[393px] p-16">
      <ToastContainer position="bottom-right" />
      <OrderEnquiriesForm {...args} />
    </div>
  ),
};
