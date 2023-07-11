import { styled } from "styled-components";

export const HomePageStyled = styled.div`
  .home-page-container {
    padding: 10px;
    display: flex;
    justify-content: center;
    width: 100%;
  }
  .filter-main-container {
    text-align: start;
    width: 50%;
  }

  .results-main-container {
    width: 50%;
    padding: 5px;
  }

  .search-box {
    display: flex;
    flex-direction: column;
    gap: 10px;
    justify-content: center;
    align-items: start;
    width: 90%;
    padding: 20px;
    /* background: linear-gradient(270deg, #494278 0, #2c2650 99.61%); */
    background-color: #f8f8f8;
    color: black;
    border-radius: 8px;
    box-shadow: 0px 3px 3px 0px gray;
  }

  select {
    padding: 5px;
    border-radius: 4px;
    border: 1px solid hsl(0, 0%, 80%);
    width: 200px;
    height: 38px;
    color: hsl(0, 0%, 50%);

    /* outline-color: #1677ff; */
  }

  .currency-input {
    height: 38px;

    width: 190px;
    border-radius: 4px;

    padding: 0;
    padding-left: 10px;

    border: 1px solid hsl(0, 0%, 80%);
  }

  .state-select {
    color: black;
  }
  select:focus {
    outline-color: #1677ff;
  }

  select::-ms-expand {
    outline-color: #1677ff;
  }

  select option {
    padding: 10px;
  }
  select option:hover {
    background-color: #1677ff;
  }
  .slider {
    display: flex;
    justify-content: start;
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
    padding: 12px;
    background: #333333;
    color: white;
    margin: 10px;
    border: none;
    margin-top: 20px;
  }

  table {
    border-collapse: collapse;
    width: 90%;

    overflow-y: auto;
  }

  th {
    text-align: left;

    padding: 8px;
  }
  td {
    padding: 8px;
    text-align: left;
    border-bottom: 1px solid gainsboro;
    font-weight: 500;
    color: gray;
  }

  .table-header {
    position: sticky;
    top: 0;
    background: #f8f8f8;
    color: black;
  }
  .table-container {
    height: 85vh;
    overflow-y: scroll;
  }
  .state-select {
    min-width: 200px;
    max-width: 500px;
  }

  .slider label {
    width: 200px;
  }
  .ant-row .css-dev-only-do-not-override-1wazalj {
    width: 150%;
  }

  @media (max-width: 912px) {
    .home-page-container {
      flex-direction: column;
    }
    .filter-main-container {
      width: 100%;
    }

    .results-main-container {
      width: 100%;
    }

    .search-box label {
      font-size: 14px;
    }
    .search-box input,
    select {
      width: 150px;
      padding: 5px;
    }

    .filter-main-container {
      text-align: center;
    }
    .header-caption {
      font-size: 14px;
    }
    /* .css-13cymwt-control {
      padding: 0px;
      max-width: 150px;
    } */

    .state-select {
      min-width: 150px;
      max-width: 250px;

      max-height: 180px;
      text-align: left;
    }

    .search-box {
      gap: 15px;
    }

    .slider {
      text-align: left;
    }
  }
`;
