import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);

    axios
      .post("http://localhost:8002/api/user/login", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then(async (response) => {
        const data = await response.data;
        console.log(data);
        setEmail("");
        setPassword("");
        navigate("/home");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <form on onSubmit={handleSubmit}>
        <label>Email :</label>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email"
          required
        />
        <label>Password :</label>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password"
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default SignIn;
