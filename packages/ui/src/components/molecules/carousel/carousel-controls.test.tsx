import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { CarouselControls } from "./carousel-controls";

describe("CarouselControls Component", () => {
  const mockPreviousSlide = jest.fn();
  const mockNextSlide = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders without crashing", () => {
    render(
      <CarouselControls
        previousSlide={mockPreviousSlide}
        nextSlide={mockNextSlide}
      />,
    );
    expect(screen.getByLabelText("Previous slide")).toBeInTheDocument();
    expect(screen.getByLabelText("Next slide")).toBeInTheDocument();
  });

  it("calls previousSlide when left arrow is clicked", () => {
    render(
      <CarouselControls
        previousSlide={mockPreviousSlide}
        nextSlide={mockNextSlide}
      />,
    );
    fireEvent.click(screen.getByLabelText("Previous slide"));
    expect(mockPreviousSlide).toHaveBeenCalledTimes(1);
    expect(mockNextSlide).not.toHaveBeenCalled();
  });

  it("calls nextSlide when right arrow is clicked", () => {
    render(
      <CarouselControls
        previousSlide={mockPreviousSlide}
        nextSlide={mockNextSlide}
      />,
    );
    fireEvent.click(screen.getByLabelText("Next slide"));
    expect(mockNextSlide).toHaveBeenCalledTimes(1);
    expect(mockPreviousSlide).not.toHaveBeenCalled();
  });
});
