import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import FlashSaleCard from "./flash-sale-card";

describe("flashsale component", () => {
  const onClick = jest.fn();
  it("should render flashsale component correctly", () => {
    render(
      <FlashSaleCard
        src="imageUrl"
        alt="an image"
        title="title"
        description="description"
        onClick={onClick}
      />,
    );

    expect(screen.getByAltText(/an image/i)).toBeInTheDocument();
    expect(screen.getByText(/title/i)).toBeInTheDocument();
    expect(screen.getByText(/description/i)).toBeInTheDocument();
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("should run onClick function when button is clicked", () => {
    render(
      <FlashSaleCard
        src="imageUrl"
        alt="an image"
        title="title"
        description="description"
        onClick={onClick}
      />,
    );

    fireEvent.click(screen.getByRole("button"));
    expect(onClick).toHaveBeenCalled();
  });
});
