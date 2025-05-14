import { render, screen } from "@testing-library/react";
import { Product } from ".";

jest.mock(
  "next/link",
  () =>
    ({ children }: { children: React.ReactNode }) =>
      children,
);

jest.mock("../../atoms", () => ({
  Image: ({ src, alt }: { src: string; alt: string }) => (
    <img
      src={src}
      alt={alt}
    />
  ),
  Rating: ({ rating }: { rating: { rating: number; reviewCount: number } }) => (
    <div>
      Rating: {rating.rating} ({rating.reviewCount} Reviews)
    </div>
  ),
}));

jest.mock("../../icons", () => ({
  IconCart: () => <svg data-testid="icon-cart" />,
}));

jest.mock("./product-discount", () => ({
  Discount: ({ price, discount }: { price: number; discount?: number }) => {
    const finalPrice = discount ? `$${(price - (discount / 100) * price).toFixed(2)}` : `$${price.toFixed(2)}`;
    return <p>{finalPrice}</p>;
  },
}));

describe("Product component", () => {
  const baseProps = {
    id: "prod-123",
    name: "Test Product",
    price: 100,
    imageUrl: "/test.jpg",
    imageAlt: "Test Image",
    discount: 20,
    rating: { rating: 4, reviewCount: 120 },
  };

  it("renders basic product info", () => {
    render(
      <Product
        {...baseProps}
        cardType="default"
      />,
    );

    expect(screen.getByAltText("Test Image")).toBeInTheDocument();
    expect(screen.getByText("Test Product")).toBeInTheDocument();
    expect(screen.getByText("$80.00")).toBeInTheDocument();
    expect(screen.getByText("Rating: 4 (120 Reviews)")).toBeInTheDocument();
    expect(screen.getByTestId("icon-cart")).toBeInTheDocument();
  });

  it("shows flash-sale badge with discount", () => {
    render(
      <Product
        {...baseProps}
        cardType="flash-sale"
      />,
    );

    expect(screen.getByText("-20%")).toBeInTheDocument();
    expect(screen.queryByTestId("icon-cart")).not.toBeInTheDocument();
  });

  it("shows only price when no discount", () => {
    render(
      <Product
        {...baseProps}
        discount={undefined}
        cardType="default"
      />,
    );

    expect(screen.getByText("$100.00")).toBeInTheDocument();
    expect(screen.queryByText("-20%")).not.toBeInTheDocument();
  });
});
