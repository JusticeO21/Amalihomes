import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Eye, EyeOff } from "lucide-react";
import { PasswordToggleButton } from "./password-toggle-button";

jest.mock("lucide-react", () => ({
  Eye: jest.fn(() => <div data-testid="eye-icon" />),
  EyeOff: jest.fn(() => <div data-testid="eye-off-icon" />),
}));

describe("PasswordToggleButton", () => {
  const mockHandleToggle = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders the Eye icon when showPassword is false", () => {
    render(
      <PasswordToggleButton
        showPassword={false}
        handleTogglePassword={mockHandleToggle}
      />,
    );

    expect(screen.getByTestId("eye-icon")).toBeInTheDocument();
    expect(screen.queryByTestId("eye-off-icon")).not.toBeInTheDocument();
    expect(Eye).toHaveBeenCalled();
  });

  it("renders the EyeOff icon when showPassword is true", () => {
    render(
      <PasswordToggleButton
        showPassword={true}
        handleTogglePassword={mockHandleToggle}
      />,
    );

    expect(screen.getByTestId("eye-off-icon")).toBeInTheDocument();
    expect(screen.queryByTestId("eye-icon")).not.toBeInTheDocument();
    expect(EyeOff).toHaveBeenCalled();
  });

  it("calls handleTogglePassword when clicked", () => {
    render(
      <PasswordToggleButton
        showPassword={false}
        handleTogglePassword={mockHandleToggle}
      />,
    );

    const button = screen.getByRole("button", { name: /button to toggle password visibility/i });
    fireEvent.click(button);

    expect(mockHandleToggle).toHaveBeenCalledTimes(1);
  });

  it("has the correct title attribute based on showPassword", () => {
    const { rerender } = render(
      <PasswordToggleButton
        showPassword={false}
        handleTogglePassword={mockHandleToggle}
      />,
    );

    expect(screen.getByTitle("Show password")).toBeInTheDocument();

    rerender(
      <PasswordToggleButton
        showPassword={true}
        handleTogglePassword={mockHandleToggle}
      />,
    );

    expect(screen.getByTitle("Hide password")).toBeInTheDocument();
  });

  it("has the correct aria-label", () => {
    render(
      <PasswordToggleButton
        showPassword={false}
        handleTogglePassword={mockHandleToggle}
      />,
    );

    expect(screen.getByRole("button", { name: /button to toggle password visibility/i })).toBeInTheDocument();
  });

  it("has the expected className", () => {
    render(
      <PasswordToggleButton
        showPassword={false}
        handleTogglePassword={mockHandleToggle}
      />,
    );

    const button = screen.getByRole("button");
    expect(button).toHaveClass("cursor-pointer");
    expect(button).toHaveClass("text-Grey-stroke-weaker");
  });
});
