import { styled } from "styled-components";

export const NavBarStyled = styled.div`
  .nav-container {
    width: 99%;
    color: white;
    padding: 20px;
    background: #333333;
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

  .nav-container h1 {
    font-size: 34px;
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

    color: gainsboro;
  }

  .menu {
    display: none;
  }

  @media (max-width: 912px) {
    .sub-nav {
      display: none;

      z-index: 1;
      transition: 0.5s;
    }
    .nav-container h1 {
      font-size: 20px;
    }

    .nav-container {
      padding-left: 10px;
    }
    .menu {
      display: block;
    }
  }
`;
