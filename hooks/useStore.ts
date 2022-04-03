import create from "zustand";

import { Country, CountryInfo } from "../models";

const useStore = create<{
  allCountryInfo: CountryInfo;
  countries: Country[];
  setAllCountryInfo: (allCountryInfo: CountryInfo) => void;
  setCountries: (countries: Country[]) => void;
}>(set => ({
  allCountryInfo: {} as CountryInfo,
  countries: [] as Country[],
  setAllCountryInfo: (allCountryInfo: CountryInfo) => set({ allCountryInfo }),
  setCountries: (countries: Country[]) => set({ countries })
}));

export default useStore;
