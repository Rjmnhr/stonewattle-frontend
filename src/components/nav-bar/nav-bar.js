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
      label: (
        <p style={{ color: "white" }} onClick={handleClick}>
          Log out
        </p>
      ),
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
          <h1 style={{ paddingLeft: "20px", color: "white" }}>2ndStorey</h1>
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

// const NavBar = () => {
//   return (
//     <>
//       <header
//         id="header"
//         className="navbar navbar-expand-lg navbar-end navbar-sticky-top navbar-show-hide navbar-dark bg-black"
//         data-hs-header-options='{
//           "fixMoment": 500,
//           "fixEffect": "slide"
//         }'
//       >
//         <div className="container">
//           <nav className="js-mega-menu navbar-nav-wrap">
//             <a className="navbar-brand" href="/home" aria-label="Unify">
//               <h3 className="light">2ndStorey</h3>
//             </a>

//             <button
//               className="navbar-toggler"
//               type="button"
//               data-bs-toggle="collapse"
//               data-bs-target="#navbarNavDropdown"
//               aria-controls="navbarNavDropdown"
//               aria-expanded="false"
//               aria-label="Toggle navigation"
//             >
//               <span className="navbar-toggler-default">
//                 <i className="bi-list"></i>
//               </span>
//               <span className="navbar-toggler-toggled">
//                 <i className="bi-x"></i>
//               </span>
//             </button>
//             <div className="collapse navbar-collapse" id="navbarNavDropdown">
//               <div className="navbar-sticky-top-scroller">
//                 <ul className="navbar-nav nav-pills">
//                   <li
//                     className="hs-has-mega-menu nav-item"
//                     data-hs-mega-menu-item-options='{
//                   "desktop": {
//                     "maxWidth": "40rem"
//                   }
//                 }'
//                   >
//                     <a
//                       id="landingsMegaMenu"
//                       className="hs-mega-menu-invoker nav-link dropdown-toggle "
//                       aria-current="page"
//                       href="/"
//                       role="button"
//                       aria-expanded="false"
//                     >
//                       Landings
//                     </a>

//                     <div
//                       className="hs-mega-menu dropdown-menu"
//                       aria-labelledby="landingsMegaMenu"
//                       style={{ minWidth: "25rem" }}
//                     >
//                       <div className="row">
//                         <div className="col-lg d-none d-lg-block">
//                           <div className="d-flex align-items-start flex-column bg-light rounded-3 h-100 p-4">
//                             <span className="fs-3 fw-bold d-block">
//                               Landings
//                             </span>
//                             <p className="text-body">
//                               Accelerate the way your business builds modern
//                               sites at scale.
//                             </p>
//                             <div className="mt-auto">
//                               <p className="mb-1">
//                                 <a
//                                   className="link link-dark link-pointer"
//                                   href="/"
//                                 >
//                                   Learn more
//                                 </a>
//                               </p>
//                               <p className="mb-1">
//                                 <a
//                                   className="link link-dark link-pointer"
//                                   href="/"
//                                 >
//                                   Why Unify Template
//                                 </a>
//                               </p>
//                             </div>
//                           </div>
//                         </div>

//                         <div className="col-sm">
//                           <div className="navbar-dropdown-menu-inner">
//                             <span className="dropdown-header">Classic</span>
//                             <a className="dropdown-item " href="../index.html">
//                               <i className="bi-building me-2"></i> Corporate
//                             </a>
//                             <a
//                               className="dropdown-item "
//                               href="../landing-business.html"
//                             >
//                               <i className="bi-briefcase me-2"></i> Business{" "}
//                               <span className="badge text-primary">New</span>
//                             </a>
//                             <a
//                               className="dropdown-item "
//                               href="../landing-consulting.html"
//                             >
//                               <i className="bi-chat-right-dots me-2"></i>{" "}
//                               Consulting{" "}
//                               <span className="badge text-primary">New</span>
//                             </a>
//                             <a
//                               className="dropdown-item "
//                               href="../landing-saas.html"
//                             >
//                               <i className="bi-tropical-storm me-2"></i> SaaS
//                             </a>
//                             <a
//                               className="dropdown-item "
//                               href="../landing-services.html"
//                             >
//                               <i className="bi-gear me-2"></i> Services
//                             </a>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </li>

//                   <li className="hs-has-mega-menu nav-item">
//                     <a
//                       id="pagesMegaMenu"
//                       className="hs-mega-menu-invoker nav-link dropdown-toggle "
//                       href="/"
//                       role="button"
//                       aria-expanded="false"
//                     >
//                       Pages
//                     </a>

