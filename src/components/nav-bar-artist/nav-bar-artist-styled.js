import { styled } from "styled-components";

export const NavBarArtistStyled = styled.div`
  .nav-container {
    width: 100%;
    color: white;
    padding: 15px;
    /* background-color: #edf0ee; */
    position: static;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 20px;
    border-bottom: 1px solid gainsboro;
    background-color: black;
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
