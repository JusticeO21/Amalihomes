"use client";
import React from "react";
import { Button } from "@amalihomes/ui/components/button";
import { useRouter } from "next/navigation";

interface CtaProps {
  ctaText: string;
  ctaLink: string;
}
export const Cta = ({ ctaText, ctaLink }: CtaProps) => {
  const router = useRouter();
  const handleButtonClick = (link: string) => {
    router.push(link);
  };

  return (
    <Button
      className="w-[130px] text-center cursor-pointer"
      onClick={() => handleButtonClick(ctaLink)}
    >
      {ctaText}
    </Button>
  );
};
