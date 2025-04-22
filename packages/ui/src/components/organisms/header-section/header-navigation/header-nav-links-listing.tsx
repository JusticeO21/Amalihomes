"use client";

import { useState, useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { HeaderDesktopNavLinks } from "./header-desktop-nav-links";
import { HeaderNavControls } from "./header-nav-controls";
import { SearchFormValues, HeaderSearchPanel } from "./header-search-pannel";
import { HeaderMobileMenu } from "./header-mobile-nav-links";
import { NavLinkProps } from "../../footer-section";

interface NavLinksListingProps {
  navLinks: NavLinkProps[];
  isAuth: boolean;
  onSubmitSearchResults: SubmitHandler<SearchFormValues>;
  isMenuOpen?: boolean;
  toggleMenu?: () => void;
}

export const HeaderNavLinksListing = ({
  navLinks,
  isAuth,
  onSubmitSearchResults,
  isMenuOpen = false,
  toggleMenu,
}: NavLinksListingProps) => {
  const [isSearch, setIsSearch] = useState<boolean>(false);

  const form = useForm<SearchFormValues>({
    defaultValues: {
      search: "",
    },
  });

  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === "Escape" && toggleMenu) {
        toggleMenu();
        setIsSearch(false);
      }
    };

    document.addEventListener("keydown", handleEscapeKey);

    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [toggleMenu]);

  const openSearch = (): void => {
    if (isMenuOpen && toggleMenu) toggleMenu();
    setIsSearch(!isSearch);
  };

  const openMenu = (): void => {
    if (isSearch) setIsSearch(false);
    if (toggleMenu) toggleMenu();
  };

  return (
    <>
      <HeaderDesktopNavLinks navLinks={navLinks} />
      <HeaderMobileMenu
        isOpen={isMenuOpen}
        navLinks={navLinks}
        onLinkClick={openMenu}
      />
      <HeaderSearchPanel
        isVisible={isSearch}
        formMethods={form}
        onSubmit={onSubmitSearchResults}
      />
      <HeaderNavControls
        isOpen={isMenuOpen}
        isAuth={isAuth}
        openSearch={openSearch}
        openMenu={openMenu}
      />
    </>
  );
};
