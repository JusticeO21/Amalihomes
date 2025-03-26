import { Button } from "@amalihomes/ui/components/button";
import { Input } from "@amalihomes/ui/components/input";
import { Typography } from "@amalihomes/ui/components/typography";
import { getEntry } from "lib/contentful/contentful";
import { TypeFooterSkeleton } from "lib/contentful/types";
import Link from "next/link";
import { FooterLinksListing } from "./footer-links-listing";
import { FooterSocialLinks } from "./footer-social-links";
import { FooterProps } from "./footer-types";

export const Footer = async () => {
  const response = await getEntry<TypeFooterSkeleton>("footer", { include: 5 });
  const { contacts, newsLetter, aboutUs, quickLinks, legalService } = response.fields as unknown as FooterProps;

  return (
    <footer className="bg-Neutral-900 p-32 lg:p-64">
      <div className="flex flex-col gap-y-32 md:gap-y-80 ">
        <div className="flex flex-col lg:flex-row w-full justify-between gap-16">
          <section className="flex flex-col items-center justify-center md:items-start md:justify-start gap-8 max-w-[553px]">
            <p className="text-18 text-white font-semibold">{newsLetter.fields.title}</p>
            <Typography
              as="p"
              size="sm"
              className="text-white text-center md:text-left"
            >
              {newsLetter.fields.subTitle}
            </Typography>
          </section>
          <section className="mt-8 flex flex-col items-center justify-center lg:flex-row md:items-start md:justify-start gap-12 text-14">
            <div className="flex flex-col w-full gap-12 items-center justify-center  md:items-start md:justify-start  text-14">
              <Input
                type="email"
                placeholder="Enter your email"
                className="p-12 border border-white rounded-md text-body roboto placeholder:text-white text-white flex-1 w-[357px]"
              />
              <Typography
                size="xs"
                className="text-white flex gap-4"
              >
                By subscribing you agree to with our
                <Link
                  href="/privacy-policy"
                  className="underline"
                >
                  Privacy Policy
                </Link>
                .
              </Typography>
            </div>
            <Button className="bg-white hover:bg-whites py-12 px-24 w-full lg:w-min max-w-357 flex items-center justify-center">
              <Typography
                colors={"text-grey-text-strong"}
                weight="bold"
                size={"sm"}
              >
                Subscribe
              </Typography>
            </Button>
          </section>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-20">
          <div>
            <FooterLinksListing
              links={aboutUs.fields.links}
              title={aboutUs.fields.label}
            />
          </div>
          <div>
            <FooterLinksListing
              links={quickLinks.fields.links}
              title={quickLinks.fields.label}
            />
          </div>
          <div>
            <FooterLinksListing
              links={legalService.fields.links}
              title={legalService.fields.label}
            />
          </div>
          <div className="flex flex-col gap-16 items-center justify-center md:items-start md:justify-start">
            <Typography
              as="h3"
              weight={"semibold"}
              size="sm"
              className="text-white"
            >
              {contacts.fields.label}
            </Typography>
            <ul className="flex flex-col items-center justify-center md:items-start md:justify-start">
              {contacts.fields.contacts.map((contact) => (
                <li
                  key={contact}
                  className="py-8 block text-14 text-white"
                >
                  {contact}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className=" border-t border-white pt-32 mt-4 flex lg:flex-row flex-col items-center justify-center  lg:justify-between gap-y-16">
          <FooterSocialLinks />
        </div>
      </div>
    </footer>
  );
};
