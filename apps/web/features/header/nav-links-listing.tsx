"use client";

import { Button } from "@amalihomes/ui/components/button";
import { Input } from "@amalihomes/ui/components/input";
import { NavLink } from "components/nav-link";
import { Menu, Search, X } from "lucide-react";
import { useState } from "react";
import { AuthVisibleComponents } from "./auth-visible-components";

export interface NavLinkProps {
  sys: {
    id: string;
  };
  fields: {
    href: string;
    label: string;
  };
}

export const NavLinksListing = ({ navLinks }: { navLinks: NavLinkProps[] }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const [isAuth] = useState(false);

  const renderNavLinks = () => {
    return navLinks.map(({ sys: { id }, fields: { href, label } }) => {
      const link = href === "home" ? "/" : `/${href}`;

      return (
        <li
          key={id}
          className="transition-colors w-full"
        >
          <button
            className="w-full text-left"
            onClick={() => setIsOpen(false)}
          >
            <NavLink
              href={link}
              className="w-full lf:w-min"
            >
              {label}
            </NavLink>
          </button>
        </li>
      );
    });
  };

  const openSearch = () => {
    if (isOpen) setIsOpen(false);
    setIsSearch(!isSearch);
  };

  const openMenu = () => {
    if (isSearch) setIsSearch(false);
    setIsOpen(!isOpen);
  };

  return (
    <>
      <ul className="hidden gap-6 lg:flex">{renderNavLinks()}</ul>

      {isOpen && (
        <div className="absolute top-full left-0  z-50 px-16 md:px-32 lg:hidden w-full flex flex-col bg-white py-24 md:py-32 shadow-sm gap-24">
          <ul className="flex flex-col items-start gap-8 pt-12 justify-start">{renderNavLinks()}</ul>
          <Button className="w-full h-48 lg:flex items-center justify-center">Login</Button>
        </div>
      )}

      {isSearch && (
        <div className="absolute top-full left-0  z-50 px-16 md:px-32 w-full flex flex-col py-24 md:py-32 lg:px-64 shadow-sm gap-24 bg-white">
          <div className="border border-Grey-stroke-weak rounded-md py-12 px-18 flex items-center justify-center gap-4">
            <Search />
            <Input
              className="border-0 flex-1 text-sm"
              placeholder="Search Products"
            />
          </div>
        </div>
      )}

      <div className="flex items-center gap-24">
        <Search
          className="cursor-pointer z-0"
          onClick={openSearch}
        />
        {isAuth ? (
          <AuthVisibleComponents />
        ) : (
          <Button className="w-87 h-48 lg:flex items-center justify-center hidden">Login</Button>
        )}
        <button
          onClick={openMenu}
          className="lg:hidden z-0"
        >
          {isOpen ? <X className="cursor-pointer text-brand" /> : <Menu className="cursor-pointer lg:hidden" />}
        </button>
      </div>
    </>
  );
};
