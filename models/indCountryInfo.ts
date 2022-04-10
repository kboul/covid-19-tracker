import AllCountryInfo from "./allCountryInfo";

export default interface IndCountryInfo extends AllCountryInfo {
  continent: string;
  country: string;
  countryInfo: {
    flag: string;
    iso2: string;
    iso3: string;
    lat: number;
    long: number;
    _id: number;
  };
}
