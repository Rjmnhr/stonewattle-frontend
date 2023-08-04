import { styled } from "styled-components";

export const PricingPageStyled = styled.div`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .pricing-container {
    padding: 30px;
    display: flex;
    justify-content: center;
    gap: 30px;
    align-items: center;
    min-height: 90vh;
  }

  .pricing-bucket {
    border: 1px solid gray;
    display: grid;
    place-items: center;
    padding: 10px;
    height: 50vh;
    width: 20vw;
  }

  .pricing-bucket h2 {
    font-size: 40px;
  }

  .pricing-budget {
    display: flex;
    justify-content: center;
    align-items: start;
  }

  .price {
    font-weight: bold;
    font-size: 40px;
  }
  .price span {
    font-weight: normal;
    font-size: 15px;
    padding-bottom: 8px;
  }

  .dollar-icon {
    font-weight: bold;
    padding-top: 3px;
    font-size: 19px;
  }

  button {
    padding: 12px;
    background: #333333;
    color: white;
    margin: 10px;
    border: none;
    margin-top: 20px;
    min-width: 100px;
  }

  @media (max-width: 912px) {
    .pricing-container {
      flex-direction: column;
    }
    .pricing-bucket {
      width: 70vw;
    }
  }
`;
