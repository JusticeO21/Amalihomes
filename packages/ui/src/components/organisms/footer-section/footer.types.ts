export interface SocialLinkItem {
  href: string;
  label: string;
  icon: string;
}

export interface FooterNewsLetterProps extends FooterFormProps {
  title: string;
  subTitle: string;
}

export interface NavLinkProps {
  id: string;
  label: string;
  href: string;
}

export interface FooterFormProps {
  buttonText: string;
  inputPlaceholder: string;
  description: string;
  privacyLink: {
    href: string;
    label: string;
  };
}

export interface FooterContactsProps {
  label: string;
  contacts: string[];
  className?: string;
}

export interface FooterLinksListingProps {
  links: NavLinkProps[];
  title: string;
  className?: string;
}

export interface FooterSocialLinksProps {
  socialLinks: SocialLinkItem[];
  copyright: string;
  className?: string;
  legalLinks: NavLinkProps[];
}
