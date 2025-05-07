import { Container, MetricCard, TextPair } from "@amalihomes/ui";

type MetricItem = {
  metric: string;
  label: string;
};

interface CompaniesMetricsProps {
  title?: string;
  description?: string;
  titleClass?: string;
  descriptionClass?: string;
  layout?: "grid" | "horizontal";
  align?: "left" | "center" | "right";
  metrics: MetricItem[];
  gridClassName?: string;
  labelClass?: string;
  numberClass?: string;
  className?: string;
  titleAs?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

export const CompaniesMetrics = ({
  title = "Building Dreams Since 1990",
  description = "Founded with a vision to redefine modern living...",
  metrics,
  layout = "horizontal",
  align,
  labelClass,
  titleClass,
  descriptionClass,
  numberClass,
  gridClassName,
  className,
  titleAs = "h2",
}: CompaniesMetricsProps) => {
  return (
    <Container
      className={`flex gap-32 ${layout === "horizontal" ? "flex-col" : "flex-row"} justify-center ${className && className} `}
      aria-label="Company achievements"
    >
      <TextPair
        className="max-w-[866px] mx-auto"
        header={title}
        headerClass={`text-24 leading-32 md:text-32 md:leading-40 lg:text-[40px] lg:leading-48 ${titleClass && titleClass}`}
        descriptionClass={`${descriptionClass && descriptionClass}`}
        headerAs={titleAs}
        description={description}
        align={align}
        spacing="md"
      />

      <div className={`grid ${layout === "grid" ? "grid-cols-2" : "grid-cols-4"} !${gridClassName && gridClassName}`}>
        {metrics.map(
          (item, index) =>
            index < 4 && (
              <MetricCard
                key={`metric-${index}`}
                number={item.metric}
                label={item.label}
                id={`metric-card-${index}`}
                numberClass={`${numberClass}`}
                labelClass={labelClass}
                aria-label={`${item.metric} ${item.label}`}
              />
            ),
        )}
      </div>
    </Container>
  );
};

CompaniesMetrics.displayName = "CompaniesMetrics";
