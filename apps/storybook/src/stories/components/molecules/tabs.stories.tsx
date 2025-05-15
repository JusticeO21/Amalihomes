import type { Meta, StoryObj } from "@storybook/react";
import { Tabs, TabTrigger, TabsContent, TabsList } from "@amalihomes/ui"; // Adjust import path as needed

/**
 * Tabs component that allows switching between different content panels
 * using accessible tab navigation patterns.
 */
const meta: Meta<typeof Tabs> = {
  title: "Components/Molecules/Tabs",
  component: Tabs,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A tabbed interface component that follows WAI-ARIA design patterns. Allows users to switch between different sections of content while maintaining accessibility.",
      },
    },
  },
  argTypes: {
    currentTab: {
      control: "select",
      options: ["tab1", "tab2", "tab3"],
      description: "The currently active tab",
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const BottomNavTabs: Story = {
  args: {
    currentTab: "tab1",
    children: (
      <Tabs
        currentTab="tab1"
        className="w-max bg-gray-100 pt-16 px-1 flex flex-col gap-2"
      >
        <TabsContent value="tab1">Content 1</TabsContent>
        <TabsContent value="tab2">Content 2</TabsContent>
        <TabsContent value="tab3">Content 3</TabsContent>
        <TabsList className="flex px-16 py-3 gap-10 rounded-md bg-gray-200">
          <TabTrigger
            render={(value) => <span className={value === "tab1" ? "text-blue-600" : ""}>Tab 1</span>}
            value="tab1"
          />
          <TabTrigger
            render={(value) => <span className={value === "tab2" ? "text-blue-600" : ""}>Tab 2</span>}
            value="tab2"
          />
          <TabTrigger
            render={(value) => <span className={value === "tab3" ? "text-blue-600" : ""}>Tab 3</span>}
            value="tab3"
          />
        </TabsList>
      </Tabs>
    ),
  },
};

export const TwoTabs: Story = {
  args: {
    currentTab: "tab1",
    children: (
      <Tabs currentTab="tab1">
        <TabsList>
          <TabTrigger
            render={(value) => <span className={value === "tab1" ? "text-blue-600" : ""}>First Tab</span>}
            value="tab1"
          />
          <TabTrigger
            render={(value) => <span className={value === "tab2" ? "text-blue-600" : ""}>Second Tab</span>}
            value="tab2"
          />
        </TabsList>
        <TabsContent value="tab1">
          <div className="p-4">
            <h3 className="text-lg font-medium">First Tab Content</h3>
            <p className="mt-2">This is the content for the first tab panel. It can contain any content you need.</p>
          </div>
        </TabsContent>
        <TabsContent value="tab2">
          <div className="p-4">
            <h3 className="text-lg font-medium">Second Tab Content</h3>
            <p className="mt-2">Here is some different content for the second tab panel.</p>
          </div>
        </TabsContent>
      </Tabs>
    ),
  },
};

export const RichContent: Story = {
  args: {
    currentTab: "tab3",
    children: (
      <>
        <TabsList className="flex px-5 py-2 space-x-1 bg-brand-100 rounded-xl gap-10 w-full">
          <TabTrigger
            render={(value) => <span className={value === "tab1" ? "text-brand-600" : ""}>Information</span>}
            value="tab1"
          />
          <TabTrigger
            render={(value) => <span className={value === "tab2" ? "text-brand-600" : ""}>Settings</span>}
            value="tab2"
          />
          <TabTrigger
            render={(value) => <span className={value === "tab3" ? "text-brand-600" : ""}>Help</span>}
            value="tab3"
          />
        </TabsList>
        <TabsContent value="tab1">
          <div className="p-6 space-y-4">
            <h3 className="text-xl font-bold">Product Information</h3>
            <p>This product includes everything you need to get started with your project.</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Feature one with detailed explanation</li>
              <li>Feature two with additional details</li>
              <li>Feature three with implementation notes</li>
            </ul>
          </div>
        </TabsContent>
        <TabsContent value="tab2">
          <div className="p-6">
            <h3 className="text-xl font-bold mb-4">User Settings</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span>Enable notifications</span>
                <input
                  type="checkbox"
                  defaultChecked
                />
              </div>
              <div className="flex items-center justify-between">
                <span>Dark mode</span>
                <input type="checkbox" />
              </div>
              <div className="flex items-center justify-between">
                <span>Auto-save</span>
                <input
                  type="checkbox"
                  defaultChecked
                />
              </div>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="tab3">
          <div className="p-6">
            <h3 className="text-xl font-bold mb-4">Help Center</h3>
            <p className="mb-4">Need assistance with our product? Here are some resources:</p>
            <div className="space-y-2">
              <button className="block w-full text-left p-2 bg-gray-100 hover:bg-gray-200 rounded">
                View Documentation
              </button>
              <button className="block w-full text-left p-2 bg-gray-100 hover:bg-gray-200 rounded">
                Contact Support
              </button>
              <button className="block w-full text-left p-2 bg-gray-100 hover:bg-gray-200 rounded">
                Community Forums
              </button>
            </div>
          </div>
        </TabsContent>
      </>
    ),
  },
};

export const Styled: Story = {
  args: {
    currentTab: "tab1",
    className: "w-full max-w-md",
    children: (
      <>
        <TabsList className="flex p-1 space-x-1 bg-gray-100 rounded-xl">
          <TabTrigger
            render={() => <span>Dashboard</span>}
            value="tab1"
            className="w-full py-2.5 text-sm leading-none font-medium transition-all data-[state=active]:bg-white data-[state=active]:text-blue-600 data-[state=active]:shadow-sm rounded-lg"
          />
          <TabTrigger
            render={() => <span>Analytics</span>}
            value="tab2"
            className="w-full py-2.5 text-sm leading-none font-medium transition-all data-[state=active]:bg-white data-[state=active]:text-blue-600 data-[state=active]:shadow-sm rounded-lg"
          />
          <TabTrigger
            render={() => <span>Reports</span>}
            value="tab3"
            className="w-full py-2.5 text-sm leading-none font-medium transition-all data-[state=active]:bg-white data-[state=active]:text-blue-600 data-[state=active]:shadow-sm rounded-lg"
          />
        </TabsList>
        <TabsContent
          value="tab1"
          className="mt-4 p-4 bg-white rounded-lg"
        >
          <h3 className="text-lg font-medium">Dashboard Overview</h3>
          <p className="mt-2 text-gray-600">View your main dashboard statistics here.</p>
        </TabsContent>
        <TabsContent
          value="tab2"
          className="mt-4 p-4 bg-white rounded-lg"
        >
          <h3 className="text-lg font-medium">Analytics Data</h3>
          <p className="mt-2 text-gray-600">Detailed analytics information and metrics.</p>
        </TabsContent>
        <TabsContent
          value="tab3"
          className="mt-4 p-4 bg-white rounded-lg"
        >
          <h3 className="text-lg font-medium">Monthly Reports</h3>
          <p className="mt-2 text-gray-600">Access and download your monthly reports.</p>
        </TabsContent>
      </>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: "Example with custom styling applied to create a more polished UI.",
      },
    },
  },
};
