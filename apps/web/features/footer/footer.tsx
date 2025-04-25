import {
  FooterContacts,
  FooterForm,
  FooterLinkItem,
  FooterLinks,
  FooterNewsletterComponent,
  FooterNewsletterTitleComponent,
  FooterSocialLinks,
  FooterWrapper,
} from "@amalihomes/ui/index";
import { footerLoader } from "./footer-loader";

export const AppFooter = async () => {
  const {
    copyright,
    ctaLabel,
    description,
    inputPlaceholder,
    links,
    privacyDescription,
    privacyLink,
    socials,
    title,
    contactUs,
    legalLinks,
  } = await footerLoader();

  return (
    <FooterWrapper>
      <FooterNewsletterComponent>
        <FooterNewsletterTitleComponent
          title={title}
          subTitle={description}
        />
        <FooterForm
          buttonText={ctaLabel}
          inputPlaceholder={inputPlaceholder}
          description={privacyDescription}
          privacyLink={{
            href: privacyLink.fields.link,
            label: privacyLink.fields.label,
          }}
          errorMessages={{
            invalid: "Invalid email address",
            required: "Email is required",
          }}
        />
      </FooterNewsletterComponent>
      <FooterLinks>
        {links.map((section, index) => (
          <FooterLinkItem
            key={index}
            links={section.links}
            title={section.title}
          />
        ))}
        <FooterContacts
          label={"Contact Us"}
          contacts={contactUs}
        />
      </FooterLinks>
      <FooterSocialLinks
        copyright={copyright}
        socialLinks={socials}
        legalLinks={legalLinks}
      />
    </FooterWrapper>
  );
};
