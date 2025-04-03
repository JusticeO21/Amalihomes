import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { useDebounce } from "../../hooks/use-debounce/use-debounce";
import { useSelectContext } from "./select-context";
import SelectSearch from "./select-search";

jest.mock("./select-context");
jest.mock("../../hooks/use-debounce/use-debounce");

const mockUseSelectContext = useSelectContext as jest.Mock;
const mockUseDebounce = useDebounce as jest.Mock;
const mockOnSearch = jest.fn();

describe("SelectSearch", () => {
  const mockDebouncedFn = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    mockUseSelectContext.mockReturnValue({ delay: 300 });
    mockUseDebounce.mockImplementation((fn) => {
      mockDebouncedFn.mockImplementation(fn);
      return mockDebouncedFn;
    });
  });

  it("renders correctly with default props", () => {
    render(<SelectSearch onSearch={mockOnSearch} />);

    expect(screen.getByRole("textbox")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("search...")).toBeInTheDocument();
  });

  it("updates query state on input change", () => {
    render(<SelectSearch onSearch={mockOnSearch} />);

    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "test" } });

    expect(input).toHaveValue("test");
  });

  it("calls debounced search on input change", () => {
    render(<SelectSearch onSearch={mockOnSearch} />);

    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "test" } });

    expect(mockDebouncedFn).toHaveBeenCalledWith("test");
  });

  it("passes lowercase search term to onSearch", () => {
    render(<SelectSearch onSearch={mockOnSearch} />);

    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "TEST" } });

    expect(mockOnSearch).toHaveBeenCalledWith("test");
  });

  it("uses delay from context", () => {
    mockUseSelectContext.mockReturnValue({ delay: 500 });
    render(<SelectSearch onSearch={mockOnSearch} />);

    expect(mockUseDebounce).toHaveBeenCalledWith(expect.any(Function), 500);
  });
});

// Helper to mock the container element
beforeEach(() => {
  Object.defineProperty(HTMLElement.prototype, "dataset", {
    writable: true,
    value: { testid: "search-container" },
  });
});
