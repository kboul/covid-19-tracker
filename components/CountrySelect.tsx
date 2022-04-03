import { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

import Country from "../models/country";
import { useStore } from "../hooks";

export default function CountrySelect() {
  const countries = useStore(state => state.countries);

  const [country, setCountry] = useState("Worldwide");

  const handleChange = (event: SelectChangeEvent<string>) => {
    setCountry(event.target.value);
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
          value={country}>
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
