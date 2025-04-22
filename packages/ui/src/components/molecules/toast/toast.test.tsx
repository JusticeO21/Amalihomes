import { toast } from "./toast";
import { toastManager } from "./toast-manager";

jest.mock("./toast-manager", () => ({
  toastManager: {
    addToast: jest.fn(),
    dismissToast: jest.fn(),
    dismissAll: jest.fn(),
  },
}));

describe("toast utility", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should call addToast with default message and info type", () => {
    toast();
    expect(toastManager.addToast).toHaveBeenCalledWith("default", "info");
  });

  it("should call addToast with custom message and info type", () => {
    const message = "Custom message";
    toast(message);
    expect(toastManager.addToast).toHaveBeenCalledWith(message, "info");
  });

  it("should call addToast with default message and success type", () => {
    toast.success();
    expect(toastManager.addToast).toHaveBeenCalledWith("success", "success");
  });

  it("should call addToast with custom message and success type", () => {
    const message = "Operation succeeded";
    toast.success(message);
    expect(toastManager.addToast).toHaveBeenCalledWith(message, "success");
  });

  it("should call addToast with default message and error type", () => {
    toast.error();
    expect(toastManager.addToast).toHaveBeenCalledWith("error", "error");
  });

  it("should call addToast with custom message and error type", () => {
    const message = "Critical failure";
    toast.error(message);
    expect(toastManager.addToast).toHaveBeenCalledWith(message, "error");
  });

  it("should call addToast with default message and warning type", () => {
    toast.warning();
    expect(toastManager.addToast).toHaveBeenCalledWith("warning", "warning");
  });

  it("should call addToast with custom message and warning type", () => {
    const message = "Proceed with caution";
    toast.warning(message);
    expect(toastManager.addToast).toHaveBeenCalledWith(message, "warning");
  });

  it("should call addToast with default message and info type", () => {
    toast.info();
    expect(toastManager.addToast).toHaveBeenCalledWith("info", "info");
  });

  it("should call addToast with custom message and info type", () => {
    const message = "Informational notice";
    toast.info(message);
    expect(toastManager.addToast).toHaveBeenCalledWith(message, "info");
  });

  it("should call dismissAll when no id is provided", () => {
    toast.dismiss();
    expect(toastManager.dismissAll).toHaveBeenCalled();
    expect(toastManager.dismissToast).not.toHaveBeenCalled();
  });

  it("should call dismissToast with specific id when provided", () => {
    const toastId = "12345";
    toast.dismiss(toastId);
    expect(toastManager.dismissToast).toHaveBeenCalledWith(toastId);
    expect(toastManager.dismissAll).not.toHaveBeenCalled();
  });
});
