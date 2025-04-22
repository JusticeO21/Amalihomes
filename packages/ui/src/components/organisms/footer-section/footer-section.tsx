import { FooterContacts } from "./footer-contacts";
import { FooterForm } from "./footer-form";
import { FooterLinkItem } from "./footer-link-item";
import { FooterLinks } from "./footer-links";
import { FooterNewsletterComponent } from "./footer-newsletter";
import { FooterNewsletterTitleComponent } from "./footer-newsletter-title";
import { FooterSocialLinks } from "./footer-social-links";
import { FooterWrapper } from "./footer-wrapper";
import { NavLinkProps, SocialLinkItem } from "./footer.types";

export interface FooterProps {
  contacts: { label: string; contacts: string[] };
  newsLetter: {
    title: string;
    subTitle: string;
    buttonText: string;
    inputText: string;
    subscriptionDescription: string;
    privacyLink: { href: string; label: string };
  };
  aboutUs: { label: string; links: NavLinkProps[] };
  quickLinks: { label: string; links: NavLinkProps[] };
  legalService: { label: string; links: NavLinkProps[] };
  socialLinks: { links: SocialLinkItem[] };
  copyright: string;
}

export const Footer = ({ footerData }: { footerData: FooterProps }) => {
  const { contacts, newsLetter, aboutUs, quickLinks, legalService, socialLinks, copyright } = footerData;

  return (
    <FooterWrapper>
      <FooterNewsletterComponent>
        <FooterNewsletterTitleComponent
          title={newsLetter.title}
          subTitle={newsLetter.subTitle}
        />
        <FooterForm
          buttonText={newsLetter.buttonText}
          inputPlaceholder={newsLetter.inputText}
          description={newsLetter.subscriptionDescription}
          privacyLink={newsLetter.privacyLink}
        />
      </FooterNewsletterComponent>
      <FooterLinks>
        {[aboutUs, quickLinks, legalService].map((section, index) => (
          <FooterLinkItem
            key={index}
            links={section.links}
            title={section.label}
          />
        ))}
        <FooterContacts
          label={contacts.label}
          contacts={contacts.contacts}
        />
      </FooterLinks>
      <FooterSocialLinks
        copyright={copyright}
        socialLinks={socialLinks.links}
        legalLinks={legalService.links}
      />
    </FooterWrapper>
  );
};
