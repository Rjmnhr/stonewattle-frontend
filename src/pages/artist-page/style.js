import { styled } from "styled-components";

export const ArtistPageStyled = styled.div`
  .artist-page {
    padding: 0;
    min-height: 100vh;
    /* background-color: #edf0ee; */
    background-color: white;
    margin: 0;
  }

  .art-content {
    padding: 0;
    width: 350px;
    height: 400px;
  }

  .art-content img {
    height: 70%;
    width: 100%;
  }

  .display {
    padding: 10px;
    display: flex;
    align-items: center;
    color: #7a7a7a;
    text-align: start;
    justify-content: space-around;
  }
  .display h1 {
    font-size: 60px;
    /* border: 1px solid red; */
    width: 44%;
    padding-bottom: 30px;
  }

  .display img {
    width: 50%;
  }

  .arts-collection {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
    padding: 10px;
  }

  .artist {
    display: flex;
    padding: 10px;
    gap: 20px;
    text-align: start;
  }

  .artist img {
    width: 300px;
    height: 300px;
  }

  .artist button {
    border: none;
    outline: none;
    color: white;
    background-color: black;
    padding: 12px;
    margin-top: 10px;
  }
`;
