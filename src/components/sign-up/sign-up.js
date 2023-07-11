import React, { useState } from "react";
import InfoModal from "../modals/info-modal";
import axios from "axios";
import { LoadingOutlined } from "@ant-design/icons";
import { useApplicationContext } from "../../context/app-context";
import { useNavigate } from "react-router-dom";

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

    axios
      .post("http://localhost:8002/api/otp/send-otp", { email })
      .then(async (response) => {
        const data = await response.data;
        console.log(data);

        localStorage.setItem("email", email);
        setIsLoading(false);
        navigate("/otp-validation");
      })
      .catch((err) => console.log(err));
    // Handle successful OTP request
  };
  return (
    <>
      <div className="form-container">
        <form
          className="signup-form"
          style={{ justifyContent: "center", height: "40vh" }}
          onSubmit={handleSubmit}
        >
          <div className="detail-input">
            <input
              type="email"
              placeholder="Email address"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div style={{ display: "grid", placeItems: "center", width: "100%" }}>
            <button type="submit">
              {isLoading ? <LoadingOutlined /> : "VERIFY"}{" "}
            </button>
          </div>
          <div className="info">
            <p>
              🔐 Your identity is protected
              <InfoModal
                title=" 🔐 Safety"
                content="Your work email is immediately one-way hashed and held separately from the account that you are about to create.

This means that there is no way for your organization to trace your username or activity back to your work email.

Our secure system provides the true psychological safety required for colleagues to speak openly and honestly."
              />
            </p>
          </div>
        </form>
        <p>
          Already have an account?
          <span onClick={handleSwitch} style={{ color: "gray" }}>
            {" "}
            Log in
          </span>
        </p>
      </div>
    </>
  );
};

export default SignUp;
