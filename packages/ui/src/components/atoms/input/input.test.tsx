import { render, screen, fireEvent } from "@testing-library/react";
import { useFormContext } from "react-hook-form";
import { PasswordToggleButton } from "./password-toggle-button";
import Input from "./input";

jest.mock("react-hook-form", () => ({
  useFormContext: jest.fn(),
}));

jest.mock("lucide-react", () => ({
  Search: jest.fn(() => <svg data-testid="search-icon" />),
}));

jest.mock("./input-error", () => ({
  InputError: jest.fn(() => <div data-testid="input-error" />),
}));

jest.mock("./input-label", () => ({
  InputLabel: jest.fn(() => <div data-testid="input-label" />),
}));

jest.mock("./input-number", () => ({
  InputNumber: jest.fn(() => <div data-testid="input-number" />),
}));

jest.mock("./password-toggle-button", () => ({
  PasswordToggleButton: jest.fn(() => (
    <button
      data-testid="password-toggle"
      title="Toggle Password Visibility"
    />
  )),
}));

describe("Input Component", () => {
  const mockRegister = jest.fn();
  const mockErrors = {};

  beforeEach(() => {
    (useFormContext as jest.Mock).mockReturnValue({
      register: mockRegister,
      formState: { errors: mockErrors },
    });
    mockRegister.mockClear();
  });

  it("renders default text input", () => {
    render(<Input name="test" />);

    expect(screen.getByRole("textbox")).toBeInTheDocument();
    expect(screen.queryByTestId("input-label")).not.toBeInTheDocument();
  });

  it("renders with label when provided", () => {
    render(
      <Input
        name="test"
        label="Test Label"
      />,
    );

    expect(screen.getByTestId("input-label")).toBeInTheDocument();
  });

  it("renders textarea when type is textarea", () => {
    render(
      <Input
        name="test"
        type="textarea"
      />,
    );

    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });

  it("renders number input when type is number", () => {
    render(
      <Input
        name="test"
        type="number"
      />,
    );

    expect(screen.getByTestId("input-number")).toBeInTheDocument();
  });

  it("renders password toggle when type is password", () => {
    render(
      <Input
        name="test"
        type="password"
      />,
    );

    expect(screen.getByTestId("password-toggle")).toBeInTheDocument();
  });

  it("shows error message when there are errors", () => {
    (useFormContext as jest.Mock).mockReturnValue({
      register: mockRegister,
      formState: { errors: { test: { message: "Error message" } } },
    });

    render(<Input name="test" />);

    expect(screen.getByTestId("input-error")).toBeInTheDocument();
  });

  it("applies disabled styles when variant is disabled", () => {
    render(
      <Input
        name="test"
        variant="disabled"
      />,
    );

    expect(screen.getByRole("textbox")).toBeDisabled();
  });

  it("registers field with react-hook-form", () => {
    const validationRules = { required: true };
    render(
      <Input
        name="test"
        validationRules={validationRules}
      />,
    );

    expect(mockRegister).toHaveBeenCalledWith("test", validationRules);
  });

  it("handles password visibility toggle", () => {
    render(
      <Input
        name="test"
        type="password"
      />,
    );

    const toggleButton = screen.getByTestId("password-toggle");
    fireEvent.click(toggleButton);

    expect(PasswordToggleButton).toHaveBeenCalled();
  });

  it("renders with custom class names", () => {
    render(
      <Input
        name="test"
        className="custom-class"
        inputClassName="input-custom"
      />,
    );

    expect(screen.getByRole("textbox")).toHaveClass("input-custom");
  });

  it("converts name to lowercase with hyphens for id", () => {
    render(<Input name="Test Input" />);

    expect(screen.getByRole("textbox")).toHaveAttribute("id", "test-input");
  });
});
