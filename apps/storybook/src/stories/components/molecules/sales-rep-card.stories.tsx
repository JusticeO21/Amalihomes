import { SalesRepCard } from "@amalihomes/ui";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta = {
  title: "Components/Molecules/Cards/SalesRepCard",
  component: SalesRepCard,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    imageUrl: {
      control: { type: "text" },
      description: "url of image to be displayed",
    },
    imageAlt: {
      control: { type: "text" },
      description: "alternative description of image when it cannot be displayed",
    },
    name: {
      control: { type: "text" },
      description: "name of the Sales Rep",
    },
    role: {
      control: { type: "text" },
      description: "role of the Sales Rep",
    },
    phoneNumber: {
      control: { type: "text" },
      description: "phone number of the Sales Rep",
    },
    email: {
      control: { type: "text" },
      description: "email of the Sales Rep",
    },
  },
};
export default meta;

type Story = StoryObj<typeof SalesRepCard>;

export const Default: Story = {
  args: {
    imageUrl:
      "https://img.freepik.com/free-vector/user-circles-set_78370-4704.jpg?t=st=1745914457~exp=1745918057~hmac=97fe9c251def21b506148bf893e8281f5121c2d4f708421edc86ac21bac1b653&w=740",
    imageAlt: "image of a Sales Rep",
    name: "Anna Müller",
    role: "Country rep",
    phoneNumber: "(123) 456-7890",
    email: "u2g4n@example.com",
  },
};
