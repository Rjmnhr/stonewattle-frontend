import React from "react";
import { PricingPageStyled } from "./style";
import NavBar from "../../components/nav-bar/nav-bar";
// import { Carousel } from "antd";

const PricingPage = () => {
  return (
    <>
      <NavBar />
      <PricingPageStyled>
        <div className="pricing-container">
          <div className="pricing-bucket">
            <h2>
              Single <br /> <span>Use</span>{" "}
            </h2>
            <div className="pricing-budget">
              <p className="dollar-icon">$</p> <p className="price">50</p>
            </div>

            <button>Start</button>
            <p style={{ color: "black" }}>Learn more</p>
          </div>
          <div className="pricing-bucket">
            <h2>
              Monthly <br /> <span>User</span>
            </h2>
            <div className="pricing-budget">
              <p className="dollar-icon">$</p>
              <p
                className="price"
                style={{ display: "flex", alignItems: "end", gap: "2px" }}
              >
                300 <span>/ month</span>{" "}
              </p>
            </div>
            <button>Start</button>
            <p style={{ color: "black" }}>Learn more</p>
          </div>
          <div className="pricing-bucket">
            <h2>
              Heavy <br /> <span>User</span>
            </h2>
            <div className="pricing-budget">
              <p className="dollar-icon">$</p>
              <p
                className="price "
                style={{ display: "flex", alignItems: "end", gap: "2px" }}
              >
                1,000<span> / year</span>
              </p>
            </div>
            <button>Start</button>
            <p style={{ color: "black" }}>Learn more</p>
          </div>
          {/* <Carousel>
            <div style={contentStyle} className="pricing-bucket">
              <h2>
                Single <br /> <span>Use</span>{" "}
              </h2>
              <div className="pricing-budget">
                <p className="dollar-icon">$</p> <p className="price">50</p>
              </div>

              <button>Start</button>
              <p style={{ color: "black" }}>Learn more</p>
            </div>
            <div className="pricing-bucket">
              <h2>
                Monthly <br /> <span>User</span>
              </h2>
              <div className="pricing-budget">
                <p className="dollar-icon">$</p>
                <p
                  className="price"
                  style={{ display: "flex", alignItems: "end", gap: "2px" }}
                >
                  300 <span>/ month</span>{" "}
                </p>
              </div>
              <button>Start</button>
              <p style={{ color: "black" }}>Learn more</p>
            </div>
            <div className="pricing-bucket">
              <h2>
                Heavy <br /> <span>User</span>
              </h2>
              <div className="pricing-budget">
                <p className="dollar-icon">$</p>
                <p
                  className="price "
                  style={{ display: "flex", alignItems: "end", gap: "2px" }}
                >
                  1,000<span> / year</span>
                </p>
              </div>
              <button>Start</button>
              <p style={{ color: "black" }}>Learn more</p>
            </div>
          </Carousel> */}
        </div>
      </PricingPageStyled>
    </>
  );
};

export default PricingPage;
