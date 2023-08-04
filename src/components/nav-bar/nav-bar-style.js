import { styled } from "styled-components";

export const NavBarStyled = styled.div`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  .nav-container {
    width: 100%;
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

  .ant-menu-light,
  :where(.css-dev-only-do-not-override-txh9fw).ant-menu-light > .ant-menu {
    color: gainsboro;
    background: inherit;
    font-weight: bold;
    width: 400px;
  }

  .ant-menu-light
    .ant-menu-item:not(.ant-menu-item-selected):not(
      .ant-menu-submenu-selected
    ):hover {
    color: gainsboro;
  }

  .ant-menu-horizontal {
    line-height: 34px;
  }
  .sub-nav {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 40px;
    margin-right: 50px;

    color: gainsboro;
  }

  .menu-overlay {
    position: fixed;
    top: 0;
    right: -50%;
    width: 40%;
    height: 100%;
    background-color: #fff;
    z-index: 999;
    transition: right 0.3s ease-in-out;
    background-color: black;
    border: none;
    text-align: left;
  }

  .menu-overlay.show {
    right: 0;
  }

  a {
    text-decoration: none;
    color: white;
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

    .ant-menu-light,
    :where(.css-dev-only-do-not-override-txh9fw).ant-menu-light > .ant-menu {
      width: 50px;
    }
  }
`;
