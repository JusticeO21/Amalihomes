import type { Meta, StoryObj } from "@storybook/react";
import { FooterNewsletterTitleComponent } from "@amalihomes/ui";

const meta: Meta<typeof FooterNewsletterTitleComponent> = {
  title: "Components/Organisms/Footer/FooterNewsletterTitle",
  component: FooterNewsletterTitleComponent,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    title: {
      control: "text",
      description: "Title of the newsletter",
    },
    subTitle: {
      control: "text",
      description: "Subtitle of the newsletter",
    },
    className: {
      control: "text",
      description: "Additional CSS classes",
    },
  },
};

export default meta;

type Story = StoryObj<typeof FooterNewsletterTitleComponent>;

export const Default: Story = {
  args: {
    title: "Stay Updated",
    subTitle: "Subscribe to our newsletter for latest updates",
    className: "bg-gray-500 p-16 w-max",
  },
};
