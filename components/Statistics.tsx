import styled from "styled-components";

import InfoCard from "./InfoCard";

export default function Statistics() {
  return (
    <Container>
      <InfoCard title="Coronavirus cases" cases={123} total={2000} />

      <InfoCard title="Recovered" cases={1234} total={3000} />

      <InfoCard title="Deaths" cases={12345} total={4000} />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;
