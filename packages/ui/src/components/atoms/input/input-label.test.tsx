import React from "react";
import { render, screen } from "@testing-library/react";
import { cn } from "../../../lib/utils";
import { InputLabel } from "./input-label";

jest.mock("../../../lib/utils", () => ({
  cn: jest.fn((...args) => args.filter(Boolean).join(" ")),
}));

describe("InputLabel", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders the label with correct text and attributes", () => {
    render(
      <InputLabel
        name="testInput"
        label="Test Label"
        variant={null}
      />,
    );

    const label = screen.getByText("Test Label");
    expect(label).toBeInTheDocument();
    expect(label).toHaveAttribute("for", "testinput");
    expect(label.tagName).toBe("LABEL");
  });

  it("converts name to lowercase and replaces spaces with hyphens in htmlFor", () => {
    render(
      <InputLabel
        name="Test Input With Spaces"
        label="Test Label"
        variant={null}
      />,
    );

    expect(screen.getByText("Test Label")).toHaveAttribute("for", "test-input-with-spaces");
  });

  it("applies base classes correctly", () => {
    render(
      <InputLabel
        name="test"
        label="Test"
        variant={null}
      />,
    );

    expect(cn).toHaveBeenCalledWith("text-body font-bold text-Grey-text-strong", false);
  });

  it('applies disabled variant classes when variant is "disabled"', () => {
    render(
      <InputLabel
        name="test"
        label="Test"
        variant="disabled"
      />,
    );

    expect(cn).toHaveBeenCalledWith("text-body font-bold text-Grey-text-strong", "text-Grey-stroke-weak");
  });

  it("does not apply disabled variant classes when variant is undefined", () => {
    render(
      <InputLabel
        name="test"
        label="Test"
        variant={undefined}
      />,
    );

    expect(cn).toHaveBeenCalledWith("text-body font-bold text-Grey-text-strong", false);
  });

  it("does not apply disabled variant classes when variant is null", () => {
    render(
      <InputLabel
        name="test"
        label="Test"
        variant={null}
      />,
    );

    expect(cn).toHaveBeenCalledWith("text-body font-bold text-Grey-text-strong", false);
  });

  it("handles empty name prop gracefully", () => {
    render(
      <InputLabel
        name=""
        label="Test Label"
        variant={null}
      />,
    );

    expect(screen.getByText("Test Label")).toHaveAttribute("for", "");
  });
});
