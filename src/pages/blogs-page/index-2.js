import React from "react";
import NavBar from "../../components/nav-bar/nav-bar";

import {
  BankOutlined,
  DollarOutlined,
  FieldTimeOutlined,
  HomeOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
export const infoArr = [
  <li className="text-center">
    <div className="d-flex d-lg-block ">
      <HomeOutlined className="mb-2 " style={{ fontSize: "24px" }} />
      <p className="mx-2 my-0">
        <strong>Dwelling Type</strong> :
      </p>{" "}
      <label> House</label>
    </div>
  </li>,
  <li className="text-center">
    <div className="d-flex d-lg-block ">
      <BankOutlined className="mb-2 " style={{ fontSize: "24px" }} />
      <p className="mx-2 my-0">
        <strong>Min Bedrooms</strong> :
      </p>{" "}
      <label> 2</label>
    </div>
  </li>,
  <li className="text-center">
    <div className="d-flex d-lg-block ">
      <FieldTimeOutlined className="mb-2 " style={{ fontSize: "24px" }} />
      <p className="mx-2 my-0">
        <strong>State</strong> :
      </p>{" "}
      <label>All States</label>
    </div>
  </li>,
  <li className="text-center">
    <div className="d-flex d-lg-block ">
      <DollarOutlined className="mb-2 " style={{ fontSize: "24px" }} />
      <p className="mx-2 my-0">
        <strong>Budget</strong> :
      </p>{" "}
      <label> $200,000</label>
    </div>
  </li>,
];
const BlogsPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>Blogs | 2nd Storey</title>

        {/* Add other meta tags, link tags, etc. as needed */}
      </Helmet>
      <NavBar />

      <div className="position-relative "></div>
      <div
        class="container content-space-2 content-space-lg-3 text-start "
        id="article"
      >
        <div class="row mb-5">
          <div class="col-12 ">
            <figure class="blockquote-lg text-center mb-3">
              <h2 className="h1">
                Australia's Top Rental Yields Unveiled: You’re Ultimate
                Investment Guide
              </h2>
            </figure>
          </div>
        </div>
        <div class="row mb-5">
          <div class="col-md-10 col-lg-8 offset-md-1 offset-lg-2">
            <img
              class="img-fluid"
              src={
                "https://res.cloudinary.com/dsw1ubwyh/image/upload/v1705578234/bspjgbcnhjvivjkknbzq.jpg"
              }
              alt="Description"
            />
          </div>
        </div>

        <div class="row mb-5">
          <div class="col-12  ">
            <p>
              Embarking on a quest to discover this week's highest rental yields
              in Australia? Look no further! We've streamlined the process for
              you
            </p>
            <div>
              <p>
                <span style={{ fontWeight: "600" }}>
                  1. Tailor Your Search:{" "}
                </span>
                <br />
                Choose your preferred dwelling type, minimum bedrooms, state,
                and budget to customize your property investment journey
              </p>

              <p>Our sample criteria : -</p>
            </div>

            <div className="d-lg-flex justify-content-around">
              {infoArr.map((item) => {
                return (
                  <div className="mb-3 mb-lg-0 border p-3 col-12 col-lg-2">
                    <div className="text-dark" style={{ fontSize: "16px" }}>
                      {item}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div>
          <p>
            <span style={{ fontWeight: "600" }}>
              2. Strategic Investment Planning:{" "}
            </span>
            <br />
            Leverage a data-driven approach, considering factors such as low
            vacancy rates, family-friendliness, and areas with the highest
            rental yields
          </p>
        </div>

        <div>
          <p>
            <span style={{ fontWeight: "600" }}>
              3. Real-time Suburb Insights:{" "}
            </span>
            <br />
            Delve into the details of suburbs that align with your criteria,
            including average days on the market, low supply, and more
          </p>
        </div>

        <div>
          <p>
            <span style={{ fontWeight: "600" }}>4. Top Matches Revealed: </span>
            <br />
            Explore the top 3 suburbs that stand out this week for generating
            the highest rental yields
          </p>

          <p>Our result : </p>
          <div className="d-lg-flex justify-content-start gap-3">
          <p  style={{ fontWeight: "600",color:"blue" }}>South Lismore in NSW</p>
          <p  style={{ fontWeight: "600",color:"blue" }}>Collie in WA </p>
          <p  style={{ fontWeight: "600",color:"blue" }}>Boulder in WA</p>
          </div>
        </div>

        <div class="col-12 col-lg-10 offset-lg-1 mb-3 mt-5">
          <figure class="blockquote-lg text-center mb-5">
            <h5>
              Ready to make well-informed property investment decisions?
              Register now at Suburb Selector | 2nd Storey and explore a curated
              list of suburbs tailored to your search criteria. Let's turn your
              investment dreams into reality
            </h5>
          </figure>
        </div>

        <div class="col-12 d-flex justify-content-center mb-3">
          <button
            onClick={() => navigate("/application")}
            className="btn btn-lg btn-primary"
          >
            Try Now!
          </button>
        </div>

        <div class="col-12 d-flex justify-content-center mt-8">
          <ul class="list-inline mb-0">
            <li class="list-inline-item">
              <a
                style={{ fontSize: "30px" }}
                class="btn btn-ghost-secondary btn-icon btn-sm rounded-circle"
                href="https://www.facebook.com/profile.php?id=61554994490511"
              >
                <i class="bi-facebook"></i>
              </a>
            </li>

            <li class="list-inline-item">
              <a
                style={{ fontSize: "30px" }}
                class="btn btn-ghost-secondary btn-icon btn-sm rounded-circle"
                href="https://www.linkedin.com/company/2ndstorey"
              >
                <i class="bi-linkedin"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default BlogsPage;
