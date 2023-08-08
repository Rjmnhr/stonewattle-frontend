import SignIn from "../../components/sign-in/sign-in";

import { LoginPagestyled } from "./style";
import SignUp from "../../components/sign-up/sign-up";
import { useApplicationContext } from "../../context/app-context";

const LoginPage = () => {
  const { isSignIn } = useApplicationContext();

  return (
    <>
      <LoginPagestyled>
        <div style={{ height: "100vh" }} className={`main-container `}>
          {isSignIn ? <SignIn /> : <SignUp />}
        </div>
      </LoginPagestyled>
    </>
  );
};

export default LoginPage;
