"use client";
import { Button, IconCancel, IconMenu, IconSearch } from "@amalihomes/ui";
import { HeaderAuthVisibleComponents } from "./header-auth-visible-components";

interface NavControlsProps {
  isOpen: boolean;
  isAuth: boolean;
  openSearch: () => void;
  openMenu: () => void;
}

export const HeaderNavControls = ({ isOpen, isAuth, openSearch, openMenu }: NavControlsProps) => (
  <div className="flex items-center gap-24">
    <button onClick={openSearch}>
      <IconSearch
        className="cursor-pointer z-0 size-20"
        width={20}
        height={20}
      />
    </button>

    {isAuth ? (
      <HeaderAuthVisibleComponents />
    ) : (
      <Button className="w-87 h-48 lg:flex items-center justify-center hidden">Login</Button>
    )}

    <button
      onClick={openMenu}
      className="lg:hidden z-0"
    >
      {isOpen ? (
        <IconCancel className="cursor-pointer text-brand" />
      ) : (
        <IconMenu className="cursor-pointer lg:hidden" />
      )}
    </button>
  </div>
);
