import { styled } from "styled-components";

export const NavBarStyled = styled.div`
  .nav-container {
    width: 100%;
    color: black;
    padding: 15px;
    /* background-color: #edf0ee; */
    position: static;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 20px;
    border-bottom: 1px solid gainsboro;
  }

  .nav-container h1,
  p {
    margin: 0;
  }

  .sub-nav p {
    font-weight: bold;
    cursor: pointer;
  }

  .sub-nav {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 40px;
    margin-right: 50px;

    color: gray;
  }
`;
