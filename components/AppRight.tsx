import { Card, CardContent } from "@mui/material";
import styled from "styled-components";

export default function AppRight() {
  return (
    <Card>
      <CardContent>
        <CasesByCountry>Live Cases by Country</CasesByCountry>

        <NewCases>Worldwide new cases</NewCases>
      </CardContent>
    </Card>
  );
}

const CasesByCountry = styled.h3``;

const NewCases = styled.h3``;
