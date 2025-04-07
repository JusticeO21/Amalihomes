import Image from "next/image";
import Link from "next/link";
import { SocialLinkItem } from "./footer-types";

type LegalLink = {
  text: string;
  url: string;
};

type FooterSocialLinksProps = {
  socialLinks: SocialLinkItem[];
};

const legalLinks: LegalLink[] = [
  { text: "Privacy Policy", url: "/privacy-policy" },
  { text: "Terms of Service", url: "/terms-of-service" },
  { text: "Cookie Settings", url: "/cookie-settings" },
];

export const FooterSocialLinks = ({ socialLinks }: FooterSocialLinksProps) => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <div
        className="
          flex flex-col gap-24 text-14
          md:flex-row md:items-start md:justify-start
          items-center justify-center
        "
      >
        <p className="text-white text-14">© {currentYear} AmaliHomes. All rights reserved.</p>

        <nav
          className="flex gap-24 text-white"
          aria-label="Legal links"
        >
          {legalLinks.map(({ text, url }) => (
            <Link
              key={url}
              href={url}
            >
              {text}
            </Link>
          ))}
        </nav>
      </div>

      <div className="flex gap-12">
        {socialLinks.map(({ fields }) => (
          <a
            key={fields.label}
            href={fields.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={fields.label}
          >
            <Image
              src={fields.icon.fields.file.url}
              alt={fields.label}
              width={24}
              height={24}
            />
          </a>
        ))}
      </div>
    </>
  );
};
