import React from "react";
import { render, screen } from "@testing-library/react";
import { Discount } from "./product-discount";

jest.mock("../../../lib/format-currency/format-currency", () => ({
  formatCurrency: (value: number) => `$${value.toFixed(2)}`,
}));

describe("Discount component", () => {
  it("renders only the price when no discount is provided", () => {
    render(<Discount price={100} />);

    expect(screen.getByText("$100.00")).toBeInTheDocument();
    expect(screen.queryAllByText("$100.00")).toHaveLength(1);
  });

  it("renders original and discounted prices when discount is provided", () => {
    render(
      <Discount
        price={200}
        discount={25}
      />,
    );

    expect(screen.getByText("$200.00")).toBeInTheDocument();
    expect(screen.getByText("$150.00")).toBeInTheDocument();

    expect(screen.queryAllByText("$200.00")).toHaveLength(1);
    expect(screen.queryAllByText("$150.00")).toHaveLength(1);
  });

  it("renders correct text for 100% discount", () => {
    render(
      <Discount
        price={100}
        discount={100}
      />,
    );

    expect(screen.getByText("$100.00")).toBeInTheDocument();
    expect(screen.getByText("$0.00")).toBeInTheDocument();

    expect(screen.queryAllByText("$100.00")).toHaveLength(1);
    expect(screen.queryAllByText("$0.00")).toHaveLength(1);
  });
});
