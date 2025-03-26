import { Avatar } from "components/avatar";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";

export const AuthVisibleComponents = () => {
  return (
    <div className="flex items-center gap-12">
      <Link href="/cart">
        <ShoppingCart />
      </Link>
      <Avatar />
    </div>
  );
};
