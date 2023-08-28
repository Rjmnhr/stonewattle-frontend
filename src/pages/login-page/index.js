import SignIn from "../../components/sign-in/sign-in";

import { LoginPagestyled } from "./style";
import SignUp from "../../components/sign-up/sign-up";
import { useApplicationContext } from "../../context/app-context";
import NavBar from "../../components/nav-bar/nav-bar";

const LoginPage = () => {
  const { isSignIn } = useApplicationContext();

  return (
    <>
      <NavBar />
      <LoginPagestyled>
        <div style={{ height: "100vh" }} className={`main-container `}>
          {isSignIn ? <SignIn /> : <SignUp />}
        </div>
      </LoginPagestyled>
    </>
  );
};

export default LoginPage;
