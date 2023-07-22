import { styled } from "styled-components";

export const SuburbsPageStyled = styled.div`
  .suburbs-main-container {
    margin: 0;
    padding: 20px;
    background-color: white;
    width: 100%;
  }

  .suburbs-details {
    height: 70vh;
    overflow-y: auto;
    /* border-radius: 0px 0px 10px 10px; */
    /* border: 1px solid gray;
    border-top: none; */
  }

  .suburbs-table-heads {
    border-radius: 10px 10px 0px 0px;
    background-color: #fafafa;
  }

  .suburbs-table-heads,
  .suburbs-list {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;

    padding-left: 20px;
    padding-right: 20px;
  }

  .suburbs-data .suburbs-list {
    border-bottom: 1px solid gainsboro;
  }

  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }
  .suburbs-table-heads p {
    font-weight: bold;
  }
  .suburbs-list p {
    font-weight: 500;
    /* color: #1677ff; */
    color: gray;
  }

  p {
    min-width: 150px;
  }

  .filter-bar {
    display: flex;
    justify-content: end;
    align-items: center;
    gap: 10px;
  }
  .filter-sub-list {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }

  .filter-bar p {
    background-color: #fafafa;
    padding: 10px;
    border-radius: 5px;
    font-size: 14px;
    font-weight: 600;
    color: black;
  }
  a {
    text-decoration: none;
  }

  a:hover {
    opacity: 0.7;
  }
  table {
    border-collapse: collapse;
    width: 90%;
    table-layout: fixed;

    overflow-y: auto;
  }

  th {
    text-align: left;
    /* border: 1px solid red; */
    padding: 20px;
    position: sticky;
    top: 0;
    left: 0;
    background: #f8f8f8;
    color: black;
  }
  td {
    padding: 15px;
    text-align: left;
    border-bottom: 1px solid gainsboro;
    font-weight: 500;
    color: gray;
  }

  .table-header {
    background: #f8f8f8;
    border-radius: 10px 10px 0px 0px;
    color: black;
  }
  .table-container {
    height: 150vh;
    overflow-y: scroll;
    margin-top: 50px;
    /* Hide the standard scrollbar for WebKit browsers */
    /* scrollbar-width: none; */
    /* Hide the scrollbar for Firefox */
    /* -ms-overflow-style: none; */
  }

  /* Hide the scrollbar for WebKit browsers */
  .table-container::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 912px) {
    .suburbs-main-container {
      padding: 10px;
    }
    table {
      width: 100%;
    }
    th {
      font-size: 10px;
      padding: 10px;
    }
    td {
      font-size: 10px;
    }
  }
`;
