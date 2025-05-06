"use client";

import { useState } from "react";
import { cn } from "../../../lib/utils";
import { Button, Checkbox, Container, Image } from "../../atoms";
import { IconCancel, IconGooglePartner } from "../../icons";

export interface GdprBannerProps {
  getBanner: (banner: GdprBannerState) => void;
  title: string;
  description: string;
  customizeButtonText: string;
  saveButtonText: string;
  rejectButtonText: string;
  consentOptions: { id: string; label: string }[];
  icon: {
    url: string;
    alt: string;
  };
}

export interface GdprBannerState {
  testStrict: boolean;
  performance: boolean;
  targeting: boolean;
  functionality: boolean;
  unclassified: boolean;
}

const defaultGdprBanner: GdprBannerState = {
  testStrict: true,
  performance: true,
  targeting: true,
  functionality: true,
  unclassified: true,
};

export const GdprBanner = ({
  getBanner,
  consentOptions,
  customizeButtonText,
  description,
  rejectButtonText,
  saveButtonText,
  title,
  icon,
}: GdprBannerProps) => {
  const [isCustomise, setIsCustomise] = useState(false);
  const [isOpen, setIsOpen] = useState(true);
  const [gdprBanner, setGdprBanner] = useState<GdprBannerState>(defaultGdprBanner);

  const handleReject = () => {
    setIsCustomise(false);
    setIsOpen(false);
    getBanner({
      testStrict: false,
      performance: false,
      targeting: false,
      functionality: false,
      unclassified: false,
    });
  };

  const handleSave = () => {
    setIsCustomise(false);
    setIsOpen(false);
    getBanner(gdprBanner);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleCheckboxChange = (id: keyof GdprBannerState, isChecked: boolean) => {
    setGdprBanner((prev) => ({
      ...prev,
      [id]: isChecked,
    }));
  };

  if (!isOpen) return null;

  return (
    <div className="bg-brand-50 w-full shadow-overlay">
      <Container
        paddingX={0}
        paddingY={0}
        className="px-16 sm:px-32 lg:px-64 py-24 my-0 bg-brand-50"
      >
        <div className="flex flex-col-reverse sm:flex-row gap-16 sm:gap-0 items-start justify-between">
          <div className="w-full sm:w-668 flex flex-col sm:flex-row items-start justify-start gap-24">
            {icon.url ? (
              <Image
                src={icon.url}
                alt={icon.alt}
                width={88}
                height={99}
              />
            ) : (
              <div>
                <IconGooglePartner />
              </div>
            )}
            <div className="flex flex-col gap-16">
              <div className="flex flex-col gap-8">
                <h6 className="font-lato text-24 font-bold leading-xl text-gray-950">{title}</h6>
                <p className="font-lato text-16 font-regular text-gray-600">{description}</p>
              </div>

              {isCustomise && (
                <form className={cn("flex flex-col gap-16 h-184 overflow-hidden transition-all duration-200")}>
                  {consentOptions.map(({ id, label }) => (
                    <label
                      key={id}
                      htmlFor={id}
                      className="flex items-center gap-8"
                    >
                      <Checkbox
                        id={id}
                        isChecked={gdprBanner[id as keyof GdprBannerState]}
                        onChange={(isChecked) => handleCheckboxChange(id as keyof GdprBannerState, isChecked)}
                      />
                      <span className="text-gray-750 text-16 font-lato">{label}</span>
                    </label>
                  ))}
                </form>
              )}

              <div className="flex gap-16 flex-col sm:flex-row">
                <Button
                  className="bg-brand-600 text-white font-bold font-lato px-24 py-12 flex items-center justify-center"
                  onClick={isCustomise ? handleSave : () => setIsCustomise(true)}
                >
                  <span className="text-16">{isCustomise ? saveButtonText : customizeButtonText}</span>
                </Button>
                <Button
                  variant={"secondary"}
                  className="text-brand-600 border border-brand-600 font-bold py-12 px-24 font-lato flex items-center justify-center bg-white hover:bg-transparent"
                  onClick={handleReject}
                >
                  <span className="text-16">{rejectButtonText}</span>
                </Button>
              </div>
            </div>
          </div>
          <div className="flex items-start justify-end w-full sm:w-min">
            <button
              onClick={handleClose}
              data-testid="close-button"
              className="cursor-pointer"
            >
              <IconCancel
                width={24}
                height={24}
                color="#5E718D"
              />
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};
