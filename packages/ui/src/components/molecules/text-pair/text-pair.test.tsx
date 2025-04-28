import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { TextPair } from ".";

describe("TextPair Component", () => {
  const mockRandom = jest.spyOn(Math, "random").mockReturnValue(0.123456789);
  const generatedId = `text-pair-${(0.123456789).toString(36).slice(2)}`; // Consistent ID

  afterEach(() => {
    jest.clearAllMocks();
  });

  afterAll(() => {
    mockRandom.mockRestore();
  });

  const defaultProps = {
    header: "Test Header",
    description: "Test Description",
  };

  test("renders header and description correctly", () => {
    render(<TextPair {...defaultProps} />);
    expect(screen.getByText("Test Header")).toBeInTheDocument();
    expect(screen.getByText("Test Description")).toBeInTheDocument();
  });

  test("renders only header when description is omitted", () => {
    render(<TextPair header="Test Header" />);
    expect(screen.getByText("Test Header")).toBeInTheDocument();
    expect(screen.queryByText("Test Description")).not.toBeInTheDocument();
  });

  test("applies default headerAs (h2) and descriptionAs (p)", () => {
    render(<TextPair {...defaultProps} />);
    const header = screen.getByText("Test Header");
    const description = screen.getByText("Test Description");
    expect(header.tagName).toBe("H2");
    expect(description.tagName).toBe("P");
  });

  test("respects custom headerAs and descriptionAs", () => {
    render(
      <TextPair
        {...defaultProps}
        headerAs="h3"
        descriptionAs="div"
      />,
    );
    const header = screen.getByText("Test Header");
    const description = screen.getByText("Test Description");
    expect(header.tagName).toBe("H3");
    expect(description.tagName).toBe("DIV");
  });

  test("applies default spacing (md) and align (center)", () => {
    render(<TextPair {...defaultProps} />);
    const wrapper = screen.getByText("Test Header").parentElement;
    expect(wrapper).toHaveClass("gap-24", "text-center");
  });

  test("applies custom spacing and align", () => {
    render(
      <TextPair
        {...defaultProps}
        spacing="lg"
        align="left"
      />,
    );
    const wrapper = screen.getByText("Test Header").parentElement;
    expect(wrapper).toHaveClass("gap-26", "text-left");
  });

  test("applies custom className, headerClass, and descriptionClass", () => {
    render(
      <TextPair
        {...defaultProps}
        className="custom-wrapper"
        headerClass="custom-header"
        descriptionClass="custom-description"
      />,
    );
    const wrapper = screen.getByText("Test Header").parentElement;
    const header = screen.getByText("Test Header");
    const description = screen.getByText("Test Description");
    expect(wrapper).toHaveClass("custom-wrapper");
    expect(header).toHaveClass("custom-header");
    expect(description).toHaveClass("custom-description");
  });

  test("sets accessibility attributes correctly", () => {
    render(
      <TextPair
        {...defaultProps}
        ariaLabel="Test section"
        id="test-id"
        role="region"
      />,
    );
    const wrapper = screen.getByText("Test Header").parentElement;
    const header = screen.getByText("Test Header");
    expect(wrapper).toHaveAttribute("role", "region");
    expect(wrapper).toHaveAttribute("aria-label", "Test section");
    expect(wrapper).toHaveAttribute("aria-labelledby", "test-id");
    expect(header).toHaveAttribute("id", "test-id");
  });

  test("uses auto-generated id when id is not provided", () => {
    render(<TextPair {...defaultProps} />);
    const wrapper = screen.getByText("Test Header").parentElement;
    const header = screen.getByText("Test Header");
    expect(wrapper).toHaveAttribute("aria-labelledby", generatedId);
    expect(header).toHaveAttribute("id", generatedId);
  });

  test("forwards ref to wrapper div", () => {
    const ref = { current: null };
    render(
      <TextPair
        {...defaultProps}
        ref={ref}
      />,
    );
    const wrapper = screen.getByText("Test Header").parentElement;
    expect(ref.current).toBe(wrapper);
  });

  test("applies default Tailwind classes", () => {
    render(<TextPair {...defaultProps} />);
    const wrapper = screen.getByText("Test Header").parentElement;
    const header = screen.getByText("Test Header");
    const description = screen.getByText("Test Description");
    expect(wrapper).toHaveClass("flex", "flex-col", "font-lato");
    expect(header).toHaveClass("font-semibold", "text-gray-800");
    expect(description).toHaveClass("font-body", "text-gray-700");
  });

  test("renders correctly with JSX header and description", () => {
    render(
      <TextPair
        header={<span data-testid="header">JSX Header</span>}
        description={<span data-testid="desc">JSX Description</span>}
      />,
    );
    expect(screen.getByTestId("header")).toHaveTextContent("JSX Header");
    expect(screen.getByTestId("desc")).toHaveTextContent("JSX Description");
  });

  test("handles hero section use case", () => {
    render(
      <TextPair
        header="AmaliHomes"
        headerAs="h2"
        headerClass="text-56"
        description="Discover a wide range of high-quality furniture."
        ariaLabel="About page introduction"
        id="about-hero"
        role="region"
        spacing="lg"
        align="center"
      />,
    );
    const wrapper = screen.getByText("AmaliHomes").parentElement;
    const header = screen.getByText("AmaliHomes");
    const description = screen.getByText("Discover a wide range of high-quality furniture.");
    expect(wrapper).toHaveClass("gap-26", "text-center");
    expect(wrapper).toHaveAttribute("role", "region");
    expect(wrapper).toHaveAttribute("aria-label", "About page introduction");
    expect(wrapper).toHaveAttribute("aria-labelledby", "about-hero");
    expect(header).toHaveAttribute("id", "about-hero");
    expect(header).toHaveClass("text-56");
    expect(description).toHaveClass("text-gray-700");
  });

  test("handles blog post preview use case", () => {
    render(
      <TextPair
        header="Furniture Trends 2025"
        headerAs="h3"
        headerClass="text-24"
        description="Explore the latest in cozy minimalism."
        id="article-1"
        role="article"
        spacing="md"
        align="left"
      />,
    );
    const wrapper = screen.getByText("Furniture Trends 2025").parentElement;
    expect(wrapper).toHaveClass("gap-24", "text-left");
    expect(wrapper).toHaveAttribute("role", "article");
    expect(wrapper).toHaveAttribute("aria-labelledby", "article-1");
  });

  test("handles footer contact info use case", () => {
    render(
      <TextPair
        header="Contact Us"
        headerAs="h3"
        headerClass="text-18"
        description="Email: support@amalihomes.com"
        id="contact-info"
        spacing="sm"
        align="left"
      />,
    );
    const wrapper = screen.getByText("Contact Us").parentElement;
    expect(wrapper).toHaveClass("gap-20", "text-left");
    expect(wrapper).not.toHaveAttribute("role");
    expect(wrapper).toHaveAttribute("aria-labelledby", "contact-info");
  });

  test("does not render description when falsy", () => {
    render(
      <TextPair
        header="Test Header"
        description={null}
      />,
    );
    expect(screen.queryByText("Test Description")).not.toBeInTheDocument();
  });
});
