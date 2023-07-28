import { createContext, useContext, useState } from "react";

const MyContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [isEmailVerified, setIsEmailVerified] = useState(false);
  const [isUserValid, setIsUserValid] = useState(false);
  const [results, setResults] = useState(null);
  const [isSignIn, setIsSignIn] = useState(true);
  const [filteredResults, setFilteredResults] = useState(null);
  const [isResultsFiltered, setIsResultsFiltered] = useState(false);
  const [availableFiltersCount, setAvailableFiltersCount] = useState(0);

  const value = {
    isEmailVerified,
    setIsEmailVerified,
    isUserValid,
    setIsUserValid,
    results,
    setResults,
    isSignIn,
    setIsSignIn,
    filteredResults,
    setFilteredResults,
    isResultsFiltered,
    setIsResultsFiltered,
    availableFiltersCount,
    setAvailableFiltersCount,
  };

  return <MyContext.Provider value={value}>{children}</MyContext.Provider>;
};

export const useApplicationContext = () => {
  return useContext(MyContext);
};
