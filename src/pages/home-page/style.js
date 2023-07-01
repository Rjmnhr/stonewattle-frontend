import { styled } from "styled-components";

export const HomePageStyled = styled.div`
  .home-page-container {
    text-align: start;
    padding: 10px;
  }
  .search-box {
    display: flex;
    flex-direction: column;
    gap: 10px;
    justify-content: center;
    align-items: start;
    width: 50%;
    padding: 10px;
    margin: 10px;
    border: 1px solid black;
  }

  .slider {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    gap: 10px;
  }

  .search-filter {
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: center;
    gap: 30px;
  }
  input {
    width: 100px;
  }

  button {
    padding: 10px;
    background-color: black;
    color: white;
    margin: 10px;
    border: none;
    margin: 20px;
  }
`;
