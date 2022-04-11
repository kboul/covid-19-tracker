import { Card, CardContent } from "@mui/material";
import styled from "styled-components";

import CasesByCountryTable from "./CasesByCountryTable";
import NewCasesLineGraph from "./NewCasesLineGraph";

export default function AppRight() {
  return (
    <MuiCard>
      <CardContent>
        <CasesByCountry>Live Cases by Country</CasesByCountry>

        <CasesByCountryTable />

        <NewCases>Worldwide new cases</NewCases>

        <NewCasesLineGraph />
      </CardContent>
    </MuiCard>
  );
}

const CasesByCountry = styled.h3``;

const MuiCard = styled(Card)`
  flex: 0.45;
  margin-left: 20px;

  @media (max-width: 990px) {
    margin-left: 0px;
  }
`;

const NewCases = styled.h3``;
