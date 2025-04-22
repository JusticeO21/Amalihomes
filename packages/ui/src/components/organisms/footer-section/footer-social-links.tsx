import Link from "next/link";
import { Image } from "../../atoms";
import { FooterSocialLinksProps } from "./footer.types";
import { cn } from "../../../lib/utils";

export const FooterSocialLinks = ({ socialLinks, copyright, legalLinks, className }: FooterSocialLinksProps) => {
  return (
    <div
      className={cn(
        "p-0 border-t border-white pt-32 mt-4 flex lg:flex-row flex-col items-center justify-center lg:justify-between gap-y-16",
        className,
      )}
    >
      <div
        className="
          flex flex-col gap-24 text-14
          md:flex-row md:items-start md:justify-start
          items-center justify-center
        "
      >
        <p className="text-white text-14">{copyright}</p>

        <nav
          className="flex gap-24 text-white sm:hidden"
          aria-label="Legal links"
        >
          {legalLinks.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className="hover:text-gray-300"
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>

      <div className="flex gap-12">
        {socialLinks.map(({ icon, href, label }, index) => (
          <a
            key={index}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
          >
            <Image
              src={icon}
              alt={label}
              width={24}
              height={24}
              className="hover:opacity-65"
            />
          </a>
        ))}
      </div>
    </div>
  );
};
