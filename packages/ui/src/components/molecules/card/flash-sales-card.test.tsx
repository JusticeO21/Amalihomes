import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import FlashSaleCard from "./flash-sale-card";

describe("flashsale component", () => {
  it("should render flashsale component correctly", () => {
    render(
      <FlashSaleCard
        ctaLabel="label"
        ctaUrl="url"
        imageUrl="/imageUrl.png"
        imageAlt="an image"
        title="title"
        description="description"
      />,
    );

    expect(screen.getByAltText(/an image/i)).toBeInTheDocument();
    expect(screen.getByText(/title/i)).toBeInTheDocument();
    expect(screen.getByText(/description/i)).toBeInTheDocument();
    expect(screen.getByText("label")).toBeInTheDocument();
  });
});
