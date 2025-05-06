import type { Meta, StoryFn } from "@storybook/react";
import { AboutHero, HeroProps } from "@amalihomes/ui";

const meta: Meta<HeroProps> = {
  title: "Components/organisms/AboutHero",
  component: AboutHero,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "The `AboutHero` component creates a responsive hero section with a background image, optional overlay, and text content using `TextPair` within a `Container`. Ideal for prominent sections like the About page or CMS-driven content in a Next.js app. Supports Tailwind CSS, `class-variance-authority`, and inherits accessibility from `TextPair` (WCAG 2.1). **Note**: `TextPair` uses random `id`s (`Math.random()`) for `aria-labelledby`; provide explicit `id`s for major sections (e.g., `about-hero`).",
      },
    },
  },
  argTypes: {
    title: {
      description: "The hero’s heading text.",
      control: { type: "text" },
    },
    description: {
      description: "Optional descriptive text below the title.",
      control: { type: "text" },
    },
    headerAs: {
      description: "Heading level for the title (h1–h6).",
      control: { type: "select" },
      options: ["h1", "h2", "h3", "h4", "h5", "h6"],
    },
    headerClass: {
      description: "Custom classes for the title (appends to responsive sizes).",
      control: { type: "text" },
    },
    descriptionClass: {
      description: "Custom classes for the description (appends to responsive sizes).",
      control: { type: "text" },
    },
    align: {
      description: "Text alignment, passed to `TextPair`.",
      control: { type: "select" },
      options: ["left", "center", "right"],
    },
    className: {
      description: "Custom classes for the `Container` wrapper.",
      control: { type: "text" },
    },
    backgroundImage: {
      description: "URL for the background image.",
      control: { type: "text" },
    },
    height: {
      description: "Hero height.",
      control: { type: "select" },
      options: ["sm", "md", "lg", "xl", "full"],
    },
    contentPosition: {
      description: "Horizontal content position.",
      control: { type: "select" },
      options: ["left", "center", "right"],
    },
    backgroundSize: {
      description: "Background image size.",
      control: { type: "select" },
      options: ["cover", "contain", "auto"],
    },
    backgroundPosition: {
      description: "Background image position.",
      control: { type: "select" },
      options: ["center", "top", "bottom", "left", "right"],
    },
    background: {
      description: "Background color.",
      control: { type: "select" },
      options: ["primary", "secondary", "dark", "light", "none"],
    },
    text: {
      description: "Text color for title and description.",
      control: { type: "select" },
      options: ["onDark", "onLight", "primary", "muted"],
    },
    overlay: {
      description: "Overlay gradient.",
      control: { type: "select" },
      options: ["dark", "light", "primary", "none"],
    },
  },
};

export default meta;

const Template: StoryFn<HeroProps> = (args) => <AboutHero {...args} />;

export const AboutPageHero = Template.bind({});
AboutPageHero.args = {
  title: "Welcome to AmaliHomes",
  description: "Discover a wide range of high-quality furniture designed to fit your style and space.",
  headerAs: "h2",
  height: "lg",
  contentPosition: "center",
  backgroundImage:
    "https://s3-alpha-sig.figma.com/img/9c2d/f89c/08129b872b14febf4cb52e675924ce29?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=YWnhudqFUKbpCwQXqF6XvkxgyF5Bp8Ygm3lYgeAiy4UHRl-~n9AoC7q-Fu9m1MCKJmuLrbdPlsNBekdF6SeWmVEs5LelXC5-K~egPzMaQBDEhXUsnL4MZih72kRo5KqmjLVwTBnvAGXO7T0dcjRE1F3ZZdCyjl-2WVJjN5MLA~zJPYJ7bngJ9IaD8an5B06f4WjxDEBstR6mKrloY0gsgsRqVKyPUQBih20yTwEupME4pgPUCtcVJwEIUbetqsyK3vE4Wk0G1oBCkW1QW3eZqgZeH4gB65eu~VLzmY-7j5NbPkApfsV4Rx3JrHMQyETGUGhidBYLqYhJN~aiiFf1JA__",
  overlay: "dark",
  text: "onDark",
  align: "center",
};
AboutPageHero.parameters = {
  docs: {
    description: {
      story:
        "A centered hero section with a dark overlay and white text, typical for the About page with CMS-driven content.",
    },
  },
};

export const CMSDrivenHero = Template.bind({});
CMSDrivenHero.args = {
  title: "Our Story",
  description: "Learn about our journey to bring timeless furniture to your home.",
  headerAs: "h3",
  height: "md",
  contentPosition: "left",
  backgroundImage: "https://via.placeholder.com/1920x460",
  overlay: "none",
  text: "primary",
  align: "left",
};
CMSDrivenHero.parameters = {
  docs: {
    description: {
      story: "A CMS-driven hero section with no overlay and primary text color, suitable for Contentful-driven pages.",
    },
  },
};

export const DarkThemedHero = Template.bind({});
DarkThemedHero.args = {
  title: "Crafted with Care",
  description: "Every piece is designed with precision and passion.",
  headerAs: "h1",
  height: "full",
  contentPosition: "right",
  background: "dark",
  overlay: "light",
  text: "onLight",
  align: "right",
};
DarkThemedHero.parameters = {
  docs: {
    description: {
      story:
        "A full-height hero with a dark background and light overlay, showcasing alternative styling without a background image.",
    },
  },
};
