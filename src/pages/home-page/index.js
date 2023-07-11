import { Space } from "antd";
import React, { useEffect, useState } from "react";
import { IntegerStep } from "../../components/slider";
import { HomePageStyled } from "./style";
import NavBar from "../../components/nav-bar/nav-bar";
import { statesOfAus } from "../../components/states-in-aus/states";
import axios from "axios";
import Select, { components } from "react-select";
import CurrencyInput from "react-currency-input-field";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const [dwellingType, setDwellingType] = useState("");
  const [minBedrooms, setMinBedrooms] = useState(null);
  const [selectedStates, setSelectedStates] = useState([]);
  const [budget, setBudget] = useState(null);
  const [results, setResults] = useState(null);
  const [isDataNotFound, setIsDataNotFound] = useState(null);
  const [isBedroomsUnsure, setBedRoomsUnsure] = useState(null);
  const [rentalYield, setRentalYield] = useState("");
  const [growthInProperty, SetGrowthInProperty] = useState("");
  const [availabilityOfSupply, setAvailabilityOfSupply] = useState("");
  const [vacancyRateWeightage, setVacancyRateWeightage] = useState(null);
  const [familyWeightage, setFamilyWeightage] = useState(null);
  const [rentalYieldWeightage, setRentalYieldWeightage] = useState(null);
  const [growthInPropertyWeightage, SetGrowthInPropertyWeightage] =
    useState(null);
  const [rentVsOwnerRatioWeightage, setRentVsOwnerRatioWeightage] =
    useState(null);
  const [availabilityOfSupplyWeightage, setAvailabilityOfSupplyWeightage] =
    useState(null);
  const [ratingsWeightage, setRatingsWeightage] = useState(null);

  const navigate = useNavigate();

  const isAdmin = localStorage.getItem("isAdmin");

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

  const handleSubmit = (event) => {
    event.preventDefault();

    if (minBedrooms === "unsure") {
      setBedRoomsUnsure(true);
    } else {
      setBedRoomsUnsure(false);
    }

    console.log("type", dwellingType);
    console.log("yield", rentalYield);
    console.log("growth", growthInProperty);
    console.log("availability_of_supply", availabilityOfSupply);

    const formData = new FormData();

    for (let i = 0; i < selectedStates.length; i++) {
      formData.append("states[]", selectedStates[i].value);
    }
    console.log(rentalYield);
    formData.append("type", dwellingType);
    formData.append("bedrooms", minBedrooms);
    formData.append("budget", budget);
    formData.append("rentalYield", rentalYield);
    formData.append("growth_in_property", growthInProperty);
    formData.append("availability_of_supply", availabilityOfSupply);

    axios
      .post("http://localhost:8002/api/domain/filter", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then(async (response) => {
        const data = await response.data;
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

  const handleFilterFurther = (
    vacancyWeightage,
    familyWeightage,
    rentalYieldWeightage,
    growthInPropertyWeightage,
    rentVsOwnerRatioWeightage,
    availabilityOfSupplyWeightage,
    ratingsWeightage
  ) => {
    // results.sort((a, b) => b.current_vacancy_rate - a.current_vacancy_rate);

    // results.sort((a, b) => {
    //   // Sort by rental_yield in descending order
    //   if (b.current_vacancy_rate !== a.current_vacancy_rate) {
    //     return b.current_vacancy_rate - a.current_vacancy_rate;
    //   }

    //   // If rental_yield is the same, sort by vacancy_rate in ascending order
    //   return a.family - b.family;
    // });

    // const categoryCount = 5; // Number of categories
    // const totalSuburbs = results.length;
    // const categorySize = Math.ceil(totalSuburbs / categoryCount);

    // const categories = [];

    // for (let i = 0; i < categoryCount; i++) {
    //   const startIndex = i * categorySize;
    //   const endIndex = Math.min(startIndex + categorySize, totalSuburbs);
    //   const categorySuburbs = results.slice(startIndex, endIndex);
    //   categories.push(categorySuburbs);
    // }

    // // Example: Accessing the "Very Important" suburbs
    // const veryImportantSuburbs = categories[0];
    // console.log("Very Important Suburbs:", veryImportantSuburbs.length);
    // console.log(JSON.stringify(veryImportantSuburbs));

    console.log("vacancy", vacancyWeightage);
    console.log("family", familyWeightage);
    console.log("rental yield", rentalYieldWeightage);
    console.log("growth", growthInPropertyWeightage);
    console.log("rent_vs_owner", rentVsOwnerRatioWeightage);
    console.log("availability of supply", availabilityOfSupplyWeightage);
    console.log("ratings", ratingsWeightage);

    const maxVacancyRate = Math.max(
      ...results.map((suburb) => suburb.current_vacancy_rate)
    );
    console.log("max_vacancy", maxVacancyRate);

    const maxFamily = Math.max(...results.map((suburb) => suburb.family));
    console.log("max_family", maxFamily);

    const maxRentalYield = Math.max(
      ...results.map((suburb) => suburb[rentalYield])
    );
    console.log("max_yeild", maxRentalYield);

    const maxGrowthInProperty = Math.max(
      ...results.map((suburb) => suburb[growthInProperty])
    );
    console.log("max_Growth", maxGrowthInProperty);

    const maxRentVsOwnerRatio = Math.max(
      ...results.map((suburb) => suburb.rental_population)
    );
    console.log("max_rent_vs_owner", maxRentVsOwnerRatio);

    const maxAvailabilityOfSupply = Math.max(
      ...results.map((suburb) => suburb[availabilityOfSupply])
    );
    console.log("max_availability_of_supply", maxAvailabilityOfSupply);

    const maxRatings = Math.max(...results.map((suburb) => suburb.ratings));
    console.log("max_ratings", maxRatings);

    const rankedSuburbs = results.map((suburb) => ({
      ...suburb,
      ranking:
        (maxVacancyRate - suburb.current_vacancy_rate) * vacancyWeightage +
        (suburb.family / maxFamily) * familyWeightage +
        (suburb[rentalYield] / maxRentalYield) * rentalYieldWeightage +
        (suburb[growthInProperty] / maxGrowthInProperty) *
          growthInPropertyWeightage +
        (suburb.rental_population / maxRentVsOwnerRatio) *
          rentVsOwnerRatioWeightage +
        (maxAvailabilityOfSupply - suburb[availabilityOfSupply]) *
          availabilityOfSupplyWeightage +
        (suburb.ratings / maxRatings) * ratingsWeightage,
    }));

    // Sort the suburbs based on their ranking in descending order
    let temp = rankedSuburbs.sort((a, b) => b.ranking - a.ranking);

    setResults(temp);
    console.log("ranked", JSON.stringify(rankedSuburbs));
  };

  useEffect(() => {
    switch (dwellingType) {
      case "Unit":
        setRentalYield("median_yield_units");
        SetGrowthInProperty("median_price_change_last_quarter_units");
        setAvailabilityOfSupply("average_days_on_market_units");
        break;
      case "House":
        setRentalYield("median_yield_house");
        SetGrowthInProperty("median_price_change_last_quarter_house");
        setAvailabilityOfSupply("average_days_on_market_house");
        break;
      case "Townhouse":
        setRentalYield("median_yield_townhouses");
        SetGrowthInProperty("median_price_change_last_quarter_townhouses");
        break;
    }
  }, [dwellingType, rentalYield, growthInProperty]);

  return (
    <>
      <NavBar />
      <HomePageStyled>
        <p className="header-caption">
          Welcome to the one-stop property search. Simply fill out the details
          below and let's get started on your property journey{" "}
        </p>
        <div className="home-page-container">
          <div className="filter-main-container">
            <form onSubmit={handleSubmit}>
              <h3 style={{ paddingLeft: "15px" }}>Property Characteristics</h3>
              <div className="search-box">
                <div className="search-filter">
                  <label>Dwelling Type</label>
                  <select
                    onChange={(e) => setDwellingType(e.target.value)}
                    required
                  >
                    <option value="">Select</option>
                    <option value={"Unit"}>Unit </option>
                    <option value={"House"}>House</option>
                    <option value={"Townhouse"}>Town House</option>
                  </select>
                </div>

                <div className="search-filter">
                  <label>Minimum Bedrooms</label>

                  <select
                    onChange={(e) => setMinBedrooms(e.target.value)}
                    required
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
              </div>

              <h3
                style={{
                  paddingLeft: "15px",
                  marginTop: "40px",
                }}
              >
                Financial and Growth Characteristics{" "}
              </h3>

              <div className="search-box">
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
                    <CurrencyInput
                      className="currency-input"
                      placeholder="Enter budget"
                      prefix="$"
                      decimalsLimit={0}
                      value={budget}
                      onValueChange={handleBudget}
                      required
                    />
                  </div>
                </div>

                <h4 style={{ fontWeight: "normal" }}>
                  Which of the below describes your investment strategy the
                  most?{" "}
                </h4>
                <div className="slider">
                  <label>Low Vacancy rate</label>
                  <Space
                    style={{
                      width: "30%",
                    }}
                    direction="vertical"
                  >
                    <IntegerStep onSliderChange={setVacancyRateWeightage} />
                  </Space>
                </div>
                <div className="slider">
                  <label>Family</label>
                  <Space
                    style={{
                      width: "30%",
                    }}
                    direction="vertical"
                  >
                    <IntegerStep onSliderChange={setFamilyWeightage} />
                  </Space>
                </div>
                <div className="slider">
                  <label>High Rental yield</label>
                  <Space
                    style={{
                      width: "30%",
                    }}
                    direction="vertical"
                  >
                    <IntegerStep onSliderChange={setRentalYieldWeightage} />
                  </Space>
                </div>
                <div className="slider">
                  <label>Growth in Property Value</label>
                  <Space
                    style={{
                      width: "30%",
                    }}
                    direction="vertical"
                  >
                    <IntegerStep
                      onSliderChange={SetGrowthInPropertyWeightage}
                    />
                  </Space>
                </div>
                <div className="slider">
                  <label>Ratio of renters to owners </label>
                  <Space
                    style={{
                      width: "30%",
                    }}
                    direction="vertical"
                  >
                    <IntegerStep
                      onSliderChange={setRentVsOwnerRatioWeightage}
                    />
                  </Space>
                </div>
                <div className="slider">
                  <label>Low Availability of supply </label>
                  <Space
                    style={{
                      width: "30%",
                    }}
                    direction="vertical"
                  >
                    <IntegerStep
                      onSliderChange={setAvailabilityOfSupplyWeightage}
                    />
                  </Space>
                </div>
                <div className="slider">
                  <label>Ratings </label>
                  <Space
                    style={{
                      width: "30%",
                    }}
                    direction="vertical"
                  >
                    <IntegerStep onSliderChange={setRatingsWeightage} />
                  </Space>
                </div>
              </div>
              <button type="submit">Search Suburbs</button>
              {isAdmin === "true" ? (
                <button className="dash-btn" onClick={handleDashBoard}>
                  Dashboard
                </button>
              ) : (
                ""
              )}
            </form>
            <button
              onClick={() =>
                handleFilterFurther(
                  vacancyRateWeightage,
                  familyWeightage,
                  rentalYieldWeightage,
                  growthInPropertyWeightage,
                  rentVsOwnerRatioWeightage,
                  availabilityOfSupplyWeightage,
                  ratingsWeightage
                )
              }
            >
              Filter
            </button>
          </div>
          <div className="results-main-container">
            <center>
              {results ? (
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
                          <th>Vacancy rate</th>
                          <th>family</th>
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
                            {results
                              ? results.map((data) => {
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
                                      <td>{data.current_vacancy_rate}</td>
                                      <td>{data.family}</td>
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
