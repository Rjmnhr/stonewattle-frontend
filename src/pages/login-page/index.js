import React, { useState } from "react";
import SignIn from "../../components/sign-in/sign-in";

import { LoginPagestyled } from "./style";
import SignUp from "../../components/sign-up/sign-up";

const LoginPage = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const handleSwitch = (tab) => {
    if (tab === "sign-up") {
      setIsSignIn(false);
    } else {
      setIsSignIn(true);
    }
  };

  return (
    <>
      <LoginPagestyled>
        <div className="login-container">
          <h1>Stone Wattle</h1>
          <div className="login-nav">
            <label onClick={() => handleSwitch("sign-in")}>SIGN IN</label>
            <label onClick={() => handleSwitch("sign-up")}>SIGN UP</label>
          </div>
          <div className="login-box">{isSignIn ? <SignIn /> : <SignUp />}</div>
        </div>
      </LoginPagestyled>
    </>
  );
};

export default LoginPage;
