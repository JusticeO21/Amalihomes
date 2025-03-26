import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Input } from ".";

describe("Input Component", () => {
  it("renders input element correctly", () => {
    render(<Input placeholder="Enter text" />);
    const inputElement = screen.getByPlaceholderText("Enter text");
    expect(inputElement).toBeInTheDocument();
  });

  it("applies custom className correctly", () => {
    render(<Input className="custom-class" />);
    const inputElement = screen.getByRole("textbox");
    expect(inputElement).toHaveClass("custom-class");
  });

  it("handles user input correctly", async () => {
    render(<Input />);
    const inputElement = screen.getByRole("textbox");
    await userEvent.type(inputElement, "test input");
    expect(inputElement).toHaveValue("test input");
  });

  it("handles different input types correctly", () => {
    render(<Input type="password" />);
    const inputElement = screen.getByRole("textbox");
    expect(inputElement).toHaveAttribute("type", "password");
  });

  it("applies disabled state correctly", () => {
    render(<Input disabled />);
    const inputElement = screen.getByRole("textbox");
    expect(inputElement).toBeDisabled();
  });
});
