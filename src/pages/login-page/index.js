import SignIn from "../../components/sign-in/sign-in";

import { LoginPagestyled } from "./style";
import SignUp from "../../components/sign-up/sign-up";
import { useApplicationContext } from "../../context/app-context";
import NavBar from "../../components/nav-bar/nav-bar";
import AxiosInstance from "../../components/axios";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const LoginPage = () => {
  const { isSignIn } = useApplicationContext();
  const Location = useLocation();

  useEffect(() => {
    AxiosInstance.post(
      `/api/track-data/store3`,
      { path: Location.pathname },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then(async (response) => {
        const data = await response.data;

        console.log(data);
      })
      .catch((err) => console.log(err));

    //eslint-disable-next-line
  }, []);

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
