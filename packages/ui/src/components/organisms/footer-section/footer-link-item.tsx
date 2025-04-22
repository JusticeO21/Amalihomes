import Link from "next/link";
import { Typography } from "../../atoms";
import { resolveLink } from "../../../lib/resolve-link/resolve-link";
import { FooterLinksListingProps } from "./footer.types";
import { cn } from "../../../lib/utils";

export const FooterLinkItem = ({ links, title, className }: FooterLinksListingProps) => {
  return (
    <div
      className={cn(
        "flex flex-col gap-16 w-full items-center justify-center md:items-start md:justify-start",
        className,
      )}
    >
      <Typography
        as="h3"
        weight={"semibold"}
        size="sm"
        className="text-white"
      >
        {title}
      </Typography>
      <ul className="flex flex-col items-center justify-center md:items-start md:justify-start">
        {links.map((link) => {
          return (
            <li key={link.id}>
              <Link
                href={resolveLink(link.href)}
                className="py-8 block text-white text-14 hover:text-gray-300"
              >
                {link.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
