import React, { useEffect, useState } from "react";
import NavBar from "../../components/nav-bar/nav-bar";

import { useLocation, useNavigate } from "react-router-dom";
import AxiosInstance from "../../components/axios";
import { Modal } from "antd";

const HomePage = () => {
  const navigate = useNavigate();
  const [isModalVisible, setIsModalVisible] = useState(false);

  const Location = useLocation();

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  useEffect(() => {
    // Delay the modal popup by a few seconds (e.g., 3 seconds)
    const delay = setTimeout(() => {
      showModal();
    }, 3000); // 3000 milliseconds = 3 seconds

    // Clear the timeout if the component unmounts before the modal appears
    return () => clearTimeout(delay);
  }, []);

  useEffect(() => {
    AxiosInstance.post(
      `/api/track-data/store3`,
      { path: Location.pathname },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then(async (response) => {
        //eslint-disable-next-line
        const data = await response.data;
      })
      .catch((err) => console.log(err));

    //eslint-disable-next-line
  }, []);
  return (
    <>
      <NavBar />

      <main id="content" role="main">
        <header className="text-white p-0">
          <div
            style={{
              height: "100vh",
              backgroundImage: "url(./assets/img/investment-strategy.jpg)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
              display: "grid",
              justifyItems: "center",
              alignContent: "start",
              position: "relative",
            }}
            className="container-fluid text-start p-3"
          >
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                background:
                  "rgba(0, 0, 0, 0.5)" /* Adjust the opacity as needed */,
              }}
            ></div>
            <div class="row mt-3 mt-lg-10 container" style={{ zIndex: "1" }}>
              <div class="col-md-6">
                <div class="mb-5">
                  <h1
                    style={{ zIndex: "1", fontSize: "55px" }}
                    class="h1 text-white"
                  >
                    Elevate Your Investment Strategy with 2nd Storey
                  </h1>
                  <p class="fs-3 text-white">
                    Explore the endless possibilities of{" "}
                    <span>property investment</span> with 2nd Storey. Let's
                    embark on a journey towards financial growth and success
                    together.
                  </p>
                </div>
                <div className="col-12 d-lg-flex mt-3 justify-content-start gap-3">
                  <button
                    className="btn btn-primary btn-lg mb-3 mb-md-0"
                    style={{
                      cursor: "pointer",
                      MinWidth: "200px",
                    }}
                    onClick={() => {
                      navigate("/application");
                    }}
                  >
                    <p
                      style={{
                        color: "white",
                        fontWeight: "normal",
                        margin: "0",
                        padding: "0",
                        fontSize: "20px",
                      }}
                    >
                      {" "}
                      Suburb Selector 
                    </p>
                  </button>
                  <button
                    className="btn  btn-lg"
                    style={{
                      background: "#008080",
                      cursor: "pointer",
                    }}
                    onClick={() => {
                      navigate("/service");
                    }}
                  >
                    <p
                      style={{
                        color: "white",
                        fontWeight: "normal",
                        margin: "0",
                        padding: "0",
                        fontSize: "20px",
                      }}
                    >
                      {" "}
                      Find out about our journey
                    </p>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Add your header content here */}
        </header>
        <section className="about">
          <div class="container-fluid px-lg-8 p-3  pt-3 pt-lg-10 ">
            <div className="mb-3">
              <h1>ABOUT US</h1>
            </div>

            <div class="row justify-content-lg-between align-items-lg-center">
              <div class="col-lg-6 mb-5 mb-lg-0">
                <div class="mb-5 text-lg-start text-center">
                  {/* <h1 class="display-4 text-dark mb-5">
                  Start your journey with
                  <span class="text-primary"> 2nd Storey </span>
                </h1> */}
                  <p class="fs-2">
                    We are a technology AI company using property data to bring
                    to you a one-stop platform for all your needs. We have been
                    investing in the Australian property market over the last 10
                    years and have more than $4m worth of property portfolio.
                  </p>
                  {/* 
                <p
                  class="fs-2 d-flex align-items-start gap-1 justify-content-center justify-content-lg-start"
                  style={{ color: "#0ABF53", cursor: "pointer" }}
                  onClick={() => {
                    navigate("/service");
                  }}
                >
                  Explore our property investments
                  <OpenInNewOutlinedIcon
                    style={{
                      color: "black",
                      fontSize: "14px",
                      marginTop: "10px",
                    }}
                  />
                </p> */}
                </div>
              </div>

              <div class="col-lg-6 mb-5 mb-lg-0">
                <img
                  class="img-fluid rounded-3"
                  src=" https://media.istockphoto.com/id/1038186890/photo/different-size-houses-vith-different-value-on-stacks-of-coins-concept-for-property-mortgage.jpg?s=612x612&w=0&k=20&c=duYcfpy5QsvJZPuyvCSHQhaW-VVQJXZjoXCkvpGt0Ek="
                  alt="Description"
                />
              </div>
            </div>
          </div>

          <div class="container-fluid px-lg-8 p-3 content-space-t-2 content-space-t-lg-3 text-start ">
            <div class="row justify-content-lg-between align-items-lg-center">
              <div class="col-lg-5">
                <div class="mb-5 text-lg-start text-center ">
                  <p className="fs-2">
                    We have helped more than 50 investors use our platform, and
                    who have amassed more than $25m of property across the whole
                    nation.We offer property selection service for users who
                    don't have as much time. We are not buyers agents but we can
                    help you source the best properties given your budget and
                    preference. Contact us now to discuss
                  </p>
                </div>
              </div>
              <div class="col-lg-6  text-center">
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
                    <div class="d-flex align-items-center text-center ">
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
                    <div class="d-flex align-items-center text-center">
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
        </section>

        <section id="services" class="services section-bg ">
          <div
            class="container-fluid px-lg-8 p-3 content-space-t-2 content-space-t-lg-3 "
            data-aos="fade-up"
          >
            <div class="section-title mb-8">
              <h2>SERVICES WE OFFER</h2>
              <p>
                We offer a range of comprehensive services designed to empower
                your investment journey. Explore the key features of our
                services below:
              </p>
            </div>

            <div class="row ">
              <div class="col-md-6">
                <div
                  class="icon-box border card p-3 m-2 text-start"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <i class="icofont-computer"></i>
                  <h3>
                    <a href="/#">Suburb Selector Tool</a>
                  </h3>
                  {/* <p>
                    Use our advanced{" "}
                    <span class="highlight">Suburb Selector Tool</span> to find
                    the perfect location for your investment. Customize your
                    search based on budget, dwelling type, area classification,
                    state, bedrooms, and sort by factors such as crime rate and
                    rental yield.
                  </p> */}
                  <p className="fs-3">
                    Make data-driven decisions by exploring a curated list of
                    suburbs that match your criteria. Our tool simplifies the
                    process of selecting suburbs that align with your investment
                    goals.
                  </p>
                </div>
                <div
                  class="icon-box border card p-3 m-2 text-start"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <i class="icofont-computer"></i>
                  <h3>
                    <a href="/#">Investment Strategy</a>
                  </h3>
                  <p className="fs-3">
                    Maximize your returns with our accurate{" "}
                    <span class="highlight">rental yield</span> data. We provide
                    up-to-date information to help you make informed investment
                    decisions.
                  </p>
                </div>
              </div>

              <div class="col-md-6 mt-4 mt-md-0">
                <div
                  class="icon-box border card p-3 m-2 text-start"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <i class="icofont-chart-bar-graph"></i>
                  <h3>
                    <a href="/#">Weekly Data Updates</a>
                  </h3>
                  <p className="fs-3">
                    Stay ahead of the curve with our{" "}
                    <span class="highlight">weekly data updates</span>. Our
                    information is regularly refreshed, ensuring you have the
                    latest market intelligence at your fingertips.{" "}
                  </p>
                </div>
                <div
                  class="icon-box border card p-3 m-2 text-start"
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  <i class="icofont-settings"></i>
                  <h3>
                    <a href="/#">Investment Ideas</a>
                  </h3>
                  <p className="fs-3">
                    Discover innovative{" "}
                    <span class="highlight">investment ideas</span> that align
                    with your goals. We provide a diverse range of options to
                    suit your risk appetite and preferences.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div class="container-fluid px-lg-8 p-3 content-space-t-lg-3 ">
          <div class="row">
            <div class="col-sm-6 col-lg-4 mb-5">
              <div class="text-center px-md-5">
                <div class="mb-3">
                  <i
                    class="bi-tablet-landscape  text-dark"
                    style={{ fontSize: "80px" }}
                  ></i>
                </div>
                <p className="fs-3">
                  2nd Storey embraces your{" "}
                  <span class="fw-bold">marketing vision</span> and transforms
                  it into a captivating masterpiece.
                </p>
              </div>
            </div>

            <div class="col-sm-6 col-lg-4 mb-5">
              <div class="text-center px-md-5">
                <div class="mb-3">
                  <i
                    class="bi-shield-check  text-dark"
                    style={{ fontSize: "80px" }}
                  ></i>
                </div>
                <p className="fs-3">
                  Uncover <span class="fw-bold">future possibilities</span> with
                  our forward-looking insights.
                </p>
              </div>
            </div>

            <div class="col-sm-6 col-lg-4 mb-5">
              <div class="text-center px-md-5">
                <div class="mb-3">
                  <i
                    class="bi-hdd-network text-dark"
                    style={{ fontSize: "80px" }}
                  ></i>
                </div>
                <p className="fs-3">
                  It elevates your decision-making process with cutting-edge
                  insights tailored for {""}
                  <span class="fw-bold">modern investment</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="container-fluid px-lg-8 p-3 content-space-t-2 content-space-t-lg-3 ">
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

        <div class="container-fluid px-lg-8 p-3 content-space-t-lg-3 ">
          <div class="row">
            <div class="col-sm-6 col-lg-4 mb-5 mb-lg-0">
              <div class="text-center  px-md-5">
                <div class="mb-3">
                  <i
                    class="bi-gear  text-dark"
                    style={{ fontSize: "80px" }}
                  ></i>
                </div>
                <p className="fs-3">
                  Stay ahead of the curve as 2nd Storey's{" "}
                  <span class="fw-bold">predictive analytics</span> become your
                  compass in the ever-evolving world of marketing.
                </p>
              </div>
            </div>

            <div class="col-sm-6 col-lg-4 mb-5 mb-sm-0">
              <div class="text-center px-md-5">
                <div class="mb-3">
                  <i
                    class="bi-sliders  text-dark"
                    style={{ fontSize: "80px" }}
                  ></i>
                </div>
                <p className="fs-3">
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
                  <i
                    class="bi-journal-text  text-dark"
                    style={{ fontSize: "80px" }}
                  ></i>
                </div>
                <p className="fs-3">
                  2nd Storey is your key to unlocking untapped potential and
                  unleashing unparalleled{" "}
                  <span class="fw-bold">marketing success</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="container-fluid px-lg-8 p-3 content-space-t-2 content-space-t-lg-3">
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

        <div class="container-fluid px-lg-8 p-3 content-space-2 content-space-lg-3">
          <div class="w-lg-65 text-center mx-lg-auto mb-5 mb-sm-7 mb-lg-10">
            <h2>Our data is refreshed each week.</h2>
          </div>
        </div>
        <div>
          <Modal
            visible={isModalVisible}
            onCancel={handleCancel}
            footer={null} // To remove footer buttons
            centered
          >
            <div className="p-3">
              <p className="fs-2">
                Try our suburb selector tool to get the best property investment
                insights for free!
              </p>
              <div style={{ display: "grid", placeItems: "center" }}>
                <button
                  onClick={() => navigate("/application")}
                  className="btn btn-primary w-75"
                >
                  Try Now!
                </button>
              </div>
            </div>
          </Modal>
        </div>
      </main>

      <footer class="bg-dark">
        <div class="container-fluid px-lg-8  ">
          <div class="row align-items-center  pb-4">
            <div class="col-md mb-lg-5 mb-0 mb-md-0">
              <img
                src="https://res.cloudinary.com/dsw1ubwyh/image/upload/v1694796608/xns5lpa59nojnzkmavgp.svg"
                alt="logo"
                style={{ width: "160px", height: "160px" }}
              />
              <h2 class="fw-medium text-white-70 mb-0">2nd Storey</h2>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default HomePage;
