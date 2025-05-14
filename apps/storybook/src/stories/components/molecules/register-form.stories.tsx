import type { Meta, StoryObj } from "@storybook/react";
import { RegisterForm } from "@amalihomes/ui";

const meta: Meta<typeof RegisterForm> = {
  title: "Components/Molecules/Forms/RegisterForm",
  component: RegisterForm,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "The `RegisterForm` component is a form for user registration.",
      },
    },
    layout: "centered",
  },
  argTypes: {
    isLoading: {
      control: "boolean",
    },
  },
};

export default meta;

type Story = StoryObj<typeof RegisterForm>;

export const Default: Story = {
  args: {
    isLoading: false,
    register: (data: unknown) => {
      console.log(data);
    },
  },
};
