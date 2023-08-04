import React, { useEffect } from "react";
import { useState, useRef } from "react";

import { CreateProfileStyled } from "./profile-style";
import { useNavigate } from "react-router-dom";
import AxiosInstance from "../axios";

const CreateProfile = () => {
  const [userName, setUserName] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);
  const [isPasswordSame, setIsPasswordSame] = useState(null);
  const [state, setState] = useState("");
  const [noOfProperty, setNoOfProperty] = useState(0);
  const [portfolio, setPortfolio] = useState(0);
  const [invest, setInvest] = useState("");
  const [postcodes, setPostcodes] = useState(Array(4).fill(""));
  const inputRefs = useRef([]);

  const navigate = useNavigate();

  const email = localStorage.getItem("email");

  const handleInputChange = (index, event) => {
    const input = event.target.value;
    if (/^\d?$/.test(input)) {
      const updatedPostcodes = [...postcodes];
      updatedPostcodes[index] = input;

      if (input && index < 5 && inputRefs.current[index + 1]) {
        inputRefs.current[index + 1].focus();
      }

      setPostcodes(updatedPostcodes);
    }
  };
  //updating the postcodes as an array

  const handleKeyDown = (index, event) => {
    if (event.key === "Backspace" && postcodes[index] === "") {
      const updatedPostcodes = [...postcodes];
      updatedPostcodes[index - 1] = "";

      setPostcodes(updatedPostcodes);

      if (index > 0 && inputRefs.current[index - 1]) {
        inputRefs.current[index - 1].focus();
      }
    } else if (
      event.key === "ArrowRight" &&
      index < 5 &&
      postcodes[index] !== ""
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

  const handleSubmit = (event) => {
    event.preventDefault();

    const joinedPostcode = postcodes.join("");

    console.log(joinedPostcode);
    console.log(typeof phone);

    const formData = new FormData();
    formData.append("userName", userName);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("post_code", joinedPostcode);
    formData.append("state", state);
    formData.append("phone", phone);
    formData.append("property", noOfProperty);
    formData.append("portfolio", portfolio);
    formData.append("invest", invest);

    console.log(JSON.stringify(formData));
    AxiosInstance.post("/api/user/signup", formData, {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(async (response) => {
        const data = await response.data;
        console.log(data);
        navigate("/home");
      })
      .catch((err) => console.log(err));
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
    <div>
      <CreateProfileStyled>
        <div className="form-container">
          <form on onSubmit={handleSubmit}>
            <h2>Your personal details</h2>
            <div className="detail-input">
              <label>Name :</label>
              <input
                type="text"
                onChange={(e) => setUserName(e.target.value)}
                placeholder="Name"
                required
              />
            </div>

            <div className="detail-input">
              <label>Phone Number :</label>
              <input
                type="number"
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Phone Number"
                required
              />
            </div>

            <div className="detail-input">
              <label>State :</label>
              <select onChange={(e) => setState(e.target.value)} required>
                <option value="">select</option>
                <option value="ACT">Australian Capital Territory</option>
                <option value="NSW">New South Wales</option>
                <option value="NT">Northern Territory</option>
                <option value="QLD">Queensland</option>
                <option value="SA">South Australia</option>
                <option value="TAS">Tasmania</option>
                <option value="VIC">Victoria</option>
                <option value="WA">Western Australia</option>
              </select>
            </div>

            <div className="detail-input">
              <div
              // style={{ display: "flex", gap: "3px", alignItems: "center" }}
              >
                <label>Post Code :</label>
                {postcodes.map((postcode, index) => (
                  <input
                    style={{
                      width: "8px",
                      background: "none",
                    }}
                    key={index}
                    type="number"
                    id={`postcode-${index}`}
                    ref={(ref) => (inputRefs.current[index] = ref)}
                    value={postcode}
                    onChange={(event) => handleInputChange(index, event)}
                    onKeyDown={(event) => handleKeyDown(index, event)}
                    maxLength={1}
                  />
                ))}
              </div>
            </div>

            <div className="detail-input">
              <label>Password :</label>
              <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
              />
            </div>

            <div className="detail-input">
              <label>Confirm password :</label>
              <input
                type="password"
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Password"
                required
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
                  passwords are not matching
                </p>
              ) : (
                ""
              )}
            </div>

            <h2>Your property investing goals</h2>
            <div className="detail-input">
              <label>How many properties do you currently have</label>
              <input
                type="number"
                onChange={(e) => setNoOfProperty(e.target.value)}
                placeholder="Enter"
              />
            </div>
            <div className="detail-input">
              <label>
                What is the current value of all of your property portfolio
              </label>
              <input
                type="number"
                onChange={(e) => setPortfolio(e.target.value)}
                placeholder="Enter"
              />
            </div>
            <div className="detail-input">
              <label>How quickly are you looking to invest ?</label>
              <select onChange={(e) => setInvest(e.target.value)}>
                <option value="">select</option>
                <option value="1 month">1 month</option>
                <option value="3 months">3 months</option>
                <option value="6 months">6 months</option>
                <option value="1 year">1 year</option>
                <option value="unsure">unsure</option>
              </select>
            </div>

            {password === confirmPassword ? (
              <button type="submit"> Register</button>
            ) : (
              <button disabled type="submit">
                Register
              </button>
            )}
          </form>
        </div>
      </CreateProfileStyled>
    </div>
  );
};

export default CreateProfile;
