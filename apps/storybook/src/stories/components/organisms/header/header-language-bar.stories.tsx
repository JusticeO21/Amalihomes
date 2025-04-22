import {
  HeaderLanguageBar,
  HeaderLanguageDrawer,
  HeaderLanguageSectionWrapper,
  HeaderLanguageSelectorButton,
  LanguageBarProps,
} from "@amalihomes/ui";
import type { Meta, StoryObj } from "@storybook/react";
import { mockCountries, mockLanguages } from "./header-mock";
import { useState } from "react";

const meta: Meta<typeof HeaderLanguageBar> = {
  title: "Components/Organisms/Header/HeaderLanguageBar",
  component: HeaderLanguageBar,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    languages: {
      control: "object",
      description: "Available languages for the language selector",
    },
    countries: {
      control: "object",
      description: "Available countries for the country selector",
    },
    isDrawerOpen: {
      control: "boolean",
      description: "Whether the language drawer is open",
    },
    toggleDrawer: {
      action: "toggleDrawer",
      description: "Function to toggle the language drawer",
    },
  },
  decorators: [
    (Story) => (
      <div style={{ minHeight: "500px", height: "100%" }}>
        <Story />
      </div>
    ),
  ],
  subcomponents: {
    HeaderLanguageDrawer: HeaderLanguageDrawer,
    HeaderLanguageSelectorButton: HeaderLanguageSelectorButton,
    HeaderLanguageSectionWrapper: HeaderLanguageSectionWrapper,
  },
};

export default meta;
type Story = StoryObj<typeof HeaderLanguageBar>;

const DefaultComponent = (args: LanguageBarProps) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);
  return (
    <HeaderLanguageBar
      {...args}
      isDrawerOpen={isDrawerOpen}
      toggleDrawer={toggleDrawer}
    />
  );
};

export const Default: Story = {
  render: (args) => {
    return <DefaultComponent {...args} />;
  },
  args: {
    languages: mockLanguages,
    countries: mockCountries,
  },
};

export const SingleLanguage: Story = {
  render: (args) => {
    return <DefaultComponent {...args} />;
  },
  args: {
    languages: [mockLanguages[0]],
    countries: [mockCountries[0]],
  },
};

export const MultipleOptions: Story = {
  args: {
    languages: [
      ...mockLanguages,
      { language: "Italiano", languageCode: "it" },
      { language: "日本語", languageCode: "ja" },
      { language: "中文", languageCode: "zh" },
    ],
    countries: [
      ...mockCountries,
      { country: "Italia", otherName: "Italy", language: { language: "Italiano", languageCode: "it" } },
      { country: "日本", otherName: "Japan", language: { language: "日本語", languageCode: "ja" } },
      { country: "中国", otherName: "China", language: { language: "中文", languageCode: "zh" } },
    ],
  },
};
