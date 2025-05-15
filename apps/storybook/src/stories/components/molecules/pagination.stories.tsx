import { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Pagination } from "@amalihomes/ui";

const meta: Meta<typeof Pagination> = {
  title: "Components/Molecules/Pagination",
  component: Pagination,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof Pagination>;

export const Default: Story = {
  render: (args) => {
    const PaginationComponent = () => {
      const [page, setPage] = useState(1);
      return (
        <Pagination
          {...args}
          currentPage={page}
          onPageChange={setPage}
        />
      );
    };
    return <PaginationComponent />;
  },
  args: {
    totalPages: 10,
  },
};

export const ManyPages: Story = {
  render: (args) => {
    const PaginationComponent = () => {
      const [page, setPage] = useState(7);
      return (
        <Pagination
          {...args}
          currentPage={page}
          onPageChange={setPage}
        />
      );
    };
    return <PaginationComponent />;
  },
  args: {
    totalPages: 20,
  },
};

export const FewPages: Story = {
  render: (args) => {
    const PaginationComponent = () => {
      const [page, setPage] = useState(2);
      return (
        <Pagination
          {...args}
          currentPage={page}
          onPageChange={setPage}
        />
      );
    };
    return <PaginationComponent />;
  },
  args: {
    totalPages: 3,
  },
};
