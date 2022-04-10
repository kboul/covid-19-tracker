import create from "zustand";

import { Cases, Country, AllCountryInfo, IndCountryInfo } from "../models";
import { initialSelectedCountry } from "../constants";

const useStore = create<{
  allCountryInfo: AllCountryInfo;
  countries: Country[];
  indCountryInfo: IndCountryInfo;
  lastDaysCases: Cases;
  selectedCountry: string;
  setAllCountryInfo: (allCountryInfo: AllCountryInfo) => void;
  setCountries: (countries: Country[]) => void;
  setIndCountryInfo: (indCountryInfo: IndCountryInfo) => void;
  setLastDaysCases: (lastDaysCases: Cases) => void;
  setSelectedCountry: (selectedCountry: string) => void;
}>(set => ({
  allCountryInfo: {} as AllCountryInfo,
  countries: [] as Country[],
  indCountryInfo: {} as IndCountryInfo,
  lastDaysCases: {} as Cases,
  selectedCountry: initialSelectedCountry,
  setAllCountryInfo: (allCountryInfo: AllCountryInfo) =>
    set({ allCountryInfo }),
  setCountries: (countries: Country[]) => set({ countries }),
  setIndCountryInfo: (indCountryInfo: IndCountryInfo) =>
    set({ indCountryInfo }),
  setLastDaysCases: (lastDaysCases: Cases) => set({ lastDaysCases }),
  setSelectedCountry: (selectedCountry: string) => set({ selectedCountry })
}));

export default useStore;
