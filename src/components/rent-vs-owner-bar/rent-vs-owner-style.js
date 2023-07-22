import { styled } from "styled-components";

export const RentVsOwnerStyled = styled.div`
  .main-container {
    width: 100px;
  }

  .rent-bar-style,
  .owner-bar-style {
    font-size: 10px;
  }

  @media (max-width: 912px) {
    .main-container {
      width: 60px;
    }

    .rent-bar-style,
    .owner-bar-style {
      font-size: 8px;
    }
  }
`;
