import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useApplicationContext } from "../../context/app-context";
import { message } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);

  const [warning, setWarning] = useState("");
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

    fetch("http://2ndstorey.com:8002/api/user/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    })
      .then(async (response) => {
        const data = await response.json();
        console.log("result", data);
        setIsLoading(false);

        if (typeof data === "string") {
          error(data);
          document.querySelector("#signupSrPassword").style.border =
            "1px solid red";
          document.querySelector("#signinSrEmail").style.border =
            "1px solid red";
          setWarning("wrong username or password");
          return;
        }
        success();

        const accessToken = data.accessToken;
        console.log(accessToken);

        if (!accessToken) return error(data);

        const userType = data.user_type;
        const UserId = data.id;

        localStorage.setItem("UserID", UserId);
        localStorage.setItem("userData", JSON.stringify(data));
        localStorage.setItem("userType", userType);
        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("isLoggedIn", true);

        setIsLoggedIn(true);

        console.log("userType", data.user_type);
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
                {/* <header
                  id="header"
                  className="navbar navbar-height navbar-light mb-3"
                >
                   <div className="container">
                    <a className="navbar-brand mx-auto" href="/" aria-label="Unify">
                      <h3>2ndstorey</h3>
                    </a>
                  </div> 
                </header> */}

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

                              <a
                                className="btn btn-white btn-lg d-grid mb-4"
                                href="/"
                              >
                                <span className="d-flex justify-content-center align-items-center">
                                  <img
                                    className="avatar avatar-xss me-2"
                                    src="./assets/svg/brands/google-icon.svg"
                                    alt="IDescription"
                                  />
                                  Log in with Google
                                </span>
                              </a>

                              <span className="divider-center text-muted mb-4">
                                OR
                              </span>
                            </div>

                            <div className="mb-4">
                              {/* <label
                                className="form-label"
                                htmlFor="signinSrEmail"
                              >
                                Your email
                              </label> */}
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
                              {/* <label
                                className="form-label"
                                htmlFor="signupSrPassword"
                                tabindex="0"
                              >
                                Password
                              </label> */}

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
                                href="./page-reset-password.html"
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
                                <p className="link" onClick={handleSwitch}>
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
