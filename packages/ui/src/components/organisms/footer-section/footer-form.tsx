"use client";

import Link from "next/link";
import { Button, Typography } from "../../atoms";
import { cn } from "../../../lib/utils";
export const FooterForm = ({
  buttonText,
  inputPlaceholder,
  privacyLink,
  description,
  value,
  onChange,
  onSubmit,
  error,
  className,
}: {
  buttonText: string;
  inputPlaceholder: string;
  privacyLink: { href: string; label: string };
  description: string;
  value?: string;
  onChange?: (value: string) => void;
  onSubmit?: () => void;
  error?: string;
  className?: string;
}) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit?.();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={cn(
        "mt-8 flex flex-col items-center justify-center md:items-start md:justify-start gap-12 text-14",
        className,
      )}
    >
      <div className="flex flex-col lg:flex-row w-full gap-12 items-center justify-center md:items-start md:justify-start text-14">
        <input
          type="email"
          value={value}
          onChange={handleInputChange}
          placeholder={inputPlaceholder}
          className="p-12 border-[1.5px] !text-16 border-white rounded-md text-body roboto flex-1 w-361 md:w-350 lg:w-357 h-48 placeholder:text-white text-white"
        />
        <Button
          type="submit"
          className="bg-white hover:bg-whites py-12 px-24 lg:w-118 h-48 flex items-center justify-center md:w-350 w-361"
        >
          <Typography
            weight="bold"
            size={"sm"}
            className="text-Neutral-700"
          >
            {buttonText}
          </Typography>
        </Button>
      </div>
      {error && <p className="text-red-500 text-xs mt-2">{error}</p>}
      <Typography
        size="xs"
        className="text-white flex gap-4 mt-2"
      >
        {description}
        <Link
          href={privacyLink.href}
          className="underline text-12 hover:text-gray-300 hover:no-underline"
        >
          {privacyLink.label}
        </Link>
      </Typography>
    </form>
  );
};
