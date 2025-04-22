import { Header, HeaderLanguageBar, HeaderNavigationSection, HeaderWrapper } from "@amalihomes/ui";
import type { Meta, StoryObj } from "@storybook/react";
import { handleSearchSubmit, mockCountries, mockLanguages, mockNavLinks } from "./header-mock";

const meta: Meta<typeof Header> = {
  title: "Components/Organisms/Header/Header",
  component: Header,
  parameters: {
    layout: "fullscreen",
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
    languages: {
      control: "object",
      description: "Available languages for the language selector",
    },
    countries: {
      control: "object",
      description: "Available countries for the country selector",
    },
  },
  decorators: [
    (Story) => (
      <div style={{ minHeight: "500px" }}>
        <Story />
      </div>
    ),
  ],
  subcomponents: {
    HeaderLanguageBar: HeaderLanguageBar,
    HeaderNavigationSection: HeaderNavigationSection,
    HeaderWrapper: HeaderWrapper,
  },
};

export default meta;
type Story = StoryObj<typeof Header>;

export const Default: Story = {
  args: {
    isAuth: false,
    navLinks: mockNavLinks,
    onSubmitSearchResults: handleSearchSubmit,
    languages: mockLanguages,
    countries: mockCountries,
  },
};

export const Authenticated: Story = {
  args: {
    ...Default.args,
    isAuth: true,
  },
};

export const MinimalNavigation: Story = {
  args: {
    ...Default.args,
    navLinks: mockNavLinks.slice(0, 3),
  },
};

export const ExpandedNavigation: Story = {
  args: {
    ...Default.args,
    navLinks: [
      ...mockNavLinks,
      { id: "careers", label: "Careers", href: "/careers" },
      { id: "investors", label: "Investors", href: "/investors" },
      { id: "partners", label: "Partners", href: "/partners" },
    ],
  },
};

export const LimitedLanguageOptions: Story = {
  args: {
    ...Default.args,
    languages: mockLanguages.slice(0, 2),
    countries: mockCountries.slice(0, 2),
  },
};
