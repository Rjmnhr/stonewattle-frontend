import React, { useState } from "react";
// import InfoModal from "../modals/info-modal";

import { LoadingOutlined } from "@ant-design/icons";
import { useApplicationContext } from "../../context/app-context";
import { useNavigate } from "react-router-dom";
import AxiosInstance from "../axios";

// const SignUp = () => {
// const [email, setEmail] = useState("");
// const [isLoading, setIsLoading] = useState(false);
// const { setIsSignIn } = useApplicationContext();

// const navigate = useNavigate();

// const handleSwitch = () => {
//   setIsSignIn(true);
// };

// const handleSubmit = (e) => {
//   e.preventDefault();
//   setIsLoading(true);

//   const lowerCasedEmail = email.toLowerCase();
//   console.log(lowerCasedEmail);

//   AxiosInstance.post("/api/otp/send-otp", {
//     email: lowerCasedEmail,
//   })
//     .then(async (response) => {
//       const data = await response.data;
//       console.log(data);

//       localStorage.setItem("email", lowerCasedEmail);
//       setIsLoading(false);
//       navigate("/otp-validation");
//     })
//     .catch((err) => console.log(err));
//   // Handle successful OTP request
// };
//   return (
//     <>
//       <div className="form-container">
//         <form
//           className="signup-form"
//           style={{ justifyContent: "center", height: "40vh" }}
//           onSubmit={handleSubmit}
//         >
//           <div className="detail-input">
//             <input
//               type="email"
//               placeholder="Email address"
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </div>

//           <div style={{ display: "grid", placeItems: "center", width: "100%" }}>
//             <button type="submit">
//               {isLoading ? <LoadingOutlined /> : "VERIFY"}{" "}
//             </button>
//           </div>
//           {/* <div className="info">
//             <p>
//               🔐 Your identity is protected
//               <InfoModal
//                 title=" 🔐 Safety"
//                 content="Your work email is immediately one-way hashed and held separately from the account that you are about to create.

// This means that there is no way for your organization to trace your username or activity back to your work email.

