import React from "react";
import NavBar from "../../components/nav-bar/nav-bar";
// import { useApplicationContext } from "../../context/app-context";

const HomePage = () => {
  // const { dropdownHeight } = useApplicationContext();
  return (
    <>
      <NavBar />
      <div
        style={{
          // marginTop: `${dropdownHeight ? `${dropdownHeight}px` : "0px"}`,
          transition: "all 0.3s ease",
          display: "grid",
          placeItems: "center",
        }}
        className="container content-space w-100 home-page-container"
      >
        <div className="w-lg-100 p-lg-1 p-3 mt-lg-3 mt-1  text-center mx-lg-auto mb-5 mb-sm-7 mb-lg-10 ">
          <p style={{ textAlign: "left" }}>
            We are a technology AI company using property data to bring to you a
            one-stop platform for all your needs. We have been investing in the
            Australian property market over the last 10 years and have more than
            $4m worth of property portfolio.
          </p>
          <p style={{ textAlign: "left" }}>
            We have helped more than 50 investors use our platform, and who have
            amassed more than $25m of property across the whole nation.
          </p>
          <p style={{ textAlign: "left" }}>
            Over the last 5 years we have been capturing property data from
            various sources and used all our investment strategies to provide
            all tools you need to make an investment.
          </p>
          <p style={{ textAlign: "left" }}>
            Our proprietary Machine Learning algorithm can also help predict
            suburbs which are more likely to grow. We don’t provide specific
            property details - we still encourage you to visit domain and real
            estate websites to complete your research. However, our products
            will help you shortlist which suburbs are best suited for you.
          </p>
          <p style={{ textAlign: "left" }}>Our data is refreshed each week.</p>
        </div>
      </div>
    </>
  );
};

export default HomePage;
