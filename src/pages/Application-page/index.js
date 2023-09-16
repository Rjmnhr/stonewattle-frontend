import { HomePageStyled } from "./style";
import NavBar from "../../components/nav-bar/nav-bar";
import { useApplicationContext } from "../../context/app-context";
import { useNavigate } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { Collapse, Menu, Dropdown, message, FloatButton } from "antd";

import { statesOfAus } from "../../components/states-in-aus/states";
import Select, { components } from "react-select";
import CurrencyInput from "react-currency-input-field";
import AxiosInstance from "../../components/axios";
import FilterMobile from "../../components/filter-component-mobile/filter-mobile";
import { MdArrowDropDown } from "react-icons/md";
import GoogleMapComponent from "../../components/GIS-mapping/google-maps";

const ApplicationPage = () => {
  const {
    setResults,
    results,

    filteredResults,
    isResultsFiltered,
    // dropdownHeight,
  } = useApplicationContext();

  const [dwellingType, setDwellingType] = useState("");
  const [minBedrooms, setMinBedrooms] = useState(null);
  const [selectedStates, setSelectedStates] = useState([]);
  const [area, setArea] = useState("");
  const [budget, setBudget] = useState("");
  const [isDataNotFound, setIsDataNotFound] = useState(null);

  const [rentalYield, setRentalYield] = useState("");
  const [growthInProperty, SetGrowthInProperty] = useState("");
  const [availabilityOfSupply, setAvailabilityOfSupply] = useState("");
  const [demandPrevMonth, setDemandPrevMonth] = useState("");
  const [displayResults, setDisplayResults] = useState(null);
  const resultsContainerRef = useRef();
  const navigate = useNavigate();
  const isAdmin = localStorage.getItem("isAdmin");
  const [messageApi, contextHolder] = message.useMessage();
  // eslint-disable-next-line
  const [startTime, setStartTime] = useState(new Date());

  useEffect(() => {
    console.log("1");
    console.log(startTime);
    const handleBeforeUnload = () => {
      // Calculate time spent when the user navigates away or closes the tab
      const endTime = new Date();
      const timeSpentInSeconds = Math.floor((endTime - startTime) / 1000);

      // Send the time spent data to your server or tracking service
      if (filteredResults) {
        saveUserInputData(timeSpentInSeconds);
      }
    };

    // Attach the beforeunload event listener to track time when the user leaves
    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      // Clean up by removing the event listener when the component unmounts
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };

    // eslint-disable-next-line
  }, [filteredResults, startTime]);

  useEffect(() => {
    const storedType = JSON.parse(sessionStorage.getItem("type")) || "";
    setDwellingType(storedType);
    const storedBedrooms = JSON.parse(sessionStorage.getItem("bedrooms")) || "";
    setMinBedrooms(storedBedrooms);

    const storedStates = JSON.parse(sessionStorage.getItem("states")) || "";
    setSelectedStates(storedStates);
    const storedArea = JSON.parse(sessionStorage.getItem("area")) || "";
    setArea(storedArea);

    const storedBudget = JSON.parse(sessionStorage.getItem("budget")) || "";
    setBudget(storedBudget);
  }, []);

  const warning = () => {
    messageApi.open({
      type: "warning",
      content: " Select at least 4 factors to view ranked suburbs",
    });
  };

  // useEffect(() => {
  //   const accessToken = localStorage.getItem("accessToken");

  //   fetch("http://2ndstorey.com:8002/api/token/verify", {
  //     headers: {
  //       token: `Bearer ${accessToken}`,
  //     },
  //   })
  //     .then(async (response) => {
  //       console.log(response.status);
  //       if (response.status === 200) {
  //         console.log("user is valid");
  //         setIsUserValid(true);
  //       } else {
  //         navigate("/");
  //       }
  //     })

  //     .catch((error) => {
  //       console.error(error);
  //     });
  // }, [setIsUserValid, navigate]);

  const isLoggedIn = localStorage.getItem("isLoggedIn");

  useEffect(() => {
    if (isLoggedIn === "true") {
      setDisplayResults(filteredResults);
    } else {
      if (filteredResults) {
        const firstThreeObjects = filteredResults.slice(0, 3);
        setDisplayResults(firstThreeObjects);
      }
    }
  }, [filteredResults, isLoggedIn]);

  const handleSelectedStates = (selectedOptions) => {
    const selectedValues = selectedOptions.map((option) => option.value);
    const unsureOption = statesOfAus.find(
      (option) => option.value === "unsure"
    );
    const isUnsureSelected = selectedValues.includes("unsure");

    // Disable "unsure" if any other option is selected
    unsureOption.isDisabled = selectedValues.length > 0 && !isUnsureSelected;

    // Disable all other options if "unsure" is selected
    statesOfAus.forEach((option) => {
      if (option.value !== "unsure") {
        option.isDisabled = isUnsureSelected;
      }
    });

    setSelectedStates(selectedOptions);
  };

  const Option = (props) => {
    return (
      <components.Option {...props} isDisabled={props.data.isDisabled}>
        {props.children}
      </components.Option>
    );
  };

  const handleBudget = (value) => {
    if (value) {
      const newValue = value.replace(/[$,]/g, "");
      setBudget(newValue);
    } else {
      setBudget(null);
    }
  };

  const saveUserInputData = (duration) => {
    console.log("inside the function");
    if (filteredResults) {
      const formData = new FormData();

      const type = dwellingType ? dwellingType.value : "";
      const bedrooms = minBedrooms ? minBedrooms.value : "";
      const areaType = area ? area.value : "";

      for (let i = 0; i < selectedStates.length; i++) {
        formData.append("states[]", selectedStates[i].value);
      }

      formData.append("type", type);
      formData.append("bedrooms", bedrooms);
      formData.append("area", areaType);
      formData.append("budget", budget);
      formData.append(
        "Low_vacancy_rate",
        sessionStorage.getItem("Low vacancy rate")
      );
      formData.append(
        "Family_friendly",
        sessionStorage.getItem("Family friendly")
      );
      formData.append(
        "High_rental_yield",
        sessionStorage.getItem("High rental yield")
      );
      formData.append(
        "Average_days_on_market",
        sessionStorage.getItem("Average days on market")
      );
      formData.append(
        "High_rated_by_residents",
        sessionStorage.getItem("High rated by residents")
      );
      formData.append("Low supply", sessionStorage.getItem("Low supply"));
      formData.append(
        "Population_growth",
        sessionStorage.getItem("Population growth")
      );
      formData.append(
        "Low_unemployment",
        sessionStorage.getItem("Low unemployment")
      );
      formData.append(
        "Australian_born",
        sessionStorage.getItem("Australian born")
      );
      formData.append("Crime rate", sessionStorage.getItem("Crime rate"));
      formData.append(
        "Great_for_schools",
        sessionStorage.getItem("Great for schools")
      );
      formData.append(
        "Great_for_hospitals",
        sessionStorage.getItem("Great for hospitals")
      );
      formData.append(
        "Recent_growth_in_properties",
        sessionStorage.getItem("Recent growth in properties")
      );
      formData.append(
        "Higher_proportion_of_owners",
        sessionStorage.getItem("Higher proportion of owners")
      );
      formData.append(
        "Relative_income-of_residents",
        sessionStorage.getItem("Relative income of residents")
      );
      formData.append(
        "Public_transport",
        sessionStorage.getItem("Public transport")
      );
      formData.append("duration", duration);

      AxiosInstance.post("/api/track-data/store", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then(async (response) => {
          const data = await response.data;

          console.log(data);
        })
        .catch((err) => console.log(err));

      // eslint-disable-next-line
    }
  };

  const handleSubmit = () => {
    sessionStorage.setItem("type", JSON.stringify(dwellingType));
    sessionStorage.setItem("bedrooms", JSON.stringify(minBedrooms));
    sessionStorage.setItem("states", JSON.stringify(selectedStates));
    sessionStorage.setItem("area", JSON.stringify(area));
    sessionStorage.setItem("budget", JSON.stringify(budget));

    const type = dwellingType.value;
    const bedrooms = minBedrooms.value;
    const areaType = area.value;

    const formData = new FormData();

    for (let i = 0; i < selectedStates.length; i++) {
      formData.append("states[]", selectedStates[i].value);
    }

    formData.append("type", type);
    formData.append("bedrooms", bedrooms);
    formData.append("area", areaType);
    formData.append("budget", budget);
    formData.append("rentalYield", rentalYield);
    formData.append("growth_in_property", growthInProperty);
    formData.append("availability_of_supply", availabilityOfSupply);
    formData.append("demand_prev_month", demandPrevMonth);
    // formData.append("demand_last_year", demandLastYear);

    AxiosInstance.post("/api/domain/filter", formData, {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(async (response) => {
        const data = await response.data;

        if (data.length < 1) {
          setIsDataNotFound(true);
        } else {
          setIsDataNotFound(false);
        }
        setResults(data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    const type = dwellingType.value;

    switch (type) {
      case "Unit":
        setRentalYield("median_yield_units");
        SetGrowthInProperty("median_price_change_last_quarter_units");
        setAvailabilityOfSupply("average_days_on_market_units");
        setDemandPrevMonth("stock_on_market_previous_month_units");
        // setDemandLastYear("stock_variance_vs_last_year_units");
        break;
      case "House":
        setRentalYield("median_yield_house");
        SetGrowthInProperty("median_price_change_last_quarter_house");
        setAvailabilityOfSupply("average_days_on_market_house");
        setDemandPrevMonth("stock_on_market_previous_month_house");
        // setDemandLastYear("stock_variance_vs_last_year_house");

        break;
      case "Townhouse":
        setRentalYield("median_yield_townhouses");
        SetGrowthInProperty("median_price_change_last_quarter_townhouses");
        break;

      default:
    }

    if (budget) {
      if (
        dwellingType &&
        minBedrooms &&
        selectedStates &&
        area &&
        budget.length > 5
      ) {
        handleSubmit();
      }
    }
    // eslint-disable-next-line
  }, [
    dwellingType,
    rentalYield,
    growthInProperty,
    minBedrooms,
    selectedStates,
    area,
    budget,
  ]);

  if (filteredResults) {
    if (filteredResults.length > 0) {
      var counts = filteredResults.reduce(
        (acc, item) => {
          if (item.rankingPercentage > 80) {
            acc.moreThan80++;
          } else if (item.rankingPercentage > 60) {
            acc.moreThan60++;
          } else if (item.rankingPercentage > 40) {
            acc.moreThan40++;
          } else {
            acc.lessThan40++;
          }
          return acc;
        },
        { moreThan80: 0, moreThan60: 0, moreThan40: 0, lessThan40: 0 }
      );
    }
    const stateCodeSet = new Set();
    const postCodeSet = new Set();

    filteredResults.forEach((item) => {
      stateCodeSet.add(item.state_code);
      postCodeSet.add(item.postcode);
    });

    // Convert the Set back to an array
    var stateCodes = Array.from(stateCodeSet);
    var postCodes = Array.from(postCodeSet);

    var stateCodeMenu = (
      <Menu style={{ maxHeight: "200px", width: "100px", overflowY: "auto" }}>
        <Menu.Item onClick={() => handleStateCodeChange("reset")}>
          Reset
        </Menu.Item>
        {stateCodes.map((stateCode) => (
          <Menu.Item
            key={stateCode}
            onClick={() => handleStateCodeChange(stateCode)}
          >
            {stateCode}
          </Menu.Item>
        ))}
      </Menu>
    );

    var postcodeMenu = (
      <Menu style={{ maxHeight: "200px", width: "100px", overflowY: "auto" }}>
        <Menu.Item onClick={() => handlePostcodeChange("reset")}>
          Reset
        </Menu.Item>
        {postCodes.map((postcode) => (
          <Menu.Item
            key={postcode}
            onClick={() => handlePostcodeChange(postcode)}
          >
            {postcode}
          </Menu.Item>
        ))}
      </Menu>
    );
  }

  const handleStateCodeChange = (stateCode) => {
    if (stateCode === "reset") {
      // If "reset" option is selected, show the original results

      setDisplayResults(filteredResults);
    } else {
      // Filter the items based on the selected state code
      const filteredItems = filteredResults.filter(
        (item) => item.state_code === stateCode
      );
      setDisplayResults(filteredItems);
    }
  };

  const handlePostcodeChange = (postcode) => {
    if (postcode === "reset") {
      // If "reset" option is selected, show the original results

      setDisplayResults(filteredResults);
    } else {
      // Filter the items based on the selected postcode
      const filteredItems = filteredResults.filter(
        (item) => item.postcode === postcode
      );
      setDisplayResults(filteredItems);
    }
  };

  useEffect(() => {
    if (
      results &&
      !filteredResults &&
      dwellingType &&
      minBedrooms &&
      selectedStates &&
      area &&
      budget
    ) {
      warning();
    }
    // eslint-disable-next-line
  }, [results, filteredResults]);

  const [filterCompressed, setFilterCompressed] = useState(false);

  const handleNavigateLogin = () => {
    navigate("/login-app");
  };

  return (
    <>
      <NavBar />
      {contextHolder}

      <div
        className={`${
          filteredResults
            ? "container-fluid px-lg-8 px-3"
            : "container  col-12  home-page-container"
        }`}
        style={{ minHeight: "100vh" }}
      >
        <p
          style={
            {
              // marginTop: `${dropdownHeight ? `${dropdownHeight}px` : "0px"}`,
              // paddingLeft: "12px",
              // paddingRight: "12px",
            }
          }
          className="header-caption  container-fluid mt-2  m-md-3   text-start text-md-center p-0 "
        >
          Welcome to the suburb selector based on your search. You will still
          need to go to domain/realestate to find what properties are available
          now" and say "You will still need to go to domain/realestate to find
          what properties are available now or we can help you with your search.
          Contact us to find out how.
        </p>
        <div
          className={`${
            filteredResults
              ? `mobile-filter-button d-grid d-lg-none    ${
                  filterCompressed ? "active" : ""
                }
                `
              : `d-none`
          }`}
        >
          <button
            className="btn "
            onClick={() => setFilterCompressed(!filterCompressed)}
            style={{ background: "#008080", color: "white" }}
          >
            Go back to selection
          </button>
        </div>
        <HomePageStyled>
          <div
            className={`${
              filteredResults ? "container-fluid d-md-flex" : "container"
            }`}
          >
            <div
              className={`${
                filteredResults
                  ? `filter-container ${
                      filterCompressed ? "open" : ""
                    } container-fluid mt-md-10 overflow-container  ${
                      isLoggedIn === "true" ? "col-md-3" : "col-md-5"
                    }  `
                  : "container"
              }`}
            >
              <div
                className={`${
                  filteredResults
                    ? `mobile-filter-button d-grid d-lg-none    ${
                        filterCompressed ? "active" : ""
                      }
                `
                    : `d-none`
                }`}
              >
                <button
                  className="btn border"
                  onClick={() => setFilterCompressed(!filterCompressed)}
                >
                  Close
                </button>
              </div>
              <div className="container col-12 search-box">
                <Collapse
                  defaultActiveKey={["1"]}
                  items={[
                    {
                      key: "1",
                      label: <h4>Property characteristics</h4>,
                      children: (
                        <div className="search-sub-main-box col-12">
                          <div
                            className={`${
                              filteredResults
                                ? "container-fluid d-flex-column"
                                : "search-sub-box d-lg-flex d-flex-column col-12"
                            }`}
                          >
                            <div
                              className={`${
                                filteredResults
                                  ? "search-filter d-flex gap-3  mb-3 align-items-center"
                                  : "search-filter d-flex gap-3  mb-lg-0  mb-3 align-items-center"
                              }`}
                            >
                              <label
                                className="search-label"
                                style={{ width: "150px", textAlign: "left" }}
                              >
                                Dwelling type
                              </label>
                              <Select
                                className="basic-filter"
                                options={[
                                  { value: "Unit", label: "Unit" },
                                  { value: "House", label: "House" },
                                ]}
                                value={dwellingType}
                                onChange={setDwellingType}
                              />
                            </div>

                            <div
                              className={`${
                                filteredResults
                                  ? "search-filter d-flex gap-3  mb-3 align-items-center"
                                  : "search-filter d-flex gap-3  mb-lg-0  mb-3 align-items-center"
                              }`}
                            >
                              <label
                                className="search-label"
                                style={{ width: "150px", textAlign: "left" }}
                              >
                                Minimum bedrooms
                              </label>

                              <Select
                                required
                                className="basic-filter"
                                options={[
                                  { value: "1", label: "1" },
                                  { value: "2", label: "2" },
                                  { value: "3", label: "3" },
                                  { value: "4", label: "4" },
                                  { value: "5", label: "5" },
                                  { value: "6", label: "6" },
                                  { value: "7", label: "7" },
                                  { value: "unsure", label: "unsure" },
                                ]}
                                value={minBedrooms}
                                onChange={setMinBedrooms}
                              />
                            </div>
                          </div>
                          <div
                            className={`${
                              filteredResults
                                ? "container-fluid d-flex-column"
                                : "search-sub-box d-lg-flex d-flex-column col-12"
                            }`}
                          >
                            <div
                              className={`${
                                filteredResults
                                  ? "search-filter d-flex gap-3  mb-md-3 align-items-center"
                                  : "search-filter d-flex gap-3  mb-lg-0 mb-3  align-items-center"
                              }`}
                            >
                              {" "}
                              <label
                                className="search-label"
                                style={{ width: "150px", textAlign: "left" }}
                              >
                                State
                              </label>
                              <Select
                                className="state-select"
                                isMulti
                                options={statesOfAus}
                                value={selectedStates}
                                components={{ Option }}
                                onChange={handleSelectedStates}
                                required
                              />
                            </div>

                            <div
                              className={`${
                                filteredResults
                                  ? "search-filter d-flex gap-3  mb-3 align-items-center"
                                  : "search-filter d-flex gap-3  mb-lg-0  mb-3 align-items-center"
                              }`}
                            >
                              <label
                                className="search-label"
                                style={{ width: "150px", textAlign: "left" }}
                              >
                                Area classification
                              </label>

                              <Select
                                className="basic-filter"
                                options={[
                                  {
                                    value: "metropolitan",
                                    label: "Metropolitan",
                                  },
                                  { value: "rural", label: "Rural" },
                                  { value: "remote", label: "Remote" },
                                  { value: "unsure", label: "Unsure" },
                                ]}
                                value={area}
                                onChange={setArea}
                              />
                            </div>
                          </div>
                          <div
                            className={`${
                              filteredResults
                                ? "container-fluid d-flex-column"
                                : "search-sub-box d-lg-flex d-flex-column col-12"
                            }`}
                          >
                            <div className="search-filter  d-flex align-items-center  gap-3 ">
                              <label
                                className="search-label"
                                style={{ width: "150px", textAlign: "left" }}
                              >
                                Budget
                              </label>
                              <div
                                style={{
                                  display: "flex",
                                  justifyContent: "center",
                                  alignItems: "center",
                                  gap: "5px",
                                }}
                              >
                                <div>
                                  <CurrencyInput
                                    className="currency-input"
                                    placeholder="Enter budget"
                                    prefix="$"
                                    decimalsLimit={0}
                                    value={budget}
                                    onValueChange={handleBudget}
                                    required
                                  />{" "}
                                  {budget ? (
                                    budget.length < 6 ? (
                                      <p className="budget-alert">
                                        should be minimum of 6 digits
                                      </p>
                                    ) : (
                                      ""
                                    )
                                  ) : (
                                    ""
                                  )}
                                </div>
                              </div>
                            </div>
                            <div className="search-filter invisible   d-flex align-items-center  gap-3 ">
                              <label
                                className="search-label"
                                style={{ width: "150px", textAlign: "left" }}
                              >
                                Budget
                              </label>
                              <div
                                style={{
                                  display: "flex",
                                  justifyContent: "center",
                                  alignItems: "center",
                                  gap: "5px",
                                }}
                              >
                                <div>
                                  <CurrencyInput
                                    className="currency-input"
                                    placeholder="Enter budget"
                                    prefix="$"
                                    decimalsLimit={0}
                                    value={budget}
                                    onValueChange={handleBudget}
                                    required
                                  />{" "}
                                </div>
                              </div>
                            </div>
                          </div>
                          {results ? (
                            results.length > 0 ? (
                              <p className="filter-info p-0 pt-lg-2 m-0">
                                {results.length} suburbs selected based on your
                                search criteria
                              </p>
                            ) : results.length === 0 ? (
                              <p
                                className="filter-info"
                                style={{
                                  color: "red",
                                }}
                              >
                                No data found try changing the filters
                              </p>
                            ) : (
                              ""
                            )
                          ) : (
                            ""
                          )}
                        </div>
                      ),
                    },
                  ]}
                />

                <Collapse
                  style={{ marginTop: "20px" }}
                  defaultActiveKey={["1"]}
                  items={[
                    {
                      key: "1",
                      label: (
                        <h4 style={{ marginRight: "30px" }}>
                          Investment strategy
                        </h4>
                      ),
                      children: (
                        <>
                          {filteredResults ? (
                            ""
                          ) : (
                            <p
                              className="text-start text-md-center"
                              style={{ marginBottom: "30px" }}
                            >
                              Please rate at least four factors from below to
                              see the list of suburbs
                            </p>
                          )}

                          <FilterMobile
                            demandPrevMonth={demandPrevMonth}
                            availabilityOfSupply={availabilityOfSupply}
                            growthInProperty={growthInProperty}
                            rentalYield={rentalYield}
                          />
                        </>
                      ),
                    },
                  ]}
                />
              </div>{" "}
              <div
                className={`${
                  filteredResults
                    ? `mobile-filter-icon d-grid d-lg-none    ${
                        filterCompressed ? "active" : ""
                      }
                `
                    : `d-none`
                }`}
              >
                <FloatButton
                  icon={<i className="bi bi-funnel funnel" />} // Replace with your custom icon component
                  onClick={() => setFilterCompressed(!filterCompressed)}
                  className={`${
                    filteredResults
                      ? `mobile-filter-icon d-grid    ${
                          filterCompressed ? "active" : ""
                        }
                `
                      : `d-none`
                  }`}
                />
              </div>
            </div>

            <div
              className={`${
                filteredResults
                  ? `container-fluid ${
                      isLoggedIn === "true" ? "col-lg-9" : "col-lg-7"
                    }`
                  : ""
              }`}
            >
              {results ? (
                results.length > 0 && !filteredResults ? (
                  <p className="filter-info">
                    {results.length} suburbs meet your criteria, try minimum
                    four factors given in investment strategy to see the results
                  </p>
                ) : results.length === 0 ? (
                  <p
                    className="filter-info"
                    style={{
                      color: "red",
                    }}
                  >
                    No data found try changing the filters
                  </p>
                ) : (
                  ""
                )
              ) : (
                ""
              )}

              <div
                className={`${
                  filteredResults
                    ? "container-fluid  "
                    : "results-main-container container col-12 "
                }`}
                ref={resultsContainerRef}
                style={{ transition: "all 0.3s ease" }}
              >
                {filteredResults ? (
                  <>
                    {filteredResults.length > 0 ? (
                      <div className="color-circles-legend  col-12 mobile-legend">
                        <div className="d-flex align-items-center flex-wrap  justify-content-around">
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: "5px",

                              paddingRight: "5px",
                            }}
                          >
                            <label
                              style={{ width: "110px", textAlign: "start" }}
                            >
                              Best match :
                            </label>
                            <div className="green-circle"></div>{" "}
                            {counts.moreThan80}
                          </div>
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: "5px",

                              paddingRight: "5px",
                            }}
                          >
                            <label
                              style={{ width: "110px", textAlign: "start" }}
                            >
                              Good match :
                            </label>
                            <div className="yellow-circle"></div>{" "}
                            {counts.moreThan60}
                          </div>
                        </div>

                        <div className="d-flex align-items-center justify-content-around">
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: "5px",

                              paddingRight: "5px",
                            }}
                          >
                            <label
                              style={{ width: "110px", textAlign: "start" }}
                            >
                              Decent match :
                            </label>
                            <div className="blue-circle"></div>{" "}
                            {counts.moreThan40}
                          </div>
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: "5px",
                            }}
                          >
                            <label
                              style={{ width: "110px", textAlign: "start" }}
                            >
                              Poor match :
                            </label>
                            <div className="red-circle"></div>
                            {counts.lessThan40}
                          </div>
                        </div>
                      </div>
                    ) : (
                      ""
                    )}{" "}
                  </>
                ) : (
                  ""
                )}
                {filteredResults ? (
                  <>
                    {filteredResults.length > 0 ? (
                      <div className="color-circles-legend flex-wrap d-md-flex align-items-center web-legend ">
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "5px",

                            paddingRight: "5px",
                          }}
                        >
                          <label style={{ width: "110px", textAlign: "start" }}>
                            Best match :
                          </label>
                          <div className="green-circle"></div>{" "}
                          {counts.moreThan80}
                        </div>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "5px",

                            paddingRight: "5px",
                          }}
                        >
                          <label style={{ width: "110px", textAlign: "start" }}>
                            Good match :
                          </label>
                          <div className="yellow-circle"></div>{" "}
                          {counts.moreThan60}
                        </div>

                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "5px",

                            paddingRight: "5px",
                          }}
                        >
                          <label style={{ width: "110px", textAlign: "start" }}>
                            Decent match :
                          </label>
                          <div className="blue-circle"></div>{" "}
                          {counts.moreThan40}
                        </div>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "5px",
                          }}
                        >
                          <label style={{ width: "110px", textAlign: "start" }}>
                            Poor match :
                          </label>
                          <div className="red-circle"></div>
                          {counts.lessThan40}
                        </div>
                      </div>
                    ) : (
                      ""
                    )}{" "}
                  </>
                ) : (
                  ""
                )}

                <div
                  className={`${
                    filteredResults
                      ? "container-fluid col-12 d-md-flex"
                      : "container col-12 d-md-flex"
                  }`}
                >
                  <div
                    style={{ display: filteredResults ? "block" : "none" }}
                    className={`result-left-container ${
                      isLoggedIn === "true" ? "col-md-6" : "col-md-12"
                    } col-12`}
                  >
                    <center>
                      {displayResults ? (
                        <>
                          <div
                            className="table-container"
                            style={{ transition: "all 0.3s ease" }}
                          >
                            <table style={{ transition: "all 0.3s ease" }}>
                              <thead className="table-header">
                                <tr>
                                  <th>Suburbs</th>
                                  <th>
                                    <Dropdown overlay={postcodeMenu}>
                                      <label
                                        style={{
                                          display: "flex",
                                          alignItems: "center",
                                          cursor: "pointer",
                                        }}
                                      >
                                        Postcode
                                        <MdArrowDropDown
                                          style={{ fontSize: "20px" }}
                                        />{" "}
                                      </label>
                                    </Dropdown>
                                  </th>
                                  <th>
                                    <Dropdown overlay={stateCodeMenu}>
                                      <label
                                        style={{
                                          display: "flex",
                                          alignItems: "center",
                                          cursor: "pointer",
                                        }}
                                      >
                                        State
                                        <MdArrowDropDown
                                          style={{ fontSize: "20px" }}
                                        />{" "}
                                      </label>
                                    </Dropdown>
                                  </th>

                                  {isResultsFiltered ? (
                                    <th style={{ textAlign: "center" }}>
                                      Score
                                    </th>
                                  ) : (
                                    ""
                                  )}
                                </tr>
                              </thead>
                              <tbody>
                                {isDataNotFound ? (
                                  <>
                                    <div
                                      style={{
                                        width: "200%",
                                        height: "50vh",

                                        display: "grid",
                                        placeItems: "center",
                                      }}
                                    >
                                      <h3>Data not found</h3>
                                    </div>
                                  </>
                                ) : (
                                  <>
                                    {filteredResults
                                      ? displayResults.map((data) => {
                                          return (
                                            <tr key={data.suburb_id}>
                                              <td>{data.suburb_name}</td>
                                              <td>{data.postcode}</td>
                                              <td>{data.state_code}</td>

                                              {isResultsFiltered ? (
                                                <td>
                                                  <center>
                                                    {isAdmin === "true" ? (
                                                      data.ranking.toFixed(2)
                                                    ) : (
                                                      <div
                                                        className={
                                                          data.rankingPercentage >
                                                          80
                                                            ? "green-circle"
                                                            : data.rankingPercentage >
                                                              60
                                                            ? "yellow-circle"
                                                            : data.rankingPercentage >
                                                              40
                                                            ? "blue-circle"
                                                            : "red-circle"
                                                        }
                                                      ></div>
                                                    )}
                                                  </center>
                                                </td>
                                              ) : (
                                                ""
                                              )}
                                            </tr>
                                          );
                                        })
                                      : ""}
                                  </>
                                )}
                              </tbody>
                            </table>
                            {isLoggedIn === "true" ? (
                              ""
                            ) : (
                              <>
                                <div className="container p-5 mt-3">
                                  <h4>Top 3 suburbs are shown </h4>
                                  <h4 className="mt-2">
                                    Login to see all the suburbs
                                  </h4>
                                  <button
                                    onClick={handleNavigateLogin}
                                    className="btn btn-primary btn-lg w-50 p-2 mt-4"
                                  >
                                    Log in
                                  </button>
                                </div>
                              </>
                            )}
                          </div>
                        </>
                      ) : (
                        ""
                      )}
                    </center>
                  </div>
                  <div
                    style={{
                      width: filteredResults ? "" : "100%",

                      paddingTop: `${filteredResults ? "20px" : "15px"}`,
                      display: `${isLoggedIn === "true" ? "block" : "none"}`,
                      transition: "all 0.3s ease",
                    }}
                    className="result-right-container mb-5 col-md-6 col-12"
                  >
                    {results ? <GoogleMapComponent /> : ""}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </HomePageStyled>
      </div>
    </>
  );
};

export default ApplicationPage;
