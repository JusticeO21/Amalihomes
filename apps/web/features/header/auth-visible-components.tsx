import IconCart from "@/components/icons/icon-cart";
import { Avatar } from "components/avatar";
import Link from "next/link";

export const AuthVisibleComponents = () => {
  return (
    <div className="flex items-center gap-12">
      <Link href="/cart">
        <IconCart />
      </Link>
      <Avatar />
    </div>
  );
};
