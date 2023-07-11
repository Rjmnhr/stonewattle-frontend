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
            <h1>STONE WATTLE</h1>
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
