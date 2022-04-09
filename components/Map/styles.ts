import styled from "styled-components";

const Container = styled.div`
  margin: 20px 0px 0px 0px;
  height: 600px;
  background-color: white;
  padding: 1rem;
  border-radius: 20px;
  box-shadow: 0 0 8px -4px rgba(0, 0, 0, 0.5);

  @media (max-width: 990px) {
    margin-bottom: 20px;
  }
`;

export default { Container };
