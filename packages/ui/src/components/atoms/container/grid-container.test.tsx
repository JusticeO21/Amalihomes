import { render, screen } from "@testing-library/react";
import { GridContainer } from "./grid-container";

describe("GridContainer", () => {
  const defaultChildren = <div data-testid="child">Test Child</div>;

  test("renders with default props", () => {
    render(<GridContainer>{defaultChildren}</GridContainer>);
    const container = screen.getByTestId("child").parentElement;

    expect(container).toHaveClass("grid w-full gap-16 grid-cols-1");
    expect(screen.getByTestId("child")).toBeInTheDocument();
  });

  test("renders with specific columns prop", () => {
    render(<GridContainer columns={3}>{defaultChildren}</GridContainer>);
    const container = screen.getByTestId("child").parentElement;

    expect(container).toHaveClass("grid w-full gap-16 grid-cols-3");
    expect(screen.getByTestId("child")).toBeInTheDocument();
  });

  test("renders with responsive prop", () => {
    render(<GridContainer responsive="md">{defaultChildren}</GridContainer>);
    const container = screen.getByTestId("child").parentElement;

    expect(container).toHaveClass("grid w-full gap-16 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6");
    expect(screen.getByTestId("child")).toBeInTheDocument();
  });

  test("renders with custom gap prop", () => {
    render(<GridContainer gap="lg">{defaultChildren}</GridContainer>);
    const container = screen.getByTestId("child").parentElement;

    expect(container).toHaveClass("grid w-full gap-24 grid-cols-1");
    expect(screen.getByTestId("child")).toBeInTheDocument();
  });

  test("renders with custom className prop", () => {
    render(<GridContainer className="custom-class">{defaultChildren}</GridContainer>);
    const container = screen.getByTestId("child").parentElement;

    expect(container).toHaveClass("grid w-full gap-16 grid-cols-1 custom-class");
    expect(screen.getByTestId("child")).toBeInTheDocument();
  });

  test("renders multiple children correctly", () => {
    render(
      <GridContainer>
        <div data-testid="child-1">Child 1</div>
        <div data-testid="child-2">Child 2</div>
      </GridContainer>,
    );
    expect(screen.getByTestId("child-1")).toBeInTheDocument();
    expect(screen.getByTestId("child-2")).toBeInTheDocument();
  });
});
