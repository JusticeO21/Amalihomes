import { create } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";

interface CountryState {
  country: string;
  countries: Countries[];
}

interface Countries {
  country: string;
  otherName?: string;
  language: {
    language: string;
    languageCode: string;
  };
  salesRepresentative: {
    profile: {
      imageUrl: string;
      imageAlt: string;
    };
    name: string;
    role: string;
    phoneNumber: string;
    email: string;
  };
}

interface CountryActions {
  setCountry: (country: string) => void;
  setCountries: (countries: Countries[]) => void;
}

type CountryStore = CountryState & CountryActions;

export const useCountryStore = create<CountryStore>()(
  devtools(
    persist(
      (set) => ({
        country: "",
        countries: [],
        setCountry: (country) => set((state) => ({ ...state, country }), false, "country/setCountry"),
        setCountries: (countries) => set((state) => ({ ...state, countries }), false, "country/setCountries"),
      }),
      {
        name: "country-storage",
        storage: createJSONStorage(() => localStorage),
        partialize: (state) => ({ country: state.country }),
      },
    ),
  ),
);
