import type { Meta, StoryObj } from "@storybook/react";
import { Rating } from "@amalihomes/ui";

const meta: Meta<typeof Rating> = {
  title: "Components/Atoms/Rating",
  component: Rating,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    rating: {
      control: "object",
      description: "Object containing rating value and number of reviews",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Rating>;

// Basic Rating
export const Default: Story = {
  args: {
    rating: {
      rating: 4,
      reviewCount: 128,
    },
  },
};

// Five Star Rating
export const FiveStars: Story = {
  args: {
    rating: {
      rating: 5,
      reviewCount: 42,
    },
  },
};

// One Star Rating
export const OneStar: Story = {
  args: {
    rating: {
      rating: 1,
      reviewCount: 3,
    },
  },
};

// No Reviews
export const NoReviews: Story = {
  args: {
    rating: {
      rating: 0,
      reviewCount: 0,
    },
  },
};

// Many Reviews
export const ManyReviews: Story = {
  args: {
    rating: {
      rating: 4,
      reviewCount: 9999,
    },
  },
};

// Different Display Contexts
export const InDifferentBackgrounds: Story = {
  render: (args) => (
    <div className="flex flex-col gap-4">
      <div className="p-4 bg-white">
        <Rating {...args} />
      </div>
      <div className="p-4 bg-gray-100">
        <Rating {...args} />
      </div>
      <div className="p-4 bg-gray-800">
        <Rating {...args} />
      </div>
    </div>
  ),
  args: {
    rating: {
      rating: 4,
      reviewCount: 128,
    },
  },
};

// Different Rating Values with Visual Comparison
export const CompareRatings: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      {[5, 4, 3, 2, 1, 0].map((ratingValue) => (
        <div
          key={ratingValue}
          className="flex items-center gap-4"
        >
          <div className="w-16 text-right font-medium">{ratingValue} stars:</div>
          <Rating
            rating={{
              rating: ratingValue,
              reviewCount: 10 * ratingValue || 0,
            }}
          />
        </div>
      ))}
    </div>
  ),
};

// Mobile View Simulation
export const MobileView: Story = {
  render: (args) => (
    <div className="max-w-[320px] p-4 border border-gray-200 rounded">
      <div className="text-lg font-bold mb-2">Product Name</div>
      <Rating {...args} />
      <div className="mt-2">$99.99</div>
    </div>
  ),
  args: {
    rating: {
      rating: 4,
      reviewCount: 128,
    },
  },
};
