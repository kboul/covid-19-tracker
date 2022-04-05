import create from "zustand";

import { Cases, Country, CountryInfo } from "../models";
import { initialSelectedCountry } from "../constants";

const useStore = create<{
  allCountryInfo: CountryInfo;
  countries: Country[];
  indCountryInfo: CountryInfo;
  lastDaysCases: Cases;
  selectedCountry: string;
  setAllCountryInfo: (allCountryInfo: CountryInfo) => void;
  setCountries: (countries: Country[]) => void;
  setIndCountryInfo: (indCountryInfo: CountryInfo) => void;
  setLastDaysCases: (lastDaysCases: Cases) => void;
  setSelectedCountry: (selectedCountry: string) => void;
}>(set => ({
  allCountryInfo: {} as CountryInfo,
  countries: [] as Country[],
  indCountryInfo: {} as CountryInfo,
  lastDaysCases: {} as Cases,
  selectedCountry: initialSelectedCountry,
  setAllCountryInfo: (allCountryInfo: CountryInfo) => set({ allCountryInfo }),
  setCountries: (countries: Country[]) => set({ countries }),
  setIndCountryInfo: (indCountryInfo: CountryInfo) => set({ indCountryInfo }),
  setLastDaysCases: (lastDaysCases: Cases) => set({ lastDaysCases }),
  setSelectedCountry: (selectedCountry: string) => set({ selectedCountry })
}));

export default useStore;
