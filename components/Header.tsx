import styled from "styled-components";

import { SelectCountry } from ".";
import Country from "../models/country";

interface HeaderProps {
  countries: Country[];
}

export default function Header({ countries }: HeaderProps) {
  return (
    <Container>
      <TitleHeader>Covid-19 Tracker</TitleHeader>
      <SelectCountry data={countries} />
    </Container>
  );
}

const Container = styled.div``;
const TitleHeader = styled.h1``;
