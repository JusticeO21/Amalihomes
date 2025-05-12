import { Typography } from "../../atoms";
import { ContactUsDetailsProps } from "./types";

const ContactUsDetails = ({ title, description, children }: ContactUsDetailsProps) => {
  return (
    <div className="flex flex-col items-center justify-center md:items-start space-y-24 md:space-y-40 w-full md:w-[578px] lg:w-[532px]">
      <div className="text-white text-center lg:text-left w-full space-y-[10px]">
        <Typography
          variant="h6"
          className="text-24 font-bold md:font-semibold md:text-40 leading-32 md:leading-48 lg:w-[456px]"
        >
          {title}
        </Typography>
        <Typography
          variant="p"
          className="text-20 leading-28"
        >
          {description}
        </Typography>
      </div>

      {children}
    </div>
  );
};

export default ContactUsDetails;
