import { useEffect, useRef } from "react";
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

  const ref = useRef<any>();

  useEffect(() => {
    if (ref?.current)
      ref.current.setStyle({ fillColor: casesTypeColors[casesType]?.hex });
  }, [casesType]);

  return (
    <>
      {countries.map((country: Country) => (
        <Circle
          ref={ref}
          center={[country.countryInfo.lat, country.countryInfo.long]}
          color={casesTypeColors[casesType]?.hex}
          fillColor={casesTypeColors[casesType]?.hex}
          fillOpacity={0.4}
          key={country.country}
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
