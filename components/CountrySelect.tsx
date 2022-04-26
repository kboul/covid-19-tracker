import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

import Country from "../models/country";
import { useStore } from "../hooks";
import { IndCountryInfo } from "../models";
import { baseUrl, initialSelectedCountry } from "../constants";

export default function CountrySelect() {
  const countries = useStore(state => state.countries);
  const selectedCountry = useStore(state => state.selectedCountry);
  const setGlobalState = useStore(state => state.setGlobalState);

  const handleChange = async (event: SelectChangeEvent<string>) => {
    const countryCode = event.target.value;
    const payload = { selectedCountry: countryCode };
    if (countryCode === initialSelectedCountry) {
      setGlobalState({ ...payload, indCountryInfo: {} as IndCountryInfo });
      return;
    }

    const response = await fetch(`${baseUrl}/countries/${countryCode}`);
    const responseData = await response.json();
    setGlobalState({ ...payload, indCountryInfo: responseData });
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="country-select-label">Country</InputLabel>
        <Select
          id="country-select"
          label="Country"
          labelId="country-label"
          onChange={handleChange}
          value={selectedCountry}>
          <MenuItem value="Worldwide">Worldwide</MenuItem>
          {countries.map((item: Country) => (
            <MenuItem key={item.country} value={item.countryInfo.iso2}>
              {item.country}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
