import { styled } from "styled-components";

export const FilterMobileStyled = styled.div`
  /* FilterDropdown.css */

  /* Filter container styles */
  /* FilterMobile.css */
  .filter-mobile-container {
    display: grid;
    place-items: center;
    width: 400px;
  }

  .filter-dropdown {
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    padding: 10px;
    border: 1px solid gray;
    color: gray;
    border-radius: 5px;
    width: 200px;
    margin: 10px;
  }

  .filter-dropdown:hover {
    background: #f8f8f8;
    color: black;
  }

  .option-circle {
    width: 10px;
    height: 10px;
    border-radius: 50%;
  }

  @media (max-width: 550px) {
    .filter-mobile-container {
      width: 300px;
    }
  }

  @media (max-width: 361px) {
    .filter-mobile-container {
      width: 250px;
    }
  }
`;
