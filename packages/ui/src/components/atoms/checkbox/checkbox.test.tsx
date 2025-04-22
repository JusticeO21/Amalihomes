import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";
import { Checkbox } from ".";

jest.mock("../../icons", () => ({
  IconChecked: ({ width, height, color }: { width: number; height: number; color: string }) => (
    <svg
      data-testid="checked-icon"
      data-width={width}
      data-height={height}
      data-color={color}
    />
  ),
}));

describe("Checkbox Component", () => {
  test("renders checkbox with default unchecked state (uncontrolled)", () => {
    render(<Checkbox ariaLabel="test-checkbox" />);
    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).toHaveAttribute("aria-checked", "false");
  });

  test("renders with checked state (controlled)", () => {
    render(
      <Checkbox
        isChecked={true}
        ariaLabel="test-checkbox"
      />,
    );
    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).toHaveAttribute("aria-checked", "true");
  });

  test("uncontrolled checkbox toggles state and calls onChange", () => {
    const onChange = jest.fn();
    render(
      <Checkbox
        onChange={onChange}
        ariaLabel="uncontrolled-checkbox"
      />,
    );
    const checkbox = screen.getByRole("checkbox");

    fireEvent.click(checkbox);
    expect(onChange).toHaveBeenCalledWith(true);
    expect(checkbox).toHaveAttribute("aria-checked", "true");

    fireEvent.click(checkbox);
    expect(onChange).toHaveBeenCalledWith(false);
    expect(checkbox).toHaveAttribute("aria-checked", "false");
  });

  test("controlled checkbox does not toggle unless parent updates it", () => {
    const onChange = jest.fn();
    const { rerender } = render(
      <Checkbox
        isChecked={false}
        onChange={onChange}
        ariaLabel="controlled-checkbox"
      />,
    );
    const checkbox = screen.getByRole("checkbox");

    fireEvent.click(checkbox);
    expect(onChange).toHaveBeenCalledWith(true);
    expect(checkbox).toHaveAttribute("aria-checked", "false");

    rerender(
      <Checkbox
        isChecked={true}
        onChange={onChange}
        ariaLabel="controlled-checkbox"
      />,
    );
    expect(checkbox).toHaveAttribute("aria-checked", "true");
  });

  test("can be toggled with keyboard when not disabled", () => {
    const onChange = jest.fn();
    render(
      <Checkbox
        onChange={onChange}
        ariaLabel="keyboard-checkbox"
      />,
    );
    const checkbox = screen.getByRole("checkbox");

    fireEvent.keyDown(checkbox, { key: " " });
    expect(onChange).toHaveBeenCalledWith(true);

    fireEvent.keyDown(checkbox, { key: "Enter" });
    expect(onChange).toHaveBeenCalledWith(false);
  });

  test("does not respond to click or key events when disabled", () => {
    const onChange = jest.fn();
    render(
      <Checkbox
        disabled
        onChange={onChange}
        ariaLabel="disabled-checkbox"
      />,
    );
    const checkbox = screen.getByRole("checkbox");

    fireEvent.click(checkbox);
    fireEvent.keyDown(checkbox, { key: "Enter" });

    expect(onChange).not.toHaveBeenCalled();
    expect(checkbox).toHaveAttribute("aria-disabled", "true");
  });

  test("renders custom check icon size and color when checked", () => {
    render(
      <Checkbox
        isChecked={true}
        ariaLabel="icon-checkbox"
        checkIconColor="#ff0000"
        checkIconSize={24}
      />,
    );

    const icon = screen.getByTestId("checked-icon");
    expect(icon).toHaveAttribute("data-width", "24");
    expect(icon).toHaveAttribute("data-height", "24");
    expect(icon).toHaveAttribute("data-color", "#ff0000");
  });
});
