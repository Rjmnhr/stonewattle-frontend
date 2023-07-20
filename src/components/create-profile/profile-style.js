import { styled } from "styled-components";

export const CreateProfileStyled = styled.div`
  form {
    display: flex;
    justify-content: center;
    gap: 15px;
    flex-direction: column;
    box-shadow: 0px 3px 3px 0px gray;
    padding: 10px;
    margin: 10px;
    width: 30%;
    background-color: #f8f8f8;
    text-align: start;
  }

  .form-container {
    width: 100%;
    /* border: 1px solid white; */
    display: grid;
    place-items: center;
    padding: 15px;
    height: 100vh;
  }
  button[type="submit"] {
    padding: 10px;
    background: #a8a7a7;
    color: black;
    border: none;
    outline: none;
    font-weight: bolder;
    width: 95%;
    margin-top: 20px;
  }

  .detail-input {
    display: grid;
    grid-gap: 10px;
    text-align: start;
    font-weight: bold;
    font-size: 18px;
  }
  .detail-input label {
    padding-left: 5px;
  }

  .form-container input {
    padding: 10px;
    margin: 5px;
    border-style: none;

    outline: none;

    width: 90%;
  }

  @media (max-width: 912px) {
    form {
      width: 80%;
    }
  }
`;
