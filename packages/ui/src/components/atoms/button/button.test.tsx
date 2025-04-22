import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Button } from ".";

describe("Button Component", () => {
  it("renders button with default props", () => {
    render(<Button>Click me</Button>);
    const button = screen.getByRole("button", { name: /click me/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("rounded-sm");
  });

  it("renders button with primary variant", () => {
    render(<Button variant="primary">Primary</Button>);
    const button = screen.getByRole("button", { name: /primary/i });
    expect(button).toHaveClass("bg-brand");
  });

  it("renders button with secondary variant", () => {
    render(<Button variant="secondary">Secondary</Button>);
    const button = screen.getByRole("button", { name: /secondary/i });
    expect(button).toHaveClass("border-brand");
  });

  it("renders button with different sizes", () => {
    render(<Button size="sm">Small</Button>);
    const smallButton = screen.getByRole("button", { name: /small/i });
    expect(smallButton).toHaveClass("size-40");

    render(<Button size="lg">Large</Button>);
    const largeButton = screen.getByRole("button", { name: /large/i });
    expect(largeButton).toHaveClass("w-153");
  });

  it("renders button with leading icon", () => {
    render(<Button leadingIcon={<span data-testid="leading-icon">→</span>}>With Icon</Button>);
    expect(screen.getByTestId("leading-icon")).toBeInTheDocument();
  });

  it("renders button with trailing icon", () => {
    render(<Button trailingIcon={<span data-testid="trailing-icon">←</span>}>With Icon</Button>);
    expect(screen.getByTestId("trailing-icon")).toBeInTheDocument();
  });

  it("applies custom className", () => {
    render(<Button className="custom-class">Custom</Button>);
    const button = screen.getByRole("button", { name: /custom/i });
    expect(button).toHaveClass("custom-class");
  });

  it("forwards ref correctly", () => {
    const ref = { current: null };
    render(<Button ref={ref}>Ref Button</Button>);
    expect(ref.current).toBeInstanceOf(HTMLButtonElement);
  });
});
