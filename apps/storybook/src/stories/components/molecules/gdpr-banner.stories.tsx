import type { Meta, StoryObj } from "@storybook/react";
import { GdprBanner, GdprBannerState } from "@amalihomes/ui";

const meta: Meta<typeof GdprBanner> = {
  title: "Components/Molecules/GdprBanner",
  component: GdprBanner,
  tags: ["autodocs"],
  argTypes: {
    getBanner: {
      action: "banner preferences updated",
      description: "Function called when user saves or rejects cookie preferences",
    },
  },
  decorators: [
    (Story) => (
      <div className="h-[300px] p-4">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof GdprBanner>;

export const Default: Story = {
  args: {
    getBanner: (preferences) => console.log("Preferences updated:", preferences),
  },
  render: function DefaultRender(args) {
    const handleBannerUpdate = (preferences: GdprBannerState) => {
      args.getBanner(preferences);
    };

    return <GdprBanner getBanner={handleBannerUpdate} />;
  },
};

export const WithCustomOpenState: Story = {
  render: function CustomOpenStateRender() {
    return (
      <div className="flex flex-col gap-4">
        <p className="text-gray-700 bg-white p-4 rounded shadow mb-4">
          Note: In a real implementation, the banner would be hidden initially and shown based on user consent status.
          This story is for demonstration purposes only.
        </p>
        <GdprBanner
          getBanner={(preferences) => {
            console.log("Preferences updated:", preferences);
          }}
        />
      </div>
    );
  },
};

export const WithIntegrationExample: Story = {
  render: function IntegrationExampleRender() {
    const handlePreferences = (preferences: GdprBannerState) => {
      console.log("Preferences saved:", preferences);

      if (preferences.performance) {
        console.log("Performance cookies enabled");
      }

      if (preferences.targeting) {
        console.log("Targeting cookies enabled");
      }
    };

    return (
      <div className="flex flex-col gap-4">
        <div className="bg-white p-4 rounded shadow mb-4">
          <h2 className="text-xl font-bold mb-2">Cookie Consent Integration Example</h2>
          <p className="text-gray-700">
            This example demonstrates how the GDPR Banner could be integrated with a cookie consent system. Check the
            console after interacting with the banner to see the selected preferences.
          </p>
        </div>

        <GdprBanner getBanner={handlePreferences} />
      </div>
    );
  },
};

export const WithActions: Story = {
  render: function ActionLoggingRender() {
    const logAction = (action: string, data: GdprBannerState) => {
      console.log(`Action: ${action}`, data);
    };

    const handleBannerUpdate = (preferences: GdprBannerState) => {
      logAction("Cookie preferences updated", preferences);
    };

    return (
      <div className="flex flex-col gap-4">
        <div className="bg-white p-4 rounded shadow mb-4">
          <h2 className="text-xl font-bold mb-2">Test Actions</h2>
          <p className="text-gray-700">Try the following actions:</p>
          <ul className="list-disc pl-5 mt-2">
            <li>Click "Customise Settings" to open the options panel</li>
            <li>Toggle some checkboxes to update preferences</li>
            <li>Click "Save and Close" to save preferences</li>
            <li>Alternatively, click "Reject All" to reject all cookie categories</li>
          </ul>
          <p className="text-gray-700 mt-2">Actions will be logged to the console.</p>
        </div>

        <GdprBanner getBanner={handleBannerUpdate} />
      </div>
    );
  },
};
