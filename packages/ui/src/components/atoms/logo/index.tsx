import Link from "next/link";
import { Image } from "../Image";
import { cn } from "../../../lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { IconLogo } from "../../icons/icon-logo";

const logoVariants = cva("", {
  variants: {
    size: {
      small: "w-20 h-5",
      default: "w-91 h-24",
      large: "w-150 h-40",
    },
    hover: {
      none: "",
      fade: "hover:opacity-80 transition-opacity duration-200",
      scale: "hover:scale-105 transition-transform duration-200",
    },
  },
  defaultVariants: {
    size: "default",
    hover: "none",
  },
});

export interface LogoProps extends VariantProps<typeof logoVariants> {
  url: string;
  alt: string;
  href?: string;
  width?: number;
  height?: number;
  className?: string;
}

export const Logo = ({ url, alt, href = "/", width = 91, height = 24, size, hover, className }: LogoProps) => {
  return (
    <Link
      href={href}
      className="cursor-pointer"
    >
      {url ? (
        <Image
          src={url.startsWith("http") ? url : `https:${url}`}
          alt={alt}
          width={width}
          height={height}
          priority
          className={cn(logoVariants({ size, hover }), className)}
        />
      ) : (
        <IconLogo />
      )}
    </Link>
  );
};
