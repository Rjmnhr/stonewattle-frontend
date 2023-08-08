// import React, { useState } from "react";
import NavBar from "../../components/nav-bar/nav-bar";
import { useApplicationContext } from "../../context/app-context";
// import useMediaQuery from "@mui/material/useMediaQuery";
// import { ArrowLeftOutlined } from "@ant-design/icons";
// import { message } from "antd";
// import { useNavigate } from "react-router-dom";
// import { ContactPageStyled } from "./style";

// const ContactPage = () => {
//   const [isFormFilled, setIsFormFilled] = useState(false);
//   const [query, setQuery] = useState("");
//   const navigate = useNavigate();
//   const isSmallScreen = useMediaQuery("(max-width: 768px)");

//   const [messageApi, contextHolder] = message.useMessage();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setIsFormFilled(true);
//     setQuery("");
//     console.log(query);
//     success();
//   };

//   const success = () => {
//     messageApi.open({
//       type: "success",
//       content: "Submitted successfully",
//     });
//   };

//   const handleNavigate = () => {
//     navigate("/home");
//   };

//   return (
//     <>
//       <NavBar />
//       <ContactPageStyled>
//         {contextHolder}
//         <div className="contact-container">
//           <h1 style={{ marginBottom: "20px", paddingLeft: "10px" }}>
//             Contact us
//           </h1>
//           <p>
//             Please contact us at ---------- if you want us to assist you in your
//             ideal property search
//           </p>
//           <form onSubmit={handleSubmit}>
//             {!isSmallScreen ? (
//               <>
//                 <textarea
//                   cols={50}
//                   rows={10}
//                   placeholder="Please tell us what your question is and we will reach back in 2 days"
//                   onChange={(e) => setQuery(e.target.value)}
//                   required
//                 />
//               </>
//             ) : (
//               <textarea
//                 cols={30}
//                 rows={15}
//                 placeholder="Please tell us what your question is and we will reach back in 2 days"
//                 onChange={(e) => setQuery(e.target.value)}
//                 required
//               />
//             )}

//             <br />
//             <button type="submit">Submit</button>
//           </form>

//           {isFormFilled ? (
//             <div>
//               <p>
//                 Thanks for your question. Someone from our team will reach out
//                 to you on your registered email in the next 2 days
//               </p>

//               <h4 style={{ cursor: "pointed" }} onClick={handleNavigate}>
//                 <ArrowLeftOutlined /> Go Back
//               </h4>
//             </div>
//           ) : (
//             ""
//           )}
//         </div>
//       </ContactPageStyled>
//     </>
//   );
// };

