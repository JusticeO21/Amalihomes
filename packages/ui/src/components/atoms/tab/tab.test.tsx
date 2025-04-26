import { render, screen } from "@testing-library/react";
import { IconCart } from "../../icons";
import Tab from "./tab";

describe("Tab Component", () => {
  const defaultProps = {
    href: "/example",
    label: "Example Tab",
  };

  it("renders correctly with default props", () => {
    render(<Tab {...defaultProps} />);

    const linkElement = screen.getByRole("link", { name: "Example Tab" });

    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute("href", "/example");
    expect(linkElement).toHaveClass("flex-row");
  });

  it("renders icon when provided", () => {
    const testId = "tab-icon";
    render(
      <Tab
        {...defaultProps}
        icon={<IconCart data-testid={testId} />}
      />,
    );

    const iconElement = screen.getByTestId(testId);
    expect(iconElement).toBeInTheDocument();
  });

  describe("iconPosition variants", () => {
    it("applies right icon position by default", () => {
      render(
        <Tab
          {...defaultProps}
          icon={<IconCart />}
        />,
      );
      const linkElement = screen.getByRole("link");
      expect(linkElement).toHaveClass("flex-row");
    });

    it("applies left icon position when specified", () => {
      render(
        <Tab
          {...defaultProps}
          icon={<IconCart />}
          iconPosition="left"
        />,
      );
      const linkElement = screen.getByRole("link");
      expect(linkElement).toHaveClass("flex-row-reverse");
    });

    it("applies bottom icon position when specified", () => {
      render(
        <Tab
          {...defaultProps}
          icon={<IconCart />}
          iconPosition="bottom"
        />,
      );
      const linkElement = screen.getByRole("link");
      expect(linkElement).toHaveClass("flex-col");
    });

    it("applies top icon position when specified", () => {
      render(
        <Tab
          {...defaultProps}
          icon={<IconCart />}
          iconPosition="top"
        />,
      );
      const linkElement = screen.getByRole("link");
      expect(linkElement).toHaveClass("flex-col-reverse");
    });
  });

  it("sets the id attribute to the label value", () => {
    render(<Tab {...defaultProps} />);

    const linkElement = screen.getByRole("link", { name: "Example Tab" });
    expect(linkElement).toHaveAttribute("id", "Example Tab");
  });
});
