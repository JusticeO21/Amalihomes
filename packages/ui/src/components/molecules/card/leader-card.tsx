import React from "react";
import clsx from "clsx";
import { personCardStyles, PersonCardVariants } from "./leader-card-variants";
import { TextPair } from "../text-pair";
import Image from "next/image";

export interface PersonCardProps extends PersonCardVariants {
  imageUrl: string;
  title: string;
  description?: string;
  headerAs?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
  align?: "left" | "center" | "right";
  imageAlt: string;
  className?: string;
  headerClass?: string;
  descriptionClass?: string;
  overlay?: "none" | "dark" | string;
  imageQuality?: number;
  priority?: boolean;
  onClick?: () => void;
}

const LeaderCard: React.FC<PersonCardProps> = ({
  imageUrl,
  imageAlt,
  title,
  align = "left",
  description,
  size = "sm",
  className = "",
  headerAs = "h3",
  overlay,
  textPosition,
  headerClass = "",
  descriptionClass = "",
  imageQuality = 85,
  priority = false,
  onClick,
}) => {
  const overlayClasses = overlay === "dark" ? "bg-gradient-to-b from-transparent to-black/30" : overlay;

  return (
    <div
      className={clsx(
        personCardStyles({ size, textPosition }),
        "relative flex",
        textPosition,
        className,
        onClick && "cursor-pointer",
      )}
      data-testid="person-card"
      onClick={onClick}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={onClick ? (e) => e.key === "Enter" && onClick() : undefined}
    >
      {overlay !== "none" && (
        <div
          className={`absolute inset-0 z-1 ${overlayClasses}`}
          aria-hidden="true"
        />
      )}

      <Image
        src={imageUrl}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        alt={imageAlt}
        className="object-cover rounded-md"
        quality={imageQuality}
        priority={priority}
      />

      <TextPair
        className="z-10 p-24 !gap-[18px"
        headerClass={`${headerClass}`}
        descriptionClass={`${descriptionClass}`}
        align={align}
        headerAs={headerAs}
        header={title}
        description={description}
      />
    </div>
  );
};

export default LeaderCard;
