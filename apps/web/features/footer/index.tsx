import { Typography } from "@amalihomes/ui/components/typography";
import { getEntry } from "lib/contentful/contentful";
import { TypeFooterSkeleton } from "lib/contentful/types";
import { FooterLinksListing } from "./footer-links-listing";
import { FooterSocialLinks } from "./footer-social-links";
import { FooterProps } from "./footer-types";
import { FooterForm } from "./footer-form";
import { Container } from "@amalihomes/ui/components/container";

export const Footer = async () => {
  const response = await getEntry<TypeFooterSkeleton>("footer", { include: 5 });
  const { contacts, newsLetter, aboutUs, quickLinks, legalService } = response.fields as unknown as FooterProps;

  return (
    <footer className="bg-Neutral-900">
      <Container
        paddingY={0}
        className="flex flex-col gap-y-32 md:gap-y-80 py-24 bg-transparent"
      >
        <div className=" p-0 flex flex-col lg:flex-row w-full justify-between gap-16">
          <section className="flex flex-col items-center justify-center md:items-start md:justify-start gap-8 max-w-[553px]">
            <p className="text-18 text-white font-semibold">{newsLetter.fields.title}</p>
            <Typography
              as="p"
              size="sm"
              className="text-white text-center md:text-left p-0"
            >
              {newsLetter.fields.subTitle}
            </Typography>
          </section>
          <FooterForm />
        </div>
        <div className=" p-0 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-20">
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
          <div className=" p-0 flex flex-col gap-16 items-center justify-center md:items-start md:justify-start">
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
        <div className=" p-0  border-t border-white pt-32 mt-4 flex lg:flex-row flex-col items-center justify-center  lg:justify-between gap-y-16">
          <FooterSocialLinks />
        </div>
      </Container>
    </footer>
  );
};
