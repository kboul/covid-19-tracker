import styled from "styled-components";
import { Circle, Popup } from "react-leaflet";
import numeral from "numeral";

import { useStore } from "../../hooks";
import { Country } from "../../models";
import { casesTypeColors } from "./constants";

export default function Circles() {
  const countries = useStore(state => state.countries);

  return (
    <>
      {countries.map((country: Country) => (
        <Circle
          center={[country.countryInfo.lat, country.countryInfo.long]}
          color={casesTypeColors.cases.hex}
          fillColor={casesTypeColors.cases.hex}
          fillOpacity={0.4}
          key={country.country}
          radius={Math.sqrt(country.cases * casesTypeColors.cases.multiplier)}>
          <Popup>
            <InfoFlag country={country} />
            <InfoName>{country.country}</InfoName>
            <InfoConfirmed>
              Cases: {numeral(country.cases).format("0,0")}
            </InfoConfirmed>
            <InfoRecovered>
              Recovered: {numeral(country.recovered).format("0,0")}
            </InfoRecovered>
            <InfoDeaths>
              Deaths: {numeral(country.deaths).format("0,0")}
            </InfoDeaths>
          </Popup>
        </Circle>
      ))}
    </>
  );
}

const InfoFlag = styled.div<{ country: Country }>`
  background-image: ${({ country }) => `url(${country.countryInfo.flag})`};
  height: 80px;
  width: 100%;
  background-size: cover;
  border-radius: 8px;

  img {
    width: 100px;
    border-radius: 5px;
  }
`;

const InfoCase = styled.div`
  font-size: 16px;
  margin-top: 5px;
`;

const InfoConfirmed = styled(InfoCase)``;

const InfoDeaths = styled(InfoCase)``;

const InfoName = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: #555;
`;

const InfoRecovered = styled(InfoCase)``;
