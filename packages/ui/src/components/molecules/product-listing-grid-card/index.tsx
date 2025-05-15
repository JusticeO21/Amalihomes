"use client";

import { useState, useEffect } from "react";
import { Product } from "../product";
import { Pagination } from "../pagination";
import { ProductProps } from "../prodcut-listing-card";

export interface ProductGridCardProps {
  products: ProductProps[];
}

function useResponsiveProductsPerPage() {
  const [productsPerPage, setProductsPerPage] = useState(8);

  useEffect(() => {
    function updateProductsPerPage() {
      if (window.innerWidth >= 1024) {
        setProductsPerPage(12);
      } else if (window.innerWidth >= 768) {
        setProductsPerPage(9);
      } else {
        setProductsPerPage(8);
      }
    }
    updateProductsPerPage();
    window.addEventListener("resize", updateProductsPerPage);
    return () => window.removeEventListener("resize", updateProductsPerPage);
  }, []);

  return productsPerPage;
}

export const ProductGridCard = ({ products }: ProductGridCardProps) => {
  const [page, setPage] = useState(1);
  const productsPerPage = useResponsiveProductsPerPage();
  const totalPages = Math.ceil(products.length / productsPerPage);
  const startIdx = (page - 1) * productsPerPage;
  const endIdx = startIdx + productsPerPage;
  const productsToDisplay = products.slice(startIdx, endIdx);

  useEffect(() => {
    if (page > totalPages) {
      setPage(1);
    }
  }, [productsPerPage, totalPages, page]);

  return (
    <div className="flex flex-col items-center justify-center gap-16 md:gap-24 lg:gap-40 py-24 px-16 sm:py-40 sm:px-32 lg:px-0">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-24">
        {productsToDisplay.map((product) => (
          <Product
            key={product.id}
            {...product}
          />
        ))}
      </div>
      <Pagination
        currentPage={page}
        totalPages={totalPages}
        onPageChange={setPage}
      />
    </div>
  );
};
