import { renderHook } from "@testing-library/react";
import { usePreventBodyScroll } from "./use-prevent-scroll";

describe("usePreventBodyScroll", () => {
  const originalOverflow = window.getComputedStyle(document.body).overflow;

  afterEach(() => {
    document.body.style.overflow = originalOverflow;
  });

  it("should set body overflow to hidden when isOpen is true", () => {
    renderHook(() => usePreventBodyScroll(true));
    expect(document.body.style.overflow).toBe("hidden");
  });

  it("should reset body overflow to original value when unmounted", () => {
    const { unmount } = renderHook(() => usePreventBodyScroll(true));
    unmount();
    expect(document.body.style.overflow).toBe(originalOverflow);
  });

  it("should not change body overflow when isOpen is false", () => {
    renderHook(() => usePreventBodyScroll(false));
    expect(document.body.style.overflow).toBe(originalOverflow);
  });

  it("should not reset overflow if multiple hooks are mounted and only one is unmounted", () => {
    const hook1 = renderHook(() => usePreventBodyScroll(true));
    const hook2 = renderHook(() => usePreventBodyScroll(true));

    expect(document.body.style.overflow).toBe("hidden");

    hook1.unmount();

    expect(document.body.style.overflow).toBe("hidden");

    hook2.unmount();

    expect(document.body.style.overflow).toBe(originalOverflow);
  });
});
