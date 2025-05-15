import type { Meta, StoryObj } from "@storybook/react";
import { LoginForm } from "@amalihomes/ui";

const meta: Meta<typeof LoginForm> = {
  title: "Components/Molecules/Forms/LoginForm",
  component: LoginForm,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "The `LoginForm` component is a form for user login.",
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

export const Default: StoryObj<typeof LoginForm> = {
  args: {
    isLoading: false,
    login: (data: unknown) => {
      console.log(data);
    },
  },
};
