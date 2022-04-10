import styled from "styled-components";
import { Typography } from "@mui/material";

const Cases = styled.h2`
  color: #cc1034;
  font-weight: 600;
  font-size: 1.75rem;
  margin-bottom: 0.5rem;
`;

const Container = styled.div<{ active: boolean; isGreen: boolean }>`
  flex: 1;
  cursor: pointer;
  border-top: ${({ active, isGreen }) =>
    active ? `10px solid ${isGreen ? "greenyellow" : "red"}` : "0px"};

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

export default { Cases, Container, Total };
