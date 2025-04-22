"use client";

import Link from "next/link";
import { Button, Typography } from "../../atoms";
import { cn } from "../../../lib/utils";
import { useState } from "react";
import { IconCancel } from "../../icons";
export const FooterForm = ({
  buttonText,
  inputPlaceholder,
  privacyLink,
  description,
  className,
}: {
  buttonText: string;
  inputPlaceholder: string;
  privacyLink: { href: string; label: string };
  description: string;
  className?: string;
  }) => {
  
  const [value, setValue] = useState("")
  const [hasError, setHasError] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setValue(value);

    if (value && hasError) {
      setHasError(false)
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!value.trim()) {
      setHasError(true);
    }
  };

  const handleReset = () => {
    setHasError(false)
  }

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
          className="bg-white hover:bg-whites py-12 px-24 lg:w-118 h-48 flex items-center justify-center md:w-350 w-361 focus:bg-white hover:bg-gray-200"
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
      {hasError && <p className="text-red-300 text-xs mt-2 flex items-center justify-center gap-2 nowrap">Provide a valid email to proceed. <button onClick={handleReset} className="cursor-pointer"><IconCancel size={12}/></button></p>}
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
