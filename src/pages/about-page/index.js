import React from "react";
import NavBar from "../../components/nav-bar/nav-bar";
import { AboutPageStyled } from "./style";

const AboutPage = () => {
  return (
    <>
      <NavBar />
      <AboutPageStyled>
        <div className="about-container">
          <h1 style={{ marginBottom: "20px", paddingLeft: "10px" }}>
            About us
          </h1>
          <p>
            We are a technology AI company using property data to bring to you a
            one-stop platform for all your needs. We have been investing in the
            Australian property market over the last 10 years and have more than
            $4m worth of property portfolio.
          </p>
          <p>
            We have helped more than 50 investors use our platform, and who have
            amassed more than $25m of property across the whole nation.
          </p>
          <p>
            Over the last 5 years we have been capturing property data from
            various sources and used all our investment strategies to provide
            all tools you need to make an investment.
          </p>
          <p>
            Our proprietary Machine Learning algorithm can also help predict
            suburbs which are more likely to grow. We don’t provide specific
            property details - we still encourage you to visit domain and real
            estate websites to complete your research. However, our products
            will help you shortlist which suburbs are best suited for you.
          </p>
          <p>Our data is refreshed each week.</p>
        </div>
      </AboutPageStyled>
    </>
  );
};

export default AboutPage;
