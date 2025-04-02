import "@testing-library/jest-dom";
import { act, fireEvent, render, screen } from "@testing-library/react";
import { ProductCarousel } from "./product-carousel";

window.matchMedia = jest.fn().mockImplementation((query) => ({
  matches: false,
  media: query,
  onchange: null,
  addListener: jest.fn(),
  removeListener: jest.fn(),
  addEventListener: jest.fn(),
  removeEventListener: jest.fn(),
  dispatchEvent: jest.fn(),
}));

const TestItems = Array.from({ length: 5 }, (_, i) => (
  <div
    key={i}
    data-testid={`carousel-item-${i}`}
  >
    Item {i + 1}
  </div>
));

describe("Product Carousel Component", () => {
  it("should render items correctly", () => {
    render(<ProductCarousel>{TestItems}</ProductCarousel>);

    TestItems.forEach((_, index) => {
      expect(screen.getByTestId(`carousel-item-${index}`)).toBeInTheDocument();
    });
  });

  it("shows heading when provided", () => {
    const headingText = "Test Heading";
    render(<ProductCarousel heading={headingText}>{TestItems}</ProductCarousel>);
    expect(screen.getByText(headingText)).toBeInTheDocument();
  });

  it("shows controls when showControls is true", () => {
    render(<ProductCarousel showControls>{TestItems}</ProductCarousel>);
    expect(screen.getByLabelText("Previous slide")).toBeInTheDocument();
    expect(screen.getByLabelText("Next slide")).toBeInTheDocument();
  });

  it("hides controls when showControls is false", () => {
    render(<ProductCarousel showControls={false}>{TestItems}</ProductCarousel>);
    expect(screen.queryByLabelText("Previous slide")).not.toBeInTheDocument();
    expect(screen.queryByLabelText("Next slide")).not.toBeInTheDocument();
  });

  it("navigates between slides", () => {
    render(<ProductCarousel showControls>{TestItems}</ProductCarousel>);

    // Initial state
    expect(screen.getByTestId("carousel-item-0")).toBeVisible();

    // Click next
    fireEvent.click(screen.getByLabelText("Next slide"));
    expect(screen.getByTestId("carousel-item-1")).toBeVisible();

    // Click prev
    fireEvent.click(screen.getByLabelText("Previous slide"));
    expect(screen.getByTestId("carousel-item-0")).toBeVisible();
  });

  it("loops back to first slide when reaching end", () => {
    render(<ProductCarousel showControls>{TestItems}</ProductCarousel>);

    // Go to last slide
    for (let i = 0; i < 5; i++) {
      fireEvent.click(screen.getByLabelText("Next slide"));
    }

    expect(screen.getByTestId("carousel-item-0")).toBeVisible();
  });

  it("loops to last slide when going before first", () => {
    render(<ProductCarousel showControls>{TestItems}</ProductCarousel>);

    // Go to previous from first
    fireEvent.click(screen.getByLabelText("Previous slide"));

    expect(screen.getByTestId("carousel-item-4")).toBeVisible();
  });

  it("handles autoPlay correctly", () => {
    jest.useFakeTimers();
    render(
      <ProductCarousel
        autoPlay
        interval={1000}
      >
        {TestItems}
      </ProductCarousel>,
    );

    act(() => {
      jest.advanceTimersByTime(1000);
    });

    expect(screen.getByTestId("carousel-item-1")).toBeVisible();
    jest.useRealTimers();
  });

  it("pauses on hover", () => {
    jest.useFakeTimers();
    const { container } = render(
      <ProductCarousel
        autoPlay
        interval={1000}
      >
        {TestItems}
      </ProductCarousel>,
    );

    fireEvent.mouseEnter(container.firstChild!);
    act(() => {
      jest.advanceTimersByTime(2000);
    });

    expect(screen.getByTestId("carousel-item-0")).toBeVisible();
    jest.useRealTimers();
  });

  it("applies custom class names", () => {
    const containerClass = "custom-container";
    const itemClass = "custom-item";

    render(
      <ProductCarousel
        className={containerClass}
        itemClassName={itemClass}
      >
        {TestItems}
      </ProductCarousel>,
    );

    expect(document.querySelector(`.${containerClass}`)).toBeInTheDocument();
    expect(document.querySelector(`.${itemClass}`)).toBeInTheDocument();
  });
});
