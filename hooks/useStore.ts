import create from "zustand";

import { Cases, Country, AllCountryInfo, IndCountryInfo } from "../models";
import { initialSelectedCountry } from "../constants";

const useStore = create<{
  allCountryInfo: AllCountryInfo;
  casesType: string;
  countries: Country[];
  indCountryInfo: IndCountryInfo;
  lastDaysCases: Cases;
  selectedCountry: string;
  setGlobalState: (data: any) => void;
}>(set => ({
  allCountryInfo: {} as AllCountryInfo,
  casesType: "cases",
  countries: [] as Country[],
  indCountryInfo: {} as IndCountryInfo,
  lastDaysCases: {} as Cases,
  selectedCountry: initialSelectedCountry,
  setGlobalState: (data: any) => set({ ...data })
}));

export default useStore;
