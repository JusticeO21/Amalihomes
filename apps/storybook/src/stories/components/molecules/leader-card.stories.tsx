import type { Meta, StoryObj } from "@storybook/react";
import { LeaderCard } from "@amalihomes/ui";

const meta: Meta<typeof LeaderCard> = {
  title: "Components/Molecules/Cards/LeaderCard",
  component: LeaderCard,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
The \`LeaderCard\` component is a versatile profile card designed for showcasing team members, executives, or leadership profiles. Built with Next.js Image optimization and fully typed with TypeScript, it features:

- **Multiple Size Variants**: Small, medium, and large card sizes with responsive dimensions
- **Text Positioning**: Flexible content alignment (top, center, bottom)
- **Customizable Overlays**: Built-in dark gradient or custom overlay options
- **Accessibility Focused**: Proper ARIA attributes, keyboard navigation, and semantic heading support
- **Performance Optimized**: Next.js Image component with quality control and priority loading
- **Highly Customizable**: Class injection points for all major elements

Use this component for leadership teams, employee spotlights, or any profile-based content display.
        `,
      },
    },
  },
  argTypes: {
    size: {
      description: "Controls the card dimensions and rounded corners",
      control: { type: "select" },
      options: ["sm", "md", "lg"],
      table: {
        defaultValue: { summary: "sm" },
        type: { summary: "sm | md | lg" },
      },
    },
    textPosition: {
      description: "Vertical alignment of the text content within the card",
      control: { type: "select" },
      options: ["top", "center", "bottom"],
      table: {
        defaultValue: { summary: "bottom" },
        type: { summary: "top | center | bottom" },
      },
    },
    overlay: {
      description: "Overlay variant or custom class for background overlay",
      control: { type: "select" },
      options: ["none", "dark", "custom-gradient"],
      table: {
        defaultValue: { summary: "dark" },
        type: { summary: "none | dark | string" },
      },
    },
    headerAs: {
      description: "Semantic HTML heading level for the name/title",
      control: { type: "select" },
      options: ["h1", "h2", "h3", "h4", "h5", "h6", "p"],
      table: {
        defaultValue: { summary: "h3" },
        type: { summary: "h1 | h2 | h3 | h4 | h5 | h6 | p" },
      },
    },
    imageQuality: {
      description: "Next.js image quality (1-100)",
      control: { type: "range", min: 1, max: 100, step: 1 },
      table: {
        type: { summary: "number" },
      },
    },
    priority: {
      description: "Next.js image loading priority (preload above-the-fold images)",
      control: { type: "boolean" },
      table: {
        type: { summary: "boolean" },
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof LeaderCard>;

const sampleImage =
  "https://plus.unsplash.com/premium_photo-1683133676574-c14387474e14?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

export const Default: Story = {
  args: {
    imageUrl: sampleImage,
    imageAlt: "Team member profile",
    title: "Jane Doe",
    description: "Chief Executive Officer",
  },
  parameters: {
    docs: {
      description: {
        story:
          "The default LeaderCard with dark overlay and bottom-aligned text. Suitable for most leadership profile use cases.",
      },
    },
  },
};

export const SizeVariants: Story = {
  render: (args) => (
    <div className="flex flex-col gap-8">
      <LeaderCard
        {...args}
        headerClass="!text-white"
        descriptionClass="!text-white"
        overlay="bg-gradient-to-b from-transparent to-black/80"
        size="sm"
        title="Small Card"
        description="Compact profile (348px)"
        imageUrl={sampleImage}
      />
      <LeaderCard
        {...args}
        headerClass="!text-white"
        descriptionClass="!text-white"
        overlay="bg-gradient-to-b from-transparent to-black/80"
        size="md"
        title="Medium Card"
        description="Standard profile (370-448px)"
        imageUrl={sampleImage}
      />
      <LeaderCard
        {...args}
        headerClass="!text-white"
        descriptionClass="!text-white"
        overlay="bg-gradient-to-b from-transparent to-black/80"
        size="lg"
        title="Large Card"
        description="Featured profile (480px)"
        imageUrl={sampleImage}
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Demonstrates all available size variants. Choose based on your layout needs and content priority.",
      },
    },
  },
};

export const TextPositions: Story = {
  render: (args) => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <LeaderCard
        {...args}
        headerClass="!text-white"
        descriptionClass="!text-white"
        overlay="bg-gradient-to-b from-transparent to-black/60"
        textPosition="top"
        title="Top Aligned"
        description="Text at top"
        imageUrl={sampleImage}
      />
      <LeaderCard
        {...args}
        headerClass="!text-white"
        descriptionClass="!text-white"
        overlay="bg-gradient-to-b from-transparent to-black/60"
        imageUrl={sampleImage}
        textPosition="center"
        title="Center Aligned"
        description="Text centered"
      />
      <LeaderCard
        {...args}
        headerClass="!text-white"
        descriptionClass="!text-white"
        overlay="bg-gradient-to-b from-transparent to-black/60"
        imageUrl={sampleImage}
        textPosition="bottom"
        title="Bottom Aligned"
        description="Text at bottom"
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Shows different text positioning options. Center works well for featured profiles, while bottom is ideal for grids.",
      },
    },
  },
};

export const CustomOverlayExample: Story = {
  args: {
    ...Default.args,
    overlay: "bg-gradient-to-b from-transparent to-purple-900/70",
    title: "Custom Overlay",
    description: "Using custom gradient classes",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Example of custom overlay using Tailwind gradient classes. Override the default dark gradient with any valid background class.",
      },
    },
  },
};

export const ClickableProfile: Story = {
  args: {
    ...Default.args,
    title: "Clickable Profile",
    description: "Click or press Enter",
    headerClass: "!text-white",
    descriptionClass: "!text-white",
    overlay: "bg-gradient-to-b from-transparent to-black/60",
    onClick: () => alert("Profile clicked!"),
  },
  parameters: {
    docs: {
      description: {
        story:
          "Interactive card with click handler. Includes keyboard navigation support (Enter key). Use for profile modals or detail pages.",
      },
    },
  },
};

export const AccessibilityExample: Story = {
  args: {
    ...Default.args,
    headerAs: "h2",
    title: "Accessible Card",
    description: "Proper heading hierarchy",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Demonstrates semantic HTML usage with h2 heading. Ensure your card headings follow the proper document outline hierarchy.",
      },
    },
  },
};
