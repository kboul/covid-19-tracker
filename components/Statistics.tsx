import styled from "styled-components";
import useStore, { initialSelectedCountry } from "../hooks/useStore";

import InfoCard from "./InfoCard";

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
        cases={countryInfo.todayCases}
        total={countryInfo.cases}
      />

      <InfoCard
        title="Recovered"
        cases={countryInfo.todayRecovered}
        total={countryInfo.recovered}
      />

      <InfoCard
        title="Deaths"
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
