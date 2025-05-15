// Example mock products data
export const MOCK_PRODUCTS = Array.from({ length: 100 }, (_, i) => ({
  id: `prod-${i + 1}`,
  name: `Product ${i + 1}`,
  price: 55 + (i % 5) * 5,
  imageUrl: "https://i.postimg.cc/t4fdMHhj/Category-card-image-1.png",
  imageAlt: `Product ${i + 1}`,
  discount: i % 3 === 0 ? 20 : undefined,
  rating: { rating: 4 + (i % 2) * 0.5, reviewCount: 120 },
  cardType: "default" as const,
}));
