import React from "react";
import { useState, useRef } from "react";
import { useApplicationContext } from "../../context/app-context";

import { useNavigate } from "react-router-dom";
import { OtpVerificationPageStyled } from "./style";

import AxiosInstance from "../../components/axios";

const OtpVerification = () => {
  const [warning, setWarning] = useState("");
  const { setIsEmailVerified } = useApplicationContext();
  const [otpPin, setOtpPin] = useState(Array(6).fill(""));
  const navigate = useNavigate();
  const inputRefs = useRef([]);

  const handleInputChange = (index, event) => {
    const input = event.target.value;

    if (/^\d?$/.test(input)) {
      const updatedOtpPin = [...otpPin];
      updatedOtpPin[index] = input;

      if (input && index < 5 && inputRefs.current[index + 1]) {
        inputRefs.current[index + 1].focus();
      }
      setOtpPin(updatedOtpPin);
    }

    //updating the postcodes as an array
  };

  const handleKeyDown = (index, event) => {
    if (event.key === "Backspace" && otpPin[index] === "") {
      const updatedOtpPin = [...otpPin];
      updatedOtpPin[index - 1] = "";

      setOtpPin(updatedOtpPin);

      if (index > 0 && inputRefs.current[index - 1]) {
        inputRefs.current[index - 1].focus();
      }
    } else if (
      event.key === "ArrowRight" &&
      index < 5 &&
      otpPin[index] !== ""
    ) {
      if (inputRefs.current[index + 1]) {
        inputRefs.current[index + 1].focus();
      }
    } else if (event.key === "ArrowLeft" && index > 0) {
      if (inputRefs.current[index - 1]) {
        inputRefs.current[index - 1].focus();
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const joinedOtpPin = otpPin.join("");

    AxiosInstance.post("/api/otp/verify-otp", {
      email: email,
      otp: joinedOtpPin,
    })
      .then(async (response) => {
        const data = await response.data;
        console.log(data);
        setIsEmailVerified(true);
        createProfile();
      })
      .catch((err) => {
        setWarning("Invalid OTP");

        console.log(err);
      });
  };

  const email = localStorage.getItem("email");
  const first_name = localStorage.getItem("first_name");
  const last_name = localStorage.getItem("last_name");
  const password = localStorage.getItem("password");

  const createProfile = () => {
    const formData = new FormData();
    formData.append("first_name", first_name);
    formData.append("last_name", last_name);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("post_code", "");
    formData.append("state", "");
    formData.append("phone", "");
    formData.append("property", "");
    formData.append("portfolio", "");
    formData.append("invest", "");

    AxiosInstance.post("/api/user/signup", formData, {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(async (response) => {
        const data = await response.data;
        console.log(data);
        navigate("/");
        localStorage.setItem("isLoggedIn", true);
        localStorage.removeItem("email");
        localStorage.removeItem("first_name");
        localStorage.removeItem("last_name");
        localStorage.removeItem("password");
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <OtpVerificationPageStyled>
        <div className="main-container">
          <div className="left-container">
            <h1>2ndStorey</h1>
          </div>
          <div className="right-container">
            <div className="right-sub-container">
              <div>
                <div>
                  <h3>Enter Verification Code</h3>
                </div>
                <p style={{ width: "80%" }}>
                  Please type in the <span>4-digit code</span>
                  sent to your email. If it does not appear in your Inbox,
                  please check your Updates, Quarantined or Spam folders.
                </p>
              </div>
              <form onSubmit={handleSubmit}>
                {otpPin.map((otp, index) => (
                  <input
                    style={{
                      width: "12px",
                      background: "none",
                      border: "none",
                      borderBottom: "1px solid black",
                      outline: "none",
                    }}
                    key={index}
                    type="number"
                    id={`otp-${index}`}
                    ref={(ref) => (inputRefs.current[index] = ref)}
                    value={otp}
                    onChange={(event) => handleInputChange(index, event)}
                    onKeyDown={(event) => handleKeyDown(index, event)}
                    maxLength={1}
                  />
                ))}

                <p style={{ color: "red" }}>{warning}</p>
                <br />
                <button type="submit">Next</button>
              </form>
            </div>
          </div>
        </div>
      </OtpVerificationPageStyled>
    </>
  );
};

export default OtpVerification;
