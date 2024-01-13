import React from "react";
import NavBar from "../../components/nav-bar/nav-bar";

import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

const BlogsPage1 = () => {
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
        class="container content-space-1 text-start "
        id="article"
      >
        <div class="row mb-5">
          <div class="col-12 ">
            <figure class="blockquote-lg text-start mb-3">
              <h2 className="h1">
                Essential Insights for Smart Property Investment
              </h2>
            </figure>
          </div>
        </div>
        <div className="d-lg-flex justify-content-between align-items-center flex-row-reverse">
          <div class="row mb-5 col-12 col-lg-6">
            <div class="col-md-10 col-lg-8 ">
              <img
                class="img"
                width={"100%"}
                src={
                  "https://res.cloudinary.com/dsw1ubwyh/image/upload/v1705121798/xjni6gijeg4ttefsmqfb.jpg"
                }
                alt="Description"
              />
            </div>
          </div>

          <div class="row mb-5 col-12 text-start col-lg-6">
            <div class="col-12">
              <div>
                <section>
                  <h4>1. Customize Your Search:</h4>
                  <p>
                    Choose your property type, bedrooms, state, and budget to
                    tailor your investment approach.
                  </p>
                </section>

                <section>
                  <h4>2. Rate Important Factors:</h4>
                  <p>
                    Decide how important factors like vacancy rates,
                    family-friendliness, and rental yields are to your
                    investment strategy.
                  </p>
                </section>

                <section>
                  <h4>3. Discover Hidden Insights:</h4>
                  <p>
                    Find suburbs that match your investment goals. Get insights
                    into population growth, unemployment rates, and crime
                    statistics.
                  </p>
                </section>

                <section>
                  <h4>4. Make Strategic Decisions:</h4>
                  <p>
                    Evaluate areas strategically to ensure your investment
                    aligns with your long-term goals. Make well-informed
                    decisions for a successful investment.
                  </p>
                </section>
              </div>
            </div>
          </div>
        </div>

        <div class="col-12 col-lg-10 offset-lg-1 mb-3">
          <figure class="blockquote-lg text-center mb-5">
            <h5>
              Invest with confidence using our data-driven insights. Customize
              your strategy to unlock the potential of your property investment.
              To do all of the above, visit our Suburb Selector tool.
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

export default BlogsPage1;
