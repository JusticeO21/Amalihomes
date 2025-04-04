import { Typography } from "@amalihomes/ui/components/typography";
import { NavLinkProps } from "features/header/nav-links-listing";
import { resolveLink } from "lib/utils/resolve-link";
import Link from "next/link";

export const FooterLinksListing = ({ links, title }: { links: NavLinkProps[]; title: string }) => {
  return (
    <div className="flex flex-col gap-16 w-full items-center justify-center md:items-start md:justify-start">
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
            <li key={link.sys.id}>
              <Link
                href={resolveLink(link.fields.href)}
                className="py-8 block text-white text-14"
              >
                {link.fields.label}
              </Link>
            </li>
          );
        })}
        <li>
          <Link
            href={"/ftgyuikl"}
            className="py-8 block text-white text-14"
          >
           goods page
          </Link>
        </li>
      </ul>
    </div>
  );
};
