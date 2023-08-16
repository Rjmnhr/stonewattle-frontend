import React from "react";
import NavBar from "../../components/nav-bar/nav-bar";
// import { useApplicationContext } from "../../context/app-context";

const HomePage = () => {
  // const { dropdownHeight } = useApplicationContext();
  return (
    <>
      <NavBar />
      {/* <div
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
          <img
            src=""
            alt=""
          />
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
      </div> */}
      <main id="content" role="main">
        <div class="container  pt-3 pt-lg-10 ">
          <div class="row justify-content-lg-between align-items-lg-center">
            <div class="col-lg-5 mb-5 mb-lg-0">
              <div class="mb-5 text-lg-start text-center">
                {/* <h1 class="display-4 text-dark mb-5">
                  Start your journey with
                  <span class="text-primary"> 2nd Storey </span>
                </h1> */}
                <p class="fs-2">
                  We are a technology AI company using property data to bring to
                  you a one-stop platform for all your needs. We have been
                  investing in the Australian property market over the last 10
                  years and have more than $4m worth of property portfolio.
                </p>
              </div>
            </div>

            <div class="col-lg-6">
              <div class="position-relative">
                <div class="position-relative">
                  <img
                    class="img-fluid"
                    src="https://media.istockphoto.com/id/1335050734/photo/businessman-using-a-computer-for-property-sales-listings-real-estate-agent-agency-contractor.jpg?s=612x612&w=0&k=20&c=-QsLOTTjONcvkhAJQWjsXHjeRXnInmclCZIjRt3wE20="
                    alt=" Description"
                  />
                </div>

                <div
                  class="d-inline-block position-absolute top-0 start-0 bg-white w-100 rounded-pill d-none d-lg-block shadow-sm p-2 mt-5 ms-n5"
                  style={{ maxWidth: "12rem" }}
                >
                  <div class="d-flex align-items-center ">
                    <div class="flex-shrink-0">
                      <span class="avatar avatar-sm avatar-circle">
                        <img
                          class="avatar-img"
                          src="https://www.nibib.nih.gov/sites/default/files/inline-images/AI%20600%20x%20400.jpg"
                          alt=" Description"
                        />
                      </span>
                    </div>
                    <div class="flex-grow-1 ms-2">
                      <div class="fs-5 fw-bold text-dark mb-0">
                        Investment strategy
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  class="d-inline-block position-absolute bottom-0 start-0 bg-warning w-100 rounded-pill d-none d-lg-block shadow-sm p-2 mb-10 ms-n10"
                  style={{ maxWidth: " 16rem" }}
                >
                  <div class="d-flex align-items-center">
                    <div class="flex-shrink-0">
                      <span class="avatar avatar-sm avatar-circle">
                        <img
                          class="avatar-img"
                          src="https://www.nobroker.in/blog/wp-content/uploads/2022/04/Property-disputes.jpg"
                          alt="Description"
                        />
                      </span>
                    </div>
                    <div class="flex-grow-1 ms-2">
                      <div class="fs-5 fw-bold text-dark mb-0">
                        Property characteristics
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="container content-space-t-2 content-space-t-lg-3 text-start ">
          <div class="row justify-content-lg-between align-items-lg-center">
            <div class="col-lg-6 mb-5 mb-lg-0">
              <img
                class="img-fluid rounded-3"
                src=" https://media.istockphoto.com/id/1038186890/photo/different-size-houses-vith-different-value-on-stacks-of-coins-concept-for-property-mortgage.jpg?s=612x612&w=0&k=20&c=duYcfpy5QsvJZPuyvCSHQhaW-VVQJXZjoXCkvpGt0Ek="
                alt="Description"
              />
            </div>
            <div class="col-lg-5">
              <div class="mb-5 text-lg-start text-center ">
                <p className="fs-2">
                  We have helped more than 50 investors use our platform, and
                  who have amassed more than $25m of property across the whole
                  nation.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="container content-space-t-lg-3 ">
          <div class="row">
            <div class="col-sm-6 col-lg-4 mb-5">
              <div class="text-center px-md-5">
                <div class="mb-3">
                  <i class="bi-tablet-landscape fs-1 text-dark"></i>
                </div>
                <p>
                  2nd Storey embraces your{" "}
                  <span class="fw-bold">marketing vision</span> and transforms
                  it into a captivating masterpiece.
                </p>
              </div>
            </div>

            <div class="col-sm-6 col-lg-4 mb-5">
              <div class="text-center px-md-5">
                <div class="mb-3">
                  <i class="bi-shield-check fs-1 text-dark"></i>
                </div>
                <p>
                  Uncover <span class="fw-bold">future possibilities</span> with
                  our forward-looking insights.
                </p>
              </div>
            </div>

            <div class="col-sm-6 col-lg-4 mb-5">
              <div class="text-center px-md-5">
                <div class="mb-3">
                  <i class="bi-hdd-network fs-1 text-dark"></i>
                </div>
                <p>
                  It elevates your decision-making process with cutting-edge
                  insights tailored for {""}
                  <span class="fw-bold">modern investment</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="container content-space-t-2 content-space-t-lg-3 ">
          <div class="row justify-content-lg-between align-items-lg-center">
            <div class="col-lg-6 mb-5 mb-lg-0">
              <img
                class="img-fluid rounded-3"
                src="https://media.istockphoto.com/id/1181134074/photo/aerial-view-of-residential-houses-at-autumn-american-neighborhood-suburb-real-estate-drone.jpg?s=612x612&w=0&k=20&c=GmpNoWnRyiBJsabooqGv5k1dY0nNradFSm8LGIoiR18="
                alt="Description"
              />
            </div>
            <div class="col-lg-5">
              <div class="mb-5 text-lg-start text-center ">
                <h2>Investment Property Analytics Tools</h2>
                <p className="fs-3">
                  Over the last 5 years we have been capturing property data
                  from various sources and used all our investment strategies to
                  provide all tools you need to make an investment.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="container content-space-t-lg-3 ">
          <div class="row">
            <div class="col-sm-6 col-lg-4 mb-5 mb-lg-0">
              <div class="text-center px-md-5">
                <div class="mb-3">
                  <i class="bi-gear fs-1 text-dark"></i>
                </div>
                <p>
                  Stay ahead of the curve as 2nd Storey's{" "}
                  <span class="fw-bold">predictive analytics</span> become your
                  compass in the ever-evolving world of marketing.
                </p>
              </div>
            </div>

            <div class="col-sm-6 col-lg-4 mb-5 mb-sm-0">
              <div class="text-center px-md-5">
                <div class="mb-3">
                  <i class="bi-sliders fs-1 text-dark"></i>
                </div>
                <p>
                  Navigate through 2nd Storey's intuitive interface and watch as{" "}
                  <span class="fw-bold">intricate insights</span> unfold before
                  your eyes. Experience the thrill of real-time data
                  exploration.
                </p>
              </div>
            </div>

            <div class="col-sm-6 col-lg-4">
              <div class="text-center px-md-5">
                <div class="mb-3">
                  <i class="bi-journal-text fs-1 text-dark"></i>
                </div>
                <p>
                  2nd Storey is your key to unlocking untapped potential and
                  unleashing unparalleled{" "}
                  <span class="fw-bold">marketing success</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="container content-space-t-2 content-space-t-lg-3">
          <div class="row justify-content-lg-between align-items-lg-center">
            <div class="col-lg-6 mb-5 mb-lg-0">
              <img
                class="img-fluid rounded-3"
                src="https://media.istockphoto.com/id/1186618062/photo/real-estate-investment-real-estate-value.jpg?s=612x612&w=0&k=20&c=X-o8bBZaW0uohle3OxUipQrqaxpDwereL969wJ2mQSI="
                alt="Description"
              />
            </div>

            <div class="col-lg-5">
              <div class="mb-5 text-lg-start text-center ">
                <h2>
                  Predicting growth with our exclusive machine learning
                  algorithm
                </h2>
                <p className="fs-3">
                  Our proprietary Machine Learning algorithm can also help
                  predict suburbs which are more likely to grow. We don’t
                  provide specific property details - we still encourage you to
                  visit domain and real estate websites to complete your
                  research. However, our products will help you shortlist which
                  suburbs are best suited for you.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="container content-space-2 content-space-lg-3">
          <div class="w-lg-65 text-center mx-lg-auto mb-5 mb-sm-7 mb-lg-10">
            <h2>Our data is refreshed each week.</h2>
          </div>
        </div>
      </main>

      <footer class="bg-dark">
        <div class="container">
          <div class="row align-items-center pt-8 pb-4">
            <div class="col-md mb-lg-5 mb-0 mb-md-0">
              <h2 class="fw-medium text-white-70 mb-0">2nd Storey</h2>
              <p></p>
            </div>
          </div>

          <div class="row align-items-md-center col-12 justify-content-between py-6">
            <div class="col-md mb-3 mb-md-0">
              <ul class="d-lg-flex  text-center text-lg-start mb-0">
                <li class="list-inline-item">
                  <a class="link link-light link-light-75 " href="/">
                    Privacy and Policy
                  </a>
                </li>
                <li class="list-inline-item">
                  <a class="link link-light link-light-75" href="/">
                    Terms
                  </a>
                </li>
                <li class="list-inline-item">
                  <a class="link link-light link-light-75" href="/">
                    Status
                  </a>
                </li>
                <li class="list-inline-item">
                  <div class="btn-group">
                    <a
                      class="link link-light link-light-75"
                      href="/"
                      id="selectLanguage"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <span class="d-flex align-items-center">
                        <img
                          class="avatar avatar-xss avatar-circle me-2"
                          src="./assets/vendor/flag-icon-css/flags/1x1/us.svg"
                          alt="description"
                          width="16"
                        />
                        <span>English</span>
                      </span>
                    </a>

                    <div class="dropdown-menu">
                      <a
                        class="dropdown-item d-flex align-items-center active"
                        href="/"
                      >
                        <img
                          class="avatar avatar-xss avatar-circle me-2"
                          src="./assets/vendor/flag-icon-css/flags/1x1/us.svg"
                          alt=" description"
                          width="16"
                        />
                        <span>English</span>
                      </a>
                      <a
                        class="dropdown-item d-flex align-items-center"
                        href="/"
                      >
                        <img
                          class="avatar avatar-xss avatar-circle me-2"
                          src="./assets/vendor/flag-icon-css/flags/1x1/de.svg"
                          alt="description"
                          width="16"
                        />
                        <span>Deutsch</span>
                      </a>
                      <a
                        class="dropdown-item d-flex align-items-center"
                        href="/"
                      >
                        <img
                          class="avatar avatar-xss avatar-circle me-2"
                          src="./assets/vendor/flag-icon-css/flags/1x1/es.svg"
                          alt="description"
                          width="16"
                        />
                        <span>Español</span>
                      </a>
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            <div class="col-md-auto">
              <p class="fs-5 text-white-70 mb-0">© 2nd Storey. 2023</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default HomePage;
