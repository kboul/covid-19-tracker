import styled from "styled-components";

import { CountrySelect } from ".";

export default function Header() {
  return (
    <Container>
      <TitleHeader>Covid-19 Tracker</TitleHeader>

      <CountrySelect />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  justify-content: space-between;
`;

const TitleHeader = styled.h1``;
