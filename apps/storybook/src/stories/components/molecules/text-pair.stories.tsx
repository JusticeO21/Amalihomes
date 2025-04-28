import type { Meta, StoryFn } from "@storybook/react";
import { TextPair, TextPairProps } from "@amalihomes/ui";

const meta: Meta<TextPairProps> = {
  title: "Components/molecules/TextPair",
  component: TextPair,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "The `TextPair` component displays a header and optional description with customizable styling and accessibility features. Ideal for hero sections, CMS-driven content (e.g., Contentful), or minor blocks in a Next.js app. Supports Tailwind CSS, `class-variance-authority`, and ARIA for WCAG 2.1 compliance. **Note**: Auto-generated `id`s (`text-pair-xyz789`) may change on re-renders; provide explicit `id`s for major sections (e.g., `about-hero`). Use `role` (`region`, `article`, `group`) appropriately.",
      },
    },
  },
  argTypes: {
    header: {
      description: "Text or JSX for the header.",
      control: { type: "text" },
    },
    description: {
      description: "Optional text or JSX for the description.",
      control: { type: "text" },
    },
    spacing: {
      description: "Vertical gap between header and description.",
      control: { type: "select" },
      options: ["sm", "md", "lg", "xl"],
    },
    align: {
      description: "Text alignment.",
      control: { type: "select" },
      options: ["left", "center", "right"],
    },
    className: {
      description: "Custom classes for the wrapper `div`.",
      control: { type: "text" },
    },
    headerClass: {
      description: "Custom classes for the header element.",
      control: { type: "text" },
    },
    descriptionClass: {
      description: "Custom classes for the description element.",
      control: { type: "text" },
    },
    headerAs: {
      description: "Element or component for the header (e.g., `h2`, `h3`).",
      control: { type: "text" },
    },
    descriptionAs: {
      description: "Element or component for the description (e.g., `p`, `div`).",
      control: { type: "text" },
    },
    ariaLabel: {
      description: "Custom ARIA label for screen readers.",
      control: { type: "text" },
    },
    id: {
      description:
        "Unique ID for `aria-labelledby`. Auto-generated if omitted. Prefer explicit IDs for major sections.",
      control: { type: "text" },
    },
    role: {
      description: "ARIA role (e.g., `region`, `article`, `group`). Omit for minor uses.",
      control: { type: "select" },
      options: ["region", "article", "group", undefined],
    },
  },
};

export default meta;

const Template: StoryFn<TextPairProps> = (args) => <TextPair {...args} />;

export const HeroSection = Template.bind({});
HeroSection.args = {
  header: "AmaliHomes",
  headerAs: "h2",
  headerClass: "text-56 text-gray-800",
  description: "Discover a wide range of high-quality furniture designed to fit your style and space.",
  ariaLabel: "About page introduction",
  id: "about-hero",
  role: "region",
  spacing: "lg",
  align: "center",
};
HeroSection.parameters = {
  docs: {
    description: {
      story:
        "A hero section for the About page, using `role='region'` and explicit `id` for accessibility. Ideal for prominent CMS-driven content.",
    },
  },
};

export const BlogPostPreview = Template.bind({});
BlogPostPreview.args = {
  header: "Furniture Trends 2025",
  headerAs: "h3",
  headerClass: "text-24",
  description: "Explore the latest in cozy minimalism with our new collection.",
  id: "article-1",
  role: "article",
  spacing: "md",
  align: "left",
};
BlogPostPreview.parameters = {
  docs: {
    description: {
      story: "A standalone blog post preview, using `role='article'` for CMS-driven content like Contentful entries.",
    },
  },
};

export const FooterContactInfo = Template.bind({});
FooterContactInfo.args = {
  header: "Contact Us",
  headerAs: "h3",
  headerClass: "text-18",
  description: "Email: support@amalihomes.com",
  id: "contact-info",
  spacing: "sm",
  align: "left",
};
FooterContactInfo.parameters = {
  docs: {
    description: {
      story: "A minor contact info block for footers, omitting `role` to avoid screen reader clutter.",
    },
  },
};
