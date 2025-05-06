import { render, screen } from "@testing-library/react";
import { SelectContent } from "./select-content";
import { useSelectContext } from "./select-context";
import "@testing-library/jest-dom";

jest.mock("./select-context");
jest.mock("./select-search");

const mockUseSelectContext = useSelectContext as jest.Mock;
const mockSetSearch = jest.fn();

describe("SelectContent", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    mockUseSelectContext.mockReturnValue({
      isOpen: true,
    });
  });

  it("renders when isOpen is true", () => {
    render(<SelectContent>Test Content</SelectContent>);
    expect(screen.getByText("Test Content")).toBeInTheDocument();
  });

  it("does not render when isOpen is false", () => {
    mockUseSelectContext.mockReturnValue({
      isOpen: false,
      search: "",
      hasSearch: false,
      setSearch: mockSetSearch,
    });

    const { container } = render(<SelectContent>Test Content</SelectContent>);
    expect(container).toBeEmptyDOMElement();
  });

  it("renders children in content wrapper", () => {
    render(
      <SelectContent>
        <div>Child 1</div>
        <div>Child 2</div>
      </SelectContent>,
    );

    expect(screen.getByText("Child 1")).toBeInTheDocument();
    expect(screen.getByText("Child 2")).toBeInTheDocument();
  });
});
