import styled from "styled-components";

export const StyledSalesList = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  gap: 4%;
  overflow: scroll;
  overflow-wrap: normal;
  align-content: flex-start;

  @media (min-width: 1024px) {
    flex-wrap: wrap;
    overflow: auto;
    max-width: 90%;
    height: 100%;
    align-self: center;
  }
`;
