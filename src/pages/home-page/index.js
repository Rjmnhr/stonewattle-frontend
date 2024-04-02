import React, { useEffect, useState } from "react";
import NavBar from "../../components/nav-bar/nav-bar";

import { useLocation, useNavigate } from "react-router-dom";
import AxiosInstance from "../../components/axios";
import { Collapse, Modal } from "antd";
import FooterComponent from "../../components/footer";

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
                    className="btn btn-primary btn-lg mb-3 mb-lg-0"
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
                    className="btn mb-3 mb-lg-0 d-none"
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
                  alt="Australian Suburbs"
                />
              </div>
            </div>
          </div>

          <div class="container-fluid px-lg-8 p-3 content-space-t-2 content-space-t-lg-3 text-start ">
            <div class="row justify-content-lg-between align-items-lg-center">
              <div class="col-lg-5">
                <div class="mb-5 text-lg-start text-center ">
                  <p className="fs-2">
                    We've empowered over 50 investors through our platform,
                    facilitating the acquisition of over $25 million worth of
                    property nationwide. Our technology-driven approach supports
                    by providing comprehensive suburb selection services
                    tailored to preferences and budgets. Reach out to us today
                    to explore how we can enhance your real estate strategy.
                  </p>
                </div>
              </div>
              <div class="col-lg-6  text-center">
                <div class="position-relative">
                  <div class="position-relative">
                    <img
                      class="img-fluid"
                      src="https://media.istockphoto.com/id/1335050734/photo/businessman-using-a-computer-for-property-sales-listings-real-estate-agent-agency-contractor.jpg?s=612x612&w=0&k=20&c=-QsLOTTjONcvkhAJQWjsXHjeRXnInmclCZIjRt3wE20="
                      alt=" Investment Strategy"
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
                            alt=" Investment Strategy"
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
                            alt="Investment Strategy"
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
                    Accurate rental yield data is essential for real estate
                    investors, enabling informed decisions by comparing
                    potential rental income to property purchase prices. Our
                    suburb selector tool aids in identifying high-yield suburbs,
                    facilitating smarter investment choices.
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
                    <span class="highlight">weekly data updates</span>. Our tool
                    is updated weekly with the latest data, so you can stay
                    informed about market trends and make smart investment
                    decisions.
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
                    Based on your selected criteria, our platform identifies the
                    most promising suburbs for investment. We conduct thorough
                    analyses, considering factors like market performance,
                    rental yield, population growth to pinpoint the top
                    investment opportunities.
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
                alt="Investment Property Analytics"
              />
            </div>
            <div class="col-lg-5">
              <div class="mb-5 text-lg-start text-center ">
                <h1>Investment Property Analytics Tools</h1>
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

        <div class="container-fluid px-lg-8 p-3 content-space-t-2 content-space-t-lg-3 mb-8">
          <div class="row justify-content-lg-between align-items-lg-center">
            <div class="col-lg-6 mb-5 mb-lg-0">
              <img
                class="img-fluid rounded-3"
                src="https://media.istockphoto.com/id/1186618062/photo/real-estate-investment-real-estate-value.jpg?s=612x612&w=0&k=20&c=X-o8bBZaW0uohle3OxUipQrqaxpDwereL969wJ2mQSI="
                alt="Investment Strategy"
              />
            </div>

            <div class="col-lg-5">
              <div class="mb-5 text-lg-start text-center ">
                <h1>
                  Predicting growth with our exclusive machine learning
                  algorithm
                </h1>
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

        {/* <div class="container-fluid mt-8">
          <div class="w-lg-65 text-center mx-lg-auto mb-5 mb-sm-7 mb-lg-10">
            <h2>Our data is refreshed each week.</h2>
          </div>
        </div> */}

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
      <FooterComponent />
    </>
  );
};

