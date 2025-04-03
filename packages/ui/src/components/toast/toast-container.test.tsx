import { act, render, screen } from "@testing-library/react";
import ToastContainer from "./toast-container";
import { ToastItem } from "./toast-item";
import { toastManager } from "./toast-manager";
import { Toast } from "./types";

jest.mock("./toast-item", () => ({
  ToastItem: jest.fn(() => <div data-testid="toast-item" />),
}));

jest.mock("./toast-manager", () => ({
  toastManager: {
    getToasts: jest.fn(),
    setContainerMounted: jest.fn(),
    subscribe: jest.fn(),
    dismissAll: jest.fn(),
  },
}));

describe("ToastContainer", () => {
  const mockToasts: Toast[] = [
    { id: "1", message: "Test 1", type: "info" as const },
    { id: "2", message: "Test 2", type: "success" as const },
  ];

  beforeEach(() => {
    (toastManager.getToasts as jest.Mock).mockReturnValue([]);
    (toastManager.subscribe as jest.Mock).mockImplementation((callback) => {
      callback(mockToasts);
      return jest.fn();
    });
    jest.clearAllMocks();
  });

  it("sets container mounted on mount and unmounted on unmount", () => {
    const { unmount } = render(<ToastContainer />);

    expect(toastManager.setContainerMounted).toHaveBeenCalledWith(true);

    unmount();
    expect(toastManager.setContainerMounted).toHaveBeenCalledWith(false);
    expect(toastManager.dismissAll).toHaveBeenCalled();
  });

  it("subscribes to toast updates and unsubscribes on unmount", () => {
    const unsubscribeMock = jest.fn();
    (toastManager.subscribe as jest.Mock).mockReturnValue(unsubscribeMock);

    const { unmount } = render(<ToastContainer />);

    expect(toastManager.subscribe).toHaveBeenCalled();
    expect(unsubscribeMock).not.toHaveBeenCalled();

    unmount();
    expect(unsubscribeMock).toHaveBeenCalled();
  });

  it("passes duration prop to ToastItem", () => {
    (toastManager.getToasts as jest.Mock).mockReturnValue(mockToasts);
    const testDuration = 5000;
    render(<ToastContainer duration={testDuration} />);

    expect(ToastItem).toHaveBeenCalled();
  });

  it("updates toasts when subscription callback is called", () => {
    let subscriptionCallback: (toasts: Toast[]) => void = () => {};
    (toastManager.subscribe as jest.Mock).mockImplementation((cb) => {
      subscriptionCallback = cb;
      return jest.fn();
    });

    render(<ToastContainer />);

    expect(screen.queryAllByTestId("toast-item")).toHaveLength(0);

    act(() => {
      subscriptionCallback(mockToasts);
    });

    expect(screen.getAllByTestId("toast-item")).toHaveLength(mockToasts.length);
  });
});
