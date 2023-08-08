import React, { useEffect, useState } from "react";
import { useRef } from "react";
// import { NavBarStyled } from "./nav-bar-style";
import { useLocation, useNavigate } from "react-router-dom";
import { useApplicationContext } from "../../context/app-context";
// import useMediaQuery from "@mui/material/useMediaQuery";
// import { Menu } from "antd";
// import { MenuOutlined } from "@ant-design/icons";

// const NavBar = () => {
//   const [current, setCurrent] = useState("home");
//   const isSmallScreen = useMediaQuery("(max-width: 768px)");
//   const [showMenu, setShowMenu] = useState(false);
//   const navigate = useNavigate();
//   const Location = useLocation();

//   useEffect(() => {
//     if (Location.pathname === "/home") {
//       setCurrent("home");
//     } else if (Location.pathname === "/about") {
//       setCurrent("about");
//     } else if (Location.pathname === "/pricing") {
//       setCurrent("pricing");
//     } else if (Location.pathname === "/contact") {
//       setCurrent("contact");
//     }
//   }, [Location.pathname, current]);

//   const handleSwitch = (e) => {
//     setCurrent(e.key);
//   };

// const handleClick = () => {
//   navigate("/");
//   localStorage.setItem("accessToken", "");
// };

//   const items = [
//     {
//       label: <a href="/home">Home</a>,
//       key: "home",
//     },
//     {
//       label: <a href="/about">About</a>,
//       key: "about",
//     },
//     {
//       label: <a href="/pricing">Pricing</a>,
//       key: "pricing",
//     },
//     {
//       label: <a href="/contact">Contact</a>,
//       key: "contact",
//     },
//     {
//       label: (
//         <p style={{ color: "white" }} onClick={handleClick}>
//           Log out
//         </p>
//       ),
//       key: "log-out",
//     },
//   ];

//   const menu = (
//     <Menu
//       onClick={handleSwitch}
//       selectedKeys={[current]}
//       mode="horizontal"
//       items={items}
//     />
//   );

//   // const dropdown = (
//   //   <Dropdown overlay={menu}>
//   //     <div className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
//   //       Menu
//   //     </div>
//   //   </Dropdown>
//   // );

//   const toggleMenu = () => {
//     setShowMenu(!showMenu);
//   };

//   return (
//     <>
//       <NavBarStyled>
//         <nav className="nav-container">
//           <h1 style={{ paddingLeft: "20px", color: "white" }}>2ndStorey</h1>
//           {isSmallScreen ? (
//             <>
//               <MenuOutlined className="menu-icon" onClick={toggleMenu} />
//               <div className={`menu-overlay ${showMenu ? "show" : ""}`}>
//                 <div style={{ background: " #333333", padding: "22px" }}>
//                   <MenuOutlined className="menu-icon" onClick={toggleMenu} />
//                 </div>

//                 <div className="nav-options">
//                   {items.map((option) => {
//                     return (
//                       <p
//                         style={{
//                           color: "white",
//                           padding: "12px",
//                           fontWeight: "bold",
//                           borderBottom: "1px solid gray",
//                         }}
//                       >
//                         {option.label}
//                       </p>
//                     );
//                   })}
//                 </div>
//               </div>
//             </>
//           ) : (
//             menu
//           )}
//         </nav>
//       </NavBarStyled>
//     </>
//   );
// };

const NavBar = () => {
  const navigate = useNavigate();
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [dropdownActive, setDropdownActive] = useState(false);
  const divRef = useRef(null);
  const { setDropdownHeight } = useApplicationContext();
  const isAdmin = localStorage.getItem("isAdmin");

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;

    setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
    setPrevScrollPos(currentScrollPos);
  };

  const handleLogOut = () => {
    navigate("/");
    localStorage.setItem("accessToken", "");
  };

  const navbarStyles = {
    transition: "top 0.3s",
    top: visible ? "0" : "-100px", // Adjust the value as needed
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
    // eslint-disable-next-line
  }, [prevScrollPos, visible]);
  useEffect(() => {
    if (dropdownActive) {
      if (divRef.current) {
        const height = divRef.current.clientHeight;
        console.log("height", height);
        setDropdownHeight(height);
      }
    } else {
      setDropdownHeight(null);
    }
  }, [dropdownActive]);

  return (
    <>
      <header
        id="header"
        style={navbarStyles}
        className={`navbar navbar-expand-lg navbar-end navbar-sticky-top navbar-show-hide border-bottom bg-white  `}
        data-hs-header-options='{
          "fixMoment": 500,
          "fixEffect": "slide"
        }'
      >
        <div className="container">
          <nav className="js-mega-menu navbar-nav-wrap">
            <a
              style={{ fontSize: "25px" }}
              className="navbar-brand fw-bold "
              href="/home"
            >
              2ndStorey
            </a>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={() => setDropdownActive(!dropdownActive)}
            >
              <span className="navbar-toggler-default">
                <i className="bi-list"></i>
              </span>
              <span className="navbar-toggler-toggled">
                <i className="bi-x"></i>
              </span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <div ref={divRef} className="navbar-sticky-top-scroller">
                <ul className="navbar-nav nav-pills">
                  <li
                    className="hs-has-mega-menu nav-item"
                    data-hs-mega-menu-item-options='{
                  "desktop": {
                    "maxWidth": "40rem"
                  }
                }'
                  ></li>

                  <li className="hs-has-mega-menu nav-item">
                    <a
                      id="pagesMegaMenu"
                      className="hs-mega-menu-invoker nav-link dropdown-toggle "
                      href="/pricing"
                      role="button"
                      aria-expanded="false"
                    >
                      Pricing
                    </a>

                    <div
                      className="hs-mega-menu hs-position-right dropdown-menu w-100"
                      aria-labelledby="pagesMegaMenu"
                      style={{ minWidth: "42rem" }}
                    ></div>
                  </li>
                  <li
                    className="hs-has-mega-menu nav-item"
                    data-hs-mega-menu-item-options='{
                  "desktop": {
                    "maxWidth": "50rem"
                  }
                }'
                  >
                    <a
                      id="blogMegaMenu"
                      className="hs-mega-menu-invoker nav-link dropdown-toggle "
                      href="/about"
                      role="button"
                      aria-expanded="false"
                    >
                      About us
                    </a>
                  </li>
                  <li
                    className="hs-has-mega-menu nav-item"
                    data-hs-mega-menu-item-options='{
                  "desktop": {
                    "maxWidth": "20rem"
                  }
                }'
                  >
                    <a
                      id="docsMegaMenu"
                      className="hs-mega-menu-invoker nav-link dropdown-toggle "
                      href="/contact"
                      role="button"
                      aria-expanded="false"
                    >
                      Contact us
                    </a>
                  </li>
                  <li className="nav-item ms-lg-auto">
                    <p
                      onClick={handleLogOut}
                      className="btn btn-ghost-dark me-2 me-lg-0 p-0 m-0"
                      href="../page-login.html"
                    >
                      Log out
                    </p>
                    {isAdmin === "true" ? (
                      <a className="btn btn-dark d-lg-none" href="/suburbs">
                        Dashboard
                      </a>
                    ) : (
                      ""
                    )}
                  </li>

                  <li className="nav-item">
                    {isAdmin === "true" ? (
                      <a
                        className="btn border  p-2 d-none d-lg-inline-block"
                        href="/suburbs"
                      >
                        Dashboard
                      </a>
                    ) : (
                      ""
                    )}
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default NavBar;
