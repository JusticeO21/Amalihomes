import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import WhyChooseUsCard from "./why-choose-us-card";

describe("why choose us card", () => {
  it("should render why choose us card component correctly", () => {
    render(
      <WhyChooseUsCard
        src="imageUrl"
        alt="an image"
        title="title"
        description="description"
      />,
    );
    expect(screen.getByAltText(/an image/i)).toBeInTheDocument();
    expect(screen.getByText(/title/i)).toBeInTheDocument();
    expect(screen.getByText(/description/i)).toBeInTheDocument();
  });
});
