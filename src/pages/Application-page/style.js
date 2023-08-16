import { styled } from "styled-components";

export const HomePageStyled = styled.div`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    transition: "all 0.3s ease";
  }

  .filter-dropdown:hover,
  .state-select:hover,
  .basic-filter:hover,
  .currency-input:hover {
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);
  }

  .search-sub-box {
    /* width: 100%;
    display: flex; */
    justify-content: space-around;
    /* align-items: center; */
    margin-top: 20px;
    gap: 30px;
  }

  .state-select,
  .basic-filter {
    width: 200px;

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
  */ .search-label {
    display: inline-block;
    width: 200px;
    text-align: left;
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
    max-height: 100vh;
    overflow-y: scroll;
    margin-top: 20px;
    /* Hide the standard scrollbar for WebKit browsers */
    /* scrollbar-width: 10px; */
    /* Hide the scrollbar for Firefox */
  }

  /* Hide the scrollbar for WebKit browsers */
  .table-container::-webkit-scrollbar {
    display: none;
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
    background-color: #708090;
  }

  .green-circle {
    background-color: #36454f;
  }
  .red-circle {
    background-color: #e3e1e1;
  }

  .blue-circle {
    background-color: #b2beb5;
  }

  .filter-info,
  .color-circles-legend {
    display: flex;
    width: 100%;
    justify-content: space-around;
    gap: 15px;
    margin-top: 30px;
  }

  .ant-collapse > .ant-collapse-item > .ant-collapse-header {
    align-items: center;
    padding-bottom: 10px;
    padding-left: 10px;
    flex-direction: row-reverse;
  }

  .ant-collapse
    > .ant-collapse-item
    > .ant-collapse-header
    .ant-collapse-arrow
    svg {
    transition: transform 0.3s;
    transform: rotate(180deg);
  }

  @media (max-width: 912px) {
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

    .ant-collapse > .ant-collapse-item > .ant-collapse-header {
      text-align: left;
    }
  }

  @media (max-width: 412px) {
    .currency-input {
      width: 190px;
    }
  }
`;
