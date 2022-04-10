import { Card, CardContent, Typography } from "@mui/material";
import styled from "styled-components";

interface InfoBoxProps {
  title: string;
  cases: number;
  total: number;
}

export default function InfoCard({ title, cases, total }: InfoBoxProps) {
  return (
    <Container>
      <Card>
        <CardContent>
          <Typography color="textSecondary">{title}</Typography>

          <Cases>{cases}</Cases>

          <Total color="textSecondary">{total}</Total>
        </CardContent>
      </Card>
    </Container>
  );
}

const Cases = styled.h2`
  color: #cc1034;
  font-weight: 600;
  font-size: 1.75rem;
  margin-bottom: 0.5rem;
`;

const Container = styled.div`
  flex: 1;

  :not(:last-child) {
    margin-right: 15px;
  }
`;

const Total = styled(Typography)`
  color: #6c757d;
  font-weight: 700;
  font-size: 0.8rem;
  margin-top: 15px;
`;
