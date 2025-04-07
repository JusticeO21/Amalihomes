import { Typography } from "@amalihomes/ui/components/typography";
import { isValidEmail } from "lib/utils/validate-emails/validate-email";
import { isValidUrl } from "lib/utils/validate-url/validate-url";

const renderContact = (contact: string) => {
  if (isValidEmail(contact)) {
    return <a href={`mailto:${contact}`}>{contact}</a>;
  }

  if (isValidUrl(contact)) {
    return (
      <a
        href={contact}
        target="_blank"
        rel="noopener noreferrer"
      >
        {contact}
      </a>
    );
  }

  return contact;
};

export const FooterContacts = ({ label, contacts }: { label: string; contacts: string[] }) => (
  <div className="p-0 flex flex-col gap-16 items-center justify-center md:items-start md:justify-start">
    <Typography
      as="h3"
      weight={"semibold"}
      size="sm"
      className="text-white"
    >
      {label}
    </Typography>
    <ul className="flex flex-col items-center justify-center md:items-start md:justify-start">
      {contacts.map((contact) => (
        <li
          key={contact}
          className="py-8 block text-14 text-white"
        >
          {renderContact(contact)}
        </li>
      ))}
    </ul>
  </div>
);
