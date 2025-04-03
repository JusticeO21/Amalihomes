import { renderHook, act } from "@testing-library/react";
import { useDebounce } from "./use-debounce";

jest.useFakeTimers();

describe("useDebounce", () => {
  it("should call the function after the specified delay", () => {
    const mockFn = jest.fn();
    const { result } = renderHook(() => useDebounce(mockFn, 500));

    act(() => {
      result.current("test");
    });

    jest.advanceTimersByTime(499);
    expect(mockFn).not.toHaveBeenCalled();

    jest.advanceTimersByTime(1);
    expect(mockFn).toHaveBeenCalledTimes(1);
    expect(mockFn).toHaveBeenCalledWith("test");
  });

  it("should cancel the previous call if invoked again before delay", () => {
    const mockFn = jest.fn();
    const { result } = renderHook(() => useDebounce(mockFn, 500));

    act(() => {
      result.current("first");
      jest.advanceTimersByTime(300);
      result.current("second");
    });

    jest.advanceTimersByTime(200);
    expect(mockFn).not.toHaveBeenCalled();

    jest.advanceTimersByTime(300);
    expect(mockFn).toHaveBeenCalledTimes(1);
    expect(mockFn).toHaveBeenCalledWith("second");
  });

  it("should call the function with the correct arguments", () => {
    const mockFn = jest.fn();
    const { result } = renderHook(() => useDebounce(mockFn, 300));

    act(() => {
      result.current("Hello", 42);
    });

    jest.advanceTimersByTime(300);
    expect(mockFn).toHaveBeenCalledWith("Hello", 42);
  });
});
