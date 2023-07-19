import React from "react";
import { useState, useRef } from "react";

import { CreateProfileStyled } from "./profile-style";
import { useNavigate } from "react-router-dom";
import AxiosInstance from "../axios";

const CreateProfile = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [postcodes, setPostcodes] = useState(Array(4).fill(""));
  const inputRefs = useRef([]);

  const navigate = useNavigate();

  const email = localStorage.getItem("email");

  const handleInputChange = (index, event) => {
    const input = event.target.value;

    //updating the postcodes as an array
    const updatedPostcodes = [...postcodes];
    updatedPostcodes[index] = input;

    if (input && index < 5 && inputRefs.current[index + 1]) {
      inputRefs.current[index + 1].focus();
    }

    setPostcodes(updatedPostcodes);
  };

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

    const formData = new FormData();
    formData.append("first_name", firstName);
    formData.append("last_name", lastName);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("post_code", joinedPostcode);

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
  return (
    <div>
      <CreateProfileStyled>
        <div className="form-container">
          <form on onSubmit={handleSubmit}>
            <div className="detail-input">
              <label>First Name :</label>
              <input
                type="text"
                onChange={(e) => setFirstName(e.target.value)}
                placeholder=" First Name"
                required
              />
            </div>

            <div className="detail-input">
              <label>Last Name :</label>
              <input
                type="text"
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Last Name"
                required
              />
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
              <div
                style={{ display: "flex", gap: "3px", alignItems: "center" }}
              >
                <label>Post Code :</label>
                {postcodes.map((postcode, index) => (
                  <input
                    style={{
                      width: "8px",
                      background: "none",
                      borderBottom: "1px solid black",
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

            <button type="submit">Sign Up</button>
          </form>
        </div>
      </CreateProfileStyled>
    </div>
  );
};

export default CreateProfile;
