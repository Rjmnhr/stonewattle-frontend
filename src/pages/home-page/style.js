import { styled } from "styled-components";

export const AboutPageStyled = styled.div`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  .about-container {
    padding: 50px;
    text-align: justify;
  }

  .about-container p {
    padding: 5px;
    margin-bottom: 10px;
    font-size: 17px;
  }

  @media (max-width: 912px) {
    .about-container {
      padding: 10px;
    }
    .about-container p {
      font-size: 14px;
    }
    .about-container h2 {
      margin-top: 10px;
    }
  }
`;
