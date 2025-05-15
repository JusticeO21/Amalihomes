import type { Meta, StoryFn } from "@storybook/react";
import { Filter, FilterProps, FilterSection } from "@amalihomes/ui";

const meta: Meta<FilterProps> = {
  title: "Components/Organisms/Filter",
  component: Filter,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "The `Filter` component provides a flexible filtering interface with support for checkboxes, radio buttons, and range sliders. It manages internal state via context and exposes filter changes through callbacks. Designed for e-commerce and data-rich applications, it supports responsive layouts and customizable sections. **Note**: Each filter section requires a unique `id` for proper state management.",
      },
    },
  },
  argTypes: {
    filterSections: {
      description: "Array of filter sections with configuration",
      control: { type: "object" },
    },
    sortingOptions: {
      description: "Special section for sorting options (radio group)",
      control: { type: "object" },
    },
    defaultValues: {
      description: "Initial values for filters",
      control: { type: "object" },
    },
    onFilterChange: {
      description: "Callback when filters change",
      action: "filterChanged",
    },
  },
};

export default meta;

const Template: StoryFn<FilterProps> = (args) => <Filter {...args} />;

// Base configuration for stories
const baseFilterSections: FilterSection[] = [
  {
    id: "categories",
    title: "Categories",
    options: [
      { id: "office", label: "Office furniture" },
      { id: "dining", label: "Dining" },
      { id: "living", label: "Living Room" },
      { id: "bedroom", label: "Bedroom" },
      { id: "outdoor", label: "Outdoor" },
    ],
  },
  {
    id: "price",
    title: "Price Range",
    isSlider: true,
    sliderConfig: {
      min: 0,
      max: 5000,
      initialMin: 1000,
      initialMax: 3000,
    },
  },
];

const sortingOptions: FilterSection = {
  id: "sorting",
  title: "Sort By",
  isRadio: true,
  options: [
    { id: "newest", label: "Newest Arrivals" },
    { id: "price-low", label: "Price: Low to High" },
    { id: "price-high", label: "Price: High to Low" },
  ],
};

export const BasicFilter = Template.bind({});
BasicFilter.args = {
  filterSections: baseFilterSections,
  sortingOptions,
};
BasicFilter.parameters = {
  docs: {
    description: {
      story:
        "Basic filter with categories (checkboxes) and price range (slider) sections, plus sorting options (radio group). Demonstrates the default appearance and behavior.",
    },
  },
};

export const WithDefaultValues = Template.bind({});
WithDefaultValues.args = {
  filterSections: baseFilterSections,
  sortingOptions,
  defaultValues: {
    checkboxes: {
      categories: ["office", "living"],
    },
    radios: {
      sorting: "price-low",
    },
    sliders: {
      price: { min: 500, max: 4000 },
    },
  },
};
WithDefaultValues.parameters = {
  docs: {
    description: {
      story:
        "Filter with pre-selected values. Useful for preserving filter state across page navigation or implementing 'remember my choices' functionality.",
    },
  },
};

export const CheckboxOnlyFilter = Template.bind({});
CheckboxOnlyFilter.args = {
  filterSections: [
    {
      id: "categories",
      title: "Product Categories",
      options: [
        { id: "electronics", label: "Electronics" },
        { id: "furniture", label: "Furniture" },
        { id: "clothing", label: "Clothing" },
      ],
    },
    {
      id: "brands",
      title: "Brands",
      options: [
        { id: "apple", label: "Apple" },
        { id: "samsung", label: "Samsung" },
        { id: "sony", label: "Sony" },
      ],
    },
  ],
};
CheckboxOnlyFilter.parameters = {
  docs: {
    description: {
      story:
        "Filter containing only checkbox groups. Demonstrates how to implement multi-select filters for categories, brands, or other attributes.",
    },
  },
};

export const RadioOnlyFilter = Template.bind({});
RadioOnlyFilter.args = {
  filterSections: [
    {
      id: "shipping",
      title: "Shipping Options",
      isRadio: true,
      options: [
        { id: "free", label: "Free Shipping" },
        { id: "express", label: "Express Delivery" },
        { id: "pickup", label: "Store Pickup" },
      ],
    },
  ],
  sortingOptions: {
    id: "sort",
    title: "Sort By",
    isRadio: true,
    options: [
      { id: "popular", label: "Most Popular" },
      { id: "newest", label: "Newest First" },
    ],
  },
};
RadioOnlyFilter.parameters = {
  docs: {
    description: {
      story:
        "Filter containing only radio button groups. Useful for mutually exclusive options like shipping methods or sorting preferences.",
    },
  },
};

export const SliderOnlyFilter = Template.bind({});
SliderOnlyFilter.args = {
  filterSections: [
    {
      id: "rating",
      title: "Customer Rating",
      isSlider: true,
      sliderConfig: {
        min: 0,
        max: 5,
        initialMin: 3,
        initialMax: 5,
      },
    },
    {
      id: "price",
      title: "Price Range",
      isSlider: true,
      sliderConfig: {
        min: 0,
        max: 1000,
        initialMin: 100,
        initialMax: 500,
      },
    },
  ],
};
SliderOnlyFilter.parameters = {
  docs: {
    description: {
      story:
        "Filter containing only range sliders. Demonstrates how to implement numeric range filters for ratings, prices, or other measurable attributes.",
    },
  },
};

export const ComplexFilter = Template.bind({});
ComplexFilter.args = {
  filterSections: [
    ...baseFilterSections,
    {
      id: "colors",
      title: "Colors",
      options: [
        { id: "red", label: "Red" },
        { id: "blue", label: "Blue" },
        { id: "green", label: "Green" },
      ],
    },
    {
      id: "rating",
      title: "Rating",
      isSlider: true,
      sliderConfig: {
        min: 1,
        max: 5,
        initialMin: 3,
        initialMax: 5,
      },
    },
  ],
  sortingOptions: {
    ...sortingOptions,
    options: [...sortingOptions.options!, { id: "rating", label: "Highest Rated" }],
  },
};
ComplexFilter.parameters = {
  docs: {
    description: {
      story:
        "Complex filter combining all filter types (checkboxes, radios, and sliders) in multiple sections. Represents a real-world e-commerce filtering scenario.",
    },
  },
};
