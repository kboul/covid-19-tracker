import styled from "styled-components";

import Header from "./Header";
import Map from "./Map";
import Statistics from "./Statistics";
import Country from "../models/country";

interface AppLeftProps {
  countries: Country[];
}

export default function AppLeft({ countries }: AppLeftProps) {
  return (
    <Container>
      <Header countries={countries} />

      <Statistics />

      <Map />
    </Container>
  );
}

const Container = styled.div`
  // uses 90% of the space
  flex: 0.9;
`;
