import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useApplicationContext } from "../../context/app-context";
import { message } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import GoogleLoginComponent from "../google-login/google-login";
import AxiosInstance from "../axios";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);

  const navigate = useNavigate();
  const { setIsSignIn, setIsLoggedIn } = useApplicationContext();
  const [messageApi, contextHolder] = message.useMessage();

  const togglePasswordVisibility = () => {
    setPasswordVisible((prevVisible) => !prevVisible);
  };

  const handleSwitch = () => {
    setIsSignIn(false);
  };

  const handleSubmit = (event) => {
    setIsLoading(true);
    event.preventDefault();

    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);

    AxiosInstance.post("/api/user/login", formData, {
      headers: { "Content-Type": "application/json" },
    })
      .then(async (response) => {
        const data = await response.data;
        setIsLoading(false);

        if (!response.status === 200) {
          error("wrong password or username");
          document.querySelector("#signupSrPassword").style.border =
            "1px solid red";
          document.querySelector("#signinSrEmail").style.border =
            "1px solid red";
          return;
        }

        success();

        const accessToken = data.accessToken;

        if (!accessToken) return error(data);

        const userType = data.user_type;

        localStorage.setItem("userType", userType);
        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("isLoggedIn", true);

        setIsLoggedIn(true);

        if (userType === "admin") {
          localStorage.setItem("isAdmin", "true");
        } else {
          localStorage.setItem("isAdmin", "false");
        }

        setEmail("");
        setPassword("");

        navigate("/");
      })
      .catch((err) => {
        error("Something wrong");
        console.log(err);
      });
  };

  const success = () => {
    messageApi.open({
      type: "success",
      content: "Login successfully",
    });
  };

  const error = (data) => {
    messageApi.open({
      type: "error",
      content: data,
    });
  };

  useEffect(() => {
    let timeoutId;
    if (isLoading) {
      timeoutId = setTimeout(() => {
        setIsLoading(false);
        error("Check your internet connection");
      }, 15000);
    }
    return () => clearTimeout(timeoutId);
    // eslint-disable-next-line
  }, [isLoading]);
  return (
    <>
      {contextHolder}
      <body
        className="d-flex align-items-center min-h-100  "
        style={{ transition: "all 0.3s ease" }}
      >
        <main id="content" role="main" className="flex-grow-1 overflow-hidden">
          <div className="container mt-3 mt-lg-0 mb-5 ">
            <div className="mx-lg-auto" style={{ maxWidth: "55rem" }}>
              <div className="d-flex justify-content-center align-items-center flex-column min-vh-lg-100">
                <div className="position-relative">
                  <div className="card card-shadow card-login">
                    <div className="row">
                      <div className="col-md-8">
                        <div className="card-body">
                          <form
                            className="js-validate needs-validation"
                            novalidate
                            onSubmit={handleSubmit}
                          >
                            <div className="text-center">
                              <div className="mb-5">
                                <h3 className="card-title">
                                  Login to 2nd Storey
                                </h3>
                              </div>

                              <GoogleLoginComponent
                                element={"Log in with Google"}
                              />

                              <span className="divider-center text-muted mb-4">
                                OR
                              </span>
                            </div>

                            <div className="mb-4">
                              <input
                                type="email"
                                className="form-control form-control-lg"
                                name="email"
                                id="signinSrEmail"
                                tabindex="1"
                                placeholder="Email"
                                onChange={(e) => setEmail(e.target.value)}
                                required
                              />
                              <span className="invalid-feedback">
                                Please enter a valid email address.
                              </span>
                            </div>

                            <div className="mb-4">
                              <div className="input-group-merge">
                                <input
                                  type={passwordVisible ? "text" : "password"}
                                  className="js-toggle-password form-control form-control-lg"
                                  name="password"
                                  id="signupSrPassword"
                                  placeholder="Password"
                                  required
                                  data-hs-toggle-password-options='{
                                   "target": "#changePassTarget",
                                   "defaultClass": "bi-eye-slash",
                                   "showClass": "bi-eye",
                                   "classChangeTarget": "#changePassIcon"
                                 }'
                                  onChange={(e) => setPassword(e.target.value)}
                                />
                                <p
                                  id="changePassTarget"
                                  className="input-group-append input-group-text "
                                  onClick={togglePasswordVisibility}
                                  style={{ cursor: "pointer" }}
                                >
                                  <i id="changePassIcon" className="bi-eye"></i>
                                </p>

                                <span className="invalid-feedback">
                                  Please enter a valid password.
                                </span>
                              </div>
                            </div>

                            <div className="d-flex justify-content-end mb-4">
                              <a
                                className="form-label-link"
                                href="/forgot-password"
                              >
                                Forgot Password?
                              </a>
                            </div>

                            <div className="d-grid gap-4">
                              <button
                                type="submit"
                                className="btn btn-primary btn-lg"
                              >
                                {isLoading ? <LoadingOutlined /> : "Sign in"}
                              </button>
                              <p className="card-text text-muted">
                                Don't have an account yet?{" "}
                                <p
                                  className="link"
                                  style={{ cursor: "pointer" }}
                                  onClick={handleSwitch}
                                >
                                  Sign up here
                                </p>
                              </p>
                            </div>
                          </form>
                        </div>
                      </div>

                      <div
                        className="col-md-4 d-md-flex justify-content-center flex-column bg-soft-primary p-8 p-md-5"
                        style={{
                          backgroundImage:
                            "url(./assets/svg/components/wave-pattern.svg)",
                        }}
                      >
                        <h5 className="mb-4 invisible">
                          Build digital products with:
                        </h5>

                        <ul className="list-checked list-checked-primary list-py-2 invisible">
                          <li className="list-checked-item">All-in-one tool</li>
                          <li className="list-checked-item">
                            Easily add &amp; manage your services
                          </li>
                        </ul>

                        <span className="d-block invisible">
                          <a className="link link-pointer" href="/">
                            Learn more
                          </a>
                        </span>
                      </div>
                    </div>
                  </div>

                  <figure
                    className="position-absolute top-0 end-0 zi-n1 d-none d-sm-block mt-n7 me-n10"
                    style={{ width: "4rem" }}
                  >
                    <img
                      className="img-fluid"
                      src="./assets/svg/components/pointer-up.svg"
                      alt="Description"
                    />
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </main>
      </body>
    </>
  );
};

export default SignIn;
