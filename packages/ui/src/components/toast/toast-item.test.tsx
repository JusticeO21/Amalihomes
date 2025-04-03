import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { ToastItem } from "./toast-item";
import { toastManager } from "./toast-manager";
import { Toast } from "./types";

jest.mock("./toast-manager", () => ({
  toastManager: {
    dismissToast: jest.fn(),
  },
}));

jest.mock("lucide-react", () => ({
  Check: jest.fn(() => <div data-testid="check-icon" />),
  Info: jest.fn(() => <div data-testid="info-icon" />),
  TriangleAlert: jest.fn(() => <div data-testid="triangle-alert-icon" />),
  X: jest.fn(() => <div data-testid="x-icon" />),
}));

describe("ToastItem", () => {
  const mockToast: Toast = {
    id: "1",
    message: "Test message",
    type: "info",
  };

  beforeEach(() => {
    jest.useFakeTimers();
    jest.clearAllMocks();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it("renders correctly with info type", () => {
    render(
      <ToastItem
        toast={mockToast}
        duration={3000}
      />,
    );

    expect(screen.getByText("info Message")).toBeInTheDocument();
    expect(screen.getByText("Test message")).toBeInTheDocument();
    expect(screen.getByTestId("info-icon")).toBeInTheDocument();
    expect(screen.getByTestId("x-icon")).toBeInTheDocument();
  });

  it("applies correct styling based on toast type", () => {
    const { container } = render(
      <ToastItem
        toast={mockToast}
        duration={3000}
      />,
    );
    expect(container.firstChild).toHaveClass("bg-info-fill", "text-info-text");
  });

  it("calls dismissToast when close button is clicked", async () => {
    render(
      <ToastItem
        toast={mockToast}
        duration={3000}
      />,
    );

    fireEvent.click(screen.getByRole("button", { name: "Dismiss toast" }));

    await waitFor(() => {
      expect(toastManager.dismissToast).toHaveBeenCalled();
    });
  });

  it("triggers dismiss after duration", async () => {
    const duration = 3000;
    render(
      <ToastItem
        toast={mockToast}
        duration={duration}
      />,
    );

    jest.advanceTimersByTime(duration);

    await waitFor(() => {
      expect(toastManager.dismissToast).toHaveBeenCalled();
    });
  });

  it("does not auto-dismiss when duration is 0", () => {
    render(
      <ToastItem
        toast={mockToast}
        duration={0}
      />,
    );

    jest.advanceTimersByTime(5000);

    expect(toastManager.dismissToast).not.toHaveBeenCalled();
  });

  it("applies exit animation when dismissing", () => {
    const { container } = render(
      <ToastItem
        toast={mockToast}
        duration={3000}
      />,
    );

    expect(container.firstChild).toHaveClass("opacity-100", "translate-y-0");
    expect(container.firstChild).not.toHaveClass("opacity-0", "translate-y-2");

    fireEvent.click(screen.getByRole("button", { name: "Dismiss toast" }));

    expect(container.firstChild).toHaveClass("opacity-0", "translate-y-2");
  });

  it("cleans up timer on unmount", () => {
    const clearTimeoutSpy = jest.spyOn(window, "clearTimeout");
    const { unmount } = render(
      <ToastItem
        toast={mockToast}
        duration={3000}
      />,
    );

    unmount();
    expect(clearTimeoutSpy).toHaveBeenCalled();
  });
});
