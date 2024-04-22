import React, { useState } from "react";
import NavBar from "../../components/nav-bar/nav-bar";
// import { useApplicationContext } from "../../context/app-context";
import { Modal } from "antd";
import { ArrowLeftOutlined, LoadingOutlined } from "@ant-design/icons";
import { useLocation, useNavigate } from "react-router-dom";
import AxiosInstance from "../../components/axios";
import { CheckCircleOutlineRounded } from "@mui/icons-material";
import { useEffect } from "react";
import { Helmet } from "react-helmet";

const ContactPage = () => {
  // const { dropdownHeight } = useApplicationContext();

  const [query, setQuery] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [phone, setPhone] = useState("");

  const navigate = useNavigate();

  const Location = useLocation();

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
        const data = await response.data;

        console.log(data);
      })
      .catch((err) => console.log(err));

    //eslint-disable-next-line
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData();

    formData.append("first_name", firstName);
    formData.append("last_name", lastName);
    formData.append("email", email);
    formData.append("details", query);
    formData.append("phone", phone);

    AxiosInstance.post("/api/enquiry/send-enquiry", formData, {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(async (response) => {
        const data = await response.data;
        console.log(data);
        setIsLoading(false);

        setModalVisible(true);
        e.target.reset();

        setFirstName("");
        setLastName("");
        setEmail("");
        setQuery("");
      })
      .catch((err) => {
        console.log("error", err);
      });

    console.log(query);
  };

  const handleModalClose = () => {
    setModalVisible(false);
  };

  const handleNavigate = () => {
    navigate("/");
  };

  return (
    <>
      <Helmet>
        <title>Contact Us| 2nd Storey</title>

        {/* Add other meta tags, link tags, etc. as needed */}
      </Helmet>
      <NavBar />

      <div
        style={{
          // marginTop: `${dropdownHeight ? `${dropdownHeight}px` : "0px"}`,
          transition: "all 0.3s ease",
          display: "grid",
          placeItems: "center",
        }}
        class="container content-space-2 mt-1 mt-lg-3 "
      >
        {/* <div class="text-center mb-3 mt-5 mt-lg-5">
          <h1>How can we help?</h1>
        </div> */}
        <center>
          <div class="row w-100 ">
            <div class="container">
              <div class="position-relative">
                <div class="card card-lg">
                  <div style={{ paddingTop: "1.75rem" }} class="card-body">
                    <h3 class="mb-4">Contact us</h3>

                    <form onSubmit={handleSubmit}>
                      <div class="row">
                        <div class="col-sm-6">
                          <div class="mb-4">
                            <input
                              type="text"
                              class="form-control"
                              name="contactsFormNameFirstName"
                              id="contactsFormFirstName"
                              placeholder="First name"
                              aria-label="First name"
                              onChange={(e) => setFirstName(e.target.value)}
                            />
                          </div>
                        </div>

                        <div class="col-sm-6">
                          <div class="mb-4">
                            <input
                              type="text"
                              class="form-control"
                              name="contactsFormNameLastName"
                              id="contactsFormLasttName"
                              placeholder="Last name"
                              aria-label="Last name"
                              onChange={(e) => setLastName(e.target.value)}
                            />
                          </div>
                        </div>
                      </div>

                      <div class="row">
                        <div class="col-sm-6 ">
                          <div class="mb-4">
                            <input
                              type="text"
                              class="form-control"
                              name="contactsFormNameWorkEmail"
                              id="contactsFormWorkEmail"
                              placeholder="Email"
                              aria-label="Email"
                              onChange={(e) => setEmail(e.target.value)}
                            />
                          </div>
                        </div>

                        <div class="col-sm-6">
                          <div class="mb-4">
                            <input
                              type="text"
                              class="form-control"
                              placeholder="Phone (optional)"
                              aria-label="Phone"
                              onChange={(e) => setPhone(e.target.value)}
                            />
                          </div>
                        </div>
                      </div>

                      <div class="mb-4">
                        <textarea
                          class="form-control"
                          name="contactsFormNameDetails"
                          id="contactsFormDetails"
                          placeholder="Please tell us if you need assistance with your property search"
                          rows="4"
                          onChange={(e) => setQuery(e.target.value)}
                        ></textarea>
                      </div>

                      <div class="d-grid">
                        <button type="submit" class="btn btn-primary btn-lg">
                          {isLoading ? <LoadingOutlined /> : " Send inquiry"}
                        </button>
                      </div>
                    </form>
                  </div>
                </div>

                <figure
                  class="position-absolute bottom-0 end-0 zi-n1 d-none d-md-block mb-n10"
                  style={{ width: "15rem; margin-right: -8rem" }}
                >
                  <img
                    class="img-fluid"
                    src="../assets/svg/illustrations/grid-grey.svg"
                    alt="Description"
                  />
                </figure>

                <figure
                  class="position-absolute bottom-0 end-0 d-none d-md-block me-n5 mb-n5"
                  style={{ width: " 10rem" }}
                >
                  <img
                    class="img-fluid"
                    src="../assets/svg/illustrations/plane.svg"
                    alt="Description"
                  />
                </figure>
              </div>
            </div>
          </div>
        </center>
      </div>
      <Modal
        visible={modalVisible}
        onCancel={handleModalClose}
        onOk={handleModalClose}
      >
        <div className="container p-3 d-flex-column align-items-center">
          <p className="d-flex align-items-center gap-1 ">
            Your enquiry has been sent successfully
            <CheckCircleOutlineRounded sx={{ color: "green" }} />{" "}
          </p>
          <p>We will get back to you soon.</p>
          <p
            onClick={handleNavigate}
            style={{ cursor: "pointer" }}
            className="d-flex align-items-center gap-1 fw-bold"
          >
            <ArrowLeftOutlined /> Go back
          </p>
        </div>
      </Modal>
    </>
  );
};

export default ContactPage;
