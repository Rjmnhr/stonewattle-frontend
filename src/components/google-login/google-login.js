import React from "react";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { useApplicationContext } from "../../context/app-context";
import AxiosInstance from "../axios";
import { useNavigate, useLocation } from "react-router-dom";
const GoogleLoginComponent = ({ element }) => {
  const { setUserInfo } = useApplicationContext();
  const navigate = useNavigate();
  const Location = useLocation();
  const googleLogin = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      await axios
        .get("https://www.googleapis.com/oauth2/v3/userinfo", {
          headers: { Authorization: `Bearer ${tokenResponse.access_token}` },
        })
        .then(async (res) => {
          const data = await res.data;
          setUserInfo(data);
          storeData(data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  });

  const storeData = (data) => {
    const formData = new FormData();
    formData.append("first_name", data.given_name);
    formData.append("last_name", data.family_name);
    formData.append("email", data.email);
    formData.append("post_code", "");
    formData.append("state", "");
    formData.append("phone", "");
    formData.append("property", "");
    formData.append("portfolio", "");
    formData.append("invest", "");

    AxiosInstance.post("/api/user/create-google-user", formData, {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(async (response) => {
        const data = await response.data;
        console.log(data);
        if (!response.status === 200) return alert("Something ids wrong");

        const userType = data.user_type;
        localStorage.setItem("userType", userType);
        localStorage.setItem("accessToken", data.accessToken);
        localStorage.setItem("isLoggedIn", true);
        sessionStorage.setItem("info", "");

        if (userType === "admin") {
          localStorage.setItem("isAdmin", "true");
        } else {
          localStorage.setItem("isAdmin", "false");
        }

        if (Location.pathname === "/login-app") {
          navigate("/application");
        } else {
          navigate("/");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <p className="btn btn-white btn-lg d-grid mb-4" onClick={googleLogin}>
        <span className="d-flex justify-content-center align-items-center">
          <img
            className="avatar avatar-xss me-2"
            src="./assets/svg/brands/google-icon.svg"
            alt="IDescription"
          />
          {element}
        </span>
      </p>
    </div>
  );
};

export default GoogleLoginComponent;
