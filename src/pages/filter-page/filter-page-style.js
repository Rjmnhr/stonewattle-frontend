import { styled } from "styled-components";

export const FilterPageStyled = styled.div`
  .category-container {
    width: 500px;
  }

  .filter-main-container {
    display: flex;
    justify-content: center;
    width: 100%;
    align-items: center;
    min-height: 60vh;
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

  @media (max-width: 912px) {
    .filter-main-container {
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    .filter-item-container p {
      font-size: 14px;
    }
    .category-container {
      width: 90%;
    }
  }
`;
