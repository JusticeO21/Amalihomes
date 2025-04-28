import { ProductCard } from "@amalihomes/ui";
import { ProductCarousel } from "../../molecules";
import Link from "next/link";

// Define our own interface for category data, independent of Contentful
export interface Category {
  id: string;
  title: string;
  imageUrl: string;
  imageAlt: string;
}

interface CategorySectionProps {
  heading: string;
  categories: Category[];
  className?: string;
}

export const CategorySection = ({ heading, categories, className = "mb-4" }: CategorySectionProps) => {
  if (!heading || !categories?.length) {
    return null;
  }

  return (
    <ProductCarousel
      heading={heading}
      className={className}
    >
      {categories.map((category) => (
        <Link
          href={`/category/${category.title}`}
          key={category.id}
        >
          <ProductCard
            imageUrl={category.imageUrl}
            imageAlt={category.imageAlt}
            caption={category.title}
          />
        </Link>
      ))}
    </ProductCarousel>
  );
};

export default CategorySection;
