import { render, screen } from "@testing-library/react";
import { SelectGroup } from "./select-group";
import "@testing-library/jest-dom";

describe("SelectGroup", () => {
  it("renders children correctly", () => {
    render(
      <SelectGroup>
        <div>Child 1</div>
        <div>Child 2</div>
      </SelectGroup>,
    );

    expect(screen.getByText("Child 1")).toBeInTheDocument();
    expect(screen.getByText("Child 2")).toBeInTheDocument();
  });

  it("renders with complex children structure", () => {
    render(
      <SelectGroup>
        <div>Header</div>
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
        </ul>
      </SelectGroup>,
    );

    expect(screen.getByText("Header")).toBeInTheDocument();
    expect(screen.getByText("Item 1")).toBeInTheDocument();
    expect(screen.getByText("Item 2")).toBeInTheDocument();
  });
});
