import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import ProductCard from "./product-card";
describe("product card component", () => {
  const defaultProps = {
    imageAlt: "an image",
    imageUrl: "/imageUrl.png",
    caption: "this is a product category",
  };
  it("should render card component correcly", () => {
    render(<ProductCard {...defaultProps} />);

    expect(screen.getByAltText(/an image/i)).toBeInTheDocument();
    expect(screen.getByText(/this is a product category/i)).toBeInTheDocument();
  });

  it("should render caption when provided", () => {
    render(<ProductCard {...defaultProps} />);
    expect(screen.getByText(/this is a product category/i)).toBeInTheDocument();
  });

  it("should not render a caption if not provided", () => {
    render(
      <ProductCard
        imageUrl="/imageUrl.png"
        imageAlt="an image"
      />,
    );
    expect(screen.queryByText(/this is a product category/i)).not.toBeInTheDocument();
  });

  it("should apply correct variants", () => {
    render(
      <ProductCard
        {...defaultProps}
        borderRadius={"lg"}
      />,
    );
    expect(screen.getByAltText(/an image/i)).toHaveClass(/rounded-xl/i);
  });

  it("should render card with custom classNames", () => {
    render(
      <ProductCard
        {...defaultProps}
        imageClassName="w-[900px]"
      />,
    );

    expect(screen.getByAltText(/an image/i)).toHaveClass("w-[900px]");
  });
});
