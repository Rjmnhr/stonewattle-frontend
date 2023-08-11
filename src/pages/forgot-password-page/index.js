import React, { useState } from "react";
import { LoadingOutlined } from "@ant-design/icons";
import AxiosInstance from "../../components/axios";
import { useEffect } from "react";
import { message, Modal } from "antd";
import { useApplicationContext } from "../../context/app-context";
import { ArrowBack, CheckCircleOutlineRounded } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const VerifyEmail = ({ setEmail, email, setIsOtpSend }) => {
  const [isLoading, setIsLoading] = useState(false);

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
        // Handle successful OTP request
        console.log(data);

        setIsOtpSend(true);

        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <form
        onSubmit={handleSubmit}
        class="js-validate needs-validation  col-lg-10"
        novalidate
      >
        <div class="text-start">
          <div class="mb-5">
            <h3>Forgot your password?</h3>
            <p>
              If you've forgotten your password, enter your email address below
              and follow the reset instructions
            </p>
          </div>
        </div>

        <div class="mb-4 col-lg-8">
          <input
            type="email"
            class="form-control form-control-lg "
            name="email"
            id="signupSrEmail"
            placeholder="Email"
            aria-label="Markwilliams@site.com"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div class="d-grid gap-4 col-lg-8">
          <button type="submit" class="btn btn-primary btn-lg">
            {isLoading ? <LoadingOutlined /> : "Send"}
          </button>
          <a className="d-flex gap-1 align-items-center" href="/login">
            {" "}
            <ArrowBack /> Go back to log in{" "}
          </a>
        </div>
      </form>
    </>
  );
};

const OtpVerification = ({ email }) => {
  const [otp, setOtp] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [warning, setWarning] = useState("");
  const { setIsEmailVerified } = useApplicationContext();

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsLoading(true);

    AxiosInstance.post("/api/otp/verify-otp", {
      email: email,
      otp: otp,
    })
      .then(async (response) => {
        const data = await response.data;
        console.log(data);
        setIsLoading(false);
        setIsEmailVerified(true);
      })
      .catch((err) => {
        setWarning("Invalid OTP");
        setIsLoading(false);

        console.log(err);
      });
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        class="js-validate needs-validation text-start  col-lg-10"
        novalidate
      >
        <div class="mb-5 text-start">
          <h3>Quick, check your email</h3>
          <p>
            Open the email we just sent you an verification code to reset your
            password.
          </p>
          <p style={{ color: "gray", fontWeight: "bold" }}>{email}</p>
        </div>

        <div class="mb-4 col-lg-8">
          <input
            class="form-control form-control-lg"
            placeholder="Verification code"
            required
            onChange={(e) => setOtp(e.target.value)}
          />
        </div>
        <p style={{ color: "red" }}>{warning}</p>

        <div class="d-grid gap-4 col-lg-8">
          <button type="submit" class="btn btn-primary btn-lg">
            {isLoading ? <LoadingOutlined /> : "Verify"}
          </button>
        </div>
      </form>
    </>
  );
};

const CreatePassword = ({ email }) => {
  const [confirmPassword, setConfirmPassword] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordSame, setIsPasswordSame] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();
  const [modalVisible, setModalVisible] = useState(false);
  const navigate = useNavigate();

  const notification = ({ message, type }) => {
    messageApi.open({
      type: type,
      content: message,
    });
  };

  const handleModalClose = () => {
    setModalVisible(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsLoading(true);
    if (confirmPassword !== password) {
      notification("Password are not matching", "error");
      return;
    }

    AxiosInstance.post(
      "/api/user/change-password",
      {
        email: email,
        password: password,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then(async (response) => {
        const data = await response.data;
        console.log(data);
        setIsLoading(false);
        if (!response.status === 200) {
          notification("Password reset failed", "error");
          return;
        }

        notification("Password has been successfully reset!", "success");
        setModalVisible(true);
        e.target.reset();
        setTimeout(() => {
          // Navigate to the desired route after 5 seconds
          navigate("/login"); // Replace 'destination' with your actual route
        }, 5000); // 3 seconds in millisecondsx
      })
      .catch((err) => {
        notification("something error", "error");
        console.log(err);
      });
  };

  useEffect(() => {
    if (password && confirmPassword)
      if (password === confirmPassword) {
        setIsPasswordSame(true);
      } else {
        setIsPasswordSame(false);
      }
    // eslint-disable-next-line
  }, [password, confirmPassword]);

  return (
    <>
      {contextHolder}
      <form
        onSubmit={handleSubmit}
        class="js-validate needs-validation text-start  col-lg-12"
        novalidate
      >
        <div class="mb-5 text-start">
          <h3>Reset your password</h3>
        </div>

        <div class="mb-4 ">
          <div class="input-group-merge">
            <input
              type="password"
              class="js-toggle-password form-control form-control-lg"
              placeholder="New password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        <div class="mb-4">
          <div class="input-group-merge">
            <input
              type="password"
              class="js-toggle-password form-control form-control-lg"
              placeholder="Confirm password"
              required
              onChange={(e) => setConfirmPassword(e.target.value)}
            />

            {isPasswordSame === false ? (
              <p
                style={{
                  color: "red",
                  fontSize: "14px",
                  margin: "0",
                  paddingLeft: "15px",
                }}
              >
                Password does not match the confirm password.
              </p>
            ) : (
              ""
            )}
          </div>
        </div>

        <div class="d-grid gap-4 col-lg-8">
          <button type="submit" class="btn btn-primary btn-lg">
            {isLoading ? <LoadingOutlined /> : "Next"}
          </button>
        </div>
      </form>
      <Modal
        visible={modalVisible}
        onCancel={handleModalClose}
        onOk={handleModalClose}
      >
        <div className="container p-3 d-flex-column align-items-center">
          <p className="d-flex align-items-center gap-1 ">
            Your password has been successfully reset!
            <CheckCircleOutlineRounded sx={{ color: "green" }} />{" "}
          </p>

          <p style={{ cursor: "pointer" }}>
            You can now log in with your new password.
          </p>
        </div>
      </Modal>
    </>
  );
};

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState("");
  const [isOtpSend, setIsOtpSend] = useState(false);
  const { isEmailVerified } = useApplicationContext();
  return (
    <div style={{ height: "100vh", display: "grid", placeItems: "center" }}>
      <div
        style={{ minHeight: "50vh" }}
        className="container mt-3 mt-lg-0 mb-5 w-lg-50  "
      >
        <div className="mx-lg-auto" style={{ maxWidth: "55rem" }}>
          <div class="d-flex justify-content-center align-items-center flex-column ">
            <div class="position-relative">
              <div class="card card-shadow card-login">
                <div class="col-12">
                  <div
                    style={{ padding: "1.75rem 2.75rem" }}
                    class="card-body "
                  >
                    {isOtpSend ? (
                      isEmailVerified ? (
                        <CreatePassword email={email} />
                      ) : (
                        <OtpVerification email={email} />
                      )
                    ) : (
                      <VerifyEmail
                        email={email}
                        setEmail={setEmail}
                        setIsOtpSend={setIsOtpSend}
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
