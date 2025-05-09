import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { CompaniesMetrics } from ".";

describe("CompaniesMetrics", () => {
  const defaultProps = {
    title: "Achievements",
    description: "Our milestones...",
    metrics: [
      { metric: "30+", label: "Years" },
      { metric: "100+", label: "Projects" },
      { metric: "50+", label: "Awards" },
      { metric: "200+", label: "Clients" },
    ],
  };

  test("renders title and description correctly", () => {
    render(<CompaniesMetrics {...defaultProps} />);

    expect(screen.getByText("Achievements")).toBeInTheDocument();
    expect(screen.getByText("Our milestones...")).toBeInTheDocument();
  });

  test("renders metrics correctly", () => {
    render(<CompaniesMetrics {...defaultProps} />);

    const metricGroups = screen.getAllByRole("group", { hidden: true });
    expect(metricGroups).toHaveLength(4);
    expect(metricGroups[0]).toHaveAttribute("aria-label", "30+ Years");
    expect(metricGroups[0]).toHaveAttribute("aria-labelledby", "metric-card-0");
  });

  test("applies align prop to TextPair", () => {
    render(
      <CompaniesMetrics
        {...defaultProps}
        align="left"
      />,
    );

    const textPair = screen.getByText("Achievements").parentElement;
    expect(textPair).toHaveClass("text-left"); // Assumes TextPair uses text-{align}
  });

  test("respects layout prop for grid", () => {
    render(
      <CompaniesMetrics
        {...defaultProps}
        layout="grid"
      />,
    );

    const grid = screen.getByText("30+").closest("div.grid");
    expect(grid).toHaveClass("grid grid-cols-1 md:grid-cols-2");
  });

  test("limits metrics to 4", () => {
    render(
      <CompaniesMetrics
        {...defaultProps}
        metrics={[...defaultProps.metrics, { metric: "500+", label: "Extra" }]}
      />,
    );

    const metricGroups = screen.getAllByRole("group", { hidden: true });
    expect(metricGroups).toHaveLength(4);
  });
});
