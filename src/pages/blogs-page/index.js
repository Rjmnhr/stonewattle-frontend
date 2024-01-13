import React from "react";
import NavBar from "../../components/nav-bar/nav-bar";
import blogImage1 from "../../images/2ndstorey-blog-1.jpg";

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
      <label> 3</label>
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
      <label> $500,000</label>
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
                Are you looking to invest? Let’s say you have $500,000 and open
                to investing in any state.
              </h2>
            </figure>
          </div>
        </div>
        <div class="row mb-5">
          <div class="col-md-10 col-lg-8 offset-md-1 offset-lg-2">
            <img class="img-fluid" src={blogImage1} alt="Description" />
          </div>
        </div>

        <div class="row mb-5">
          <div class="col-12  ">
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
        <div class="col-12 mb-5 ">
          <figure class=" text-center mb-3">
            <h4>The following 3 suburbs will be great for you:</h4>
          </figure>
        </div>
        <div class="row  text-center mb-3">
          <div class="col-12 ">
            <p style={{ fontSize: "18px" }}>Wollert, VIC (Postcode: 3750)</p>

            <p style={{ fontSize: "18px" }}>Baldivis, WA (Postcode: 6171)</p>

            <p style={{ fontSize: "18px" }}>Clyde, VIC (Postcode: 3978)</p>
            <br />
            <p style={{ fontSize: "18px" }}>
              In summary, Wollert, Baldivis, and Clyde epitomize the investor's
              oasis, where the alignment of high rental yields, low supply, and
              rapid population growth creates an optimal environment for
              investors seeking to flourish in the real estate market.
            </p>
          </div>
        </div>

        <div class="col-12 col-lg-10 offset-lg-1 mb-3">
          <figure class="blockquote-lg text-center mb-5">
            <h5>
              To try out more suburbs for yourself, try the free Suburb Selector
              tool. Simply register and get suburbs selected in less than 5-10
              minutes.
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
