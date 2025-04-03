import "@testing-library/jest-dom";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from ".";

jest.useFakeTimers();

describe("Select component", () => {
  test("renders Select component correctly", () => {
    render(
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Select a fruit" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Fruits</SelectLabel>
            <SelectItem value="apple">Apple</SelectItem>
            <SelectItem value="banana">Banana</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>,
    );

    expect(screen.getByRole("button")).toBeInTheDocument();
    expect(screen.getByText("Select a fruit")).toBeInTheDocument();
    expect(screen.queryByText("Fruits")).not.toBeInTheDocument();
    expect(screen.queryByText("apple")).not.toBeInTheDocument();
    expect(screen.queryByText("banana")).not.toBeInTheDocument();
    expect(screen.queryByRole("textbox")).not.toBeInTheDocument();
  });

  test("opens dropdown when trigger is clicked", () => {
    render(
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Select a fruit" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Fruits</SelectLabel>
            <SelectItem value="apple">Apple</SelectItem>
            <SelectItem value="banana">Banana</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>,
    );

    fireEvent.click(screen.getByRole("button"));

    expect(screen.getByText("Fruits")).toBeInTheDocument();
    expect(screen.getByText("Apple")).toBeInTheDocument();
    expect(screen.getByText("Banana")).toBeInTheDocument();
    expect(screen.queryByRole("textbox")).not.toBeInTheDocument();
  });

  test("should render search input when dropdown is opened", () => {
    render(
      <Select hasSearch>
        <SelectTrigger>
          <SelectValue placeholder="Select a fruit" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Fruits</SelectLabel>
            <SelectItem value="apple">Apple</SelectItem>
            <SelectItem value="banana">Banana</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>,
    );

    fireEvent.click(screen.getByRole("button"));

    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });

  test("selects an item and closes dropdown", () => {
    render(
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Select a fruit" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
        </SelectContent>
      </Select>,
    );

    fireEvent.click(screen.getByRole("button"));

    fireEvent.click(screen.getByRole("button", { name: "Apple" }));

    expect(screen.getByText("apple")).toBeInTheDocument();
    expect(screen.queryByText("banana")).not.toBeInTheDocument();
  });

  test("closes dropdown when mouse event is triggered outside of dropdown", () => {
    render(
      <div aria-label="container">
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Select a fruit" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="apple">Apple</SelectItem>
            <SelectItem value="banana">Banana</SelectItem>
          </SelectContent>
        </Select>
      </div>,
    );

    fireEvent.click(screen.getByRole("button"));
    expect(screen.getByRole("button", { name: /Apple/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Banana/i })).toBeInTheDocument();

    fireEvent.click(screen.getByLabelText("container"));
    expect(screen.queryByRole("button", { name: /Apple/i })).toBeInTheDocument();
    expect(screen.queryByRole("button", { name: /Banana/i })).toBeInTheDocument();
  });

  test("calls onChange when an item is selected", () => {
    const handleChange = jest.fn();

    render(
      <Select onChange={handleChange}>
        <SelectTrigger>
          <SelectValue placeholder="Select a fruit" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
        </SelectContent>
      </Select>,
    );

    fireEvent.click(screen.getByRole("button"));

    fireEvent.click(screen.getByRole("button", { name: "Apple" }));
    expect(handleChange).toHaveBeenCalledWith("apple");
  });

  test("should filter items based on search query immediately if delay is not set", async () => {
    render(
      <Select hasSearch>
        <SelectTrigger>
          <SelectValue placeholder="Select a fruit" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
        </SelectContent>
      </Select>,
    );

    fireEvent.click(screen.getByRole("button"));

    fireEvent.change(screen.getByRole("textbox"), { target: { value: "apple" } });

    await waitFor(() => {
      expect(screen.getByRole("button", { name: "Apple" })).toBeInTheDocument();
      expect(screen.queryByRole("button", { name: "Banana" })).not.toBeInTheDocument();
    });
  });

  test("should filter items based on search query after debounce delay", async () => {
    render(
      <Select
        hasSearch
        delay={2000}
      >
        <SelectTrigger>
          <SelectValue placeholder="Select a fruit" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
        </SelectContent>
      </Select>,
    );

    fireEvent.click(screen.getByRole("button"));

    fireEvent.change(screen.getByRole("textbox"), { target: { value: "apple" } });

    jest.advanceTimersByTime(1000);

    //* after 1sec debounce delay apple should be visible
    expect(screen.getByText("Apple")).toBeInTheDocument();
    expect(screen.getByText("Banana")).toBeInTheDocument();

    jest.advanceTimersByTime(1000);

    //* after 2sec debounce delay banana should not be visible
    await waitFor(() => {
      expect(screen.getByRole("button", { name: "Apple" })).toBeInTheDocument();
      expect(screen.queryByRole("button", { name: "Banana" })).not.toBeInTheDocument();
    });
  });
});
