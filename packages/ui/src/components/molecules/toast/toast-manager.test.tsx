import { toastManager } from "./toast-manager";
describe("toastManager", () => {
  beforeEach(() => {
    toastManager.dismissAll();
    toastManager.setContainerMounted(false);
    jest.clearAllMocks();
  });

  it("should not add toast when container is not mounted", () => {
    const consoleWarnSpy = jest.spyOn(console, "warn").mockImplementation();
    toastManager.addToast("Test message", "error");

    expect(toastManager.getToasts()).toEqual([]);
    expect(consoleWarnSpy).toHaveBeenCalledWith("ToastContainer not mounted. Toasts will not be displayed.");
  });

  it("should add toast when container is mounted", () => {
    toastManager.setContainerMounted(true);
    toastManager.addToast("Test message", "error");

    const toasts = toastManager.getToasts();
    expect(toasts).toHaveLength(1);
    expect(toasts[0]?.message).toBe("Test message");
    expect(toasts[0]?.type).toBe("error");
    expect(toasts[0]?.id).toBeDefined();
  });

  it("should generate unique ids for each toast", () => {
    toastManager.setContainerMounted(true);
    toastManager.addToast("Toast 1", "info");
    toastManager.addToast("Toast 2", "success");

    const toasts = toastManager.getToasts();
    expect(toasts[0]?.id).not.toBe(toasts[1]?.id);
  });

  it("should remove the toast with the given id", () => {
    toastManager.setContainerMounted(true);
    toastManager.addToast("Toast 1", "info");
    toastManager.addToast("Toast 2", "warning");
    const toastsBefore = toastManager.getToasts();
    const idToRemove = toastsBefore[0]?.id;

    toastManager.dismissToast(idToRemove ?? "");

    const toastsAfter = toastManager.getToasts();
    expect(toastsAfter).toHaveLength(1);
    expect(toastsAfter[0]?.id).not.toBe(idToRemove);
  });

  it("should do nothing if toast with id does not exist", () => {
    toastManager.setContainerMounted(true);
    toastManager.addToast("Toast 1", "info");
    const initialToasts = toastManager.getToasts();

    toastManager.dismissToast("non-existent-id");

    expect(toastManager.getToasts()).toEqual(initialToasts);
  });

  it("should remove all toasts", () => {
    toastManager.setContainerMounted(true);
    toastManager.addToast("Toast 1", "info");
    toastManager.addToast("Toast 2", "success");
    expect(toastManager.getToasts()).toHaveLength(2);

    toastManager.dismissAll();

    expect(toastManager.getToasts()).toEqual([]);
  });

  it("should notify listeners when toasts change", () => {
    toastManager.setContainerMounted(true);
    const listener = jest.fn();
    const unsubscribe = toastManager.subscribe(listener);

    toastManager.addToast("Test message", "info");
    expect(listener).toHaveBeenCalledTimes(1);
    expect(listener.mock.calls[0][0]).toHaveLength(1);

    const addedToast = listener.mock.calls[0][0][0];
    toastManager.dismissToast(addedToast.id);
    expect(listener).toHaveBeenCalledTimes(2);
    expect(listener.mock.calls[1][0]).toHaveLength(0);

    unsubscribe();
    toastManager.addToast("Another message", "error");
    expect(listener).toHaveBeenCalledTimes(2);
  });

  it("should return a function that unsubscribes the listener", () => {
    const listener = jest.fn();
    const unsubscribe = toastManager.subscribe(listener);

    toastManager.setContainerMounted(true);
    toastManager.addToast("Test message", "info");
    expect(listener).toHaveBeenCalledTimes(1);

    unsubscribe();
    toastManager.addToast("Another message", "error");
    expect(listener).toHaveBeenCalledTimes(1);
  });

  it("should return a copy of the toasts array", () => {
    toastManager.setContainerMounted(true);
    toastManager.addToast("Test message", "info");

    const toasts1 = toastManager.getToasts();
    const toasts2 = toastManager.getToasts();

    expect(toasts1).toEqual(toasts2);
    expect(toasts1).not.toBe(toasts2);
  });
});
