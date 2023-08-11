import React from "react";
// import { PricingPageStyled } from "./style";
import NavBar from "../../components/nav-bar/nav-bar";
// import { useApplicationContext } from "../../context/app-context";
// import { Carousel } from "antd";

const PricingPage = () => {
  // const { dropdownHeight } = useApplicationContext();
  return (
    <>
      <NavBar />

      <div
        style={{
          // marginTop: `${dropdownHeight ? `${dropdownHeight}px` : "0px"}`,
          transition: "all 0.3s ease",
        }}
        class="overflow-hidden "
      >
        <div class="container content-space-1">
          <div class="w-lg-65 text-center mx-lg-auto mb-5 mb-sm-7 mb-lg-10"></div>

          <div class="position-relative">
            <div class="row mb-5">
              <div class="col-lg-4 col-sm-12 mb-4 mb-lg-0">
                <div class="card card-lg h-100">
                  <div class="card-body">
                    <div class="mb-3">
                      <h2 class="mb-1">Single user</h2>
                    </div>

                    <div class="d-flex-center mb-5">
                      <div class="flex-shrink-0">
                        <span class="display-4 lh-1 text-dark">
                          $50<span class="fs-4">.00</span>
                        </span>{" "}
                        <span class="d-block invisible">USD/ monthly</span>
                      </div>
                      {/* <div class="flex-grow-1 align-self-end ms-3">
                        <span class="d-block">USD / monthly</span>
                      </div> */}
                    </div>

                    <div class="row">
                      <div class="col-sm-12  ">
                        <ul class="list-checked  list-checked-soft-bg-warning fs-4 mb-2">
                          <li class="list-unchecked-item ">Custom reports</li>
                          <li class="list-unchecked-item">Product support</li>
                          <li class="list-unchecked-item">
                            Activity reporting
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div class="card-footer pt-0">
                    <div class="row align-items-center">
                      <div class="col-12">
                        <a class="btn btn-white" href="/">
                          Start free trial
                        </a>
                      </div>
                    </div>
                    <div class="col-12 mt-5">
                      <span class="fs-5 text-muted d-block">
                        Cancel anytime.
                      </span>
                      <span class="fs-5 text-muted d-block">
                        No card required.
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-lg-4 mb-lg-0  mb-5">
                <div class="card card-lg card-shadow card-pinned h-100">
                  <span class="badge bg-dark text-white card-pinned-top-end">
                    Most popular
                  </span>

                  <div class="card-body">
                    <div class="mb-3">
                      <h2 class="mb-1">Monthly user</h2>
                    </div>

                    <div class="d-flex-center mb-5">
                      <div class="flex-shrink-0 mt-1">
                        <span class="display-4 lh-1 text-dark">
                          $300<span class="fs-4">.00</span>
                        </span>
                        <span class="d-block mt-1">USD / month</span>
                      </div>
                      {/* <div class="flex-grow-1 align-self-end ms-3"></div> */}
                    </div>

                    <div class="row">
                      {/* <div class="col-sm-6">
                        <ul class="list-checked list-checked-soft-bg-warning fs-4 mb-2">
                          <li class="list-checked-item">Up to 10 people</li>
                          <li class="list-checked-item">Collect data</li>
                          <li class="list-checked-item">Code extensibility</li>
                        </ul>
                      </div> */}

                      <div class="col-sm-12 d-flex-center align-items-start">
                        <ul class="list-checked list-checked-soft-bg-warning fs-4 mb-2">
                          <li class="list-checked-item">Custom reports</li>
                          <li class="list-checked-item">Product support</li>
                          <li class="list-unchecked-item">
                            Activity reporting
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div class="card-footer pt-0">
                    <div class="row align-items-center">
                      <div class="col-12">
                        <a class="btn btn-primary" href="/">
                          Start free trial
                        </a>
                      </div>
                    </div>
                    <div class="col mt-5">
                      <span class="fs-5 text-muted d-block">
                        Cancel anytime.
                      </span>
                      <span class="fs-5 text-muted d-block">
                        No card required.
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-lg-4 mb-4 mb-lg-0">
                <div class="card card-lg h-100">
                  <div class="card-body">
                    <div class="mb-3">
                      <h2 class="mb-1">Heavy user</h2>
                    </div>

                    <div class="d-flex-center mb-5">
                      <div class="flex-shrink-0 mt-1">
                        <span class="display-4 lh-1 text-dark">
                          $1000<span class="fs-4">.00</span>
                        </span>
                        <span class="d-block mt-1">USD / year</span>
                      </div>
                      {/* <div class="flex-grow-1 align-self-end ms-3">
                        <span class="d-block">USD / monthly</span>
                      </div> */}
                    </div>

                    <div class="row">
                      <div class="col-sm-12">
                        <ul class="list-checked list-checked-soft-bg-warning fs-4 mb-2">
                          <li class="list-checked-item">Custom reports</li>
                          <li class="list-checked-item">Product support</li>
                          <li class="list-checked-item">Activity reporting</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div class="card-footer pt-0">
                    <div class="row align-items-center">
                      <div class="col-12">
                        <a class="btn btn-white" href="/">
                          Start free trial
                        </a>
                      </div>
                    </div>
                    <div class="col-12 mt-5">
                      <span class="fs-5 text-muted d-block">
                        Cancel anytime.
                      </span>
                      <span class="fs-5 text-muted d-block">
                        No card required.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <figure
              class="position-absolute top-0 end-0 zi-n1 d-none d-md-block mt-10 me-n10"
              style={{ width: "4rem" }}
            >
              <img
                class="img-fluid"
                src="../../assets/svg/components/pointer-up.svg"
                alt="Description"
              />
            </figure>

            <figure
              class="position-absolute bottom-0 start-0 zi-n1 ms-n10 mb-n10"
              style={{ width: "15rem" }}
            >
              <img
                class="img-fluid"
                src="../../assets/svg/components/curved-shape.svg"
                alt="Description"
              />
            </figure>
          </div>

          <div class="text-center">
            <p class="fs-6 text-muted mb-0">Prices in USD. Taxes may apply.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PricingPage;
