import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Divider } from ".";

describe("Divider Component", () => {
  test("renders without crashing", () => {
    const { container } = render(<Divider />);
    expect(container).toBeInTheDocument();
  });

  test("has the correct default class", () => {
    const { container } = render(<Divider />);
    expect(container.firstChild).toHaveClass("divider");
  });

  test("renders with custom className", () => {
    const { container } = render(<Divider className="custom-class" />);
    expect(container.firstChild).toHaveClass("custom-class");
  });

  test('has role="separator"', () => {
    const { getByRole } = render(<Divider />);
    expect(getByRole("separator")).toBeInTheDocument();
  });

  test("has correct aria-orientation by default (horizontal)", () => {
    const { getByRole } = render(<Divider />);
    expect(getByRole("separator")).toHaveAttribute("aria-orientation", "horizontal");
  });

  test("has correct aria-orientation when vertical", () => {
    const { getByRole } = render(<Divider orientation="vertical" />);
    expect(getByRole("separator")).toHaveAttribute("aria-orientation", "vertical");
  });
});
