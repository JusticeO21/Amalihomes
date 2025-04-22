export interface UspHeaderProps {
  heading: string;
  description: string;
}

export const UspHeader = ({ heading, description }: UspHeaderProps) => {
  return (
    <div className="p-0">
      <h2
        id="usp-heading"
        className="text-40 font-semibold leading-48 md:leading-64 tracking-tight mb-24"
      >
        {heading}
      </h2>
      <p className="leading-26 text-18 text-muted-foreground mb-24  text-Gray-fill-bright">{description}</p>
    </div>
  );
};
