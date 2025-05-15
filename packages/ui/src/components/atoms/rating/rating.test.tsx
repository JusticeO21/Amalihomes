import React from "react";
import { render, screen } from "@testing-library/react";
import { Rating } from ".";

jest.mock("../../icons/icon-star", () => ({
  IconStar: () => <svg data-testid="icon-star" />,
}));

describe("Rating component", () => {
  it("renders the correct number of stars and displays rating and review count", () => {
    const mockRating = { rating: 4, reviewCount: 120 };

    render(<Rating rating={mockRating} />);

    const stars = screen.getAllByTestId("icon-star");
    expect(stars).toHaveLength(mockRating.rating);

    expect(screen.getByText(/4 \(120 Reviews\)/)).toBeInTheDocument();
  });

  it("renders 0 stars correctly", () => {
    const mockRating = { rating: 0, reviewCount: 5 };

    render(<Rating rating={mockRating} />);
    const stars = screen.queryAllByTestId("icon-star");
    expect(stars).toHaveLength(0);

    expect(screen.getByText(/0 \(5 Reviews\)/)).toBeInTheDocument();
  });
});
