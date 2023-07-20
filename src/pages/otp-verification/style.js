import { styled } from "styled-components";

export const OtpVerificationPageStyled = styled.div`
  .main-container {
    display: flex;
    align-items: center;
  }

  .left-container {
    width: 50%;
    display: grid;
    place-items: center;
    height: 100vh;
    background: black;
    color: white;
    padding: 20px;
  }

  .left-container h1 {
    font-size: 80px;
  }

  .right-container {
    width: 60%;
    display: grid;
    place-items: center;
    height: 100vh;
    padding: 20px;
    background: #f8f8f8;
  }
  .right-sub-container {
    text-align: start;
  }

  [id^="otp"] {
    margin: 5px;
  }

  button {
    padding: 12px;
    background: #333333;
    color: white;

    border: none;

    width: 150px;
  }

  @media (max-width: 912px) {
    .left-container {
      display: none;
    }
    .right-container {
      width: 100%;
    }
  }
`;
