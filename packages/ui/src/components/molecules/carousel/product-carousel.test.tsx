import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { ProductCarousel } from "./product-carousel";

// Mock scroll methods
const mockScrollTo = jest.fn();
const mockScrollBy = jest.fn();

describe("ProductCarousel", () => {
  const mockChildren = [
    <div
      key="1"
      style={{ minWidth: "200px" }}
    >
      Item 1
    </div>,
    <div
      key="2"
      style={{ minWidth: "200px" }}
    >
      Item 2
    </div>,
    <div
      key="3"
      style={{ minWidth: "200px" }}
    >
      Item 3
    </div>,
  ];

  beforeAll(() => {
    window.HTMLDivElement.prototype.scrollTo = mockScrollTo;
    window.HTMLDivElement.prototype.scrollBy = mockScrollBy;
  });

  beforeEach(() => {
    jest.clearAllMocks();

    window.matchMedia = jest.fn().mockImplementation((query) => ({
      matches: query === "(min-width: 768px)",
      media: query,
      onchange: null,
      addListener: jest.fn(),
      removeListener: jest.fn(),
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    }));
  });

  it("renders with children", () => {
    render(<ProductCarousel>{mockChildren}</ProductCarousel>);

    // Verify children render
    expect(screen.getByText("Item 1")).toBeInTheDocument();
    expect(screen.getByText("Item 2")).toBeInTheDocument();
    expect(screen.getByText("Item 3")).toBeInTheDocument();
  });

  it("renders heading when provided", () => {
    render(<ProductCarousel heading="Test Heading">{mockChildren}</ProductCarousel>);
    expect(screen.getByText("Test Heading")).toBeInTheDocument();
  });
});
