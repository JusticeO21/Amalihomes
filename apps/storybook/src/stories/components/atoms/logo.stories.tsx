import { Logo } from "@amalihomes/ui";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Logo> = {
  title: "Components/Atoms/Logo",
  component: Logo,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "light",
      values: [
        { name: "light", value: "#ffffff" },
        { name: "dark", value: "#333333" },
      ],
    },
  },
  tags: ["autodocs"],
  argTypes: {
    url: {
      control: "text",
      description: "URL for the logo image. If not provided, falls back to IconLogo component.",
    },
    alt: {
      control: "text",
      description: "Alternative text for the logo image (only applies when url is provided)",
    },
    href: {
      control: "text",
      description: "Link destination for the logo",
      defaultValue: "/",
    },
    width: {
      control: { type: "number", min: 10, max: 500, step: 1 },
      description: "Width of the logo image in pixels (only applies when url is provided)",
      defaultValue: 91,
    },
    height: {
      control: { type: "number", min: 10, max: 500, step: 1 },
      description: "Height of the logo image in pixels (only applies when url is provided)",
      defaultValue: 24,
    },
    size: {
      options: ["small", "default", "large"],
      control: { type: "radio" },
      description: "Predefined size variant of the logo (only applies when url is provided)",
    },
    hover: {
      options: ["none", "fade", "scale"],
      control: { type: "radio" },
      description: "Hover effect applied to the logo (only applies when url is provided)",
    },
    className: {
      control: "text",
      description: "Additional CSS classes to apply to the logo image (only applies when url is provided)",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Logo>;

// Default logo with image URL
export const WithImageURL: Story = {
  args: {
    url: "https://i.postimg.cc/NfD6CTZT/Logo-Placeholder.jpg",
    alt: "Company Logo",
    size: "default",
    hover: "none",
  },
};

// Fallback to IconLogo SVG component
export const WithIconFallback: Story = {
  args: {
    url: "",
    alt: "Icon Logo Fallback",
  },
  name: "Fallback to SVG Icon",
  parameters: {
    docs: {
      description: {
        story: "When no URL is provided, the component falls back to using the IconLogo SVG component.",
      },
    },
  },
};

export const SmallSize: Story = {
  args: {
    url: "https://i.postimg.cc/NfD6CTZT/Logo-Placeholder.jpg",
    alt: "Small Company Logo",
    size: "small",
  },
};

export const LargeSize: Story = {
  args: {
    url: "https://i.postimg.cc/NfD6CTZT/Logo-Placeholder.jpg",
    alt: "Large Company Logo",
    size: "large",
  },
};

export const FadeHoverEffect: Story = {
  args: {
    url: "https://i.postimg.cc/NfD6CTZT/Logo-Placeholder.jpg",
    alt: "Company Logo with Fade Effect",
    hover: "fade",
  },
};

export const ScaleHoverEffect: Story = {
  args: {
    url: "https://i.postimg.cc/NfD6CTZT/Logo-Placeholder.jpg",
    alt: "Company Logo with Scale Effect",
    hover: "scale",
  },
};

export const CustomLink: Story = {
  args: {
    url: "https://placehold.co/200x50/logo",
    alt: "Logo with Custom Link",
    href: "/dashboard",
  },
};

export const CustomDimensions: Story = {
  args: {
    url: "https://placehold.co/300x75/logo",
    alt: "Logo with Custom Dimensions",
    width: 150,
    height: 40,
  },
};

export const CustomStyling: Story = {
  args: {
    url: "https://i.postimg.cc/NfD6CTZT/Logo-Placeholder.jpg",
    alt: "Custom Styled Logo",
    className: "rounded shadow bg-white p-2",
  },
};

export const OnDarkBackground: Story = {
  parameters: {
    backgrounds: { default: "dark" },
  },
  args: {
    url: "https://i.postimg.cc/NfD6CTZT/Logo-Placeholder.jpg",
    alt: "Logo on dark background",
  },
};

export const ContentfulURL: Story = {
  args: {
    url: "//i.postimg.cc/NfD6CTZT/Logo-Placeholder.jpg",
    alt: "Contentful Logo Example",
  },
};
