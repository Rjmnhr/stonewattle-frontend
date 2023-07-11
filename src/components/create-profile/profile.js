import React from "react";
import { useState } from "react";
import axios from "axios";
import { CreateProfileStyled } from "./profile-style";
import { useNavigate } from "react-router-dom";

const CreateProfile = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [postCode1, setPostCode1] = useState(null);
  const [postCode2, setPostCode2] = useState(null);
  const [postCode3, setPostCode3] = useState(null);
  const [postCode4, setPostCode4] = useState(null);

  const navigate = useNavigate();

  const email = localStorage.getItem("email");

  const handleSubmit = (event) => {
    event.preventDefault();
    const postCode =
      postCode1 + "" + postCode2 + "" + postCode3 + "" + postCode4;
    console.log(postCode);

    const formData = new FormData();
    formData.append("first_name", firstName);
    formData.append("last_name", lastName);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("post_code", postCode);

    axios
      .post("http://localhost:8002/api/user/signup", formData, {
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
                <input
                  style={{
                    border: "none",
                    outline: "none",
                    borderBottom: "1px solid",
                    background: "none",
                    width: "10px",
                  }}
                  type="number"
                  maxLength={4}
                  onChange={(e) => setPostCode1(e.target.value)}
                  required
                />
                <input
                  style={{
                    border: "none",
                    outline: "none",
                    borderBottom: "1px solid",
                    background: "none",
                    width: "10px",
                  }}
                  type="number"
                  maxLength={4}
                  onChange={(e) => setPostCode2(e.target.value)}
                  required
                />
                <input
                  style={{
                    border: "none",
                    outline: "none",
                    borderBottom: "1px solid",
                    background: "none",
                    width: "10px",
                  }}
                  type="number"
                  maxLength={4}
                  onChange={(e) => setPostCode3(e.target.value)}
                  required
                />
                <input
                  style={{
                    border: "none",
                    outline: "none",
                    borderBottom: "1px solid",
                    background: "none",
                    width: "10px",
                  }}
                  type="number"
                  maxLength={4}
                  onChange={(e) => setPostCode4(e.target.value)}
                  required
                />
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
