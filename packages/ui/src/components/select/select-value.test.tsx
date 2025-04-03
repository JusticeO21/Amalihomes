import { render, screen } from "@testing-library/react";
import { useSelectContext } from "./select-context";
import { cn } from "../../lib/utils";
import { SelectValue } from "./select-value";
import "@testing-library/jest-dom";

jest.mock("./select-context");
jest.mock("../../lib/utils");

const mockUseSelectContext = useSelectContext as jest.Mock;
const mockCn = cn as jest.Mock;

describe("SelectValue", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    mockCn.mockImplementation((...args) => args.join(" "));
  });

  it("renders the selected value when provided", () => {
    mockUseSelectContext.mockReturnValue({ selected: "Test Option" });
    render(<SelectValue placeholder="Select an option" />);

    expect(screen.getByText("Test Option")).toBeInTheDocument();
  });

  it("renders the placeholder when no value is selected", () => {
    mockUseSelectContext.mockReturnValue({ selected: null });
    render(<SelectValue placeholder="Select an option" />);

    expect(screen.getByText("Select an option")).toBeInTheDocument();
  });
});
