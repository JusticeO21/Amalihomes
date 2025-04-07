import { getEntry } from "lib/contentful/contentful";
import { TypeFooterSkeleton } from "lib/contentful/types";
import { FooterContacts } from "./footer-contacts";
import { FooterForm } from "./footer-form";
import { FooterLinksListing } from "./footer-links-listing";
import { FooterNewsletter } from "./footer-newsletter";
import { FooterSocialLinks } from "./footer-social-links";
import { FooterProps } from "./footer-types";
import { Container } from "@amalihomes/ui/components/container";

export const Footer = async () => {
  const response = await getEntry<TypeFooterSkeleton>("footer", { include: 5 });
  const { contacts, newsLetter, aboutUs, quickLinks, legalService, socialLinks } =
    response.fields as unknown as FooterProps;

  return (
    <footer className="bg-Neutral-900">
      <Container
        paddingX={0}
        paddingY={0}
        className="flex flex-col gap-y-32 md:gap-y-80 px-16 py-24 md:p-32 lg:p-64 bg-transparent my-0"
      >
        <div className="p-0 flex flex-col lg:flex-row w-full justify-between gap-16">
          <FooterNewsletter
            title={newsLetter.fields.title}
            subTitle={newsLetter.fields.subTitle}
          />
          <FooterForm />
        </div>
        <div className="p-0 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-20">
          {[aboutUs, quickLinks, legalService].map((section) => (
            <div key={section.fields.label}>
              <FooterLinksListing
                links={section.fields.links}
                title={section.fields.label}
              />
            </div>
          ))}
          <FooterContacts
            label={contacts.fields.label}
            contacts={contacts.fields.contacts}
          />
        </div>
        <div className="p-0 border-t border-white pt-32 mt-4 flex lg:flex-row flex-col items-center justify-center lg:justify-between gap-y-16">
          <FooterSocialLinks socialLinks={socialLinks.fields.links} />
        </div>
      </Container>
    </footer>
  );
};
