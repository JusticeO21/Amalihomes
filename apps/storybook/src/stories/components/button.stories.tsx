import { Button } from "@amalihomes/ui/components/button";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Button",
  },
};

export const Primary: Story = {
  args: {
    variant: "primary",
    children: "Primary Button",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Secondary Button",
  },
};

export const Small: Story = {
  args: {
    size: "sm",
    children: "Small Button",
  },
};

export const Large: Story = {
  args: {
    size: "lg",
    children: "Large Button",
  },
};

export const Medium: Story = {
  args: {
    size: "md",
    children: "Medium Button",
  },
};

export const Icon: Story = {
  args: {
    size: "icon",
    children: "Icon",
  },
};

export const WithLeadingIcon: Story = {
  args: {
    children: "With Leading Icon",
    leadingIcon: "🔍",
  },
};

export const WithTrailingIcon: Story = {
  args: {
    children: "With Trailing Icon",
    trailingIcon: "→",
  },
};

export const Disabled: Story = {
  args: {
    children: "Disabled Button",
    disabled: true,
  },
};

export const HowToUse: Story = {
  render: () => (
    <div style={{ width: "100%", padding: "10px" }}>
      <h3>How to use the Button component:</h3>
      <ol>
        <li>Import the Button component from the "@amalihomes/ui/components/button" module.</li>
        <li>Use the Button component in your JSX code by wrapping the desired content with it.</li>
        <li>
          Set the "variant" prop to either "primary", "secondary", or "default" to determine the button's appearance.
        </li>
        <li>Set the "size" prop to either "sm", "lg", "md", "icon", or "default" to determine the button's size.</li>
        <li>Optionally, provide a custom class name to the "className" prop to apply custom styles.</li>
      </ol>
      <h4>Example:</h4>

      <Button variant="primary">Primary Button</Button>
    </div>
  ),
};
