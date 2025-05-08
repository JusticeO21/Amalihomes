import { Image } from "../../atoms";

export interface UspImageProps {
  imageUrl: string;
  imageAlt: string;
  className?: string;
  imageClass?: string;
}

export const UspImage = ({ imageUrl, imageAlt, className, imageClass }: UspImageProps) => {
  return (
    <div className={`hidden lg:block m-0 rounded-md overflow-hidden  ${className}`}>
      <Image
        src={imageUrl}
        alt={imageAlt}
        width={482}
        height={400}
        priority
        className={`w-full h-full object-cover ${imageClass}`}
      />
    </div>
  );
};
