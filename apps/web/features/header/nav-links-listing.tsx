"use client";

import { useState, useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { DesktopNavLinks } from "./header-desktop-nav-links";
import { MobileMenu } from "./header-mobile-menu";
import { NavControls } from "./header-nav-controls";
import { SearchFormValues, SearchPanel } from "./header-search-pannel";

export interface NavLinkProps {
  sys: {
    id: string;
  };
  fields: {
    href: string;
    label: string;
  };
}

interface NavLinksListingProps {
  navLinks: NavLinkProps[];
}

export const NavLinksListing = ({ navLinks }: NavLinksListingProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isSearch, setIsSearch] = useState<boolean>(false);
  const [isAuth] = useState<boolean>(false);

  const form = useForm<SearchFormValues>({
    defaultValues: {
      search: "",
    },
  });

  const onSubmit: SubmitHandler<SearchFormValues> = (data) => {};

  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        setIsSearch(false);
      }
    };

    document.addEventListener("keydown", handleEscapeKey);

    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, []);

  const openSearch = (): void => {
    if (isOpen) setIsOpen(false);
    setIsSearch(!isSearch);
  };

  const openMenu = (): void => {
    if (isSearch) setIsSearch(false);
    setIsOpen(!isOpen);
  };

  const closeMenu = (): void => setIsOpen(false);

  return (
    <>
      <DesktopNavLinks navLinks={navLinks} />
      <MobileMenu
        isOpen={isOpen}
        navLinks={navLinks}
        onLinkClick={closeMenu}
      />
      <SearchPanel
        isVisible={isSearch}
        formMethods={form}
        onSubmit={onSubmit}
      />
      <NavControls
        isOpen={isOpen}
        isAuth={isAuth}
        openSearch={openSearch}
        openMenu={openMenu}
      />
    </>
  );
};
