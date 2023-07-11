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
    margin-bottom: 30px;
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
  .display2 {
    width: 100%;
    height: 100vh;
  }

  .display2 img {
    width: 100%;
    height: 100vh;
  }

  .nav-cards {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    height: 300px;
  }

  .card-1 {
    background-color: rgb(162, 5, 162);
  }

  .card-2 {
    background-color: powderblue;
  }

  .card-3 {
    background-color: rgb(17, 198, 17);
  }

  .card-4 {
    background-color: rgb(231, 231, 3);
  }

  div[class^="card-"] {
    width: 280px;
    height: 280px;
    display: grid;
    place-items: center;
    color: white;
  }
  h1 {
    text-align: start;
    padding: 10px;
    padding-left: 20px;
    margin: 0;
  }
  .container-image {
    position: relative;
    background-color: black;
  }

  .image-transition {
    transition: opacity 0.5s ease-in-out; /* Add desired transition properties */
    /* Set the initial background color */
  }

  .image-transition.active {
    opacity: 0; /* Change the opacity to 0 during the transition */
  }
`;
