import { HomePageStyled } from "./style";
import NavBar from "../../components/nav-bar/nav-bar";
import { useApplicationContext } from "../../context/app-context";
import { useNavigate } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { Collapse, Menu, Dropdown, message } from "antd";
import { statesOfAus } from "../../components/states-in-aus/states";
import Select, { components } from "react-select";
import CurrencyInput from "react-currency-input-field";
import AxiosInstance from "../../components/axios";
import FilterMobile from "../../components/filter-component-mobile/filter-mobile";
import { MdArrowDropDown } from "react-icons/md";
import { ArrowUpOutlined, ArrowDownOutlined } from "@ant-design/icons";
import GoogleMapComponent from "../../components/GIS-mapping/google-maps";

const ApplicationPage = () => {
  const {
    setResults,
    results,
    setIsUserValid,
    filteredResults,
    isResultsFiltered,
    // dropdownHeight,
  } = useApplicationContext();

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

  // const [stateCodesArr, setStateCodesArr] = useState(null);
  const [displayResults, setDisplayResults] = useState(null);

  // const [demandLastYear, setDemandLastYear] = useState("");

  const resultsContainerRef = useRef();

  const navigate = useNavigate();

  const isAdmin = localStorage.getItem("isAdmin");
  const [messageApi, contextHolder] = message.useMessage();

  const warning = () => {
    messageApi.open({
      type: "warning",
      content: " Select at least 4 factors to view ranked suburbs",
    });
  };

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");

    fetch("http://2ndstorey.com:8002/api/token/verify", {
      headers: {
        token: `Bearer ${accessToken}`,
      },
    })
      .then(async (response) => {
        console.log(response.status);
        if (response.status === 200) {
          console.log("user is valid");
          setIsUserValid(true);
        } else {
          navigate("/");
        }
      })

      .catch((error) => {
        console.error(error);
      });
  }, [setIsUserValid, navigate]);

  useEffect(() => {
    setDisplayResults(filteredResults);
  }, [filteredResults]);

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

  const handleSubmit = () => {
    const type = dwellingType.value;
    const bedrooms = minBedrooms.value;
    const areaType = area.value;

    if (bedrooms === "unsure") {
      setBedRoomsUnsure(true);
    } else {
      setBedRoomsUnsure(false);
    }

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

  return (
    <>
      <NavBar />
      {contextHolder}
      <p
        style={
          {
            // marginTop: `${dropdownHeight ? `${dropdownHeight}px` : "0px"}`,
            // paddingLeft: "12px",
            // paddingRight: "12px",
          }
        }
        className="header-caption container mt-1 m-lg-3 col-12 text-start text-lg-center  "
      >
        Welcome to the one-stop property search. Simply fill out the details
        below and let's get started on your property journey{" "}
      </p>
      <div className="container bg-red col-12  home-page-container ">
        <HomePageStyled>
          <div className="container max-width .col-12 .col-sm-6 .col-lg-8 filter-main-page-container ">
            <div className="container col-12 search-box">
              <Collapse
                defaultActiveKey={["1"]}
                items={[
                  {
                    key: "1",
                    label: <h4>Property characteristics</h4>,
                    children: (
                      <div className="search-sub-main-box col-12">
                        <div className="search-sub-box d-lg-flex d-flex-column col-12">
                          <div className="search-filter d-flex gap-3  mb-lg-0  mb-3 align-items-center">
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
                                {
                                  value: "Townhouse",
                                  label: "Town House",
                                  isDisabled: true,
                                },
                              ]}
                              value={dwellingType}
                              onChange={setDwellingType}
                            />
                          </div>

                          <div className="search-filter  d-flex  gap-3  align-items-center">
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
                        <div className="search-sub-box d-lg-flex   col-12">
                          <div className="search-filter  d-flex  gap-3 mb-lg-0  mb-3 align-items-center">
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
                              components={{ Option }}
                              onChange={handleSelectedStates}
                              required
                            />
                          </div>

                          <div className=" d-flex align-items-center  gap-3   search-filter">
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
                        <div className="search-sub-box d-lg-flex justify-content-around   col-12 ">
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
                        <p
                          className="text-start text-lg-center"
                          style={{ marginBottom: "30px" }}
                        >
                          Please select the relevant factors based on your
                          preference
                        </p>

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
            </div>
          </div>
          {results ? (
            results.length > 0 && !filteredResults ? (
              <p className="filter-info" style={{}}>
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

          <div
            className="results-main-container col-12 d-lg-flex"
            ref={resultsContainerRef}
            style={{ transition: "all 0.3s ease" }}
          >
            <div
              style={{ display: filteredResults ? "block" : "none" }}
              className="result-left-container col-lg-6 col-12"
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
                    <div
                      className="table-container"
                      style={{ transition: "all 0.3s ease" }}
                    >
                      <table style={{ transition: "all 0.3s ease" }}>
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
              style={{
                width: filteredResults ? "" : "100%",
                paddingTop: `${filteredResults ? "100px" : "15px"}`,
                transition: "all 0.3s ease",
              }}
              className="result-right-container mb-5 col-lg-6 col-12"
            >
              {results ? <GoogleMapComponent /> : ""}
            </div>
          </div>
        </HomePageStyled>
      </div>
    </>
  );
};

export default ApplicationPage;