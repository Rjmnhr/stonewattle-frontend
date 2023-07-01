import axios from "axios";
import React, { useState } from "react";

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [postCode1, setPostCode1] = useState(null);
  const [postCode2, setPostCode2] = useState(null);
  const [postCode3, setPostCode3] = useState(null);
  const [postCode4, setPostCode4] = useState(null);

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
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <form on onSubmit={handleSubmit}>
        <label>First Name :</label>
        <input
          type="text"
          onChange={(e) => setFirstName(e.target.value)}
          placeholder=" First Name"
          required
        />
        <label>Last Name :</label>
        <input
          type="text"
          onChange={(e) => setLastName(e.target.value)}
          placeholder="Last Name"
          required
        />
        <label>Email :</label>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <label>Password :</label>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />

        <div style={{ display: "flex", gap: "3px" }}>
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

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
