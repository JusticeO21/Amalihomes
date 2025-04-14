import { render, screen } from "@testing-library/react";
import { FlashSaleCardProps } from "./types";
import FlashSaleCard from "./flash-sale-card";

describe("FlashSaleCard", () => {
  const defaultProps: FlashSaleCardProps = {
    imageAlt: "Test Product",
    imageUrl: "test-image.jpg",
    ctaLabel: "Shop Now",
    ctaUrl: "https://example.com/shop",
    promoCode: "DISCOUNT20",
    title: "Flash Sale Item",
    description: "Limited time offer on this amazing product",
  };

  it("renders correctly with all props", () => {
    render(<FlashSaleCard {...defaultProps} />);

    const image = screen.getByAltText(defaultProps.imageAlt);
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", defaultProps.imageUrl);

    expect(screen.getByText(defaultProps.title)).toBeInTheDocument();
    expect(screen.getByText(defaultProps.description)).toBeInTheDocument();
    expect(screen.getByText(defaultProps.ctaLabel)).toBeInTheDocument();

    const ctaLink = screen.getByRole("link", { name: defaultProps.ctaLabel });
    expect(ctaLink).toHaveAttribute("href", `${defaultProps.ctaUrl}?code=${defaultProps.promoCode}`);
  });

  it("renders correctly without promo code", () => {
    const propsWithoutPromo = { ...defaultProps, promoCode: undefined };
    render(<FlashSaleCard {...propsWithoutPromo} />);

    const ctaLink = screen.getByRole("link", { name: defaultProps.ctaLabel });
    expect(ctaLink).toHaveAttribute("href", defaultProps.ctaUrl);
  });
});