// Our secure system provides the true psychological safety required for colleagues to speak openly and honestly."
//               />
//             </p>
//           </div> */}
//         </form>
//         <p>
//           Already have an account?
//           <span onClick={handleSwitch} style={{ color: "gray" }}>
//             {" "}
//             Log in
//           </span>
//         </p>
//       </div>
//     </>
//   );
// };

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { setIsSignIn } = useApplicationContext();

  const navigate = useNavigate();

  const handleSwitch = () => {
    setIsSignIn(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    const lowerCasedEmail = email.toLowerCase();
    console.log(lowerCasedEmail);

    AxiosInstance.post("/api/otp/send-otp", {
      email: lowerCasedEmail,
    })
      .then(async (response) => {
        const data = await response.data;
        console.log(data);

        localStorage.setItem("email", lowerCasedEmail);
        setIsLoading(false);
        navigate("/otp-validation");
      })
      .catch((err) => console.log(err));
    // Handle successful OTP request
  };
  return (
    <>
      <body class="d-flex align-items-center min-h-100 ">
        <main id="content" role="main" class="flex-grow-1 overflow-hidden">
          <div class="container mt-3 content-space-b-2">
            <div class="mx-lg-auto" style={{ maxWidth: "55rem" }}>
              <div class="d-flex justify-content-center align-items-center flex-column min-vh-lg-100">
                <div class="position-relative">
                  <div class="card card-shadow card-login">
                    <div class="row">
                      <div class="col-md-8">
                        <div class="card-body">
                          <form class="js-validate needs-validation" novalidate>
                            <div class="text-center">
                              <div class="mb-5">
                                <h3 class="card-title">Create your account</h3>
                              </div>

                              <a
                                class="btn btn-white btn-lg d-grid mb-4"
                                href="/"
                              >
                                <span class="d-flex justify-content-center align-items-center">
                                  <img
                                    class="avatar avatar-xss me-2"
                                    src="./assets/svg/brands/google-icon.svg"
                                    alt=" Description"
                                  />
                                  Sign up with Google
                                </span>
                              </a>

                              <span class="divider-center text-muted mb-4">
                                OR
                              </span>
                            </div>

                            <div class="row">
                              <div class="col-sm-6">
                                <div class="mb-4">
                                  <input
                                    type="text"
                                    class="form-control form-control-lg"
                                    name="fullName"
                                    id="fullNameSrEmail"
                                    placeholder="First name"
                                    aria-label="Mark"
                                    required
                                  />
                                  <span class="invalid-feedback">
                                    Please enter your first name.
                                  </span>
                                </div>
                              </div>

                              <div class="col-sm-6">
                                <div class="mb-4">
                                  <input
                                    type="text"
                                    class="form-control form-control-lg"
                                    placeholder="Last name"
                                    aria-label="Williams"
                                    required
                                  />
                                  <span class="invalid-feedback">
                                    Please enter your last name.
                                  </span>
                                </div>
                              </div>
                            </div>

                            <div class="mb-4">
                              {/* <label class="form-label" for="signupSrEmail">
                                Your email
                              </label> */}
                              <input
                                type="email"
                                class="form-control form-control-lg"
                                name="email"
                                id="signupSrEmail"
                                placeholder="Email"
                                aria-label="Markwilliams@site.com"
                                required
                              />
                              <span class="invalid-feedback">
                                Please enter a valid email address.
                              </span>
                            </div>

                            <div class="mb-4">
                              {/* <label class="form-label" for="signupSrPassword">
                                Password
                              </label> */}

                              <div class="input-group-merge">
                                <input
                                  type="password"
                                  class="js-toggle-password form-control form-control-lg"
                                  name="password"
                                  id="signupSrPassword"
                                  placeholder="Password"
                                  aria-label="8+ characters required"
                                  required
                                  minlength="8"
                                  data-hs-toggle-password-options='{
                                   "target": [".js-toggle-password-target-1", ".js-toggle-password-target-2"],
                                   "defaultClass": "bi-eye-slash",
                                   "showClass": "bi-eye",
                                   "classChangeTarget": ".js-toggle-password-show-icon-1"
                                 }'
                                />
                                <a
                                  class="js-toggle-password-target-1 input-group-append input-group-text"
                                  href="/"
                                >
                                  <i class="js-toggle-password-show-icon-1 bi-eye"></i>
                                </a>

                                <span class="invalid-feedback">
                                  Your password is invalid. Please try again.
                                </span>
                              </div>
                            </div>

                            <div class="mb-4">
                              {/* <label
                                class="form-label"
                                for="signupSrConfirmPassword"
                              >
                                Confirm password
                              </label> */}

                              <div class="input-group-merge">
                                <input
                                  type="password"
                                  class="js-toggle-password form-control form-control-lg"
                                  name="confirmPassword"
                                  id="signupSrConfirmPassword"
                                  placeholder="Confirm password"
                                  aria-label="8+ characters required"
                                  required
                                  minlength="8"
                                  data-hs-toggle-password-options='{
                                   "target": [".js-toggle-password-target-1", ".js-toggle-password-target-2"],
                                   "defaultClass": "bi-eye-slash",
                                   "showClass": "bi-eye",
                                   "classChangeTarget": ".js-toggle-password-show-icon-2"
                                 }'
                                />
                                <a
                                  class="js-toggle-password-target-2 input-group-append input-group-text"
                                  href="/"
                                >
                                  <i class="js-toggle-password-show-icon-2 bi-eye"></i>
                                </a>

                                <span class="invalid-feedback">
                                  Password does not match the confirm password.
                                </span>
                              </div>
                            </div>

                            <div class="form-check mb-4">
                              <input
                                class="form-check-input"
                                type="checkbox"
                                value=""
                                id="termsCheckbox"
                                required
                              />
                              <label
                                class="form-check-label"
                                for="termsCheckbox"
                              >
                                I accept the{" "}
                                <a href="/">Terms and Conditions</a>
                              </label>
                              <span class="invalid-feedback">
                                Please accept our Terms and Conditions.
                              </span>
                            </div>

                            <div class="d-grid gap-4">
                              <button
                                type="submit"
                                class="btn btn-primary btn-lg"
                              >
                                Create an account
                              </button>
                              <p class="card-text text-muted">
                                Remember your password?{" "}
                                <p class="link" onClick={handleSwitch}>
                                  Log in
                                </p>
                              </p>
                            </div>
                          </form>
                        </div>
                      </div>

                      <div
                        class="col-md-4 d-md-flex justify-content-center flex-column bg-soft-primary p-8 p-md-5"
                        style={{
                          backgroundImage:
                            "url(./assets/svg/components/wave-pattern.svg)",
                        }}
                      >
                        <h5 class="mb-4 invisible">
                          Build digital products with:
                        </h5>

                        <ul class="list-checked list-checked-primary list-py-2 invisible">
                          <li class="list-checked-item">All-in-one tool</li>
                          <li class="list-checked-item">
                            Easily add &amp; manage your services
                          </li>
                        </ul>

                        <span class="d-block invisible">
                          <a class="link link-pointer" href="/">
                            Learn more
                          </a>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </body>
    </>
  );
};
export default SignUp;
