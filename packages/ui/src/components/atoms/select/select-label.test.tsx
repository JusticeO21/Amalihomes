import React from "react";
import { render, screen } from "@testing-library/react";
import { SelectLabel } from "./select-label";
import "@testing-library/jest-dom";

describe("SelectLabel", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders children correctly", () => {
    render(<SelectLabel>Test Label</SelectLabel>);
    expect(screen.getByText("Test Label")).toBeInTheDocument();
  });

  it("renders complex children", () => {
    render(
      <SelectLabel>
        <span>Complex</span> <strong>Label</strong>
      </SelectLabel>,
    );
    expect(screen.getByText("Complex")).toBeInTheDocument();
    expect(screen.getByText("Label")).toBeInTheDocument();
  });
});
