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
  // for flex-growing the map on the map comp
  display: flex;
  flex-direction: column;
  // for expanding left content from left to right
  flex: 1;
`;
