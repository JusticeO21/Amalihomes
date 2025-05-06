import { create } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";

interface CountryState {
  country: string;
}

interface CountryActions {
  setCountry: (country: string) => void;
}

type CountryStore = CountryState & CountryActions;

export const useCountryStore = create<CountryStore>()(
  devtools(
    persist(
      (set) => ({
        country: "",
        setCountry: (country) => set((state) => ({ ...state, country }), false, "country/setCountry"),
      }),
      {
        name: "country-storage",
        storage: createJSONStorage(() => localStorage),
        partialize: (state) => ({ country: state.country }),
      },
    ),
  ),
);
