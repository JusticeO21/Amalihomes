import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Minus, Plus } from "lucide-react";
import { useFormContext } from "react-hook-form";
import { InputNumber } from "./input-number";

jest.mock("lucide-react", () => ({
  Minus: jest.fn(() => <div data-testid="minus-icon" />),
  Plus: jest.fn(() => <div data-testid="plus-icon" />),
}));

jest.mock("react-hook-form", () => ({
  useFormContext: jest.fn(),
}));

describe("InputNumber", () => {
  const mockSetValue = jest.fn();
  const mockWatch = jest.fn();

  beforeEach(() => {
    (useFormContext as jest.Mock).mockReturnValue({
      setValue: mockSetValue,
      watch: mockWatch,
    });
    mockSetValue.mockClear();
    mockWatch.mockClear();
  });

  it("renders the component with initial value", () => {
    mockWatch.mockImplementation((name) => (name === "testField" ? "5" : undefined));

    render(<InputNumber name="testField" />);

    expect(screen.getByText("5")).toBeInTheDocument();
    expect(screen.getByTitle("Decrement")).toBeInTheDocument();
    expect(screen.getByTitle("Increment")).toBeInTheDocument();
    expect(Minus).toHaveBeenCalled();
    expect(Plus).toHaveBeenCalled();
  });

  it("calls setValue with incremented value when plus button is clicked", () => {
    mockWatch.mockImplementation((name) => (name === "testField" ? "5" : undefined));

    render(<InputNumber name="testField" />);

    const incrementButton = screen.getByTitle("Increment");
    fireEvent.click(incrementButton);

    expect(mockSetValue).toHaveBeenCalledWith("testField", 6);
  });

  it("calls setValue with decremented value when minus button is clicked", () => {
    mockWatch.mockImplementation((name) => (name === "testField" ? "5" : undefined));

    render(<InputNumber name="testField" />);

    const decrementButton = screen.getByTitle("Decrement");
    fireEvent.click(decrementButton);

    expect(mockSetValue).toHaveBeenCalledWith("testField", 4);
  });

  it("does not decrement when value is 0", () => {
    mockWatch.mockImplementation((name) => (name === "testField" ? "0" : undefined));

    render(<InputNumber name="testField" />);

    const decrementButton = screen.getByTitle("Decrement");
    fireEvent.click(decrementButton);

    expect(mockSetValue).not.toHaveBeenCalled();
  });

  it("handles undefined form context gracefully", () => {
    (useFormContext as jest.Mock).mockReturnValue(undefined);

    render(<InputNumber name="testField" />);

    const incrementButton = screen.getByTitle("Increment");
    fireEvent.click(incrementButton);

    const decrementButton = screen.getByTitle("Decrement");
    fireEvent.click(decrementButton);
  });

  it("displays the correct value from watch", () => {
    mockWatch.mockImplementation((name) => (name === "testField" ? "42" : undefined));

    render(<InputNumber name="testField" />);

    expect(screen.getByText("42")).toBeInTheDocument();
  });

  it("handles non-numeric values gracefully", () => {
    mockWatch.mockImplementation((name) => (name === "testField" ? "abc" : undefined));

    render(<InputNumber name="testField" />);

    const incrementButton = screen.getByTitle("Increment");
    fireEvent.click(incrementButton);
    expect(mockSetValue).toHaveBeenCalledWith("testField", NaN);

    const decrementButton = screen.getByTitle("Decrement");
    fireEvent.click(decrementButton);
    expect(mockSetValue).toHaveBeenCalledWith("testField", NaN);
  });
});
