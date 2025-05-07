import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MetricCard } from "./metric-card";

describe("MetricCard", () => {
  const defaultProps = {
    number: "30+",
    label: "Years of Excellence",
    id: "metric-years",
  };

  test("applies custom numberClass and labelClass", () => {
    render(
      <MetricCard
        {...defaultProps}
        numberClass="text-6xl text-blue-500"
        labelClass="text-gray-800 text-xl"
      />,
    );

    const numberElement = screen.getByText("30+");
    const labelElement = screen.getByText("Years of Excellence");

    expect(numberElement).toHaveClass(
      "font-semibold text-gray-800 !text-[32px] !leading-40 !font-semibold lg:!text-48 lg:!leading-56 text-6xl text-blue-500",
    );
    expect(labelElement).toHaveClass("font-body text-gray-700 !text-body !leading-24 text-gray-800 text-xl");
  });

  test("applies custom className to container", () => {
    render(
      <MetricCard
        {...defaultProps}
        className="custom-class"
      />,
    );

    const container = screen.getByRole("group", { hidden: true }).parentElement;
    expect(container).toHaveClass("bg-transparent border-none custom-class");
  });

  test("renders with primary variant", () => {
    render(
      <MetricCard
        {...defaultProps}
        variant="primary"
      />,
    );

    const container = screen.getByRole("group", { hidden: true }).parentElement;
    expect(container).toHaveClass("bg-primary/10 border border-primary/20");
  });

  test("renders with secondary variant", () => {
    render(
      <MetricCard
        {...defaultProps}
        variant="secondary"
      />,
    );

    const container = screen.getByRole("group", { hidden: true }).parentElement;
    expect(container).toHaveClass("bg-secondary/10 border border-secondary/20");
  });

  test("sets accessibility attributes correctly", () => {
    render(
      <MetricCard
        {...defaultProps}
        ariaLabel="30 plus years of excellence"
      />,
    );

    const group = screen.getByRole("group", { hidden: true });
    expect(group).toHaveAttribute("aria-label", "30 plus years of excellence");
    expect(group).toHaveAttribute("aria-labelledby", "metric-years");
    expect(group.parentElement).toHaveAttribute("aria-hidden", "true");
  });

  test("uses default ariaLabel when not provided", () => {
    render(<MetricCard {...defaultProps} />);

    const group = screen.getByRole("group", { hidden: true });
    expect(group).toHaveAttribute("aria-label", "30+ Years of Excellence");
    expect(group).toHaveAttribute("aria-labelledby", "metric-years");
  });

  test("renders with explicit id for aria-labelledby", () => {
    render(
      <MetricCard
        {...defaultProps}
        id="custom-metric-id"
      />,
    );

    const group = screen.getByRole("group", { hidden: true });
    expect(group).toHaveAttribute("aria-labelledby", "custom-metric-id");
  });
});
