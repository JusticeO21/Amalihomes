"use client"
import React, { useRef } from "react";
import { Filter, Button } from "@amalihomes/ui";

const filterSections = [
  {
    id: "categories",
    title: "Categories",
    options: [
      { id: "office", label: "Office furniture" },
      { id: "dining", label: "Dining" },
      { id: "Living-room", label: "Living room" },
      { id: "bedroom", label: "Bedroom" },
      { id: "Outdoor", label: "Outdoor" },
    ],
  },
  {
    id: "Size-&-dimensions",
    title: "Size & dimensions",
    options: [
      { id: "small", label: "Small" },
      { id: "medium", label: "Medium" },
      { id: "large", label: "Large" },
    ],
  },
  {
    id: "availability",
    title: "Availability",
    options: [
      { id: "in-stock", label: "In stock" },
      { id: "pre-order", label: "Pre-order" },
    ],
  },
  {
    id: "price",
    title: "Price Range",
    isSlider: true,
    sliderConfig: {
      min: 0,
      max: 3000,
      initialMin: 1000,
      initialMax: 3000,
    },
  },
];

const sortingOptions = {
  id: "sorting",
  title: "Sort By",
  isRadio: true,
  options: [
    { id: "newest", label: "Newest Arrivals" },
    { id: "price-low", label: "Price: Low to High" },
    { id: "price-high", label: "Price: High to Low" },
    { id: "name-a-z", label: "Name: A to Z" },
  ],
};

export const FilterSection = () => {
  const resetFiltersRef = useRef<() => void>(null);

  const handleResetFilters = () => {
    if (resetFiltersRef.current) {
      resetFiltersRef.current();
    }
  };

  return (
    <div className="py-24">
      <Filter
        filterSections={filterSections}
        sortingOptions={sortingOptions}
        onResetFilters={(resetFn) => (resetFiltersRef.current = resetFn)}
      />

      <Button className="w-full mb-[16px] justify-center">Apply Filters</Button>
      <Button onClick={handleResetFilters} variant="secondary" className="w-full justify-center">Clear Filters</Button>
    </div>
  );
};

