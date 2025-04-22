import type { FooterProps, SocialLinkItem } from "@amalihomes/ui";
import {
  Footer,
  FooterContacts,
  FooterForm,
  FooterLinkItem,
  FooterLinks,
  FooterNewsletterComponent,
  FooterNewsletterTitleComponent,
  FooterSocialLinks,
  FooterWrapper,
} from "@amalihomes/ui";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Footer> = {
  title: "Components/Organisms/Footer/Grouped",
  component: Footer,
  parameters: {
    layout: "fullscreen",
  },
  subcomponents: {
    FooterContacts: FooterContacts,
    FooterForm: FooterForm,
    FooterLinkItem: FooterLinkItem,
    FooterSocialLinks: FooterSocialLinks,
    FooterWrapper: FooterWrapper,
    FooterLinks: FooterLinks,
    FooterNewsletterComponent: FooterNewsletterComponent,
    FooterNewsletterTitleComponent: FooterNewsletterTitleComponent,
  },
  tags: ["autodocs", "components"],
  argTypes: {
    footerData: {
      control: "object",
      description: "Footer data",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Footer>;

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

const fullFooterData: FooterProps = {
  contacts: {
    label: "Contact Us",
    contacts: ["support@example.com", "+1 (123) 456-7890", "123 Business Street\nCity, Country"],
  },
  newsLetter: {
    title: "Stay Updated",
    subTitle: "Subscribe to our newsletter",
    buttonText: "Subscribe",
    inputText: "Enter your email",
    subscriptionDescription: "We respect your privacy",
    privacyLink: {
      href: "/privacy",
      label: "Privacy Policy",
    },
  },
  aboutUs: {
    label: "About Us",
    links: [
      { id: "1", label: "Our Story", href: "/about" },
      { id: "2", label: "Careers", href: "/careers" },
    ],
  },
  quickLinks: {
    label: "Quick Links",
    links: [
      { id: "1", label: "Support", href: "/support" },
      { id: "2", label: "FAQ", href: "/faq" },
    ],
  },
  legalService: {
    label: "Legal",
    links: [
      { id: "1", label: "Terms", href: "/terms" },
      { id: "2", label: "Privacy", href: "/privacy" },
    ],
  },
  socialLinks: {
    links: socialLinks,
  },
  copyright: "© 2024 Your Company. All rights reserved.",
};

export const FullFooter: Story = {
  args: {
    footerData: fullFooterData,
  },
};
