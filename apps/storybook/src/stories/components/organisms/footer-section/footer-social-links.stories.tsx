import type { Meta, StoryObj } from "@storybook/react";
import { FooterSocialLinks, NavLinkProps, SocialLinkItem } from "@amalihomes/ui";

const meta: Meta<typeof FooterSocialLinks> = {
  title: "Components/Organisms/Footer/FooterSocialLinks",
  component: FooterSocialLinks,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    copyright: {
      control: "text",
      description: "Copyright text",
    },
    socialLinks: {
      control: "object",
      description: "Array of social links",
    },
    legalLinks: {
      control: "object",
      description: "Array of legal links",
    },
    className: {
      control: "text",
      description: "Additional CSS classes",
    },
  },
};

export default meta;

type Story = StoryObj<typeof FooterSocialLinks>;

const socialLinks: SocialLinkItem[] = [
  {
    href: "https://facebook.com",
    label: "Facebook",
    icon: "https://i.postimg.cc/QMMhGJRZ/Facebook.png",
  },
  {
    href: "https://twitter.com",
    label: "Twitter",
    icon: "https://i.postimg.cc/XJGWX7j2/X.png",
  },
];

const legalLinks: NavLinkProps[] = [
  { id: "1", label: "Privacy Policy", href: "/privacy-policy" },
  { id: "2", label: "Terms of Service", href: "/terms-of-service" },
  { id: "3", label: "Cookie Settings", href: "/cookie-settings" },
];

export const Default: Story = {
  args: {
    copyright: "© 2024 Your Company. All rights reserved.",
    socialLinks,
    legalLinks,
    className: "bg-gray-500 p-16 w-full gap-x-16",
  },
};
