import {
  HeaderAuthVisibleComponents,
  HeaderDesktopNavLinks,
  HeaderMobileMenu,
  HeaderNavControls,
  HeaderNavigationSection,
  HeaderNavLinksListing,
  HeaderSearchPanel,
  HeaderWrapper,
} from "@amalihomes/ui";
import type { Meta, StoryObj } from "@storybook/react";
import { handleSearchSubmit, mockNavLinks } from "./header-mock";
import { useState } from "react";

const meta: Meta<typeof HeaderNavigationSection> = {
  title: "Components/Organisms/Header/HeaderNavigationSection",
  component: HeaderNavigationSection,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    isAuth: {
      control: "boolean",
      description: "Whether the user is authenticated",
    },
    logoUrl: {
      control: "text",
      description: "URL for the company logo",
    },
    navLinks: {
      control: "object",
      description: "Navigation links to display in the header",
    },
    onSubmitSearchResults: {
      action: "searchSubmitted",
      description: "Function called when search form is submitted",
    },
    isMenuOpen: {
      control: "boolean",
      description: "Whether the mobile menu is open",
    },
    toggleMenu: {
      control: "boolean",
      description: "Function to toggle the mobile menu",
    },
  },
  subcomponents: {
    HeaderAuthVisibleComponents: HeaderAuthVisibleComponents,
    HeaderDesktopNavLinks: HeaderDesktopNavLinks,
    HeaderMobileMenu: HeaderMobileMenu,
    HeaderNavControls: HeaderNavControls,
    HeaderSearchPanel: HeaderSearchPanel,
    HeaderWrapper: HeaderWrapper,
    HeaderNavLinksListing: HeaderNavLinksListing,
  },
  decorators: [
    (Story) => (
      <div style={{ minHeight: "500px" }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof HeaderNavigationSection>;

export const Default: Story = {
  args: {
    isAuth: false,
    navLinks: mockNavLinks,
    onSubmitSearchResults: handleSearchSubmit,
  },
  render: (args) => {
    const RenderComponent = () => {
      const [isMenuOpen, setIsMenuOpen] = useState(false);
      const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
      return (
        <HeaderNavigationSection
          {...args}
          isMenuOpen={isMenuOpen}
          toggleMenu={toggleMenu}
        />
      );
    };
    return <RenderComponent />;
  },
};

export const Authenticated: Story = {
  args: {
    ...Default.args,
    isAuth: true,
  },
};

export const WithManyNavigationItems: Story = {
  args: {
    ...Default.args,
    navLinks: [
      ...mockNavLinks,
      { id: "careers", label: "Careers", href: "/careers" },
      { id: "investors", label: "Investors", href: "/investors" },
      { id: "partners", label: "Partners", href: "/partners" },
      { id: "news", label: "News", href: "/news" },
      { id: "events", label: "Events", href: "/events" },
    ],
  },
};