export default HomePage;
const { Panel } = Collapse;
export const FAQSection = () => {
  return (
    <section id="faq" className="faq mt-10 px-lg-8 mb-8">
      <div className=" text-start" data-aos="fade-up">
        <div className="section-title">
          <h2>Frequently Asked Questions</h2>
        </div>

        <Collapse
          accordion
          ghost
          bordered={false}
          defaultActiveKey={["0"]} // Set the default active key (index starts from 0)
          expandIconPosition="right"
        >
          <Panel
            style={{ borderBottom: "1px solid  #eee" }}
            header={
              <h1 style={{ fontSize: "18px" }}>
                What is the Suburb Selector tool?
              </h1>
            }
            key="0"
          >
            <p style={{ fontSize: "16px" }}>
              The Suburb Selector tool is a powerful feature on our website
              designed to help buyers agents and property seekers find the most
              suitable suburbs in Australia based on various criteria such as
              budget, bedrooms, property type, and area classification.
            </p>
          </Panel>

          <Panel
            style={{ borderBottom: "1px solid  #eee" }}
            header={
              <h1 style={{ fontSize: "18px" }}>
                How does the Suburb Selector tool work?
              </h1>
            }
            key="2"
          >
            <p style={{ fontSize: "16px" }}>
              Our Suburb Selector tool utilizes advanced algorithms to analyze
              your input criteria and match them with the most relevant suburbs
              in Australia. It takes into account factors such as budget
              constraints, desired property features, and preferred location
              characteristics.
            </p>
          </Panel>

          <Panel
            style={{ borderBottom: "1px solid  #eee" }}
            header={
              <h1 style={{ fontSize: "18px" }}>
                What are the benefits of using the Suburb Selector tool for
                buyers agents?
              </h1>
            }
            key="3"
          >
            <p style={{ fontSize: "16px" }}>
              By using the Suburb Selector tool, buyers agents can efficiently
              narrow down their search to suburbs that align with their clients'
              preferences and requirements. This saves time and effort in the
              property search process and enables agents to provide personalized
              recommendations to their clients.
            </p>
          </Panel>

          <Panel
            style={{ borderBottom: "1px solid  #eee" }}
            header={
              <h1 style={{ fontSize: "18px" }}>
                How frequently is the data in the tool updated?
              </h1>
            }
            key="5"
          >
            <p style={{ fontSize: "16px" }}>
              We update the data in our tool on a weekly basis. This regular
              cadence ensures that the information provided is current and
              reflects recent developments in the market. By updating the data
              weekly, we aim to offer users the most up-to-date insights for
              their investment decisions.
            </p>
          </Panel>
          <Panel
            style={{ borderBottom: "1px solid  #eee" }}
            header={
              <h1 style={{ fontSize: "18px" }}>
                What criteria can I input into the Suburb Selector tool?
              </h1>
            }
            key="6"
          >
            <p style={{ fontSize: "16px" }}>
              You can input various criteria such as budget range, number of
              bedrooms, property type (e.g., house, apartment), and area
              classification (e.g., urban, suburban, rural). Additionally, you
              can further refine your search based on factors like rental yield,
              population growth, and suitability for schools.
            </p>
          </Panel>
          <Panel
            style={{ borderBottom: "1px solid  #eee" }}
            header={
              <h1 style={{ fontSize: "18px" }}>
                Can buyers agents customize the weighting of different criteria
                in the Suburb Selector tool?
              </h1>
            }
            key="7"
          >
            <p style={{ fontSize: "16px" }}>
              Suburb Selector tool offers a feature that allows users to adjust
              the importance weights of various criteria such as rental yield,
              population growth, and other factors. Users can assign importance
              levels ranging from "Very Important" to "Not Important" based on
              their clients' priorities and preferences. By customizing the
              weighting of criteria, buyers agents can tailor the search results
              to better align with their clients' specific needs and objectives.
            </p>
          </Panel>
        </Collapse>
      </div>
    </section>
  );
};
