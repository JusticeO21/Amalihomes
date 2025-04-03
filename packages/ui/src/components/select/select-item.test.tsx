import { render, screen, fireEvent } from "@testing-library/react";
import { SelectItem } from "./select-item";
import { useSelectContext } from "./select-context";
import "@testing-library/jest-dom";

jest.mock("./select-context");

const mockUseSelectContext = useSelectContext as jest.Mock;

describe("SelectItem", () => {
  const mockHandleSelect = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    mockUseSelectContext.mockReturnValue({
      handleSelect: mockHandleSelect,
      selected: "option1",
      search: "",
    });
  });

  it("renders correctly with children", () => {
    render(<SelectItem value="option1">Option 1</SelectItem>);

    expect(screen.getByText("Option 1")).toBeInTheDocument();
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("calls handleSelect with value when clicked", () => {
    render(<SelectItem value="option1">Option 1</SelectItem>);

    const button = screen.getByRole("button");
    fireEvent.click(button);

    expect(mockHandleSelect).toHaveBeenCalledWith("option1");
  });

  it("applies selected styling when selected", () => {
    mockUseSelectContext.mockReturnValue({
      handleSelect: mockHandleSelect,
      selected: "option1",
      search: "",
    });

    render(<SelectItem value="option1">Option 1</SelectItem>);

    const button = screen.getByRole("button");
    expect(button).toHaveClass("text-Grey-text-strong");
    expect(button).not.toHaveClass("text-Grey-stroke-strong");
  });

  it("applies unselected styling when not selected", () => {
    mockUseSelectContext.mockReturnValue({
      handleSelect: mockHandleSelect,
      selected: "option2",
      search: "",
    });

    render(<SelectItem value="option1">Option 1</SelectItem>);

    const button = screen.getByRole("button");
    expect(button).toHaveClass("text-Grey-stroke-strong");
    expect(button).not.toHaveClass("text-Grey-text-strong");
  });

  it("filters items based on search", () => {
    mockUseSelectContext.mockReturnValue({
      handleSelect: mockHandleSelect,
      selected: "",
      search: "apple",
    });

    const { container } = render(<SelectItem value="banana">Banana</SelectItem>);
    expect(container).toBeEmptyDOMElement();

    render(<SelectItem value="apple">Apple</SelectItem>);
    expect(screen.getByText("Apple")).toBeInTheDocument();
  });

  it("applies custom className correctly", () => {
    render(
      <SelectItem
        value="option1"
        className="custom-class"
      >
        Option 1
      </SelectItem>,
    );

    const button = screen.getByRole("button");
    expect(button).toHaveClass("custom-class");
  });
});
