import { createContext, useContext, useState } from "react";

const MyContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [isEmailVerified, setIsEmailVerified] = useState(false);
  const [isUserValid, setIsUserValid] = useState(false);
  const [results, setResults] = useState(null);
  const [isSignIn, setIsSignIn] = useState(true);
  const [filteredResults, setFilteredResults] = useState(
    JSON.parse(sessionStorage.getItem("filteredResults")) || null
  );
  const [isResultsFiltered, setIsResultsFiltered] = useState(false);
  const [availableFiltersCount, setAvailableFiltersCount] = useState(0);
  const [dropdownHeight, setDropdownHeight] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userInfo, setUserInfo] = useState(null);

  const [vacancyRateWeightage, setVacancyRateWeightage] = useState(0);
  const [familyWeightage, setFamilyWeightage] = useState(0);
  const [rentalYieldWeightage, setRentalYieldWeightage] = useState(0);
  const [growthInPropertyWeightage, SetGrowthInPropertyWeightage] = useState(0);
  const [rentVsOwnerRatioWeightage, setRentVsOwnerRatioWeightage] = useState(0);
  const [availabilityOfSupplyWeightage, setAvailabilityOfSupplyWeightage] =
    useState(0);
  const [ratingsWeightage, setRatingsWeightage] = useState(0);
  const [demandPrevMonthWeightage, setDemandPrevMonthWeightage] = useState(0);
  // const [demandLastYearWeightage, setDemandLastYearWeightage] = useState(0);
  const [populationGrowthWeightage, setPopulationGrowthWeightage] = useState(0);
  const [australianBornWeightage, setAustralianBornWeightage] = useState(0);
  const [unemployedPeopleWeightage, setUnemployedPeopleWeightage] = useState(0);
  const [weeklyIncomeWeightage, setWeeklyIncomeWeightage] = useState(0);
  const [allCrimesWeightage, setAllCrimesWeightage] = useState(0);
  const [greatForSchoolsWeightage, setGreatForSchoolsWeightage] = useState(0);
  const [greatForTransportWeightage, setGreatForTransportWeightage] =
    useState(0);
  const [greatForHospitalsWeightage, setGreatForHospitalsWeightage] =
    useState(0);

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
    dropdownHeight,
    setDropdownHeight,
    isLoggedIn,
    setIsLoggedIn,
    userInfo,
    setUserInfo,
    vacancyRateWeightage,
    setVacancyRateWeightage,
    familyWeightage,
    setFamilyWeightage,
    rentalYieldWeightage,
    setRentalYieldWeightage,
    growthInPropertyWeightage,
    SetGrowthInPropertyWeightage,
    rentVsOwnerRatioWeightage,
    setRentVsOwnerRatioWeightage,
    availabilityOfSupplyWeightage,
    setAvailabilityOfSupplyWeightage,
    ratingsWeightage,
    setRatingsWeightage,
    demandPrevMonthWeightage,
    setDemandPrevMonthWeightage,
    populationGrowthWeightage,
    setPopulationGrowthWeightage,
    australianBornWeightage,
    setAustralianBornWeightage,
    unemployedPeopleWeightage,
    setUnemployedPeopleWeightage,
    weeklyIncomeWeightage,
    setWeeklyIncomeWeightage,
    allCrimesWeightage,
    setAllCrimesWeightage,
    greatForSchoolsWeightage,
    setGreatForSchoolsWeightage,
    greatForTransportWeightage,
    setGreatForTransportWeightage,
    greatForHospitalsWeightage,
    setGreatForHospitalsWeightage,
  };

  return <MyContext.Provider value={value}>{children}</MyContext.Provider>;
};

export const useApplicationContext = () => {
  return useContext(MyContext);
};
