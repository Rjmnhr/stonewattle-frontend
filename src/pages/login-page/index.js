import SignIn from "../../components/sign-in/sign-in";

import { LoginPagestyled } from "./style";
import SignUp from "../../components/sign-up/sign-up";
import { useApplicationContext } from "../../context/app-context";

const LoginPage = () => {
  const { isSignIn } = useApplicationContext();

  return (
    <>
      <LoginPagestyled>
        <div className="main-container">
          <div className="left-container">
            <h1 style={{ color: "white" }}>2ndStorey</h1>
            <p style={{ color: "white" }}>
              Your one-stop property suburb search
            </p>
          </div>
          <div className="login-container">
            <div className="login-box">
              {isSignIn ? <SignIn /> : <SignUp />}
            </div>
          </div>
        </div>
      </LoginPagestyled>
    </>
  );
};

export default LoginPage;
