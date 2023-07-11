import { styled } from "styled-components";

export const ImageGridStyled = styled.div`
  .image-grid {
    display: flex;
    height: auto;
    justify-content: center;
    gap: 10px;
  }

  .image-collection {
    width: 100%;
    min-height: 100vh;
  }
  div[class^="tile-"] {
    width: 31%;
    min-height: 100vh;

    display: flex;
    gap: 10px;
    flex-direction: column;
    margin: 3px;
  }
  .card {
    background-repeat: no-repeat;
    background-size: cover;
  }
  .image-container {
    position: relative;
    display: inline-block;
  }

  .image-container::before {
    content: attr(data-name);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    font-size: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    transition: opacity 0.5s ease-in-out;
    font-weight: bold;
  }
  .image-container:hover::before {
    opacity: 1;
  }

  .image-container img {
    display: block;
    width: 100%;
    height: auto;
  }
`;
