// import { RecommendedProducts } from "@/features/products-listing/recommended-products";
import { FilterSection } from "./filter-section";
import { Container } from "@amalihomes/ui";
import { ShopecategoriesContent } from "./shop-conetent";
const ShopLayout = async ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {


    return (
        <>
        <ShopecategoriesContent/> 
        <Container className="flex gap-[24px]">
            <FilterSection/>
          <main className="flex justify-center items-center text-center mx-auto ">{children}</main>
        </Container>
        {/* <RecommendedProducts /> */}
      </>
    );
};

export default ShopLayout;
