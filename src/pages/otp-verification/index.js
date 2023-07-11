import React from "react";
import { useState } from "react";
import { useApplicationContext } from "../../context/app-context";

import { useNavigate } from "react-router-dom";
import { OtpVerificationPageStyled } from "./style";
import axios from "axios";

const OtpVerification = () => {
  const [userInput, setUserInput] = useState(null);
  const [warning, setWarning] = useState("");

  const { setIsEmailVerified, otpReader } = useApplicationContext();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:8002/api/otp/verify-otp", { otp: userInput })
      .then(async (response) => {
        const data = await response.data;
        console.log(data);
        setIsEmailVerified(true);
      })
      .catch((err) => {
        setWarning("Invalid OTP");

        console.log(err);
      });
  };

  return (
    <>
      <OtpVerificationPageStyled>
        <div className="main-container">
          <div className="left-container">
            <h1>Stone Wattle</h1>
          </div>
          <div className="right-container">
            <div className="right-sub-container">
              <div className="carousel-inner">
                <div className="active carousel-item">
                  <h3>Enter Verification Code</h3>
                </div>
                <p style={{ width: "80%" }}>
                  Please type in the{" "}
                  <span className="highlight">4-digit code</span>
                  sent to your email. If it does not appear in your Inbox,
                  please check your Updates, Quarantined or Spam folders.
                </p>
              </div>
              <form onSubmit={handleSubmit}>
                <input
                  onChange={(e) => setUserInput(e.target.value)}
                  type="number"
                />
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
