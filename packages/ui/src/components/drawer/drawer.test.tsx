import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { Drawer } from ".";

describe("Drawer Component", () => {
  const onCloseMock = jest.fn();

  beforeEach(() => {
    onCloseMock.mockClear();
  });

  it("should not render when isOpen is false", () => {
    render(
      <Drawer
        isOpen={false}
        onClose={onCloseMock}
      >
        <div>Drawer Content</div>
      </Drawer>,
    );

    expect(screen.queryByText("Drawer Content")).not.toBeInTheDocument();
  });

  it("should render when isOpen is true", () => {
    render(
      <Drawer
        isOpen={true}
        onClose={onCloseMock}
      >
        <div>Drawer Content</div>
      </Drawer>,
    );

    expect(screen.getByText("Drawer Content")).toBeInTheDocument();
  });

  it("should call onClose when backdrop is clicked", () => {
    render(
      <Drawer
        isOpen={true}
        onClose={onCloseMock}
      >
        <div>Drawer Content</div>
      </Drawer>,
    );

    fireEvent.click(screen.getByTestId("drawer-backdrop"));
    expect(onCloseMock).toHaveBeenCalledTimes(1);
  });
});
