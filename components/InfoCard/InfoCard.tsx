import { Card, CardContent, Typography } from "@mui/material";

import Styled from "./styles";
import { formatNumber } from "./utils";

interface InfoBoxProps {
  title: string;
  cases: number;
  total: number;
}

export default function InfoCard({ title, cases, total }: InfoBoxProps) {
  return (
    <Styled.Container>
      <Card>
        <CardContent>
          <Typography color="textSecondary">{title}</Typography>

          <Styled.Cases>{formatNumber(cases)}</Styled.Cases>

          <Styled.Total color="textSecondary">
            {formatNumber(total)} Total
          </Styled.Total>
        </CardContent>
      </Card>
    </Styled.Container>
  );
}
