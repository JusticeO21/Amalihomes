import { Button } from "@amalihomes/ui/components/button";
import { toast, ToastContainer } from "@amalihomes/ui/components/toast";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ToastContainer> = {
  title: "Components/Toast",
  component: ToastContainer,
  tags: ["autodocs"],
  argTypes: {
    position: {
      control: "select",
      options: ["top-left", "top-right", "top-middle", "bottom-left", "bottom-right", "bottom-middle"],
      defaultValue: "top-right",
    },
    duration: {
      control: "number",
    },
  },
  parameters: {
    docs: {
      description: {
        component: `A container for displaying toast notifications.`,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ToastContainer>;

export const Default: Story = {
  render: (args) => {
    return (
      <>
        <ToastContainer {...args} />
        <div>
          <Button onClick={() => toast()}>default</Button>
        </div>
      </>
    );
  },
};

export const ErrorToast: Story = {
  render: (args) => {
    return (
      <>
        <ToastContainer
          position={"bottom-middle"}
          {...args}
        />
        <div>
          <Button onClick={() => toast.error("something went wrong")}>error</Button>
        </div>
      </>
    );
  },
};

export const Success: Story = {
  render: (args) => {
    return (
      <>
        <ToastContainer {...args} />
        <div>
          <Button onClick={() => toast.success("this is a success toast")}>success</Button>
        </div>
      </>
    );
  },
};

export const Info: Story = {
  render: (args) => {
    return (
      <>
        <ToastContainer {...args} />
        <div>
          <Button onClick={() => toast.info("this is an infomation toast")}>info</Button>
        </div>
      </>
    );
  },
};

export const Warning: Story = {
  render: (args) => {
    return (
      <>
        <ToastContainer {...args} />
        <div>
          <Button onClick={() => toast.warning("this is a warning toast")}>warning</Button>
        </div>
      </>
    );
  },
};
