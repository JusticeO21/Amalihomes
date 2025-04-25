import { render, screen, fireEvent } from "@testing-library/react";
import { GdprBanner } from "./gdpr-banner";

describe("GdprBanner", () => {
  const getBannerMock = jest.fn();

  beforeEach(() => {
    getBannerMock.mockClear();
  });

  it("renders banner with title and description", () => {
    render(<GdprBanner getBanner={getBannerMock} />);
    expect(screen.getByText("We value your privacy")).toBeInTheDocument();
    expect(screen.getByText(/This website uses cookies/i)).toBeInTheDocument();
  });

  it("rejects all settings when 'Reject All' is clicked", () => {
    render(<GdprBanner getBanner={getBannerMock} />);
    fireEvent.click(screen.getByText("Reject All"));

    expect(getBannerMock).toHaveBeenCalledWith({
      testStrict: false,
      performance: false,
      targeting: false,
      functionality: false,
      unclassified: false,
    });

    expect(screen.queryByText("We value your privacy")).not.toBeInTheDocument();
  });

  it("opens customization section when 'Customise Settings' is clicked", () => {
    render(<GdprBanner getBanner={getBannerMock} />);
    fireEvent.click(screen.getByText("Customise Settings"));

    checkboxOptions.forEach(({ label }) => {
      expect(screen.getByText(label)).toBeInTheDocument();
    });
  });

  it("saves current settings when 'Save and Close' is clicked", () => {
    render(<GdprBanner getBanner={getBannerMock} />);
    fireEvent.click(screen.getByText("Customise Settings"));

    fireEvent.click(screen.getByText("Save and Close"));

    expect(getBannerMock).toHaveBeenCalledWith({
      testStrict: true,
      performance: true,
      targeting: true,
      functionality: true,
      unclassified: true,
    });
  });

  it("allows toggling checkboxes", () => {
    render(<GdprBanner getBanner={getBannerMock} />);
    fireEvent.click(screen.getByText("Customise Settings"));

    const performanceCheckbox = screen.getByLabelText("Performance");
    fireEvent.click(performanceCheckbox);

    fireEvent.click(screen.getByText("Save and Close"));

    expect(getBannerMock).toHaveBeenCalledWith(expect.objectContaining({ performance: false }));
  });

  it("closes banner when close icon is clicked", () => {
    render(<GdprBanner getBanner={getBannerMock} />);
    const closeBtn = screen.getByRole("button", { name: "" });
    fireEvent.click(closeBtn);
    expect(screen.queryByText("We value your privacy")).not.toBeInTheDocument();
  });
});

const checkboxOptions = [
  { id: "testStrict", label: "Test Strict" },
  { id: "performance", label: "Performance" },
  { id: "targeting", label: "Targeting" },
  { id: "functionality", label: "Functionality" },
  { id: "unclassified", label: "Unclassified" },
];
