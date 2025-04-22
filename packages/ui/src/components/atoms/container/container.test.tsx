import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { Container } from ".";

describe("Container Component", () => {
  it("renders children correctly", () => {
    const { getByText } = render(
      <Container>
        <p>CONTAINER</p>
      </Container>,
    );
    expect(getByText("CONTAINER")).toBeInTheDocument();
  });

  it("applies maxWidth variant", () => {
    const { container } = render(<Container maxWidth="lg">Content</Container>);
    expect(container.firstChild).toHaveClass("max-w-lg");
  });

  it("applies paddingX and paddingY variants", () => {
    const { container } = render(
      <Container
        paddingX={4}
        paddingY={6}
      >
        Content
      </Container>,
    );
    expect(container.firstChild).toHaveClass("px-4");
    expect(container.firstChild).toHaveClass("py-6");
  });

  it("applies marginY variant", () => {
    const { container } = render(<Container marginY={3}>Content</Container>);
    expect(container.firstChild).toHaveClass("my-3");
  });

  it("applies rounded variant", () => {
    const { container } = render(<Container rounded="xl">Content</Container>);
    expect(container.firstChild).toHaveClass("rounded-xl");
  });

  it("applies border variant", () => {
    const { container } = render(<Container border="thick">Content</Container>);
    expect(container.firstChild).toHaveClass("border-4");
  });

  it("applies shadow variant", () => {
    const { container } = render(<Container shadow="lg">Content</Container>);
    expect(container.firstChild).toHaveClass("shadow-lg");
  });

  it("applies background color", () => {
    const { container } = render(<Container bgColor="brand">Content</Container>);
    expect(container.firstChild).toHaveClass("bg-brand-fill");
  });

  it("applies border color", () => {
    const { container } = render(<Container borderColor="red">Content</Container>);
    expect(container.firstChild).toHaveClass("border-Red-stroke-weak");
  });

  it("composes custom className with variants", () => {
    const { container } = render(
      <Container
        className="custom-class"
        paddingX={2}
        paddingY={2}
      >
        Content
      </Container>,
    );
    expect(container.firstChild).toHaveClass("px-2", "py-2", "custom-class");
  });

  it("renders without any props", () => {
    const { container } = render(<Container>Fallback</Container>);
    expect(container.firstChild).toBeInTheDocument();
  });

  it("applies custom className on top of variants", () => {
    const { container } = render(<Container className="bg-red-500 text-white">Custom Class</Container>);
    expect(container.firstChild).toHaveClass("bg-red-500");
    expect(container.firstChild).toHaveClass("text-white");
  });

  it("handles responsive maxWidth utility classes", () => {
    const { container } = render(<Container className="max-w-sm sm:max-w-md md:max-w-lg">Responsive</Container>);

    expect(container.firstChild).toHaveClass("max-w-sm");
    expect(container.firstChild).toHaveClass("sm:max-w-md");
    expect(container.firstChild).toHaveClass("md:max-w-lg");
  });

  it("allows overriding padding classes", () => {
    const { container } = render(
      <Container
        paddingX={6}
        className="px-10"
      >
        Override Padding
      </Container>,
    );
    // px-10 should override the default px-6 from variant
    expect(container.firstChild).toHaveClass("px-10");
    expect(container.firstChild).not.toHaveClass("px-6");
  });

  it("supports arbitrary Tailwind utilities via className", () => {
    const { container } = render(
      <Container className="shadow-2xl border-2 border-dashed border-blue-300">Tailwind Overrides</Container>,
    );
    expect(container.firstChild).toHaveClass("shadow-2xl");
    expect(container.firstChild).toHaveClass("border-2");
    expect(container.firstChild).toHaveClass("border-dashed");
    expect(container.firstChild).toHaveClass("border-blue-300");
  });

  it("renders correctly with all variant props combined", () => {
    const { container } = render(
      <Container
        maxWidth="xl"
        paddingX={4}
        paddingY={5}
        marginY={8}
        rounded="2xl"
        border="thin"
        shadow="md"
        className="bg-gray-50"
      >
        Full Combo
      </Container>,
    );
    expect(container.firstChild).toHaveClass("max-w-xl");
    expect(container.firstChild).toHaveClass("px-4");
    expect(container.firstChild).toHaveClass("py-5");
    expect(container.firstChild).toHaveClass("my-8");
    expect(container.firstChild).toHaveClass("rounded-2xl");
    expect(container.firstChild).toHaveClass("border");
    expect(container.firstChild).toHaveClass("shadow-md");
    expect(container.firstChild).toHaveClass("bg-gray-50");
  });
});
