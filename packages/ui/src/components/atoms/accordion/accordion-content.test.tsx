import { render, screen } from "@testing-library/react";
import { AccordionContent } from "./accordion-content";
import { ItemContext, useAccordion } from "./accordion.context";
import { AccordionContentProps } from "./types";

jest.mock("./accordion.context", () => ({
  ...jest.requireActual("./accordion.context"),
  useAccordion: jest.fn(),
}));

describe("AccordionContent", () => {
  const mockUseAccordion = useAccordion as jest.MockedFunction<typeof useAccordion>;
  const mockItemValue = "item1";
  const mockChildren = <div>Test Content</div>;

  beforeEach(() => {
    mockUseAccordion.mockReturnValue({
      value: [],
      onValueChange: jest.fn(),
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  const renderContent = (props: Partial<AccordionContentProps> = {}, contextValue = mockItemValue) => {
    return render(
      <ItemContext.Provider value={contextValue}>
        <AccordionContent {...props}>{mockChildren}</AccordionContent>
      </ItemContext.Provider>,
    );
  };

  it("renders children correctly", () => {
    renderContent();
    expect(screen.getByText("Test Content")).toBeInTheDocument();
  });

  it("throws error when not wrapped in ItemContext", () => {
    const originalError = console.error;
    console.error = jest.fn();

    expect(() => render(<AccordionContent>{mockChildren}</AccordionContent>)).toThrow(
      "AccordionContent must be used within an AccordionItem",
    );

    console.error = originalError;
  });

  it("applies visibility state classes when value is included", () => {
    mockUseAccordion.mockReturnValue({
      value: [mockItemValue],
      onValueChange: jest.fn(),
    });

    renderContent();
    const content = screen.getByText("Test Content").parentElement;
    expect(content).toHaveClass("visible");
    expect(content).not.toHaveClass("invisible");
  });

  it("applies visibility hidden state classes when value is not included", () => {
    mockUseAccordion.mockReturnValue({
      value: [],
      onValueChange: jest.fn(),
    });

    renderContent();
    const content = screen.getByText("Test Content").parentElement;
    expect(content).toHaveClass("invisible");
    expect(content).not.toHaveClass("visible");
  });

  it("sets correct data-state attribute", () => {
    mockUseAccordion.mockReturnValue({
      value: [],
      onValueChange: jest.fn(),
    });
    const { rerender } = renderContent();
    expect(screen.getByText("Test Content").parentElement).toHaveAttribute("data-state", "closed");

    mockUseAccordion.mockReturnValue({
      value: [mockItemValue],
      onValueChange: jest.fn(),
    });
    rerender(
      <ItemContext.Provider value={mockItemValue}>
        <AccordionContent>{mockChildren}</AccordionContent>
      </ItemContext.Provider>,
    );
    expect(screen.getByText("Test Content").parentElement).toHaveAttribute("data-state", "open");
  });
});
