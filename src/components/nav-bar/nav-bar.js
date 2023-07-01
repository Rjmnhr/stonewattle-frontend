import React from "react";
import { NavBarStyled } from "./nav-bar-style";
import { SearchOutlined } from "@ant-design/icons";

const NavBar = () => {
  return (
    <>
      <NavBarStyled>
        <nav className="nav-container">
          <h1 style={{ fontSize: "34px" }}>StoneWattle</h1>
          <div className="sub-nav">
            <SearchOutlined />
            <p>About</p>
            <p>Products</p>
            <p>Contact</p>
          </div>
        </nav>
      </NavBarStyled>
    </>
  );
};

export default NavBar;
