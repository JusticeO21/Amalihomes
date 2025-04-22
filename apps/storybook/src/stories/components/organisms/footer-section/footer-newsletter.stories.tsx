import type { Meta, StoryObj } from "@storybook/react";
import { FooterForm, FooterNewsletterTitleComponent, FooterNewsletterComponent } from "@amalihomes/ui";

const meta: Meta<typeof FooterNewsletterComponent> = {
  title: "Components/Organisms/Footer/FooterNewsletterComponent",
  component: FooterNewsletterComponent,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    className: {
      control: "text",
      description: "Additional CSS classes",
    },
  },
};

export default meta;

type Story = StoryObj<typeof FooterNewsletterComponent>;

export const Default: Story = {
  render: () => (
    <FooterNewsletterComponent className="bg-gray-500 p-16">
      <FooterNewsletterTitleComponent
        title="Stay Updated"
        subTitle="Subscribe to our newsletter"
      />
      <FooterForm
        buttonText="Subscribe"
        inputPlaceholder="Enter email"
        description="Privacy assured"
        privacyLink={{ href: "/privacy", label: "Privacy Policy" }}
      />
    </FooterNewsletterComponent>
  ),
};
