import { styled } from "styled-components";

export const HomePageStyled = styled.div`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  .home-page-container {
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
  }

  .results-main-container {
    width: 100%;
    padding: 5px;
  }

  .filter-main-page-container {
    width: 1200px;
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

  .search-sub-box {
    width: 100%;
    display: flex;
    justify-content: start;
    align-items: center;
    margin-top: 20px;
    gap: 200px;
  }

  select {
    padding: 5px;
    border-radius: 4px;
    border: 1px solid hsl(0, 0%, 80%);
    width: 400px;
    height: 38px;
    color: hsl(0, 0%, 50%);
    padding-right: 20px;

    /* outline-color: #1677ff; */
  }

  .state-select,
  .basic-filter {
    min-width: 200px;
    max-width: 500px;
    color: black;
    text-align: start;
  }

  .currency-input {
    height: 38px;
    outline: none;
    width: 200px;
    border-radius: 4px;

    padding: 0;
    padding-left: 10px;

    border: 1px solid hsl(0, 0%, 80%);
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
    width: 36%;
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
    /* scrollbar-width: 10px; */
    /* Hide the scrollbar for Firefox */
  }

  /* Hide the scrollbar for WebKit browsers */
  /* .table-container::-webkit-scrollbar {
    display: none;
  } */

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

  .disabled-button {
    opacity: 0.7; /* You can adjust the opacity to make it visually disabled */
    cursor: not-allowed;
  }

  /* Styles for the icon */

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

  /* Hide the default drop-down arrow */

  /* Style the options (optional) */
  select#customSelect option {
    background-color: #fff;
    color: #333;
  }

  p {
    margin: 20px;
  }
  .ant-collapse {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: rgba(0, 0, 0, 0.88);
    font-size: 14px;
    line-height: 1.5714285714285714;
    list-style: none;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji",
      "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    background-color: transparent;
    /* border: 1px solid #d9d9d9; */
    /* border-bottom: 0; */
    border-style: none;
    /* border-radius: 8px; */
  }

  .ant-collapse > .ant-collapse-item {
    border-style: none;
  }
  .ant-collapse > .ant-collapse-item > .ant-collapse-header {
    align-items: center;
    padding-bottom: 10px;
  }

  .ant-collapse
    > .ant-collapse-item
    > .ant-collapse-header
    > .ant-collapse-header-text {
    text-align: start;
  }

  .budget-alert {
    color: red;
    margin: 0;
    font-size: 14px;
    margin-top: 5px;
  }

  /* @media (max-width: 1250px) {
    .filter-main-page-container {
      width: 1022px;
    }
  } */

  @media (max-width: 1050px) {
    .filter-main-page-container {
      width: 1040px;
    }
  }

  @media (max-width: 912px) {
    .home-page-container {
      flex-direction: column;
    }
    .filter-main-page-container {
      width: 900px;
    }

    .results-main-container {
      width: 100%;
    }

    .search-box label {
      font-size: 14px;
    }

    select {
      width: 150px;
      padding: 5px;
    }
    .currency-input {
      height: 38px;
      outline: none;
      width: 150px;
      border-radius: 4px;

      padding: 0;
      padding-left: 10px;

      border: 1px solid hsl(0, 0%, 80%);
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

    .state-select,
    .basic-filter {
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
    .ant-row .css-dev-only-do-not-override-1wazalj {
      width: 230%;
    }
    .search-filter {
      width: 100%;
    }

    .filter-info {
      width: 80%;
      text-align: center;
      font-size: 14px;
    }
    .search-sub-box {
      flex-direction: column;
      margin-top: 0;
      gap: 15px;
    }

    .budget-alert {
      font-size: 9px;
    }
  }

  @media (max-width: 850px) {
    .filter-main-page-container {
      width: 100%;
    }
  }

  @media (max-width: 500px) {
    .filter-main-page-container {
      width: 412px;
    }
  }

  @media (max-width: 360px) {
    .filter-main-page-container {
      width: 360px;
    }
  }
`;
