import type { Meta, StoryObj } from "@storybook/react";
import { FooterLinkItem, NavLinkProps } from "@amalihomes/ui";

const meta: Meta<typeof FooterLinkItem> = {
  title: "Components/Organisms/Footer/FooterLinkItem",
  component: FooterLinkItem,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    title: {
      control: "text",
      description: "Title of the section",
    },
    links: {
      control: "object",
      description: "Array of links",
    },
    className: {
      control: "text",
      description: "Additional CSS classes",
    },
  },
};

export default meta;

type Story = StoryObj<typeof FooterLinkItem>;

const sampleLinks: NavLinkProps[] = [
  { id: "1", label: "About Us", href: "/about" },
  { id: "2", label: "Careers", href: "/careers" },
  { id: "3", label: "Blog", href: "/blog" },
];

export const Default: Story = {
  args: {
    title: "Quick Links",
    links: sampleLinks,
    className: "bg-gray-500 p-16 w-max",
  },
};
