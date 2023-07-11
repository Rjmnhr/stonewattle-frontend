import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useApplicationContext } from "../../context/app-context";
import { message } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [warning, setWarning] = useState("");
  const navigate = useNavigate();
  const { setIsSignIn } = useApplicationContext();
  const [messageApi, contextHolder] = message.useMessage();

  const handleSwitch = () => {
    setIsSignIn(false);
  };

  const handleSubmit = (event) => {
    setIsLoading(true);
    event.preventDefault();

    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);

    fetch("http://localhost:8002/api/user/login", {
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
          document.querySelector(".input1").style.border = "1px solid red";
          document.querySelector(".input2").style.border = "1px solid red";
          setWarning("wrong username or password");
          return;
        }
        success();

        const accessToken = data.accessToken;
        console.log(accessToken);

        if (!accessToken) return error(data);

        const userType = data.user_type;
        const UserId = data.id;

        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("UserID", UserId);
        localStorage.setItem("userData", JSON.stringify(data));
        localStorage.setItem("iuserType", userType);

        console.log("userType", data.user_type);
        if (userType === "admin") {
          localStorage.setItem("isAdmin", "true");
        } else {
          localStorage.setItem("isAdmin", "false");
        }

        setEmail("");
        setPassword("");

        navigate("/home");
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
      <div className="form-container">
        <form on onSubmit={handleSubmit}>
          <div className="detail-input">
            <input
              className="input1"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
            />
          </div>
          <div className="detail-input">
            <input
              className="input2"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
            />
          </div>

          <div style={{ display: "grid", placeItems: "center", width: "100%" }}>
            <button type="submit">
              {isLoading ? <LoadingOutlined /> : "Log In"}
            </button>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: "5px",
              alignItems: "center",
            }}
          >
            <div>
              {" "}
              <input style={{ width: "14px" }} type="checkbox" />
              <label style={{ fontSize: "14px" }}>Remember me </label>
            </div>

            <label style={{ fontWeight: "bold", color: "#a8a7a7" }}>
              Forgot your password?
            </label>
          </div>
        </form>
        <p>
          Don't have an account?
          <span onClick={handleSwitch} style={{ color: "gray" }}>
            {" "}
            Sign Up
          </span>
        </p>
        <p style={{ color: "red" }}> {warning}</p>
      </div>
    </>
  );
};

export default SignIn;
