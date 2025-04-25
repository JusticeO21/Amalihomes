"use client";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger, Container } from "@amalihomes/ui";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Accordion> = {
  title: "Components/Atoms/Accordion",
  component: Accordion,
  tags: ["autodocs"],
  argTypes: {
    defaultValue: {
      control: "object",
      description: "Default value of the accordion",
    },
    type: {
      control: "select",
      options: ["single", "multiple"],
      description: "Type of the accordion",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Accordion>;

export const Default: Story = {
  args: {},
  render: (args) => (
    <Container>
      <Accordion {...args}>
        <AccordionItem value="item-1">
          <AccordionTrigger label={"Question or label goes here"} />
          <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger label={"Question or label goes here"} />
          <AccordionContent>
            Yes. It comes with default styles that matches the other components&apos; aesthetic.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger label={"Question or label goes here"} />
          <AccordionContent>Yes. It's animated by default, but you can disable it if you prefer.</AccordionContent>
        </AccordionItem>
      </Accordion>
    </Container>
  ),
};

export const Multiple: Story = {
  args: { type: "multiple" },
  render: (args) => (
    <Container>
      <Accordion {...args}>
        <AccordionItem value="item-1">
          <AccordionTrigger label={"Question or label goes here"} />
          <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger label={"Question or label goes here"} />
          <AccordionContent>
            Yes. It comes with default styles that matches the other components&apos; aesthetic.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger label={"Question or label goes here"} />
          <AccordionContent>Yes. It's animated by default, but you can disable it if you prefer.</AccordionContent>
        </AccordionItem>
      </Accordion>
    </Container>
  ),
};

export const WithDefaultValue: Story = {
  args: { defaultValue: ["item-1"] },
  render: (args) => (
    <Container>
      <Accordion {...args}>
        <AccordionItem value="item-1">
          <AccordionTrigger label={"Question or label goes here"} />
          <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger label={"Question or label goes here"} />
          <AccordionContent>
            Yes. It comes with default styles that matches the other components&apos; aesthetic.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger label={"Question or label goes here"} />
          <AccordionContent>Yes. It's animated by default, but you can disable it if you prefer.</AccordionContent>
        </AccordionItem>
      </Accordion>
    </Container>
  ),
};
