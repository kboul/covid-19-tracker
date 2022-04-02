import { Card, CardContent, Typography } from "@mui/material";
import styled from "styled-components";

interface InfoBoxProps {
  title: string;
  cases: number;
  total: number;
}

export default function InfoCard({ title, cases, total }: InfoBoxProps) {
  return (
    <Card>
      <CardContent>
        <Typography color="textSecondary">{title}</Typography>

        <Cases>{cases}</Cases>

        <Typography color="textSecondary">{total} Total</Typography>
      </CardContent>
    </Card>
  );
}

const Cases = styled.h2``;
