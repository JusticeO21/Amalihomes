import { cn } from "../../../lib/utils";

export interface UspHeaderProps {
  heading: string;
  description: string;
  headingClass?: string;
    descriptionClass?: string;
  className?: string;
}

export const UspHeader = ({ heading, description, headingClass = "", descriptionClass = "", className }: UspHeaderProps) => {
  return (
    <div className={cn(`p-0 md:max-w-[572px]`, className)}>
      <h2
        id="usp-heading"
        className={`text-24 md:text-[32px] lg:text-40 font-bold md:font-semibold leading-32 md:leading-40 lg:leading-48 tracking-[0%] mb-24 text-Grey-text-strong ${headingClass}`}
      >
        {heading}
      </h2>
      <p className={`leading-26 text-18 font-normal text-muted-foreground mb-24  text-Gray-fill-bright ${descriptionClass}`}>{description}</p>
    </div>
  );
};
