import { HomePageStyled } from "./style";
import NavBar from "../../components/nav-bar/nav-bar";
// import MainFilter from "../../components/home-filter/main-filter";
import { useApplicationContext } from "../../context/app-context";
import { useNavigate } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { Collapse, Menu, Dropdown } from "antd";
import { statesOfAus } from "../../components/states-in-aus/states";
import Select, { components } from "react-select";
import CurrencyInput from "react-currency-input-field";
import AxiosInstance from "../../components/axios";
import FilterPage from "../../components/filter-component/filter-page";

import FilterMobile from "../../components/filter-component-mobile/filter-mobile";
import { MdArrowDropDown } from "react-icons/md";
import { ArrowUpOutlined, ArrowDownOutlined } from "@ant-design/icons";

import GoogleMapComponent from "../../components/GIS-mapping/google-map-container";

// import HighChartsMap from "../../components/GIS-mapping/high-charts";

const HomePage = () => {
  const {
    setResults,
    results,

    filteredResults,
    isResultsFiltered,
  } = useApplicationContext();

  const [dwellingType, setDwellingType] = useState("");
  const [minBedrooms, setMinBedrooms] = useState(null);
  const [selectedStates, setSelectedStates] = useState([]);
  const [area, setArea] = useState(null);
  const [budget, setBudget] = useState(null);
  const [isDataNotFound, setIsDataNotFound] = useState(null);
  const [isBedroomsUnsure, setBedRoomsUnsure] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [rentalYield, setRentalYield] = useState("");
  const [growthInProperty, SetGrowthInProperty] = useState("");
  const [availabilityOfSupply, setAvailabilityOfSupply] = useState("");
  const [demandPrevMonth, setDemandPrevMonth] = useState("");

  // const [stateCodesArr, setStateCodesArr] = useState(null);
  const [displayResults, setDisplayResults] = useState(null);

  // const [demandLastYear, setDemandLastYear] = useState("");

  const resultsContainerRef = useRef();

  const navigate = useNavigate();

  const isAdmin = localStorage.getItem("isAdmin");

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

  // const handleGreatForSchools = (e) => {
  //   if (e.target.checked) {
  //     setGreatForSchools(true);
  //   } else {
  //     setGreatForSchools(false);
  //   }
  // };

  // const handleGreatForHospital = (e) => {
  //   if (e.target.checked) {
  //     setGreatForHospitals(true);
  //   } else {
  //     setGreatForHospitals(false);
  //   }
  // };

  // const handleGreatForTransport = (e) => {
  //   if (e.target.checked) {
  //     setGreatForTransport(true);
  //   } else {
  //     setGreatForTransport(false);
  //   }
  // };

  useEffect(() => {
    setDisplayResults(filteredResults);
  }, [filteredResults]);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    // Add event listener to track changes in the window size
    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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

  const handleDashBoard = () => {
    navigate("/suburbs");
  };

  const handleSubmit = () => {
    const type = dwellingType.value;
    const bedrooms = minBedrooms.value;
    const areaType = area.value;

    // console.log("dwelling", type);
    // console.log("rental", rentalYield);
    if (bedrooms === "unsure") {
      setBedRoomsUnsure(true);
    } else {
      setBedRoomsUnsure(false);
    }

    // console.log("type", dwellingType);
    // console.log("yield", rentalYield);
    // console.log("growth", growthInProperty);
    // console.log("availability_of_supply", availabilityOfSupply);
    // console.log("demand_prev_month", demandPrevMonth);
    // console.log("demand_last_year", demandLastYear);

    const formData = new FormData();

    for (let i = 0; i < selectedStates.length; i++) {
      formData.append("states[]", selectedStates[i].value);
    }

    console.log(type);
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
        // resultsContainerRef.current.scrollIntoView({ behavior: "smooth" });

        console.log("results", JSON.stringify(data));
        console.log(data.length);

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
    // console.log("type", type);
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

    console.log("useEffect ", rentalYield);

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
    if (screenWidth < 912) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, [screenWidth]);

  return (
    <>
      <NavBar />
      <HomePageStyled>
        <p className="header-caption">
          Welcome to the one-stop property search. Simply fill out the details
          below and let's get started on your property journey{" "}
        </p>
        <div className="home-page-container">
          <center>
            <div className="filter-main-page-container">
              <div className="search-box">
                <Collapse
                  defaultActiveKey={["1"]}
                  items={[
                    {
                      key: "1",
                      label: <h3>Property characteristics</h3>,
                      children: (
                        <div
                          className="search-sub-main-box"
                          style={{ background: "#f8f8f8" }}
                        >
                          <div className="search-sub-box">
                            <div className="search-filter">
                              <label>Dwelling type</label>
                              <Select
                                className="basic-filter"
                                options={[
                                  { value: "Unit", label: "Unit" },
                                  { value: "House", label: "House" },
                                  { value: "Townhouse", label: "Town House" },
                                ]}
                                value={dwellingType}
                                onChange={setDwellingType}
                              />
                            </div>

                            <div className="search-filter">
                              <label>Minimum bedrooms</label>

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
                          <div className="search-sub-box">
                            <div className="search-filter">
                              {" "}
                              <label>State</label>
                              <Select
                                className="state-select"
                                isMulti
                                options={statesOfAus}
                                components={{ Option }}
                                onChange={handleSelectedStates}
                                required
                              />
                            </div>

                            <div className="search-filter">
                              <label>Area classification</label>

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
                          <div className="search-sub-box">
                            <div className="search-filter">
                              <label>Budget</label>
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
                          </div>
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
                        <h3 style={{ marginRight: "30px" }}>
                          Investment strategy
                        </h3>
                      ),
                      children: isMobile ? (
                        <FilterMobile
                          demandPrevMonth={demandPrevMonth}
                          availabilityOfSupply={availabilityOfSupply}
                          growthInProperty={growthInProperty}
                          rentalYield={rentalYield}
                        />
                      ) : (
                        <>
                          <center>
                            <p style={{ marginBottom: "30px" }}>
                              Please move the relevant factors in the
                              appropriate container based on your preference
                            </p>
                          </center>
                          <FilterPage
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
              </div>

              {isAdmin === "true" ? (
                <button className="dash-btn" onClick={handleDashBoard}>
                  Dashboard
                </button>
              ) : (
                ""
              )}
            </div>
            {results ? (
              results.length > 0 && !filteredResults ? (
                <p
                  className="filter-info"
                  style={{
                    fontStyle: "italic",
                  }}
                >
                  {results.length} suburbs meet your criteria, try minimum four
                  factors given in investment strategy to see the results
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
          </center>

          <div className="results-main-container" ref={resultsContainerRef}>
            <div
              style={{ display: filteredResults ? "block" : "none" }}
              className="result-left-container"
            >
              {filteredResults ? (
                <>
                  {filteredResults.length > 0 ? (
                    <div className="color-circles-legend">
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "5px",

                          paddingRight: "5px",
                        }}
                      >
                        80% <ArrowUpOutlined />
                        <div className="green-circle"></div> {counts.moreThan80}
                      </div>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "5px",

                          paddingRight: "5px",
                        }}
                      >
                        60% <ArrowUpOutlined />
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
                        40% <ArrowUpOutlined />
                        <div className="blue-circle"></div> {counts.moreThan40}
                      </div>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "5px",
                        }}
                      >
                        40% <ArrowDownOutlined />
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
              <center>
                {displayResults ? (
                  <>
                    <div className="table-container">
                      <table>
                        <thead className="table-header">
                          <tr>
                            <th>Suburb Name</th>
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

                            {isBedroomsUnsure ? (
                              <th style={{ textAlign: "center" }}>
                                Max Bedrooms
                              </th>
                            ) : (
                              ""
                            )}
                            {isResultsFiltered ? (
                              <th style={{ textAlign: "center" }}>Score</th>
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
                                        {isBedroomsUnsure ? (
                                          <td style={{ textAlign: "center" }}>
                                            {data.max_bedrooms}
                                          </td>
                                        ) : (
                                          ""
                                        )}
                                        {isResultsFiltered ? (
                                          <td>
                                            <center>
                                              {isAdmin === "true" ? (
                                                data.ranking.toFixed(2)
                                              ) : (
                                                <div
                                                  className={
                                                    data.rankingPercentage > 80
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
                    </div>
                  </>
                ) : (
                  ""
                )}
              </center>
            </div>
            <div
              style={{ width: filteredResults ? "" : "100%" }}
              className="result-right-container"
            >
              {results ? (
                ""
              ) : (
                <p>
                  Please select property characteristics to see where the
                  suburbs are located
                </p>
              )}

              <GoogleMapComponent />
            </div>
          </div>
        </div>
      </HomePageStyled>
    </>
  );
};

export default HomePage;
