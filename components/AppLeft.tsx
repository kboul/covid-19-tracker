import styled from "styled-components";

import Header from "./Header";
import Map from "./Map";
import Statistics from "./Statistics";

export default function AppLeft() {
  return (
    <Container>
      <Header />

      <Statistics />

      <Map />
    </Container>
  );
}

const Container = styled.div`
  // uses 90% of the space
  flex: 0.9;
`;
