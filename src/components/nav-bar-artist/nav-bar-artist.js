import React from "react";

import { SearchOutlined } from "@ant-design/icons";
import { NavBarArtistStyled } from "./nav-bar-artist-styled";

const NavBarArtist = () => {
  return (
    <>
      <NavBarArtistStyled>
        <nav className="nav-container">
          <h1 style={{ fontSize: "34px" }}>
            Risheet.<span>com</span>
          </h1>
          <div className="sub-nav">
            <SearchOutlined />
            <p>About</p>
            <p>Products</p>
            <p>Contact</p>
          </div>
        </nav>
      </NavBarArtistStyled>
    </>
  );
};

export default NavBarArtist;