//                     <div
//                       className="hs-mega-menu hs-position-right dropdown-menu w-100"
//                       aria-labelledby="pagesMegaMenu"
//                       style={{ minWidth: "42rem" }}
//                     >
//                       <div className="navbar-dropdown-menu-inner">
//                         <div className="row">
//                           <div className="col-sm-6 col-md-3">
//                             <span className="dropdown-header">Company</span>
//                             <a
//                               className="dropdown-item "
//                               href="../page-about.html"
//                             >
//                               About
//                             </a>
//                             <a
//                               className="dropdown-item "
//                               href="../page-customer-stories.html"
//                             >
//                               Customer Stories
//                             </a>
//                             <a
//                               className="dropdown-item "
//                               href="../page-customer-story.html"
//                             >
//                               Customer Story
//                             </a>
//                             <a
//                               className="dropdown-item "
//                               href="../page-help-center.html"
//                             >
//                               Help Center
//                             </a>
//                             <a
//                               className="dropdown-item "
//                               href="../page-help-center-categories.html"
//                             >
//                               Help Center: Categories
//                             </a>
//                             <a
//                               className="dropdown-item "
//                               href="../page-help-center-article.html"
//                             >
//                               Help Center: Article
//                             </a>
//                           </div>

//                           <div className="col-sm-6 col-md-3 mb-3 mb-md-0">
//                             <span className="dropdown-header invisible">
//                               Company
//                             </span>
//                             <a
//                               className="dropdown-item "
//                               href="../page-careers.html"
//                             >
//                               Careers
//                             </a>
//                             <a
//                               className="dropdown-item "
//                               href="../page-careers-role-overview.html"
//                             >
//                               Careers: Role Overview
//                             </a>
//                             <a
//                               className="dropdown-item "
//                               href="../page-careers-apply.html"
//                             >
//                               Careers: Apply
//                             </a>
//                             <a
//                               className="dropdown-item "
//                               href="../page-hire-us.html"
//                             >
//                               Hire Us
//                             </a>
//                             <a
//                               className="dropdown-item "
//                               href="../page-login.html"
//                             >
//                               Log In
//                             </a>
//                             <a
//                               className="dropdown-item "
//                               href="../page-signup.html"
//                             >
//                               Sign Up
//                             </a>
//                             <a
//                               className="dropdown-item "
//                               href="../page-reset-password.html"
//                             >
//                               Forgot Password
//                             </a>
//                           </div>

//                           <div className="col-sm-6 col-md-3 mb-3 mb-md-0">
//                             <span className="dropdown-header">Portfolio</span>
//                             <a
//                               className="dropdown-item "
//                               href="../portfolio-modern.html"
//                             >
//                               Modern
//                             </a>
//                             <a
//                               className="dropdown-item "
//                               href="../portfolio-case-study.html"
//                             >
//                               Case Study
//                             </a>
//                           </div>

//                           <div className="col-sm-6 col-md-3">
//                             <span className="dropdown-header">
//                               Specialty pages
//                             </span>
//                             <a
//                               className="dropdown-item "
//                               href="../page-pricing.html"
//                             >
//                               Pricing
//                             </a>
//                             <a
//                               className="dropdown-item "
//                               href="../page-contacts.html"
//                             >
//                               Contacts
//                             </a>
//                             <a
//                               className="dropdown-item "
//                               href="../page-coming-soon.html"
//                             >
//                               Coming Soon
//                             </a>
//                             <a
//                               className="dropdown-item "
//                               href="../page-coming-soon-simple.html"
//                             >
//                               Coming Soon: Simple
//                             </a>
//                             <a
//                               className="dropdown-item "
//                               href="../page-error-404.html"
//                             >
//                               Error 404
//                             </a>
//                             <a
//                               className="dropdown-item "
//                               href="../page-terms.html"
//                             >
//                               Terms & Conditions
//                             </a>
//                             <a
//                               className="dropdown-item "
//                               href="../page-privacy.html"
//                             >
//                               Privacy & Policy
//                             </a>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </li>
//                   <li
//                     className="hs-has-mega-menu nav-item"
//                     data-hs-mega-menu-item-options='{
//                   "desktop": {
//                     "maxWidth": "50rem"
//                   }
//                 }'
//                   >
//                     <a
//                       id="blogMegaMenu"
//                       className="hs-mega-menu-invoker nav-link dropdown-toggle "
//                       href="/"
//                       role="button"
//                       aria-expanded="false"
//                     >
//                       Blog
//                     </a>

//                     <div
//                       className="hs-mega-menu dropdown-menu"
//                       aria-labelledby="blogMegaMenu"
//                       style={{ minWidth: "12rem" }}
//                     >
//                       <div className="row">
//                         <div className="col-lg d-none d-lg-block">
//                           <div className="bg-light rounded-3 h-100 p-4">
//                             <span className="d-block fs-4 fw-bold text-dark mb-3">
//                               Latest from the Blog
//                             </span>

//                             <div className="row">
//                               <div className="col-md-6 mb-3 mb-md-0">
//                                 <a
//                                   className="d-block"
//                                   href="../documentation/index.html"
//                                 >
//                                   <img
//                                     className="img-fluid rounded-2 mb-2"
//                                     src="../assets/svg/components/card-1.svg"
//                                     alt="Description"
//                                   />

