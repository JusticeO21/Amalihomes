import { Meta, StoryObj } from "@storybook/react";
import { GdprBanner, GdprBannerProps, GdprBannerState } from "@amalihomes/ui";
import { useState } from "react";

const meta: Meta<typeof GdprBanner> = {
  title: "Components/Molecules/GdprBanner",
  component: GdprBanner,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof GdprBanner>;

// Wrapper component to handle state management for the stories
const GdprBannerWrapper = (args: GdprBannerProps) => {
  const [bannerState, setBannerState] = useState<GdprBannerState | null>(null);

  const handleBannerChange = (state: GdprBannerState) => {
    setBannerState(state);
    args.getBanner(state);
  };

  return (
    <div>
      <GdprBanner
        {...args}
        getBanner={handleBannerChange}
      />
      {bannerState && (
        <div className="mt-8 p-4 bg-gray-100 rounded-md">
          <h3 className="font-bold mb-2">Banner State:</h3>
          <pre>{JSON.stringify(bannerState, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

const defaultArgs: GdprBannerProps = {
  getBanner: () => {},
  title: "We value your privacy",
  description:
    "This website uses cookies to personalize content, provide social media features, and analyse our traffic. You can customize your preferences or reject all.",
  customizeButtonText: "Customise Settings",
  saveButtonText: "Save and Close",
  rejectButtonText: "Reject All",
  consentOptions: [
    { id: "testStrict", label: "Test Strict" },
    { id: "performance", label: "Performance" },
    { id: "targeting", label: "Targeting" },
    { id: "functionality", label: "Functionality" },
    { id: "unclassified", label: "Unclassified" },
  ],
  icon: {
    url: "",
    alt: "Cookie preferences icon",
  },
};

export const Default: Story = {
  render: (args) => <GdprBannerWrapper {...args} />,
  args: defaultArgs,
};

export const CustomText: Story = {
  render: (args) => <GdprBannerWrapper {...args} />,
  args: {
    ...defaultArgs,
    title: "Cookie Consent",
    description: "We use cookies to enhance your browsing experience, analyze site traffic, and personalize content.",
    customizeButtonText: "Preferences",
    saveButtonText: "Accept Selected",
    rejectButtonText: "Decline All",
  },
};

export const MinimalOptions: Story = {
  render: (args) => <GdprBannerWrapper {...args} />,
  args: {
    ...defaultArgs,
    consentOptions: [
      { id: "testStrict", label: "Essential Cookies (Required)" },
      { id: "performance", label: "Analytics Cookies" },
    ],
  },
};

export const MobileView: Story = {
  render: (args) => (
    <div className="max-w-sm mx-auto">
      <GdprBannerWrapper {...args} />
    </div>
  ),
  args: defaultArgs,
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
  },
};
