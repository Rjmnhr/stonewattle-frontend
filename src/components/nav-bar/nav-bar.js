import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useApplicationContext } from "../../context/app-context";

const NavBar = () => {
  const navigate = useNavigate();
  // const [prevScrollPos, setPrevScrollPos] = useState(0);
  // const [visible, setVisible] = useState(true);
  const [dropdownActive, setDropdownActive] = useState(false);
  const divRef = useRef(null);
  const { setDropdownHeight } = useApplicationContext();
  const isAdmin = localStorage.getItem("isAdmin");

  // const handleScroll = () => {
  //   const currentScrollPos = window.pageYOffset;

  //   setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
  //   setPrevScrollPos(currentScrollPos);
  // };
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  const handleLogOut = () => {
    navigate("/");
    localStorage.setItem("accessToken", "");
    localStorage.setItem("isLoggedIn", false);
  };

  // const navbarStyles = {
  //   transition: "top 0.3s",
  //   top: visible ? "0" : "-100px", // Adjust the value as needed
  // };

  const handleApplication = () => {
    // if (isLoggedIn === "true") {
    //   navigate("/application");
    // } else {
    //   navigate("/login-app");
    // }
    navigate("/application");
  };

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  //   // eslint-disable-next-line
  // }, [prevScrollPos, visible]);

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
    // eslint-disable-next-line
  }, [dropdownActive]);

  return (
    <>
      <header
        id="header"
        // style={navbarStyles}
        className={`navbar navbar-expand-lg navbar-end navbar-top navbar-show-hide border-bottom bg-white  `}
        data-hs-header-options='{
          "fixMoment": 500,
          "fixEffect": "slide"
        }'
      >
        <div className="container-fluid px-3 px-lg-8">
          <nav className="js-mega-menu navbar-nav-wrap">
            <div className="d-flex justify-content-center align-items-center gap-1">
              <img
                src="https://res.cloudinary.com/dsw1ubwyh/image/upload/v1694782112/wtvxtlngwymogr2o15un.png"
                alt="logo"
                style={{ width: "30px", height: "30px" }}
              />
              <a
                style={{ fontSize: "25px" }}
                className="navbar-brand fw-bold"
                href="/"
              >
                2nd Storey
              </a>
            </div>

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
            <div
              style={{ transition: "all 0.3s ease" }}
              className="collapse navbar-collapse"
              id="navbarNavDropdown"
            >
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
                  <li
                    className="hs-has-mega-menu nav-item"
                    data-hs-mega-menu-item-options='{
                  "desktop": {
                    "maxWidth": "20rem"
                  }
                }'
                  >
                    <p
                      id="docsMegaMenu"
                      className="hs-mega-menu-invoker nav-link mb-0 fs-3 "
                      onClick={handleApplication}
                      role="button"
                      aria-expanded="false"
                    >
                      Select suburb
                    </p>
                  </li>

                  {/* <li className="hs-has-mega-menu nav-item">
                    <a
                      id="pagesMegaMenu"
                      className="hs-mega-menu-invoker nav-link  d-lg-block d-flex justify-content-start  "
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
                  </li> */}

                  <li
                    className="hs-has-mega-menu nav-item mb-3 mb-lg-0"
                    data-hs-mega-menu-item-options='{
                  "desktop": {
                    "maxWidth": "20rem"
                  }
                }'
                  >
                    <a
                      id="docsMegaMenu"
                      className="hs-mega-menu-invoker nav-link  fs-3  "
                      href="/contact"
                      role="button"
                      aria-expanded="false"
                    >
                      Contact us
                    </a>
                  </li>

                  <li className="nav-item ms-lg-auto">
                    {isLoggedIn === "true" ? (
                      <p
                        onClick={handleLogOut}
                        className="btn btn-primary p-2 me-2 border me-lg-0 w-100   m-0"
                      >
                        Log out
                      </p>
                    ) : (
                      <a
                        className="btn btn-primary p-2 me-2 border  w-100 me-lg-0  m-0"
                        href="/login"
                      >
                        Log in
                      </a>
                    )}

                    {isAdmin === "true" ? (
                      <a className="btn  p-2  d-lg-none" href="/suburbs">
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
