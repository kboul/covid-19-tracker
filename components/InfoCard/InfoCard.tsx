import { Card, CardContent, Typography } from "@mui/material";

import Styled from "./styles";
import { useStore } from "../../hooks";
import { formatNumber } from "./utils";

interface InfoBoxProps {
  cases: number;
  isGreen: boolean;
  title: string;
  total: number;
  type: string;
}

export default function InfoCard({
  cases,
  isGreen,
  title,
  total,
  type
}: InfoBoxProps) {
  const casesType = useStore(state => state.casesType);
  const setCasesType = useStore(state => state.setCasesType);

  const handleClick = () => setCasesType(type);

  return (
    <Styled.Container
      active={type === casesType}
      isGreen={isGreen}
      onClick={handleClick}>
      <Card>
        <CardContent>
          <Typography color="textSecondary">{title}</Typography>

          <Styled.Cases isGreen={isGreen}>{formatNumber(cases)}</Styled.Cases>

          <Styled.Total color="textSecondary">
            {formatNumber(total)} Total
          </Styled.Total>
        </CardContent>
      </Card>
    </Styled.Container>
  );
}
