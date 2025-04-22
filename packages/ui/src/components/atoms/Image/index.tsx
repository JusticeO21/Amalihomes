"use client";
import { JSX, useState } from "react";
import NextImage, { ImageProps } from "next/image";
import { cn } from "../../../lib/utils";

const PlaceholderImage = "/images/placeholder.png";

export const Image = ({ className, ...props }: ImageProps): JSX.Element => {
  const [src, setSrc] = useState(props.src);

  return (
    <NextImage
      {...props}
      src={src}
      className={cn(className)}
      placeholder="blur"
      blurDataURL={PlaceholderImage}
      onError={() => setSrc(PlaceholderImage)}
      width={props.fill ? undefined : (props.width ?? 50)}
      height={props.fill ? undefined : (props.height ?? 50)}
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
    />
  );
};
