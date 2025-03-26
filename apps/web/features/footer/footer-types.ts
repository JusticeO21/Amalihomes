import { NavLinkProps } from "features/header/nav-links-listing";

interface ContactsFields {
  label: string;
  contacts: string[];
}

interface Contacts {
  fields: ContactsFields;
}

interface NewsletterFields {
  title: string;
  subTitle: string;
}

interface Newsletter {
  fields: NewsletterFields;
}

interface FooterItem {
  fields: {
    label: string;
    links: NavLinkProps[];
  };
}

export interface FooterProps {
  contacts: Contacts;
  newsLetter: Newsletter;
  aboutUs: FooterItem;
  quickLinks: FooterItem;
  legalService: FooterItem;
}
