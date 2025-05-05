import React from "react";
import { render, screen } from "@testing-library/react";
import { CircleX } from "lucide-react";
import { InputError } from "./input-error";

jest.mock("lucide-react", () => ({
  CircleX: jest.fn(() => <svg data-testid="circle-x-icon" />),
}));

describe("InputError", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders the error message and icon", () => {
    render(
      <InputError
        name="testField"
        message="This is an error message"
      />,
    );

    expect(screen.getByText("This is an error message")).toBeInTheDocument();
    expect(screen.getByTestId("circle-x-icon")).toBeInTheDocument();
  });

  it("has the correct accessibility attributes", () => {
    render(
      <InputError
        name="testField"
        message="Error"
      />,
    );

    const errorDiv = screen.getByRole("alert");
    expect(errorDiv).toBeInTheDocument();
    expect(errorDiv).toHaveAttribute("id", "testField-error");
  });

  it("applies the correct styling classes", () => {
    render(
      <InputError
        name="testField"
        message="Error"
      />,
    );

    const errorDiv = screen.getByRole("alert");
    expect(errorDiv).toHaveClass("flex");
    expect(errorDiv).toHaveClass("items-center");
    expect(errorDiv).toHaveClass("gap-4");

    expect(screen.getByText("Error")).toHaveClass("text-body");
  });

  it("renders the CircleX icon with correct size", () => {
    render(
      <InputError
        name="testField"
        message="Error"
      />,
    );

    expect(CircleX).toHaveBeenCalled();
  });

  it("generates correct id based on name prop", () => {
    render(
      <InputError
        name="email"
        message="Invalid email"
      />,
    );

    expect(screen.getByRole("alert")).toHaveAttribute("id", "email-error");
  });

  it("handles empty message gracefully", () => {
    render(
      <InputError
        name="testField"
        message=""
      />,
    );

    const errorDiv = screen.getByRole("alert");
    expect(errorDiv).toBeInTheDocument();
  });

  it("handles special characters in name prop", () => {
    render(
      <InputError
        name="user[address]"
        message="Error"
      />,
    );

    expect(screen.getByRole("alert")).toHaveAttribute("id", "user[address]-error");
  });
});
