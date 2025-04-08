import React from "react";
import { render, screen, act } from "@testing-library/react";
import { HeroCarousel } from "./hero-carousel";
import { CarouselControls } from "./carousel-controls";

// Mock the CarouselControls component
jest.mock("./carousel-controls", () => ({
  CarouselControls: jest.fn(({ nextSlide, previousSlide }) => (
    <div>
      <button
        onClick={previousSlide}
        data-testid="prev-button"
      >
        Previous
      </button>
      <button
        onClick={nextSlide}
        data-testid="next-button"
      >
        Next
      </button>
    </div>
  )),
}));

describe("HeroCarousel", () => {
  const mockImages = [
    { imageUrl: "image1.jpg", imageAlt: "Image 1" },
    { imageUrl: "image2.jpg", imageAlt: "Image 2" },
    { imageUrl: "image3.jpg", imageAlt: "Image 3" },
  ];

  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
    jest.clearAllMocks();
  });

  it("renders with initial image", () => {
    render(<HeroCarousel images={mockImages} />);

    // Check main image is displayed
    const mainImage = screen.getByAltText("Image 1");
    expect(mainImage).toBeInTheDocument();

    // Check side images are rendered
    expect(screen.getByAltText("side Image 1")).toBeInTheDocument();
    expect(screen.getByAltText("side Image 2")).toBeInTheDocument();
    expect(screen.getByAltText("side Image 3")).toBeInTheDocument();
  });

  it("cycles to next image when next button is clicked", () => {
    render(<HeroCarousel images={mockImages} />);

    const nextButton = screen.getByTestId("next-button");
    act(() => {
      nextButton.click();
    });

    // Check transform style is updated
    const imageContainer = screen.getByAltText("Image 1").parentElement;
    expect(imageContainer).toHaveStyle("transform: translateX(-100%)");
  });

  it("cycles to previous image when prev button is clicked", () => {
    render(<HeroCarousel images={mockImages} />);

    const prevButton = screen.getByTestId("prev-button");
    act(() => {
      prevButton.click();
    });

    // Check transform style is updated (wraps to last image)
    const imageContainer = screen.getByAltText("Image 1").parentElement;
    expect(imageContainer).toHaveStyle("transform: translateX(-200%)");
  });

  it("automatically cycles to next image after interval", () => {
    render(<HeroCarousel images={mockImages} />);

    // Fast-forward time by 3 seconds
    act(() => {
      jest.advanceTimersByTime(3000);
    });

    const imageContainer = screen.getByAltText("Image 1").parentElement;
    expect(imageContainer).toHaveStyle("transform: translateX(-100%)");
  });

  it("wraps to last image when at start of array", () => {
    render(<HeroCarousel images={mockImages} />);

    // Go to previous from start
    const prevButton = screen.getByTestId("prev-button");
    act(() => {
      prevButton.click();
    });

    const imageContainer = screen.getByAltText("Image 1").parentElement;
    expect(imageContainer).toHaveStyle("transform: translateX(-200%)");
  });

  it("renders correct number of side images", () => {
    render(<HeroCarousel images={mockImages} />);

    const sideImages = screen.getAllByAltText(/side /i);
    expect(sideImages).toHaveLength(3);
  });

  it("passes correct props to CarouselControls", () => {
    render(<HeroCarousel images={mockImages} />);

    expect(CarouselControls).toHaveBeenCalled();
  });
});
