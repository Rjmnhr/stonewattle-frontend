import React, { useEffect, useState } from "react";
import { NavBarStyled } from "./nav-bar-style";
import { useLocation, useNavigate } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Menu } from "antd";
import { MenuOutlined } from "@ant-design/icons";

const NavBar = () => {
  const [current, setCurrent] = useState("home");
  const isSmallScreen = useMediaQuery("(max-width: 768px)");
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();
  const Location = useLocation();

  useEffect(() => {
    if (Location.pathname === "/home") {
      setCurrent("home");
    } else if (Location.pathname === "/about") {
      setCurrent("about");
    } else if (Location.pathname === "/pricing") {
      setCurrent("pricing");
    } else if (Location.pathname === "/contact") {
      setCurrent("contact");
    }
  }, [Location.pathname, current]);

  const handleSwitch = (e) => {
    setCurrent(e.key);
  };

  const handleClick = () => {
    navigate("/");
    localStorage.setItem("accessToken", "");
  };

  const items = [
    {
      label: <a href="/home">Home</a>,
      key: "home",
    },
    {
      label: <a href="/about">About</a>,
      key: "about",
    },
    {
      label: <a href="/pricing">Pricing</a>,
      key: "pricing",
    },
    {
      label: <a href="/contact">Contact</a>,
      key: "contact",
    },
    {
      label: <p onClick={handleClick}>Log out</p>,
      key: "log-out",
    },
  ];

  const menu = (
    <Menu
      onClick={handleSwitch}
      selectedKeys={[current]}
      mode="horizontal"
      items={items}
    />
  );

  // const dropdown = (
  //   <Dropdown overlay={menu}>
  //     <div className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
  //       Menu
  //     </div>
  //   </Dropdown>
  // );

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <NavBarStyled>
        <nav className="nav-container">
          <h1 style={{ paddingLeft: "20px" }}>2ndStorey</h1>
          {isSmallScreen ? (
            <>
              <MenuOutlined className="menu-icon" onClick={toggleMenu} />
              <div className={`menu-overlay ${showMenu ? "show" : ""}`}>
                <div style={{ background: " #333333", padding: "22px" }}>
                  <MenuOutlined className="menu-icon" onClick={toggleMenu} />
                </div>

                <div className="nav-options">
                  {items.map((option) => {
                    return (
                      <p
                        style={{
                          color: "white",
                          padding: "12px",
                          fontWeight: "bold",
                          borderBottom: "1px solid gray",
                        }}
                      >
                        {option.label}
                      </p>
                    );
                  })}
                </div>
              </div>
            </>
          ) : (
            menu
          )}
        </nav>
      </NavBarStyled>
    </>
  );
};

export default NavBar;
