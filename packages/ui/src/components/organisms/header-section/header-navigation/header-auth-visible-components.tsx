import Link from "next/link";
import { cn } from "../../../../lib/utils";
import { Avatar } from "../../../atoms";
import { IconCart } from "../../../icons";

interface AuthVisibleComponentsProps {
  className?: string;
  cartLink?: string;
  avatarLink?: string;
}

export const HeaderAuthVisibleComponents = ({
  className,
  cartLink = "/cart",
  avatarLink = "/",
}: AuthVisibleComponentsProps) => {
  return (
    <div className={cn("flex items-center gap-12", className)}>
      <Link href={cartLink}>
        <IconCart />
      </Link>
      <Link href={avatarLink}>
        <Avatar />
      </Link>
    </div>
  );
};
