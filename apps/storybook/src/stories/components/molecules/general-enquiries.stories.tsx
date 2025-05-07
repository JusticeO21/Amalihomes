import { GeneralEnquiriesForm, ToastContainer } from "@amalihomes/ui";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof GeneralEnquiriesForm> = {
  title: "Components/Molecules/Forms/GeneralEnquiriesForm",
  component: GeneralEnquiriesForm,
  tags: ["autodocs"],
  parameters: {
    layout: "centered"
  },
  argTypes: {
    title: {
      control: { type: "text" },
      description: "Title of the form",
    },
    description: {
      control: { type: "text" },
      description: "Description of the form",
    },
    buttonLabel: {
      control: { type: "text" },
      description: "Label for the submit button",
    },
    inputEmailLabel: {
      control: { type: "text" },
      description: "Label for the email input field",
    },
    inputEmailPlaceholder: {
      control: { type: "text" },
      description: "Placeholder for the email input field",
    },
    inputSubjectLabel: {
      control: { type: "text" },
      description: "Label for the subject input field",
    },
    inputSubjectPlaceholder: {
      control: { type: "text" },
      description: "Placeholder for the subject input field",
    },
    inputMessageLabel: {
      control: { type: "text" },
      description: "Label for the message input field",
    },
    inputMessagePlaceholder: {
      control: { type: "text" },
      description: "Placeholder for the message input field",
    },
    inputEnquiryTypeLabel: {
      control: { type: "text" },
      description: "Label for the enquiry type select field",
    },
    inputEnquiryTypePlaceholder: {
      control: { type: "text" },
      description: "Placeholder for the enquiry type select field",
    },
  },
};

export default meta;

type Story = StoryObj<typeof GeneralEnquiriesForm>;

export const Default: Story = {
  args: {
    title: "General Enquiries",
    description: "Please fill out the form below, and we'll get back to you as soon as possible.",
    buttonLabel: "Submit",
    inputEmailLabel: "Email",
    inputEmailPlaceholder: "Enter your email address",
    inputSubjectLabel: "Subject",
    inputSubjectPlaceholder: "Enter the subject of your enquiry",
    inputMessageLabel: "Message",
    inputMessagePlaceholder: "Enter your message here",
    inputEnquiryTypeLabel: "Enquiry Type",
    inputEnquiryTypePlaceholder: "Select an enquiry type",
    inputEnquiryTypeOptions: ["General", "Support", "Sales"],
  },

  render: (args) => (
    <div className="w-[393px] px-16">
      <ToastContainer position={"bottom-right"} />
      <GeneralEnquiriesForm {...args} />
    </div>
  ),
};
