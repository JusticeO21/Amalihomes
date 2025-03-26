import { Button } from "@amalihomes/ui/components/button";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@amalihomes/ui/components/drawer";
import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

const meta: Meta<typeof Drawer> = {
  title: "Components/Drawer",
  component: Drawer,
  tags: ["autodocs"],
  argTypes: {
    isOpen: {
      control: "boolean",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Drawer>;

const DefaultStory = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Button onClick={() => setOpen(true)}>Open Drawer</Button>
      <Drawer
        isOpen={open}
        onClose={() => setOpen(false)}
      >
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Drawer Title</DrawerTitle>
            <DrawerDescription>This is a description for the drawer component.</DrawerDescription>
          </DrawerHeader>
          <div className="p-4">
            <p>Drawer content goes here</p>
          </div>
          <DrawerFooter>
            <Button
              variant="primary"
              onClick={() => setOpen(false)}
            >
              Cancel
            </Button>
            <Button onClick={() => setOpen(false)}>Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export const Default: Story = {
  render: () => <DefaultStory />,
};

const LeftSideStory = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Button onClick={() => setOpen(true)}>Open Left Drawer</Button>
      <Drawer
        isOpen={open}
        onClose={() => setOpen(false)}
      >
        <DrawerContent side="left">
          <DrawerHeader>
            <DrawerTitle>Left Drawer</DrawerTitle>
            <DrawerDescription>This drawer slides in from the left side.</DrawerDescription>
          </DrawerHeader>
          <div className="p-4">
            <p>Drawer content goes here</p>
          </div>
          <DrawerFooter>
            <Button
              variant="primary"
              onClick={() => setOpen(false)}
            >
              Close
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export const LeftSide: Story = {
  render: () => <LeftSideStory />,
};

const TopSideStory = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Button onClick={() => setOpen(true)}>Open Top Drawer</Button>
      <Drawer
        isOpen={open}
        onClose={() => setOpen(false)}
      >
        <DrawerContent side="top">
          <DrawerHeader>
            <DrawerTitle>Top Drawer</DrawerTitle>
            <DrawerDescription>This drawer slides in from the top.</DrawerDescription>
          </DrawerHeader>
          <div className="p-4">
            <p>Drawer content goes here</p>
          </div>
          <DrawerFooter>
            <Button
              variant="secondary"
              onClick={() => setOpen(false)}
            >
              Close
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export const TopSide: Story = {
  render: () => <TopSideStory />,
};

const BottomSideStory = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Button onClick={() => setOpen(true)}>Open Bottom Drawer</Button>
      <Drawer
        isOpen={open}
        onClose={() => setOpen(false)}
      >
        <DrawerContent side="bottom">
          <DrawerHeader>
            <DrawerTitle>Bottom Drawer</DrawerTitle>
            <DrawerDescription>This drawer slides in from the bottom.</DrawerDescription>
          </DrawerHeader>
          <div className="p-4">
            <p>Drawer content goes here</p>
          </div>
          <DrawerFooter>
            <Button
              variant="secondary"
              onClick={() => setOpen(false)}
            >
              Close
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export const BottomSide: Story = {
  render: () => <BottomSideStory />,
};

export const HowToUse: Story = {
  args: {
    isOpen: true,
  },
  render: () => (
    <div style={{ width: "100%", padding: "10px", display: "grid", gridTemplateColumns: "2" }}>
      <div>
        <h3>How to use the Drawer component:</h3>
        <ol>
          <li>Import the Drawer component from the "@amalihomes/ui/components/drawer" module.</li>
          <li>Use the Drawer component in your JSX code by wrapping the desired content with it.</li>
          <li>Set the "isOpen" prop to true to open the drawer, and set it to false to close it.</li>
          <li>Optionally, set the "side" prop to either "left", "top", or "bottom" to determine the drawer's side.</li>
          <li>Optionally, provide a custom class name to the "className" prop to apply custom styles.</li>
        </ol>
        <h4>Example:</h4>
      </div>

      <Drawer
        isOpen={true}
        onClose={() => {}}
      >
        <DrawerContent
          className="bg-white"
          side="right"
        >
          <DrawerHeader>
            <DrawerTitle>Drawer Title</DrawerTitle>
            <DrawerDescription>This is a description for the drawer component.</DrawerDescription>
          </DrawerHeader>
          <div className="p-4">
            <p>Drawer content goes here</p>
          </div>
          <DrawerFooter>
            <Button
              variant="primary"
              onClick={() => {}}
            >
              Cancel
            </Button>
            <Button onClick={() => {}}>Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  ),
};
