"use client";
import { useCountryStore } from "@/stores/use-country-store";
import { ContactUsDetails, ContactUsForm, ContactUsWrapper, SalesRepCard } from "@amalihomes/ui/index";
import { useQuery } from "@tanstack/react-query";
import { usePathname } from "next/navigation";
import { contactLoader } from "./contact-loader";

const Contact = () => {
  const pathname = usePathname();
  const country = useCountryStore((state) => state.country);
  const formattedCountry = country?.split("(")[1]?.split(")")[0];

  const { data, isLoading } = useQuery({
    queryKey: ["contactUs", formattedCountry],
    queryFn: () => contactLoader(formattedCountry),
  });

  if (pathname === "/") {
    return null;
  }

  if (isLoading) {
    return <div>loading</div>;
  }

  if (!data) {
    return <div>Error loading contact information</div>;
  }

  const { salesRepresentative, title, description, image, ...formData } = data;
  return (
    <ContactUsWrapper
      className="bg-gray-200"
      backgroundImageAlt={image.imageAlt}
      backgroundImageUrl={image.imageUrl}
    >
      <ContactUsDetails
        title={title}
        description={description}
      >
        <SalesRepCard
          {...salesRepresentative}
          imageUrl={salesRepresentative.profile.imageUrl}
          imageAlt={salesRepresentative.profile.imageAlt}
        />
      </ContactUsDetails>
      <ContactUsForm {...formData} />
    </ContactUsWrapper>
  );
};

export default Contact;
