import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Typography } from ".";

describe("Typography Component", () => {
  it("renders with default props", () => {
    render(<Typography>Default Text</Typography>);
    expect(screen.getByText("Default Text")).toBeInTheDocument();
  });

  it("renders with custom weight", () => {
    render(<Typography weight="bold">Bold Text</Typography>);
    const element = screen.getByText("Bold Text");
    expect(element).toHaveClass("font-bold");
  });

  it("renders with custom color", () => {
    render(<Typography colors="text-brand">Colored Text</Typography>);
    const element = screen.getByText("Colored Text");
    expect(element).toHaveClass("text-brand");
  });

  it("renders with custom element type", () => {
    render(<Typography as="h1">Heading</Typography>);
    expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument();
  });

  it("renders with custom variant", () => {
    render(<Typography variant="h2">Variant Heading</Typography>);
    expect(screen.getByRole("heading", { level: 2 })).toBeInTheDocument();
  });

  it("applies custom className", () => {
    render(<Typography className="custom-class">Custom Class Text</Typography>);
    const element = screen.getByText("Custom Class Text");
    expect(element).toHaveClass("custom-class");
  });

  it("forwards ref correctly", () => {
    const ref = jest.fn();
    render(<Typography ref={ref}>Ref Text</Typography>);
    expect(ref).toHaveBeenCalled();
  });
});
