import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { GdprBanner } from "./gdpr-banner";

const mockGetBanner = jest.fn();

const defaultProps = {
  getBanner: mockGetBanner,
  title: "We use cookies",
  description: "This website uses cookies to ensure you get the best experience.",
  customizeButtonText: "Customize",
  saveButtonText: "Save preferences",
  rejectButtonText: "Reject all",
  consentOptions: [
    { id: "performance", label: "Performance" },
    { id: "targeting", label: "Targeting" },
  ],
  icon: {
    url: "/icon.svg",
    alt: "Cookie icon",
  },
};

const setupBanner = () => {
  return render(<GdprBanner {...defaultProps} />);
};

describe("GdprBanner", () => {
  beforeEach(() => {
    setupBanner();
    mockGetBanner.mockClear();
  });

  it("renders with default props", () => {
    expect(screen.getByText("We use cookies")).toBeInTheDocument();
    expect(screen.getByText("This website uses cookies to ensure you get the best experience.")).toBeInTheDocument();
    expect(screen.getByText("Customize")).toBeInTheDocument();
    expect(screen.getByText("Reject all")).toBeInTheDocument();
  });

  it("calls getBanner with all false values on reject", () => {
    fireEvent.click(screen.getByText("Reject all"));

    expect(mockGetBanner).toHaveBeenCalledWith({
      testStrict: false,
      performance: false,
      targeting: false,
      functionality: false,
      unclassified: false,
    });
  });

  it("expands to show checkboxes on customize click", () => {
    fireEvent.click(screen.getByText("Customize"));
    expect(screen.getByLabelText("Performance")).toBeInTheDocument();
    expect(screen.getByLabelText("Targeting")).toBeInTheDocument();
  });

  it("toggles checkbox and calls getBanner with updated state on save", () => {
    fireEvent.click(screen.getByText("Customize"));

    const performanceCheckbox = screen.getByLabelText("Performance") as HTMLInputElement;
    expect(performanceCheckbox.checked).toBe(true);

    fireEvent.click(performanceCheckbox);
    expect(performanceCheckbox.checked).toBe(false);

    fireEvent.click(screen.getByText("Save preferences"));

    expect(mockGetBanner).toHaveBeenCalledWith(
      expect.objectContaining({
        performance: false,
        targeting: true,
      }),
    );
  });

  it("hides the banner when close button is clicked", () => {
    const closeButton = screen.getByTestId("close-button");
    fireEvent.click(closeButton);
    expect(screen.queryByText("We use cookies")).not.toBeInTheDocument();
  });
});
