import { fireEvent, render, screen } from "@testing-library/react";
import { AccordionTrigger } from "./accordion-trigger";
import { ItemContext, useAccordion } from "./accordion.context";
import { AccordionTriggerProps } from "./types";

jest.mock("./accordion.context", () => ({
  ...jest.requireActual("./accordion.context"),
  useAccordion: jest.fn(),
}));

jest.mock("lucide-react", () => ({
  ChevronDown: jest.fn((props) => (
    <svg
      {...props}
      data-testid="chevron-icon"
    />
  )),
}));

describe("AccordionTrigger", () => {
  const mockUseAccordion = useAccordion as jest.MockedFunction<typeof useAccordion>;
  const mockItemValue = "item1";
  const mockLabel = "Test Trigger";
  const mockOnValueChange = jest.fn();

  beforeEach(() => {
    mockUseAccordion.mockReturnValue({
      value: [],
      onValueChange: mockOnValueChange,
    });
  });

  const renderTrigger = (props: Partial<AccordionTriggerProps> = {}, contextValue = mockItemValue) => {
    return render(
      <ItemContext.Provider value={contextValue}>
        <AccordionTrigger
          label={mockLabel}
          {...props}
        />
      </ItemContext.Provider>,
    );
  };

  it("renders correctly with required props", () => {
    renderTrigger();

    const button = screen.getByRole("button", { name: mockLabel });
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute("type", "button");
    expect(screen.getByText(mockLabel)).toBeInTheDocument();
    expect(screen.getByTestId("chevron-icon")).toBeInTheDocument();
  });

  it("throws error when ItemContext is not provided", () => {
    const originalError = console.error;
    console.error = jest.fn();

    expect(() => render(<AccordionTrigger label={mockLabel} />)).toThrow(
      "AccordionTrigger must be used within an AccordionItem",
    );

    console.error = originalError;
  });

  it("calls onValueChange with itemValue when clicked", () => {
    renderTrigger();

    fireEvent.click(screen.getByRole("button"));
    expect(mockOnValueChange).toHaveBeenCalledWith(mockItemValue);
  });

  it("has proper button semantics", () => {
    renderTrigger();

    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute("type", "button");
  });

  it("wraps label in h4 heading", () => {
    renderTrigger();

    const heading = screen.getByRole("heading", { level: 4 });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent(mockLabel);
  });
});
