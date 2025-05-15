import React from "react";
import { IconBack } from "../../icons/icon-back";
import { IconForward } from "../../icons/icon-forward";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  className?: string;
}

const getPageNumbers = (current: number, total: number, siblingCount = 1): (number | string)[] => {
  const DOTS = "...";
  const totalNumbers = siblingCount * 2 + 5;
  if (total <= totalNumbers) {
    return Array.from({ length: total }, (_, i) => i + 1);
  }
  const left = Math.max(current - siblingCount, 2);
  const right = Math.min(current + siblingCount, total - 1);
  const pages: (number | string)[] = [1];
  if (left > 2) pages.push(DOTS);
  for (let i = left; i <= right; i++) pages.push(i);
  if (right < total - 1) pages.push(DOTS);
  pages.push(total);
  return pages;
};

export const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange, className = "" }) => {
  const pageNumbers = getPageNumbers(currentPage, totalPages);
  const isFirst = currentPage === 1;
  const isLast = currentPage === totalPages;

  return (
    <nav
      className={`flex items-center justify-center gap-2 mt-6 ${className}`}
      aria-label="Pagination"
    >
      <button
        className="w-48 sm:w-116 h-48  flex items-center justify-center gap-8 disabled:opacity-50"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={isFirst}
        aria-label="Previous Page"
      >
        <IconBack
          color={isFirst ? "#FEDDAA" : "#EA690C"}
          width={24}
          height={24}
        />
        <span className={`${isFirst ? "text-brand-200" : "text-brand-600"} text-16 font-bold hidden sm:block`}>
          Prev.
        </span>
      </button>
      {pageNumbers.map((page, idx) =>
        typeof page === "number" ? (
          <button
            key={page}
            className={`w-38 h-38 text-14 rounded font-medium transition-colors duration-150 ${
              page === currentPage ? "bg-brand-600 text-white shadow" : "bg-white text-gray-500 hover:bg-brand-200"
            }`}
            onClick={() => onPageChange(page)}
            aria-current={page === currentPage ? "page" : undefined}
            aria-label={`Page ${page}`}
          >
            {page}
          </button>
        ) : (
          <span
            key={`dots-${idx}`}
            className="px-2 text-gray-400 select-none"
            aria-hidden
          >
            ...
          </span>
        ),
      )}
      <button
        className="px-4 py-2 rounded  flex items-center justify-center gap-8 disabled:opacity-50 h-48 w-48 sm:w-116 "
        onClick={() => onPageChange(currentPage + 1)}
        disabled={isLast}
        aria-label="Next Page"
      >
        <span className={`${isLast ? "text-brand-200" : "text-brand-600"} text-16 font-bold hidden sm:block`}>
          Next
        </span>
        <IconForward
          color={isLast ? "#FEDDAA" : "#EA690C"}
          width={24}
          height={24}
        />
      </button>
    </nav>
  );
};
