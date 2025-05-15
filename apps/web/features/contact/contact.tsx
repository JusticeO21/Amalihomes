"use client";
import { useQuery } from "@tanstack/react-query";
import { usePathname } from "next/navigation";
import { useCountryStore } from "@/stores/use-country-store";
import { ContactUsDetails, ContactUsForm, ContactUsWrapper, SalesRepCard } from "@amalihomes/ui";
import { contactLoader } from "./contact-loader";

const Contact = () => {
  const pathname = usePathname();
  const country = useCountryStore((state) => state.country);
  const locale = country?.split("(")[1]?.split(")")[0];
  const countries = useCountryStore((state) => state.countries);

  const { data, isLoading, error } = useQuery({
    queryKey: ["contactUs", locale],
    queryFn: () => contactLoader(locale),
  });

  if (pathname === "/") {
    return null;
  }

  if (isLoading) {
    return <div>loading</div>;
  }

  if (error || !data) {
    return <div>Error loading contact information</div>;
  }

  const { salesRepresentative, title, description, image, pageReps, ...formData } = data;
  const countryRep = countries.find((rep) => rep.country.trim() === country?.split("(")[0]?.trim());
  const pageRep = pageReps.find((rep) => pathname.includes(rep.link));

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
        {pageRep && pageRep.salesRepresentative ? (
          <SalesRepCard
            {...pageRep.salesRepresentative}
            imageUrl={pageRep.salesRepresentative.profile.imageUrl}
            imageAlt={pageRep.salesRepresentative.profile.imageAlt}
          />
        ) : (
          <SalesRepCard
            {...countryRep?.salesRepresentative!}
            imageUrl={countryRep?.salesRepresentative?.profile.imageUrl!}
            imageAlt={countryRep?.salesRepresentative?.profile.imageAlt!}
          />
        )}
      </ContactUsDetails>
      <ContactUsForm {...formData} />
    </ContactUsWrapper>
  );
};

export default Contact;
