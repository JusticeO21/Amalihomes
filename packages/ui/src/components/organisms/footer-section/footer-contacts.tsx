"use client";
import { formatPhoneNumber } from "../../../lib/format-tel-number/format-tel-number";
import { cn } from "../../../lib/utils";
import { isValidTelNumber } from "../../../lib/valdate-tel-number.ts/is-valid-tel-number";
import { isValidEmail } from "../../../lib/validate-emails/validate-email";
import { isValidUrl } from "../../../lib/validate-url/validate-url";
import { Typography } from "../../atoms";
import { FooterContactsProps } from "./footer.types";

export const RenderContact = ({ contact }: { contact: string }) => {
  if (isValidEmail(contact)) {
    return (
      <a
        href={`mailto:${contact}`}
        className="hover:text-gray-300 text-white"
      >
        {contact}
      </a>
    );
  }

  if (isValidUrl(contact)) {
    return (
      <a
        href={contact}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-gray-300 text-white"
      >
        {contact}
      </a>
    );
  }

  if (isValidTelNumber(contact)) {
    return (
      <a
        href={`tel:${contact}`}
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-gray-300 text-white"
      >
        {formatPhoneNumber(contact)}
      </a>
    );
  }

  return <Typography className="text-white">{contact}</Typography>;
};

export const FooterContacts = ({ label, contacts, className }: FooterContactsProps) => (
  <div
    className={cn("p-0 flex flex-col gap-16 items-center justify-center md:items-start md:justify-start", className)}
  >
    <Typography
      as="h3"
      weight="semibold"
      size="sm"
      className="text-white"
    >
      {label}
    </Typography>
    <ul className="flex flex-col items-center justify-center md:items-start md:justify-start">
      {contacts.map((contact, index) => (
        <li
          key={index}
          className="py-8 block text-14"
        >
          <RenderContact contact={contact} />
        </li>
      ))}
    </ul>
  </div>
);
