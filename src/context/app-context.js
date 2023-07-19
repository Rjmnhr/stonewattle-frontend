import { createContext, useContext, useState } from "react";

const MyContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [isEmailVerified, setIsEmailVerified] = useState(false);
  const [isUserValid, setIsUserValid] = useState(false);

  const [isSignIn, setIsSignIn] = useState(true);

  const value = {
    isEmailVerified,
    setIsEmailVerified,
    isUserValid,
    setIsUserValid,

    isSignIn,
    setIsSignIn,
  };

  return <MyContext.Provider value={value}>{children}</MyContext.Provider>;
};

export const useApplicationContext = () => {
  return useContext(MyContext);
};
