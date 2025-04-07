import { Button } from "@amalihomes/ui/components/button";
import { Menu, X } from "lucide-react";
import { AuthVisibleComponents } from "./auth-visible-components";
import { IconSearch } from "components/icons/icon-search";

interface NavControlsProps {
  isOpen: boolean;
  isAuth: boolean;
  openSearch: () => void;
  openMenu: () => void;
}

export const NavControls = ({ isOpen, isAuth, openSearch, openMenu }: NavControlsProps) => (
  <div className="flex items-center gap-24">
    <button onClick={openSearch}>
      <IconSearch className="cursor-pointer z-0" />
    </button>

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
);
