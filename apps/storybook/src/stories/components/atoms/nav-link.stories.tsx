import { NavLink } from "@amalihomes/ui";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof NavLink> = {
  title: "Components/Atoms/NavLink",
  component: NavLink,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    href: {
      control: "text",
      description: "Link destination URL",
    },
    children: {
      control: "text",
      description: "Link content/label",
    },
    isActive: {
      control: "boolean",
      description: "Whether the link is currently active",
    },
    className: {
      control: "text",
      description: "Additional CSS classes to apply to the link",
    },
    activeClassName: {
      control: "text",
      description: "CSS classes applied when the link is active",
    },
    inactiveClassName: {
      control: "text",
      description: "CSS classes applied when the link is inactive",
    },
  },
};

export default meta;
type Story = StoryObj<typeof NavLink>;

export const Default: Story = {
  args: {
    href: "/products",
    children: "Products",
    isActive: false,
  },
};

export const Active: Story = {
  args: {
    href: "/products",
    children: "Products",
    isActive: true,
  },
};

export const CustomStyling: Story = {
  args: {
    href: "/about",
    children: "About Us",
    isActive: false,
    className: "font-semibold text-lg",
  },
};

export const CustomActiveStyling: Story = {
  args: {
    href: "/services",
    children: "Services",
    isActive: true,
    activeClassName: "text-blue-600 underline font-bold",
  },
};

export const CustomInactiveStyling: Story = {
  args: {
    href: "/contact",
    children: "Contact",
    isActive: false,
    inactiveClassName: "text-gray-400 hover:text-gray-800",
  },
};

export const WithIcon: Story = {
  args: {
    href: "/account",
    isActive: false,
    children: (
      <div className="flex items-center gap-2">
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z"
            fill="currentColor"
          />
        </svg>
        Account
      </div>
    ),
  },
};

export const ActiveWithIcon: Story = {
  args: {
    href: "/account",
    isActive: true,
    children: (
      <div className="flex items-center gap-2">
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z"
            fill="currentColor"
          />
        </svg>
        Account
      </div>
    ),
  },
};
