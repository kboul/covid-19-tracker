import create from "zustand";

import { Country, CountryInfo } from "../models";

export const initialSelectedCountry = "Worldwide";

const useStore = create<{
  allCountryInfo: CountryInfo;
  countries: Country[];
  indCountryInfo: CountryInfo;
  selectedCountry: string;
  setAllCountryInfo: (allCountryInfo: CountryInfo) => void;
  setCountries: (countries: Country[]) => void;
  setIndCountryInfo: (indCountryInfo: CountryInfo) => void;
  setSelectedCountry: (selectedCountry: string) => void;
}>(set => ({
  allCountryInfo: {} as CountryInfo,
  countries: [] as Country[],
  indCountryInfo: {} as CountryInfo,
  selectedCountry: initialSelectedCountry,
  setAllCountryInfo: (allCountryInfo: CountryInfo) => set({ allCountryInfo }),
  setCountries: (countries: Country[]) => set({ countries }),
  setIndCountryInfo: (indCountryInfo: CountryInfo) => set({ indCountryInfo }),
  setSelectedCountry: (selectedCountry: string) => set({ selectedCountry })
}));

export default useStore;
