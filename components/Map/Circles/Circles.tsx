import { Circle, Popup } from "react-leaflet";
import numeral from "numeral";

import Styled from "./styles";
import { useStore } from "../../../hooks";
import { Country } from "../../../models";
import { casesTypeColors } from "../constants";
import { getRadius } from "./utils";

export default function Circles() {
  const casesType = useStore(state => state.casesType);
  const countries = useStore(state => state.countries);

  return (
    <>
      {countries.map((country: Country) => (
        <Circle
          center={[country.countryInfo.lat, country.countryInfo.long]}
          fillOpacity={0.4}
          key={country.country}
          pathOptions={{
            color: casesTypeColors[casesType]?.hex,
            fillColor: casesTypeColors[casesType]?.hex
          }}
          radius={getRadius(casesType, country)}>
          <Popup>
            <Styled.InfoFlag country={country} />
            <Styled.InfoName>{country.country}</Styled.InfoName>
            <Styled.InfoConfirmed>
              Cases: {numeral(country.cases).format("0,0")}
            </Styled.InfoConfirmed>
            <Styled.InfoRecovered>
              Recovered: {numeral(country.recovered).format("0,0")}
            </Styled.InfoRecovered>
            <Styled.InfoDeaths>
              Deaths: {numeral(country.deaths).format("0,0")}
            </Styled.InfoDeaths>
          </Popup>
        </Circle>
      ))}
    </>
  );
}