//                                   <span className="fs-4 fw-medium text-dark text-inherit">
//                                     Documentation
//                                   </span>
//                                   <p className="fs-6 text-body">
//                                     Development guides for building projects
//                                     with Unify
//                                   </p>
//                                   <span className="link link-pointer">
//                                     Learn more
//                                   </span>
//                                 </a>
//                               </div>
//                               <div className="col-md-6">
//                                 <a
//                                   className="d-block"
//                                   href="../snippets/index.html"
//                                 >
//                                   <img
//                                     className="img-fluid rounded-2 mb-2"
//                                     src="../assets/svg/components/card-2.svg"
//                                     alt="Description"
//                                   />

//                                   <span className="fs-4 fw-medium text-dark text-inherit">
//                                     Snippets
//                                   </span>
//                                   <p className="fs-6 text-body">
//                                     Move quickly with copy-to-clipboard feature
//                                   </p>
//                                   <span className="link link-pointer">
//                                     Learn more
//                                   </span>
//                                 </a>
//                               </div>
//                             </div>
//                           </div>
//                         </div>

//                         <div className="col-lg-4">
//                           <div className="navbar-dropdown-menu-inner">
//                             <span className="dropdown-header">Classic</span>
//                             <a
//                               className="dropdown-item "
//                               href="../blog-modern.html"
//                             >
//                               Modern{" "}
//                               <span className="badge text-primary">New</span>
//                             </a>
//                             <a
//                               className="dropdown-item "
//                               href="../blog-grid.html"
//                             >
//                               Grid
//                             </a>
//                             <a
//                               className="dropdown-item "
//                               href="../blog-list.html"
//                             >
//                               List
//                             </a>
//                             <a
//                               className="dropdown-item "
//                               href="../blog-article.html"
//                             >
//                               Article{" "}
//                               <span className="badge text-primary">New</span>
//                             </a>
//                             <a
//                               className="dropdown-item "
//                               href="../blog-author-profile.html"
//                             >
//                               Author Profile
//                             </a>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </li>
//                   <li
//                     className="hs-has-mega-menu nav-item"
//                     data-hs-mega-menu-item-options='{
//                   "desktop": {
//                     "maxWidth": "20rem"
//                   }
//                 }'
//                   >
//                     <a
//                       id="docsMegaMenu"
//                       className="hs-mega-menu-invoker nav-link dropdown-toggle "
//                       href="/"
//                       role="button"
//                       aria-expanded="false"
//                     >
//                       Docs
//                     </a>

//                     <div
//                       className="hs-mega-menu hs-position-right-fix dropdown-menu"
//                       aria-labelledby="docsMegaMenu"
//                       style={{ minWidth: "20rem" }}
//                     >
//                       <a
//                         className="navbar-dropdown-menu-media-link"
//                         href="../documentation/index.html"
//                       >
//                         <div className="d-flex">
//                           <div className="flex-shrink-0">
//                             <i className="bi-file-earmark-text fs-2 text-dark"></i>
//                           </div>

//                           <div className="flex-grow-1 ms-3">
//                             <span className="navbar-dropdown-menu-media-title">
//                               Documentation{" "}
//                               <span className="badge badge-sm bg-primary rounded-pill ms-1">
//                                 v3.1
//                               </span>
//                             </span>
//                             <p className="navbar-dropdown-menu-media-desc">
//                               Development guides for building projects with
//                               Unify
//                             </p>
//                           </div>
//                         </div>
//                       </a>
//                       <div className="dropdown-divider"></div>

//                       <a
//                         className="navbar-dropdown-menu-media-link"
//                         href="../snippets/index.html"
//                       >
//                         <div className="d-flex">
//                           <div className="flex-shrink-0">
//                             <i className="bi-layers fs-2 text-dark"></i>
//                           </div>

//                           <div className="flex-grow-1 ms-3">
//                             <span className="navbar-dropdown-menu-media-title">
//                               Snippets
//                             </span>
//                             <p className="navbar-dropdown-menu-media-desc">
//                               Move quickly with copy-to-clipboard feature
//                             </p>
//                           </div>
//                         </div>
//                       </a>
//                     </div>
//                   </li>
//                   <li className="nav-item ms-lg-auto">
//                     <a
//                       className="btn btn-ghost-dark me-2 me-lg-0"
//                       href="../page-login.html"
//                     >
//                       Log in
//                     </a>
//                     <a
//                       className="btn btn-dark d-lg-none"
//                       href="../page-signup.html"
//                     >
//                       Sign up
//                     </a>
//                   </li>
//                   <li className="nav-item">
//                     <a
//                       className="btn btn-dark d-none d-lg-inline-block"
//                       href="../page-signup.html"
//                     >
//                       Sign up
//                     </a>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </nav>
//         </div>
//       </header>
//     </>
//   );
// };

export default NavBar;
