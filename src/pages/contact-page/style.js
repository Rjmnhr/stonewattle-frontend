import { styled } from "styled-components";

export const ContactPageStyled = styled.div`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  .contact-container {
    padding: 20px;
    text-align: left;
    display: grid;
    width: 100%;
    justify-items: start;
  }

  .contact-container p {
    padding: 5px;
    margin-bottom: 10px;
    font-size: 17px;
  }

  textarea {
    padding: 8px;
    border: 1px solid gray;
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
`;
