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
    min-width: 100px;
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
    height: 150vh;
    overflow-y: scroll;
    margin-top: 50px;
    /* Hide the standard scrollbar for WebKit browsers */
    scrollbar-width: none;
    /* Hide the scrollbar for Firefox */
    -ms-overflow-style: none;
  }

  /* Hide the scrollbar for WebKit browsers */
  .table-container::-webkit-scrollbar {
    display: none;
  }
  .state-select {
    min-width: 200px;
    max-width: 500px;
  }

  .slider label,
  .great-for-label {
    width: 200px;
  }

  .checkbox-filter {
    display: flex;
    gap: 10px;
    align-items: start;
    justify-content: start;
    flex-wrap: wrap;
  }

  .checkbox-sub-filter {
    display: flex;
  }
  .checkbox-sub {
    margin-right: 10px;
    display: flex;
    align-items: center;
    justify-content: start;
    text-align: left;
  }
  input[type="checkbox"] {
    width: 15px;
    height: 15px;
    margin-right: 5px;
  }

  .green-circle,
  .yellow-circle,
  .red-circle,
  .blue-circle {
    width: 15px;
    height: 15px;
    border-radius: 100%;
  }

  .yellow-circle {
    background-color: yellow;
  }

  .green-circle {
    background-color: green;
  }
  .red-circle {
    background-color: red;
  }

  .blue-circle {
    background-color: blue;
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
    .checkbox-sub-filter {
      flex-direction: column;
      gap: 8px;
    }
    input[type="checkbox"] {
      width: 15px;
      height: 15px;
      margin-right: 5px;
    }
  }
`;
