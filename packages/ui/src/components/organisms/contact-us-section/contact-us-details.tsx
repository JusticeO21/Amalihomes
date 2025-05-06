import { Typography } from "../../atoms";
import { ContactUsDetailsProps } from "./types";

const ContactUsDetails = ({ title, description, children }: ContactUsDetailsProps) => {
  return (
    <div className="flex flex-col items-center md:items-start space-y-24 sm:space-y-40 w-full sm:[578px] md:w-[532px]">
      <div className="text-white text-center md:text-left w-full space-y-[10px]">
        <Typography
          variant="h6"
          className="text-24 font-bold sm:font-semibold sm:text-40 leading-32 sm:leading-48 md:w-[456px]"
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
