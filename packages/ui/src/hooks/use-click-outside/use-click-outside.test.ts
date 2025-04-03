import { renderHook } from "@testing-library/react";
import { useClickOutside } from "./use-click-outside";

describe("useClickOutside", () => {
  it("should call the callback when clicking outside the referenced element", () => {
    const callback = jest.fn();
    const ref = { current: document.createElement("div") };

    document.body.appendChild(ref.current);
    renderHook(() => useClickOutside(ref, callback));

    const event = new MouseEvent("mousedown", { bubbles: true });
    document.dispatchEvent(event);

    expect(callback).toHaveBeenCalledTimes(1);
  });

  it("should not call the callback when clicking inside the referenced element", () => {
    const callback = jest.fn();
    const ref = { current: document.createElement("div") };

    document.body.appendChild(ref.current);
    renderHook(() => useClickOutside(ref, callback));

    const event = new MouseEvent("mousedown", { bubbles: true });
    ref.current.dispatchEvent(event);

    expect(callback).not.toHaveBeenCalled();
  });

  it("should remove event listener on unmount", () => {
    const callback = jest.fn();
    const ref = { current: document.createElement("div") };

    const { unmount } = renderHook(() => useClickOutside(ref, callback));

    const removeEventListenerSpy = jest.spyOn(document, "removeEventListener");

    unmount();

    expect(removeEventListenerSpy).toHaveBeenCalledWith("mousedown", expect.any(Function));

    removeEventListenerSpy.mockRestore();
  });
});
