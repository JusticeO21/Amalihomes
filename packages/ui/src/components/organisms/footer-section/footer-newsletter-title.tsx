import { cn } from "../../../lib/utils";
import { Typography } from "../../atoms";

export const FooterNewsletterTitleComponent = ({
  title,
  subTitle,
  className,
}: {
  title: string;
  subTitle: string;
  className?: string;
}) => (
  <section
    className={cn(
      "flex flex-col items-center justify-center md:items-start md:justify-start gap-8 w-full md:w-770 lg:w-[553px]",
      className,
    )}
  >
    <p className="text-18 text-white font-semibold">{title}</p>
    <Typography
      as="p"
      size="sm"
      className="text-white text-center md:text-left p-0"
    >
      {subTitle}
    </Typography>
  </section>
);
