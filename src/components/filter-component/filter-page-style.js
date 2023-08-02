import { styled } from "styled-components";

export const FilterPageStyled = styled.div`
  .category-container {
    width: 950px;
    transition: transform 0.3s ease-in-out; /* Add the transition property */
  }

  .filter-main-container {
    margin: 0;
    display: flex;
    justify-content: center;
    width: 100%;
    align-items: center;
    min-height: 60vh;
    flex-direction: column-reverse;

    /* border: 1px solid blue; */
  }

  .bucket-container {
    display: grid;
    place-items: center;
    align-content: center;
  }
  .filter-item-container p {
    color: white;
  }
  .bucket-main-container {
    display: flex;
    justify-content: space-around;
    gap: 10px;
    /* width: 100%; */
    height: 100%;
  }

  .filter-item-container {
    transition: all 0.3s, visibility 0s;
  }

  @media (max-width: 1050px) {
    .category-container {
      width: 600px;
    }
  }

  @media (max-width: 912px) {
    .filter-main-container {
      justify-content: center;
      align-items: center;
    }

    .filter-item-container p {
      font-size: 14px;
    }

    .bucket-main-container {
      flex-direction: column;
    }

    .category-container {
      width: 700px;
    }
  }

  @media (max-width: 850px) {
    .category-container {
      width: 100%;
    }
  }

  /* @media (max-width: 500px) {
    .category-container {
      width: 350px;
    }
  }

  @media (max-width: 400px) {
    .category-container {
      width: 255px;
    }
  } */
`;
