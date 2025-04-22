import type { Meta, StoryObj } from "@storybook/react";
import { FooterLinks, FooterLinkItem, NavLinkProps } from "@amalihomes/ui";

const meta: Meta<typeof FooterLinks> = {
  title: "Components/Organisms/Footer/FooterLinks",
  component: FooterLinks,
  parameters: {
    layout: "centered",
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

type Story = StoryObj<typeof FooterLinks>;

const sampleLinks: NavLinkProps[] = [
  { id: "1", label: "Support", href: "/support" },
  { id: "2", label: "FAQ", href: "/faq" },
];

export const Default: Story = {
  render: () => (
    <FooterLinks className="bg-gray-500 p-16 w-max">
      <FooterLinkItem
        title="Section 1"
        links={sampleLinks}
      />
      <FooterLinkItem
        title="Section 2"
        links={sampleLinks}
      />
    </FooterLinks>
  ),
};