const ContactPage = () => {
  const { dropdownHeight } = useApplicationContext();
  return (
    <>
      <head>
        <link rel="stylesheet" href="./assets/css/theme.min.css" />
      </head>
      <NavBar />
      <div
        style={{
          marginTop: `${dropdownHeight ? `${dropdownHeight}px` : "0px"}`,
          transition: "all 0.3s ease",
        }}
        class="container content-space-t-1 "
      >
        <div class="text-center mb-7 mt-5 mt-lg-10">
          <h1>How can we help?</h1>
        </div>

        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3">
          <div class="col mb-4 mb-lg-0">
            <div class="card card-lg text-center h-100">
              <div class="card-body">
                <div class="mb-3">
                  <i class="bi-person-circle fs-1 text-dark"></i>
                </div>

                <div class="mb-5">
                  <h4>Pre-visit inquiries</h4>
                </div>

                <div class="mb-5">
                  <span class="d-block">Mon-Fri</span>
                  <span class="d-block">9:30 AM to 6:00 PM Pacific</span>
                </div>

                <div class="d-grid mb-3">
                  <a class="btn btn-white" href="mailto:support@site.com">
                    <i class="bi-envelope-open me-2"></i> support@site.com
                  </a>
                </div>

                <a class="btn btn-ghost-dark btn-sm" href="/">
                  <i class="bi-telephone me-2"></i> (062) 8324923
                </a>
              </div>
            </div>
          </div>

          <div class="col mb-4 mb-lg-0">
            <div class="card card-lg text-center h-100">
              <div class="card-body">
                <div class="mb-3">
                  <i class="bi-wallet2 fs-1 text-dark"></i>
                </div>

                <div class="mb-5">
                  <h4>Billing questions</h4>
                </div>

                <div class="mb-5">
                  <span class="d-block">Mon-Fri</span>
                  <span class="d-block">9:30 AM to 5:00 PM Pacific</span>
                </div>

                <div class="d-grid mb-3">
                  <a class="btn btn-white" href="mailto:billing@site.com">
                    <i class="bi-envelope-open me-2"></i> billing@site.com
                  </a>
                </div>

                <a class="btn btn-ghost-dark btn-sm" href="/">
                  <i class="bi-telephone me-2"></i> (062) 1099222
                </a>
              </div>
            </div>
          </div>

          <div class="col">
            <div class="card card-lg text-center h-100">
              <div class="card-body">
                <div class="mb-3">
                  <i class="bi-currency-exchange fs-1 text-dark"></i>
                </div>

                <div class="mb-5">
                  <h4>Sales questions</h4>
                </div>

                <div class="mb-5">
                  <span class="d-block">Mon-Fri</span>
                  <span class="d-block">9:30 AM to 6:00 PM Pacific</span>
                </div>

                <div class="d-grid mb-3">
                  <a class="btn btn-white" href="mailto:sale@site.com">
                    <i class="bi-envelope-open me-2"></i> sale@site.com
                  </a>
                </div>

                <a class="btn btn-ghost-dark btn-sm" href="/">
                  <i class="bi-telephone me-2"></i> (062) 3383314
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="overflow-hidden">
        <div class="container content-space-2">
          <div class="row">
            <div class="col-lg-6 mb-10 mb-lg-0">
              <div class="pe-lg-10">
                <div class="mb-5">
                  <h3>Our office</h3>
                </div>

                <div class="mb-5">
                  <img
                    class="img-fluid"
                    src="../assets/img/580x480/img3.jpg"
                    alt="Description"
                  />
                </div>

                <address>
                  <span class="d-block fs-3 fw-bold text-dark mb-2">UK:</span>
                  300 Bath Street
                  <br />
                  Tay House
                  <br />
                  Glasgow G2 4JR
                  <br />
                  United Kingdom
                </address>
              </div>
            </div>

            <div class="col-lg-6">
              <div class="position-relative">
                <div class="card card-lg">
                  <div class="card-body">
                    <h4 class="mb-4">Fill in the form</h4>

                    <form>
                      <div class="row">
                        <div class="col-sm-6 mb-4 mb-sm-0">
                          <div class="mb-4">
                            <label
                              class="form-label"
                              for="contactsFormFirstName"
                            >
                              First name
                            </label>
                            <input
                              type="text"
                              class="form-control"
                              name="contactsFormNameFirstName"
                              id="contactsFormFirstName"
                              placeholder="Jacob"
                              aria-label="Jacob"
                            />
                          </div>
                        </div>

                        <div class="col-sm-6">
                          <div class="mb-4">
                            <label
                              class="form-label"
                              for="contactsFormLasttName"
                            >
                              Last name
                            </label>
                            <input
                              type="text"
                              class="form-control"
                              name="contactsFormNameLastName"
                              id="contactsFormLasttName"
                              placeholder="Williams"
                              aria-label="Williams"
                            />
                          </div>
                        </div>
                      </div>

                      <div class="mb-4">
                        <label class="form-label" for="contactsFormWorkEmail">
                          Email
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          name="contactsFormNameWorkEmail"
                          id="contactsFormWorkEmail"
                          placeholder="email@site.com"
                          aria-label="email@site.com"
                        />
                      </div>

                      <div class="mb-4">
                        <label class="form-label" for="contactsFormDetails">
                          Details
                        </label>
                        <textarea
                          class="form-control"
                          name="contactsFormNameDetails"
                          id="contactsFormDetails"
                          placeholder="Please tell us what your question is and we will reach back in 2 days"
                          rows="4"
                        ></textarea>
                      </div>

                      <div class="d-grid">
                        <button type="submit" class="btn btn-primary btn-lg">
                          Send inquiry
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
        </div>
      </div>
    </>
  );
};

export default ContactPage;
