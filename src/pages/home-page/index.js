import { HomePageStyled } from "./style";
import NavBar from "../../components/nav-bar/nav-bar";
// import MainFilter from "../../components/home-filter/main-filter";
import { useApplicationContext } from "../../context/app-context";
import { useNavigate } from "react-router-dom";
import { useEffect, useState, useRef } from "react";

import { statesOfAus } from "../../components/states-in-aus/states";
import Select, { components } from "react-select";
import CurrencyInput from "react-currency-input-field";
import AxiosInstance from "../../components/axios";
import FilterPage from "../filter-page/filter-page";

const HomePage = () => {
  const [dwellingType, setDwellingType] = useState("");
  const [minBedrooms, setMinBedrooms] = useState(null);
  const [selectedStates, setSelectedStates] = useState([]);
  const [area, setArea] = useState(null);
  const [budget, setBudget] = useState(null);
  const [isDataNotFound, setIsDataNotFound] = useState(null);
  const [isBedroomsUnsure, setBedRoomsUnsure] = useState(null);

  const [rentalYield, setRentalYield] = useState("");
  const [growthInProperty, SetGrowthInProperty] = useState("");
  const [availabilityOfSupply, setAvailabilityOfSupply] = useState("");
  const [demandPrevMonth, setDemandPrevMonth] = useState("");
  // const [demandLastYear, setDemandLastYear] = useState("");
  // const [greatForSchools, setGreatForSchools] = useState(false);
  // const [greatForHospitals, setGreatForHospitals] = useState(false);
  // const [greatForTransport, setGreatForTransport] = useState(false);

  const {
    setResults,
    results,

    filteredResults,
    isResultsFiltered,
  } = useApplicationContext();

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
    if (minBedrooms === "unsure") {
      setBedRoomsUnsure(true);
    } else {
      setBedRoomsUnsure(false);
    }

    console.log("type", dwellingType);
    console.log("yield", rentalYield);
    console.log("growth", growthInProperty);
    console.log("availability_of_supply", availabilityOfSupply);
    console.log("demand_prev_month", demandPrevMonth);
    // console.log("demand_last_year", demandLastYear);

    const formData = new FormData();

    for (let i = 0; i < selectedStates.length; i++) {
      formData.append("states[]", selectedStates[i].value);
    }
    console.log(rentalYield);
    formData.append("type", dwellingType);
    formData.append("bedrooms", minBedrooms);
    formData.append("area", area);
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
    switch (dwellingType) {
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
  }, [dwellingType, rentalYield, growthInProperty]);

  useEffect(() => {
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
  }, [dwellingType, minBedrooms, selectedStates, area, budget]);
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
              <form>
                <h3 style={{ paddingLeft: "15px" }}>
                  Property Characteristics
                </h3>
                <div className="search-box">
                  <div className="search-filter">
                    <label>Dwelling type</label>
                    <select
                      onChange={(e) => setDwellingType(e.target.value)}
                      className="basic-filter"
                      required
                    >
                      <option value="">Select</option>
                      <option value={"Unit"}>Unit </option>
                      <option value={"House"}>House</option>
                      <option value={"Townhouse"}>Town House</option>
                    </select>
                  </div>

                  <div className="search-filter">
                    <label>Minimum bedrooms</label>

                    <select
                      onChange={(e) => setMinBedrooms(e.target.value)}
                      required
                      id="customSelect"
                    >
                      {" "}
                      <option style={{ color: "gray" }} value="">
                        Select
                      </option>
                      <option value={"1"}>1 </option>
                      <option value={"2"}>2</option>
                      <option value={"3"}>3 </option>
                      <option value={"4"}>4</option>
                      <option value={"5"}>5</option>
                      <option value={"6"}>6</option>
                      <option value={"7"}>7</option>
                      <option value={"unsure"}>unsure</option>
                    </select>
                  </div>

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

                    <select onChange={(e) => setArea(e.target.value)} required>
                      {" "}
                      <option style={{ color: "gray" }} value="">
                        Select
                      </option>
                      <option value={"metropolitan"}>Metropolitan</option>
                      <option value={"rural"}>Rural</option>
                      <option value={"remote"}>Remote</option>
                      <option value={"unsure"}>Unsure</option>
                    </select>
                  </div>
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
                            <p
                              style={{
                                color: "red",
                                margin: "0",
                                fontSize: "14px",
                                marginTop: "5px",
                              }}
                            >
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
                  {results ? (
                    results.length > 0 ? (
                      <p
                        className="filter-info"
                        style={{
                          fontStyle: "italic",
                        }}
                      >
                        {results.length} suburbs meet your criteria, try minimum
                        four filters given below to see the results
                      </p>
                    ) : (
                      <p
                        className="filter-info"
                        style={{
                          color: "red",
                        }}
                      >
                        No data found try changing the filters
                      </p>
                    )
                  ) : (
                    ""
                  )}

                  <h3
                    style={{
                      textAlign: "center",
                    }}
                  >
                    Investment strategy
                  </h3>
                  <FilterPage
                    demandPrevMonth={demandPrevMonth}
                    availabilityOfSupply={availabilityOfSupply}
                    growthInProperty={growthInProperty}
                    rentalYield={rentalYield}
                  />
                </div>

                {/* <h3
                style={{
                  paddingLeft: "15px",
                  marginTop: "40px",
                }}
              >
                Financial and Growth Characteristics{" "}
              </h3>  */}

                {/* <div className="search-box">
                


                <div className="checkbox-filter">
                  <label
                    style={{ textAlign: "start" }}
                    className="great-for-label"
                  >
                    Should Great For :
                  </label>
                  <div className="checkbox-sub-filter">
                    <div className="checkbox-sub">
                      <input type="checkbox" onChange={handleGreatForSchools} />
                      <label>Schools</label>
                    </div>
                    <div className="checkbox-sub">
                      <input
                        type="checkbox"
                        onChange={handleGreatForHospital}
                      />
                      <label>Hospitals</label>
                    </div>
                    <div className="checkbox-sub">
                      <input
                        type="checkbox"
                        onChange={handleGreatForTransport}
                      />
                      <label>Public Transports</label>
                    </div>
                  </div>
                </div>
              </div> */}

                {isAdmin === "true" ? (
                  <button className="dash-btn" onClick={handleDashBoard}>
                    Dashboard
                  </button>
                ) : (
                  ""
                )}
              </form>
            </div>
          </center>
          <div className="results-main-container" ref={resultsContainerRef}>
            <center>
              {filteredResults ? (
                <>
                  <div className="table-container">
                    <table>
                      <thead className="table-header">
                        <tr>
                          <th>Suburb Name</th>
                          <th>Postcode</th>
                          <th>State</th>
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
                              ? filteredResults.map((data) => {
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
        </div>
      </HomePageStyled>
    </>
  );
};

export default HomePage;
