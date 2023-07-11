import { styled } from "styled-components";

export const SuburbsPageStyled = styled.div`
  .suburbs-main-container {
    margin: 0;
    padding: 0;
    background-color: white;
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
`;
