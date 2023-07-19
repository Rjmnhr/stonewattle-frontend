import React from "react";
import { NavBarStyled } from "./nav-bar-style";

const NavBar = () => {
  return (
    <>
      <NavBarStyled>
        <nav className="nav-container">
          <h1>2ndStorey</h1>

          <div className="dropdown">
            <div className="sub-nav">
              <p>About</p>
              <p>Products</p>
              <p>Contact</p>
            </div>
          </div>
          <div class="menu" id="togglebutton">
            &#9776;
          </div>
        </nav>
      </NavBarStyled>
    </>
  );
};

export default NavBar;
