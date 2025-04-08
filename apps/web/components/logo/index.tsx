import { getEntry } from "lib/contentful/contentful";
import { TypeLogoSkeleton } from "lib/contentful/types";
import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  fields: {
    alt: string;
    icon: {
      fields: {
        file: {
          url: string;
        };
      };
    };
  };
}

export const Logo = async () => {
  const response = (await getEntry<TypeLogoSkeleton>("logo")) as LogoProps;

  if (!response?.fields?.icon?.fields?.file?.url || !response?.fields?.alt) {
    return null;
  }

  const { url } = response.fields.icon.fields.file;
  const { alt } = response.fields;

  return (
    <Link
      href="/"
      className="cursor-pointer"
    >
      <Image
        src={`https:${url}`}
        alt={alt}
        width={91}
        height={24}
        priority
      />
    </Link>
  );
};
