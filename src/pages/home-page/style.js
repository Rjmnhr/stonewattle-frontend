import { styled } from "styled-components";

export const HomePageStyled = styled.div`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    transition: "all 0.3s ease";
  }
  //   /* .home-page-container {
  //     padding: 10px;
  //     display: flex;
  //     justify-content: center;
  //     align-items: center;
  //     flex-direction: column;
  //     width: 100%;
  //   } */

  //   .results-main-container {
  //     width: 100%;
  //     padding: 5px;
  //     display: flex;
  //     justify-content: center;
  //     align-items: start;
  //   }

  //   .result-left-container,
  //   .result-right-container {
  //     width: 50%;
  //     padding: 10px;
  //   }

  .map-container {
    width: 100%;
    height: 100vh;
  }

  //   .filter-main-page-container {
  //     width: 1200px;
  //   }
  //   .ant-collapse-header {
  //     width: 1010px;
  //     margin: 0;
  //   }
  //   .search-box {
  //     display: flex;
  //     flex-direction: column;
  //     gap: 10px;
  //     justify-content: center;
  //     align-items: start;

  //     padding: 20px;

  //     color: black;
  //     border-radius: 8px;
  //     /* box-shadow: 0px 3px 3px 0px gray; */
  //   }

  //   .search-sub-main-box {
  //     width: 100%;
  //   }

  .search-sub-box {
    /* width: 100%;
    display: flex; */
    justify-content: space-around;
    /* align-items: center; */
    margin-top: 20px;
    gap: 30px;
  }

  //   select {
  //     padding: 5px;
  //     border-radius: 4px;
  //     border: 1px solid hsl(0, 0%, 80%);
  //     width: 400px;
  //     height: 38px;
  //     color: hsl(0, 0%, 50%);
  //     padding-right: 20px;

  //     /* outline-color: #1677ff; */
  //   }

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
  */

  //   select:focus {
  //     outline-color: #1677ff;
  //   }

  //   select::-ms-expand {
  //     outline-color: #1677ff;
  //   }

  //   select option {
  //     padding: 10px;
  //   }
  //   select option:hover {
  //     background-color: #1677ff;
  //   }
  //   .slider {
  //     display: flex;
  //     justify-content: start;
  //     align-items: center;
  //     width: 100%;
  //     gap: 10px;
  //   }

  .search-label {
    display: inline-block;
    width: 200px;
    text-align: left;
  }
  //   input {
  //     width: 100px;
  //   }

  //   button {
  //     padding: 12px;
  //     background: #333333;
  //     color: white;
  //     margin: 10px;
  //     border: none;
  //     margin-top: 20px;
  //     min-width: 100px;
  //   }

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
    max-height: 100vh;
    overflow-y: scroll;
    margin-top: 50px;
    /* Hide the standard scrollbar for WebKit browsers */
    /* scrollbar-width: 10px; */
    /* Hide the scrollbar for Firefox */
  }

  /* Hide the scrollbar for WebKit browsers */
  .table-container::-webkit-scrollbar {
    display: none;
  }

  //   .slider label,
  //   .great-for-label {
  //     width: 200px;
  //   }

  //   .checkbox-filter {
  //     display: flex;
  //     gap: 10px;
  //     align-items: start;
  //     justify-content: start;
  //     flex-wrap: wrap;
  //   }

  //   .checkbox-sub-filter {
  //     display: flex;
  //   }
  //   .checkbox-sub {
  //     margin-right: 10px;
  //     display: flex;
  //     align-items: center;
  //     justify-content: start;
  //     text-align: left;
  //   }
  //   input[type="checkbox"] {
  //     width: 15px;
  //     height: 15px;
  //     margin-right: 5px;
  //   }

  //   .disabled-button {
  //     opacity: 0.7; /* You can adjust the opacity to make it visually disabled */
  //     cursor: not-allowed;
  //   }

  //   /* Styles for the icon */

  .green-circle,
  .yellow-circle,
  .red-circle,
  .blue-circle {
    width: 15px;
    height: 15px;
    border-radius: 100%;
  }

  .yellow-circle {
    background-color: #ffd700;
  }

  .green-circle {
    background-color: #32cd32;
  }
  .red-circle {
    background-color: #ff7f50;
  }

  .blue-circle {
    background-color: #87ceeb;
  }

  .filter-info,
  .color-circles-legend {
    display: flex;
    width: 100%;
    justify-content: center;
    gap: 15px;
    margin-top: 30px;
  }

  //.ant-row .css-dev-only-do-not-override-1wazalj {
  //     width: 150%;
  //   }

  //   /* Hide the default drop-down arrow */

  //   /* Style the options (optional) */
  //   select#customSelect option {
  //     background-color: #fff;
  //     color: #333;
  //   }

  //   p {
  //     margin: 20px;
  //   }
  //   .ant-collapse {
  //     box-sizing: border-box;
  //     margin: 0;
  //     padding: 0;
  //     color: rgba(0, 0, 0, 0.88);
  //     font-size: 14px;
  //     line-height: 1.5714285714285714;
  //     list-style: none;
  //     font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
  //       "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji",
  //       "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";

  //     /* border: 1px solid #d9d9d9; */
  //     /* border-bottom: 0; */
  //     border-style: none;
  //     /* border-radius: 8px; */
  //   }
  //   .ant-collapse .ant-collapse-content > .ant-collapse-content-box {
  //     background-color: #f8f8f8;
  //   }

  //   .ant-collapse > .ant-collapse-item {
  //     border-style: none;
  //     text-align: left;
  //   }

  .ant-collapse > .ant-collapse-item > .ant-collapse-header {
    align-items: center;
    padding-bottom: 10px;
    padding-left: 10px;
    flex-direction: row-reverse;
  }

  //   .ant-collapse
  //     > .ant-collapse-item
  //     > .ant-collapse-header
  //     > .ant-collapse-header-text {
  //     text-align: start;
  //   }

  .ant-collapse
    > .ant-collapse-item
    > .ant-collapse-header
    .ant-collapse-arrow
    svg {
    transition: transform 0.3s;
    transform: rotate(180deg);
  }

  //   .budget-alert {
  //     color: red;
  //     margin: 0;
  //     font-size: 14px;
  //     margin-top: 5px;
  //   }

  //   .infilter-dropdown-container {
  //     position: absolute;
  //     top: 100%;
  //     left: 0;
  //     z-index: 1;
  //     background: "#fff";
  //     padding: 0;
  //     margin: 0;
  //     list-style: none;
  //     border: 1px solid #ccc;
  //     border-radius: 4px;
  //     box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  //     overflow-y: auto;
  //     max-height: "30vh";
  //   }

  //   /* @media (max-width: 1250px) {
  //     .filter-main-page-container {
  //       width: 1022px;
  //     }
  //   } */

  //   @media (max-width: 1050px) {
  //     .filter-main-page-container {
  //       width: 1040px;
  //     }
  //     .ant-collapse-header {
  //       width: 870px;
  //     }
  //   }

  @media (max-width: 912px) {
    //     .home-page-container {
    //       flex-direction: column;
    //     }
    //     .filter-main-page-container {
    //       width: 900px;
    //     }
    //     .ant-collapse-header {
    //       width: 740px;
    //     }

    //     .results-main-container {
    //       width: 100%;
    //       flex-direction: column;
    //     }

    //     .result-left-container,
    //     .result-right-container {
    //       width: 100%;
    //     }

    //     .result-right-container {
    //       padding-top: 30px;
    //     }

    //     .search-box label {
    //       font-size: 14px;
    //       text-align: start;
    //     }

    //     select {
    //       width: 150px;
    //       padding: 5px;
    //     }
    //     .currency-input {
    //       height: 38px;
    //       outline: none;
    //       width: 150px;
    //       border-radius: 4px;

    //       padding: 0;
    //       padding-left: 10px;

    //       border: 1px solid hsl(0, 0%, 80%);
    //     }

    //     .filter-main-container {
    //       text-align: center;
    //     }
    //     .header-caption {
    //       font-size: 14px;
    //     }
    //     /* .css-13cymwt-control {
    //       padding: 0px;
    //       max-width: 150px;
    //     } */

    //     .state-select,
    //     .basic-filter {
    //       min-width: 150px;
    //       max-width: 250px;

    //       max-height: 180px;
    //       text-align: left;
    //     }

    //     .search-box {
    //       gap: 15px;
    //     }

    //     .slider {
    //       text-align: left;
    //     }
    //     .checkbox-sub-filter {
    //       flex-direction: column;
    //       gap: 8px;
    //     }
    //     input[type="checkbox"] {
    //       width: 15px;
    //       height: 15px;
    //       margin-right: 5px;
    //     }
    //     .ant-row .css-dev-only-do-not-override-1wazalj {
    //       width: 230%;
    //     }
    //     .search-filter {
    //       width: 100%;
    .filter-info {
      width: 100%;
      gap: 10px;
      font-size: 12px;
    }

    .color-circles-legend {
      width: 100%;
      gap: 10px;
      font-size: 12px;
    }

    /* .ant-collapse > .ant-collapse-item > .ant-collapse-header {
      text-align: left;
    } */
  }

  //     .search-sub-box {
  //       flex-direction: column;
  //       margin-top: 0;
  //       gap: 15px;
  //     }
  //     .search-sub-main-box {
  //       display: grid;
  //       grid-gap: 15px;
  //     }
  //     .budget-alert {
  //       font-size: 9px;
  //     }
  //   }

  //   @media (max-width: 850px) {
  //     .filter-main-page-container {
  //       width: 800px;
  //     }
  //     .ant-collapse-header {
  //       width: 600px;
  //     }
  //   }

  //   @media (max-width: 500px) {
  //     .filter-main-page-container {
  //       width: 412px;
  //     }
  //     .ant-collapse-header {
  //       width: 310px;
  //     }
  //   }

  //   @media (max-width: 412px) {
  //     .filter-main-page-container {
  //       width: 380px;
  //     }

  //     .ant-collapse-header {
  //       width: 290px;
  //     }
  //   }

  //   @media (max-width: 380px) {
  //     .filter-main-page-container {
  //       width: 380px;
  //     }
  //     .ant-collapse-header {
  //       width: 100%;
  //     }
  //   }
`;
