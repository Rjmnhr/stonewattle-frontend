import { styled } from "styled-components";

export const LoginPagestyled = styled.div`
  form {
    display: flex;
    justify-content: center;

    gap: 10px;
    flex-direction: column;
    border: 1px solid black;
    padding: 10px;
    margin: 10px;

    text-align: start;
  }
  .login-container {
    display: grid;
    place-items: center;
    grid-gap: 20px;
  }

  .login-nav label {
    padding: 10px;
    background-color: black;
    color: white;
    margin: 10px;
  }
`;
