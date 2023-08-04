import { styled } from "styled-components";

export const CreateProfileStyled = styled.div`
  form {
    display: flex;
    justify-content: start;
    gap: 15px;
    flex-direction: column;
    align-items: start;
    padding: 20px;
    margin: 10px;
    text-align: start;
    border: 1px solid gray;
  }

  .form-container {
    width: 100%;
    /* border: 1px solid white; */
    display: grid;
    padding: 15px;
    height: 100vh;
    place-items: center;
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
  .detail-input {
    display: grid;
    grid-gap: 10px;
    text-align: start;
  }
  .detail-input label {
    padding-left: 5px;
  }

  input,
  select {
    padding: 10px;
    margin: 5px;
    border: 1px solid gray;
    outline: none;
    border-radius: 8px;
    width: 200px;
  }

  button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  @media (max-width: 912px) {
    form {
      width: 80%;
    }
  }
`;
