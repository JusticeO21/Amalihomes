import { renderHook, act } from "@testing-library/react";
import { useLocalStorageStore } from "./use-local-storage-store";

describe("useLocalStorageStore", () => {
  const key = "test-key";

  beforeEach(() => {
    localStorage.clear();
  });

  it("should return the initial value when no localStorage value exists", () => {
    const { result } = renderHook(() => useLocalStorageStore(key, "initial"));

    const [storedValue] = result.current;
    expect(storedValue).toBe("initial");
  });

  it("should return the stored value from localStorage if it exists", () => {
    localStorage.setItem(key, JSON.stringify("stored"));
    const { result } = renderHook(() => useLocalStorageStore(key, "initial"));

    const [storedValue] = result.current;
    expect(storedValue).toBe("stored");
  });

  it("should update localStorage when setValue is called", () => {
    const { result } = renderHook(() => useLocalStorageStore(key, "initial"));

    act(() => {
      result.current[1]("newValue");
    });

    expect(localStorage.getItem(key)).toBe(JSON.stringify("newValue"));
  });
});
