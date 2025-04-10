import { Divider } from "@amalihomes/ui/components/divider";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Components/Divider",
  component: Divider,
  tags: ["autodocs"],
  argTypes: {
    orientation: {
      control: "select",
      options: ["horizontal", "vertical"],
    },
    className: { control: "text" },
  },
} as Meta<typeof Divider>;

export default meta;
type Story = StoryObj<typeof meta>;

// Add the following code block to the end of the stories file:

export const HowToUse: Story = {
  render: () => (
    <div style={{ width: "100%", padding: "10px" }}>
      <h3>How to use the Divider component:</h3>
      <ol>
        <li>Import the Divider component from the "@amalihomes/ui/components/divider" module.</li>
        <li>Use the Divider component in your JSX code by wrapping the desired content with it.</li>
        <li>Set the "orientation" prop to either "horizontal" or "vertical" to determine the divider's direction.</li>
        <li>Optionally, provide a custom class name to the "className" prop to apply custom styles.</li>
      </ol>
      <h4>Example:</h4>
      <Divider
        orientation="horizontal"
        className="bg-Grey-stroke-weak"
      />
    </div>
  ),
};

export const Vertical: Story = {
  args: {
    orientation: "vertical",
  },
};
export const Horizontal: Story = {
  args: {
    orientation: "horizontal",
  },
};

export const CustomClass: Story = {
  args: {
    className: "h-64",
    orientation: "horizontal",
  },
};
