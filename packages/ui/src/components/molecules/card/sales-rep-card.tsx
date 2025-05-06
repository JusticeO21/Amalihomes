import Link from "next/link";
import { Avatar, Typography } from "../../atoms";
import { IconMail } from "../../icons/icon-mail";
import IconPhone from "../../icons/icon-phone";
import { SalesRepCardProps } from "./types";

const SalesRepCard = ({ name, role, phoneNumber, email, imageUrl, imageAlt }: SalesRepCardProps) => {
  return (
    <div className="p-24 space-y-16 bg-white rounded-md w-full sm:w-[558px] md:w-[532px]  shadow-md">
      <div className="flex items-center gap-16">
        <Avatar
          src={imageUrl}
          alt={imageAlt}
          className="w-[56px] h-[56px]"
        />
        <div>
          <Typography
            variant="h6"
            className="!text-gray-900 text-24 font-bold leading-32"
          >
            {name}
          </Typography>
          <Typography
            variant="p"
            className="!text-gray-600 text-16 font-normal leading-24"
          >
            {role}
          </Typography>
        </div>
      </div>

      <div className="flex items-center gap-16">
        <figure className="flex items-center justify-center rounded-full p-12 bg-brand-fill">
          <IconPhone />
        </figure>
        <Link
          href={`tel:${phoneNumber}`}
          className="text-18 text-gray-600  font-normal leading-26 break-words"
        >
          {phoneNumber}
        </Link>
      </div>

      <div className="flex items-center gap-16">
        <figure className="flex items-center justify-center rounded-full p-12 bg-brand-fill">
          <IconMail />
        </figure>
        <Link
          href={`mailto:${email}`}
          className="text-18 text-gray-600  font-normal leading-26"
        >
          {email}
        </Link>
      </div>
    </div>
  );
};

export default SalesRepCard;
