"use client";

import { useState } from "react";
import { Checkbox, Container } from "../../atoms";
import { IconCancel, IconGooglePartner } from "../../icons";
import { cn } from "../../../lib/utils";

export interface GdprBannerProps {
  getBanner: (banner: GdprBannerState) => void;
}

export interface GdprBannerState {
  testStrict: boolean;
  performance: boolean;
  targeting: boolean;
  functionality: boolean;
  uncategorised: boolean;
}

const defaultGdprBanner: GdprBannerState = {
  testStrict: true,
  performance: true,
  targeting: true,
  functionality: true,
  uncategorised: true,
};

const checkboxOptions = [
  { id: "testStrict", label: "Test Strict" },
  { id: "performance", label: "Performance" },
  { id: "targeting", label: "Targeting" },
  { id: "functionality", label: "Functionality" },
  { id: "uncategorised", label: "Unclassified" },
];

export const GdprBanner = ({ getBanner }: GdprBannerProps) => {
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
      uncategorised: false,
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
    <div className="bg-brand-50 fixed top-0 z-10000 w-full shadow-overlay">
      <Container
        paddingX={0}
        paddingY={0}
        className="px-16 sm:px-32 lg:px-64 py-24 my-0 bg-brand-50"
      >
        <div className="flex flex-col-reverse sm:flex-row gap-16 sm:gap-0 items-start justify-between">
          <div className="w-668 flex flex-col sm:flex-row items-start justify-start gap-24">
            <div>
              <IconGooglePartner />
            </div>
            <div className="flex flex-col gap-16">
              <div className="flex flex-col gap-8">
                <h6 className="font-lato text-24 font-bold leading-xl text-gray-950">We value your privacy</h6>
                <p className="font-lato text-16 font-regular text-gray-600">
                  This website uses cookies to personalize content, provide social media features, and analyse our
                  traffic. You can customize your preferences or reject all.
                </p>
              </div>

              <form
                className={cn(
                  "flex flex-col gap-16 h-0 overflow-hidden transition-all duration-200",
                  isCustomise && "h-184",
                )}
              >
                {checkboxOptions.map(({ id, label }) => (
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

              <div className="flex gap-16">
                <button
                  className="bg-brand-600 text-white text-16 rounded-sm hover:bg-brand-700 font-bold font-lato px-24 py-12"
                  onClick={isCustomise ? handleSave : () => setIsCustomise(true)}
                >
                  {isCustomise ? "Save and Close" : "Customise Settings"}
                </button>
                <button
                  className="bg-white text-brand-600 border border-brand-600 font-bold text-16 py-12 px-24 font-lato rounded-sm hover:bg-brand-100"
                  onClick={handleReject}
                >
                  Reject All
                </button>
              </div>
            </div>
          </div>
          <div className="flex items-start justify-end w-full sm:w-min">
            <button onClick={handleClose}>
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
