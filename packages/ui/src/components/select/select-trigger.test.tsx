import { render, screen, fireEvent } from "@testing-library/react";
import { useSelectContext } from "./select-context";
import { cn } from "../../lib/utils";
import { SelectTrigger } from "./select-trigger";
import "@testing-library/jest-dom";

jest.mock("./select-context");
jest.mock("../../lib/utils");

const mockUseSelectContext = useSelectContext as jest.Mock;
const mockCn = cn as jest.Mock;

describe("SelectTrigger", () => {
  const mockSetIsOpen = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    mockCn.mockImplementation((...args) => args.join(" "));
    mockUseSelectContext.mockReturnValue({
      isOpen: false,
      setIsOpen: mockSetIsOpen,
      selected: null,
    });
  });

  it("renders correctly with default props", () => {
    render(<SelectTrigger>Select an option</SelectTrigger>);

    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent("Select an option");
  });

  it("toggles isOpen state when clicked", () => {
    render(<SelectTrigger>Select</SelectTrigger>);

    const button = screen.getByRole("button");
    fireEvent.click(button);

    expect(mockSetIsOpen).toHaveBeenCalledWith(true);
  });

  it("shows correct text color when selected exists", () => {
    mockUseSelectContext.mockReturnValue({
      isOpen: false,
      setIsOpen: mockSetIsOpen,
      selected: "Option 1",
    });

    render(<SelectTrigger>Option 1</SelectTrigger>);

    const button = screen.getByRole("button");
    expect(button).toHaveClass("text-Grey-text-strong");
    expect(button).not.toHaveClass("text-Grey-stroke-strong");
  });

  it("applies custom className correctly", () => {
    render(<SelectTrigger className="custom-class">Select</SelectTrigger>);

    const button = screen.getByRole("button");
    expect(button).toHaveClass("custom-class");
  });
});
