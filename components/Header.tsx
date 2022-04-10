import styled from "styled-components";

import CountrySelect from "./CountrySelect";

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

const TitleHeader = styled.h1`
  color: #fc3c3c;
  font-size: 2rem;
`;
