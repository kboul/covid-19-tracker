import { Card, CardContent } from "@mui/material";
import styled from "styled-components";

import CasesByCountryTable from "./CasesByCountryTable";
import NewCasesLineGraph from "./NewCasesLineGraph";

export default function AppRight() {
  return (
    <Card>
      <CardContent>
        <CasesByCountry>Live Cases by Country</CasesByCountry>

        <CasesByCountryTable />

        <NewCases>Worldwide new cases</NewCases>

        <NewCasesLineGraph />
      </CardContent>
    </Card>
  );
}

const CasesByCountry = styled.h3``;

const NewCases = styled.h3``;
