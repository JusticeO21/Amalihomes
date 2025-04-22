import { Image } from "@amalihomes/ui";
import type { Meta, StoryObj } from "@storybook/react";

type ImageProps = React.ComponentProps<typeof Image>;

const meta: Meta<ImageProps> = {
  title: "Components/Atoms/Image",
  component: Image,
  tags: ["autodocs"],
  argTypes: {
    src: {
      control: "text",
      description: "Image source",
    },
    alt: {
      control: "text",
      description: "Image alt text",
    },
    className: {
      control: "text",
      description: "Additional CSS classes",
    },
    width: {
      control: "number",
      description: "Image width",
    },
    height: {
      control: "number",
      description: "Image height",
    },
  },
} satisfies Meta<ImageProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    src: "https://i.postimg.cc/RZmb6PW7/image.png",
    alt: "Father and daughter",
    width: 350,
    height: 350,
  },
};

export const InvalidSource: Story = {
  args: {
    src: "invalid-url",
    alt: "Placeholder",
    width: 250,
    height: 250,
  },
};
