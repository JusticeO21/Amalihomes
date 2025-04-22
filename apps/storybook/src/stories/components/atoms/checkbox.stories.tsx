import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "@amalihomes/ui";
import { useState } from "react";

const meta: Meta<typeof Checkbox> = {
  title: "Components/Atoms/Checkbox",
  component: Checkbox,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A fully accessible checkbox component that supports both controlled and uncontrolled usage patterns with customizable styling and icon options.",
      },
      autodocs: true,
    },
  },
  tags: ["autodocs"],
  argTypes: {
    isChecked: {
      control: "boolean",
      description: "Controls the checked state (for controlled usage)",
    },
    onChange: {
      action: "changed",
      description: "Callback fired when the checkbox state changes",
    },
    disabled: {
      control: "boolean",
      description: "Disables the checkbox",
    },
    ariaLabel: {
      control: "text",
      description: "Accessibility label for the checkbox",
      table: {
        defaultValue: { summary: "checkbox" },
      },
    },
    checkIconSize: {
      control: { type: "number", min: 8, max: 48, step: 1 },
      description: "Size of the check icon in pixels",
      table: {
        defaultValue: { summary: "16" },
      },
    },
    checkIconColor: {
      control: "color",
      description: "Color of the check icon",
      table: {
        defaultValue: { summary: "#ffffff" },
      },
    },
    className: {
      control: "text",
      description: "Additional CSS class names to apply",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  args: {
    disabled: false,
    ariaLabel: "Default checkbox",
  },
};

export const Checked: Story = {
  args: {
    isChecked: true,
    ariaLabel: "Checked checkbox",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    ariaLabel: "Disabled checkbox",
  },
};

export const DisabledChecked: Story = {
  args: {
    isChecked: true,
    disabled: true,
    ariaLabel: "Disabled checked checkbox",
  },
};

export const CustomStyling: Story = {
  args: {
    className: "border-blue-500 h-32 w-32 rounded-md",
    ariaLabel: "Custom styled checkbox",
  },
};

export const CustomCheckIcon: Story = {
  args: {
    isChecked: true,
    checkIconSize: 24,
    checkIconColor: "#00ff00",
    ariaLabel: "Checkbox with custom check icon",
  },
};

export const LargeCheckIcon: Story = {
  args: {
    isChecked: true,
    checkIconSize: 32,
    className: "h-40 w-40 border-2",
    ariaLabel: "Checkbox with large check icon",
  },
};

export const ControlledExample: Story = {
  render: function ControlledRender() {
    const [checked, setChecked] = useState(false);

    return (
      <div className="flex flex-col gap-4">
        <p className="text-sm">Controlled checkbox example</p>
        <div className="flex gap-2 items-center">
          <Checkbox
            isChecked={checked}
            onChange={setChecked}
            ariaLabel="Controlled checkbox"
          />
          <span>Status: {checked ? "Checked" : "Unchecked"}</span>
        </div>
        <button
          onClick={() => setChecked(!checked)}
          className="px-2 py-1 bg-gray-200 rounded mt-2 text-sm"
        >
          Toggle from outside
        </button>
      </div>
    );
  },
};

export const UncontrolledExample: Story = {
  render: function UncontrolledRender() {
    const [lastChangeValue, setLastChangeValue] = useState<boolean | null>(null);

    return (
      <div className="flex flex-col gap-4">
        <p className="text-sm">Uncontrolled checkbox example</p>
        <div className="flex gap-2 items-center">
          <Checkbox
            onChange={(value) => setLastChangeValue(value)}
            ariaLabel="Uncontrolled checkbox"
          />
          <span>Last change: {lastChangeValue === null ? "None" : lastChangeValue ? "Checked" : "Unchecked"}</span>
        </div>
      </div>
    );
  },
};

export const WithLabel: Story = {
  render: function WithLabelRender() {
    return (
      <label className="flex items-center gap-2 cursor-pointer">
        <Checkbox ariaLabel="Checkbox with label" />
        <span className="text-sm">Accept terms and conditions</span>
      </label>
    );
  },
};

export const CheckboxGroup: Story = {
  render: function CheckboxGroupRender() {
    const [selections, setSelections] = useState({
      option1: false,
      option2: true,
      option3: false,
    });

    const handleChange = (option: keyof typeof selections) => (value: boolean) => {
      setSelections((prev) => ({
        ...prev,
        [option]: value,
      }));
    };

    return (
      <div className="flex flex-col gap-3">
        <p className="text-sm font-medium">Select your interests:</p>

        <label className="flex items-center gap-2 cursor-pointer">
          <Checkbox
            isChecked={selections.option1}
            onChange={handleChange("option1")}
            ariaLabel="Option 1"
          />
          <span className="text-sm">Web Development</span>
        </label>

        <label className="flex items-center gap-2 cursor-pointer">
          <Checkbox
            isChecked={selections.option2}
            onChange={handleChange("option2")}
            ariaLabel="Option 2"
          />
          <span className="text-sm">Mobile Development</span>
        </label>

        <label className="flex items-center gap-2 cursor-pointer">
          <Checkbox
            isChecked={selections.option3}
            onChange={handleChange("option3")}
            ariaLabel="Option 3"
          />
          <span className="text-sm">Data Science</span>
        </label>

        <p className="text-sm mt-2">
          Selected:{" "}
          {Object.entries(selections)
            .filter(([, value]) => value)
            .map(([key]) => key.replace("option", "Option "))
            .join(", ") || "None"}
        </p>
      </div>
    );
  },
};

export const CustomStylingVariations: Story = {
  render: function StylingVariationsRender() {
    return (
      <div className="flex flex-col gap-6">
        <div className="flex gap-4 items-center">
          <Checkbox
            isChecked={true}
            className="border-blue-500 bg-blue-500"
            checkIconColor="#ffffff"
            ariaLabel="Blue checkbox"
          />
          <span>Blue checkbox</span>
        </div>

        <div className="flex gap-4 items-center">
          <Checkbox
            isChecked={true}
            className="border-green-500 bg-green-500 rounded-full"
            checkIconColor="#ffffff"
            checkIconSize={12}
            ariaLabel="Green rounded checkbox"
          />
          <span>Green rounded checkbox</span>
        </div>

        <div className="flex gap-4 items-center">
          <Checkbox
            isChecked={true}
            className="border-purple-500 bg-purple-500 h-32 w-32"
            checkIconColor="#ffffff"
            checkIconSize={24}
            ariaLabel="Large purple checkbox"
          />
          <span>Large purple checkbox</span>
        </div>

        <div className="flex gap-4 items-center">
          <Checkbox
            isChecked={true}
            className="border-red-500 bg-transparent"
            checkIconColor="#ff0000"
            checkIconSize={20}
            ariaLabel="Outlined red checkbox"
          />
          <span>Outlined red checkbox</span>
        </div>
      </div>
    );
  },
};

export const AccessibilityFocusExample: Story = {
  render: function AccessibilityRender() {
    return (
      <div className="flex flex-col gap-4">
        <p className="text-sm">Tab through these checkboxes to see focus styles</p>
        <div className="flex gap-8">
          <Checkbox
            ariaLabel="First focusable checkbox"
            className="focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
          />

          <Checkbox
            ariaLabel="Second focusable checkbox"
            className="focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
          />

          <Checkbox
            ariaLabel="Third focusable checkbox"
            className="focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
          />
        </div>
        <p className="text-sm mt-2">Press Space or Enter to toggle the checkbox when focused</p>
      </div>
    );
  },
};
