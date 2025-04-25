import { render, screen } from "@testing-library/react";
import { AccordionItem } from "./accordion-item";
import { useAccordion } from "./accordion.context";

jest.mock("./accordion.context", () => ({
  ...jest.requireActual("./accordion.context"),
  useAccordion: jest.fn(),
}));

describe("AccordionItem", () => {
  const mockUseAccordion = useAccordion as jest.MockedFunction<typeof useAccordion>;

  beforeEach(() => {
    mockUseAccordion.mockReturnValue({
      value: [],
      onValueChange: jest.fn(),
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders children correctly", () => {
    mockUseAccordion.mockReturnValue({
      value: [],
      onValueChange: jest.fn(),
    });

    render(
      <AccordionItem value="item1">
        <div>Test Content</div>
      </AccordionItem>,
    );

    expect(screen.getByText("Test Content")).toBeInTheDocument();
  });

  it("has correct data-state attribute", () => {
    mockUseAccordion.mockReturnValue({
      value: [],
      onValueChange: jest.fn(),
    });

    const { rerender } = render(
      <AccordionItem value="item1">
        <div>Test</div>
      </AccordionItem>,
    );

    expect(screen.getByText("Test").parentElement).toHaveAttribute("data-state", "closed");

    mockUseAccordion.mockReturnValue({
      value: ["item1"],
      onValueChange: jest.fn(),
    });

    rerender(
      <AccordionItem value="item1">
        <div>Test</div>
      </AccordionItem>,
    );

    expect(screen.getByText("Test").parentElement).toHaveAttribute("data-state", "open");
  });

  it("has correct aria-expanded attribute", () => {
    mockUseAccordion.mockReturnValue({
      value: [],
      onValueChange: jest.fn(),
    });

    const { rerender } = render(
      <AccordionItem value="item1">
        <div>Test</div>
      </AccordionItem>,
    );

    expect(screen.getByText("Test").parentElement).toHaveAttribute("aria-expanded", "false");

    mockUseAccordion.mockReturnValue({
      value: ["item1"],
      onValueChange: jest.fn(),
    });

    rerender(
      <AccordionItem value="item1">
        <div>Test</div>
      </AccordionItem>,
    );

    expect(screen.getByText("Test").parentElement).toHaveAttribute("aria-expanded", "true");
  });
});
