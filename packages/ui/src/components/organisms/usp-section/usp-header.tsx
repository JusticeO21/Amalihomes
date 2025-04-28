export interface UspHeaderProps {
  heading: string;
  description: string;
}

export const UspHeader = ({ heading, description }: UspHeaderProps) => {
  return (
    <div className="p-0 md:max-w-[572px]">
      <h2
        id="usp-heading"
        className="text-24 md:text-[32px] lg:text-40 font-bold md:font-semibold leading-32 md:leading-40 lg:leading-48 tracking-[0%] mb-24 text-Grey-text-strong"
      >
        {heading}
      </h2>
      <p className="leading-26 text-18 font-normal text-muted-foreground mb-24  text-Gray-fill-bright">{description}</p>
    </div>
  );
};
