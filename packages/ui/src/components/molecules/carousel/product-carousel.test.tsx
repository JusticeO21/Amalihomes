import { render, screen, fireEvent } from "@testing-library/react";
import { ProductCarousel } from "./product-carousel";

jest.mock("./carousel-controls", () => ({
  CarouselControls: jest.fn(({ previousSlide, nextSlide }) => (
    <div>
      <button onClick={previousSlide}>Previous</button>
      <button onClick={nextSlide}>Next</button>
    </div>
  )),
}));

window.HTMLElement.prototype.scrollBy = jest.fn();

beforeAll(() => {
  Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: jest.fn().mockImplementation((query) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(),
      removeListener: jest.fn(),
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  });
});

describe("ProductCarousel", () => {
  const mockChildren = [<div key="1">Item 1</div>, <div key="2">Item 2</div>, <div key="3">Item 3</div>];

  beforeEach(() => {
    jest.clearAllMocks();

    (window.matchMedia as jest.Mock).mockImplementation((query) => ({
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

  it("renders without crashing", () => {
    render(<ProductCarousel>{mockChildren}</ProductCarousel>);
    expect(screen.getByText("Item 1")).toBeInTheDocument();
  });

  it("displays children correctly", () => {
    render(<ProductCarousel>{mockChildren}</ProductCarousel>);
    expect(screen.getByText("Item 1")).toBeInTheDocument();
    expect(screen.getByText("Item 2")).toBeInTheDocument();
    expect(screen.getByText("Item 3")).toBeInTheDocument();
  });

  it("shows controls by default", () => {
    render(<ProductCarousel>{mockChildren}</ProductCarousel>);
    expect(screen.getByText("Previous")).toBeInTheDocument();
    expect(screen.getByText("Next")).toBeInTheDocument();
  });

  it("hides controls when showControls is false", () => {
    render(<ProductCarousel showControls={false}>{mockChildren}</ProductCarousel>);
    expect(screen.queryByText("Previous")).not.toBeInTheDocument();
    expect(screen.queryByText("Next")).not.toBeInTheDocument();
  });

  it("displays heading when provided", () => {
    const headingText = "Featured Products";
    render(<ProductCarousel heading={headingText}>{mockChildren}</ProductCarousel>);
    expect(screen.getByText(headingText)).toBeInTheDocument();
  });

  it("calls scrollBy with correct amount when clicking controls", () => {
    render(<ProductCarousel>{mockChildren}</ProductCarousel>);

    fireEvent.click(screen.getByText("Next"));
    expect(window.HTMLElement.prototype.scrollBy).toHaveBeenCalledWith({
      left: 361,
      behavior: "smooth",
    });

    fireEvent.click(screen.getByText("Previous"));
    expect(window.HTMLElement.prototype.scrollBy).toHaveBeenCalledWith({
      left: -361,
      behavior: "smooth",
    });
  });

  describe("responsive behavior", () => {
    it("uses 361px scroll amount for desktop", () => {
      (window.matchMedia as jest.Mock).mockImplementation((query) => ({
        matches: query === "(min-width: 768px)",
      }));

      render(<ProductCarousel>{mockChildren}</ProductCarousel>);
      fireEvent.click(screen.getByText("Next"));
      expect(window.HTMLElement.prototype.scrollBy).toHaveBeenCalledWith({
        left: 361,
        behavior: "smooth",
      });
    });

    it("uses 270px scroll amount for tablet", () => {
      (window.matchMedia as jest.Mock).mockImplementation((query) => ({
        matches: query === "(min-width: 640px)",
      }));

      render(<ProductCarousel>{mockChildren}</ProductCarousel>);
      fireEvent.click(screen.getByText("Next"));
      expect(window.HTMLElement.prototype.scrollBy).toHaveBeenCalledWith({
        left: 270,
        behavior: "smooth",
      });
    });

    it("uses 203px scroll amount for mobile (400px)", () => {
      (window.matchMedia as jest.Mock).mockImplementation((query) => ({
        matches: query === "(min-width: 400px)",
      }));

      render(<ProductCarousel>{mockChildren}</ProductCarousel>);
      fireEvent.click(screen.getByText("Next"));
      expect(window.HTMLElement.prototype.scrollBy).toHaveBeenCalledWith({
        left: 203,
        behavior: "smooth",
      });
    });

    it("uses 200px scroll amount for small mobile", () => {
      (window.matchMedia as jest.Mock).mockImplementation(() => ({
        matches: false,
      }));

      render(<ProductCarousel>{mockChildren}</ProductCarousel>);
      fireEvent.click(screen.getByText("Next"));
      expect(window.HTMLElement.prototype.scrollBy).toHaveBeenCalledWith({
        left: 200,
        behavior: "smooth",
      });
    });
  });

  it("cleans up event listeners on unmount", () => {
    const removeEventListener = jest.spyOn(window, "removeEventListener");
    const { unmount } = render(<ProductCarousel>{mockChildren}</ProductCarousel>);

    unmount();
    expect(removeEventListener).toHaveBeenCalledWith("resize", expect.any(Function));
  });

  it("applies custom className", () => {
    const customClass = "custom-class";
    render(<ProductCarousel className={customClass}>{mockChildren}</ProductCarousel>);
    const container = screen.getByText("Item 1").parentElement?.parentElement;
    expect(container).toHaveClass(customClass);
  });
});
