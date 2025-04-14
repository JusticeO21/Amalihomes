import { NavLinkProps } from "features/header/nav-links-listing";

interface Sys {
  id: string;
  updatedAt: string;
}
interface ContactsFields {
  label: string;
  contacts: string[];
}

interface Contacts {
  fields: ContactsFields;}

interface NewsletterFields {
  title: string;
  subTitle: string;
  buttonText: string;
  inputText: string;
  subscriptionDescription: string;
  privacyLink:  NavLinkProps
  
}

interface Newsletter {
  fields: NewsletterFields;
}

interface FooterItem {
  fields: {
    label: string;
    links: NavLinkProps[];
  };
  sys: Sys;
}

export interface SocialLinkItem {
  fields: {
    label: string;
    href: string;
    icon: {
      fields: {
        file: {
          url: string;
        };
      };
    };
  };
}

interface SocialLinkItemFields {
  fields: {
    label: string;
    links: SocialLinkItem[];
  };
}



export interface FooterProps {
  contacts: Contacts;
  newsLetter: Newsletter;
  aboutUs: FooterItem;
  quickLinks: FooterItem;
  legalService: FooterItem;
  socialLinks: SocialLinkItemFields;
  copyright: string;
}
