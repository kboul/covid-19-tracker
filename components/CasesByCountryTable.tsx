import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow
} from "@mui/material";

import { useStore } from "../hooks";
import { Country } from "../models";

const sortCountriesByCases = (countries: Country[]) => {
  return [...countries].sort((a, b) => (a.cases > b.cases ? -1 : 1));
};

const getBackground = (index: number) => {
  return index % 2 ? "#ffffff" : "#f3f2f8";
};

const countryStyle = { color: "#6a5d5d" };
const casesStyle = { fontWeight: "bold" };

export default function CasesByCountryTable() {
  const countries = useStore(state => state.countries);

  const sortedCountries = sortCountriesByCases(countries);

  return (
    <TableContainer
      component={Paper}
      sx={{ mt: 2, mb: 2, height: 400, overflowY: "scroll" }}>
      <Table aria-label="countries table">
        <TableBody>
          {sortedCountries.map((country, index) => (
            <TableRow
              key={country.country}
              sx={{ background: getBackground(index) }}>
              <TableCell sx={countryStyle}>{country.country}</TableCell>
              <TableCell sx={casesStyle}>{country.cases}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
