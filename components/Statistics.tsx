import styled from "styled-components";

import InfoCard from "./InfoCard";
import { useStore } from "../hooks";
import { initialSelectedCountry } from "../constants";

export default function Statistics() {
  const allCountryInfo = useStore(state => state.allCountryInfo);
  const indCountryInfo = useStore(state => state.indCountryInfo);
  const selectedCountry = useStore(state => state.selectedCountry);

  const countryInfo =
    selectedCountry === initialSelectedCountry
      ? allCountryInfo
      : indCountryInfo;

  return (
    <Container>
      <InfoCard
        title="Coronavirus cases"
        type="cases"
        cases={countryInfo.todayCases}
        total={countryInfo.cases}
      />

      <InfoCard
        title="Recovered"
        type="recovered"
        cases={countryInfo.todayRecovered}
        total={countryInfo.recovered}
      />

      <InfoCard
        title="Deaths"
        type="deaths"
        cases={countryInfo.todayDeaths}
        total={countryInfo.deaths}
      />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;
