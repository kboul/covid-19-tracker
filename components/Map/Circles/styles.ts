import styled from "styled-components";
import { Country } from "../../../models";

const InfoCase = styled.div`
  font-size: 16px;
  margin-top: 5px;
`;
const InfoFlag = styled.div<{ country: Country }>`
  background-image: ${({ country }) => `url(${country.countryInfo.flag})`};
  height: 80px;
  width: 100%;
  background-size: cover;
  border-radius: 8px;

  img {
    width: 100px;
    border-radius: 5px;
  }
`;

const InfoConfirmed = styled(InfoCase)``;

const InfoDeaths = styled(InfoCase)``;

const InfoName = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: #555;
`;

const InfoRecovered = styled(InfoCase)``;

export default {
  InfoCase,
  InfoConfirmed,
  InfoDeaths,
  InfoFlag,
  InfoName,
  InfoRecovered
};
