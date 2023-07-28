import React from "react";
import { NavBarStyled } from "./nav-bar-style";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
    localStorage.setItem("accessToken", "");
  };
  return (
    <>
      <NavBarStyled>
        <nav className="nav-container">
          <h1 style={{ paddingLeft: "20px" }}>2ndStorey</h1>

          <div className="dropdown">
            <div className="sub-nav">
              <p>About</p>
              <p>Products</p>
              <p>Contact</p>
              <p onClick={handleClick}>Log out</p>
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
