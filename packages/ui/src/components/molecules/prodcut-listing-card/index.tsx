"use client";

import Link from "next/link";
import { Container } from "../../atoms";
import { ProductCarousel } from "../carousel";
import { Product } from "../product";

export interface ProductProps {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  imageAlt: string;
  discount?: number;
  rating: {
    rating: number;
    reviewCount: number;
  };
}

export interface ProductListingCardProps {
  title: string;
  description?: string;
  viewAllLink?: string;
  products: ProductProps[];
  productCardType?: "default" | "flash-sale" | "recommended";
  className?: string;
}

export const ProductListingCard = ({
  title,
  description,
  viewAllLink,
  products,
  productCardType = "default",
  className,
}: ProductListingCardProps) => {
  return (
    <div className={`flex flex-col ${className}`}>
      <Container
        paddingY={0}
        marginY={0}
        className="mt-0 pb-0 mb-0"
      >
        <div className="flex flex-col gap-8">
          <div className="flex items-center justify-between">
            <h2 className={` font-bold text-gray-950 ${productCardType === "recommended" ? "text-24" : "text-32"}`}>
              {title}
            </h2>
            {viewAllLink && (
              <Link
                href={viewAllLink}
                className="text-brand-500"
              >
                <span>view all</span>
              </Link>
            )}
          </div>
          {description && <p className="text-16 text-gray-600">{description}</p>}
        </div>
      </Container>
      <ProductCarousel
        showControls={true}
        className="relative mt-0 pt-0"
        nextButtonClassName="absolute top-1/2 right-16 md:right-32 lg:right-64 z-10"
        previousButtonClassName="absolute top-1/2 left-16 md:left-32 lg:left-64 z-10"
      >
        {products.map((product, i) => (
          <Product
            key={`${product.id}-${i}`}
            {...product}
            cardType={productCardType}
          />
        ))}
      </ProductCarousel>
    </div>
  );
};
