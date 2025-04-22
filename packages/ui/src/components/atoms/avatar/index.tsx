import Image from "next/image";
import { cn } from "../../../lib/utils";

interface AvatarProps {
  src?: string;
  alt?: string;
  className?: string;
}

export const Avatar = ({ alt = "avatar", src = "https://placehold.co/600x400/png", className }: AvatarProps) => {
  return (
    <div>
      <Image
        src={src}
        alt={alt}
        width={100}
        height={100}
        className={cn("rounded-full w-[38px] h-[38px]", className)}
      />
    </div>
  );
};
