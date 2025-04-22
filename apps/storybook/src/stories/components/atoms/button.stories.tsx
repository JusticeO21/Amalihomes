import { Button, IconCancel, IconCart } from "@amalihomes/ui";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Button> = {
  title: "Components/Atoms/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "primary", "secondary"],
      description: "The visual style of the button",
    },
    size: {
      control: "select",
      options: ["default", "sm", "md", "lg", "icon"],
      description: "The size variant of the button",
    },
    leadingIcon: {
      control: { disable: true },
      description: "Icon displayed before the button text",
    },
    trailingIcon: {
      control: { disable: true },
      description: "Icon displayed after the button text",
    },
    href: {
      control: "text",
      description: "When provided, renders the button as a link",
    },
    disabled: {
      control: "boolean",
      description: "Whether the button is disabled",
    },
    onClick: { action: "clicked" },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: "Default Button",
    variant: "default",
    size: "default",
  },
};

export const Primary: Story = {
  args: {
    children: "Primary Button",
    variant: "primary",
    size: "default",
  },
};

export const Secondary: Story = {
  args: {
    children: "Secondary Button",
    variant: "secondary",
    size: "default",
  },
};

export const Small: Story = {
  args: {
    children: "Small",
    size: "sm",
  },
};

export const Medium: Story = {
  args: {
    children: "Medium Button",
    size: "md",
  },
};

export const Large: Story = {
  args: {
    children: "Large Button",
    size: "lg",
  },
};

export const WithLeadingIcon: Story = {
  args: {
    children: "Add Item",
    leadingIcon: <IconCart size={16} />,
  },
};

export const WithTrailingIcon: Story = {
  args: {
    children: "Next Step",
    trailingIcon: <IconCart size={16} />,
  },
};

export const WithBothIcons: Story = {
  args: {
    children: "Home",
    leadingIcon: <IconCart size={16} />,
    trailingIcon: <IconCancel size={16} />,
  },
};

export const AsLink: Story = {
  args: {
    children: "Go to Dashboard",
    href: "/dashboard",
    trailingIcon: <IconCart size={16} />,
  },
};

export const Disabled: Story = {
  args: {
    children: "Disabled Button",
    disabled: true,
  },
};

export const IconOnly: Story = {
  args: {
    size: "icon",
    leadingIcon: <IconCancel size={20} />,
    "aria-label": "Home",
  },
};

export const ButtonGroup: Story = {
  render: () => (
    <div className="flex flex-col space-y-4">
      <div className="flex flex-row gap-4">
        <Button variant="default">Default</Button>
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
      </div>
      <div className="flex flex-row gap-4">
        <Button size="sm">Small</Button>
        <Button size="default">Default</Button>
        <Button size="md">Medium</Button>
        <Button size="lg">Large</Button>
      </div>
      <div className="flex flex-row gap-4">
        <Button disabled>Disabled</Button>
        <Button
          variant="primary"
          disabled
        >
          Disabled Primary
        </Button>
        <Button
          variant="secondary"
          disabled
        >
          Disabled Secondary
        </Button>
      </div>
    </div>
  ),
};

export const Interactive: Story = {
  parameters: {
    docs: {
      description: {
        story: "This story demonstrates the button in different interactive states.",
      },
    },
  },
  render: () => (
    <div className="flex flex-col space-y-6">
      <div className="space-y-2">
        <h3 className="text-lg font-medium">Hover over buttons to see hover states</h3>
        <div className="flex flex-row gap-4">
          <Button>Default</Button>
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
        </div>
      </div>
      <div className="space-y-2">
        <h3 className="text-lg font-medium">With icons</h3>
        <div className="flex flex-row gap-4">
          <Button leadingIcon={<IconCart size={16} />}>Add New</Button>
          <Button trailingIcon={<IconCancel size={16} />}>Continue</Button>
          <Button
            variant="secondary"
            leadingIcon={<IconCancel size={16} />}
            trailingIcon={<IconCart size={16} />}
          >
            Navigate
          </Button>
        </div>
      </div>
      <div className="space-y-2">
        <h3 className="text-lg font-medium">As links</h3>
        <div className="flex flex-row gap-4">
          <Button href="/dashboard">Dashboard</Button>
          <Button
            href="/settings"
            variant="primary"
            trailingIcon={<IconCancel size={16} />}
          >
            Settings
          </Button>
        </div>
      </div>
    </div>
  ),
};
