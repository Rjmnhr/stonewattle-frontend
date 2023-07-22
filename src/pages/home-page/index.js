import { HomePageStyled } from "./style";
import NavBar from "../../components/nav-bar/nav-bar";
// import MainFilter from "../../components/home-filter/main-filter";
import { useApplicationContext } from "../../context/app-context";
import { useNavigate } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { Space } from "antd";
import { IntegerStep } from "../../components/slider";
import { statesOfAus } from "../../components/states-in-aus/states";
import Select, { components } from "react-select";
import CurrencyInput from "react-currency-input-field";
import AxiosInstance from "../../components/axios";
import { FilterOutlined, LoadingOutlined } from "@ant-design/icons";
// import FilterResults from "./filter-results";
const HomePage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [dwellingType, setDwellingType] = useState("");
  const [minBedrooms, setMinBedrooms] = useState(null);
  const [selectedStates, setSelectedStates] = useState([]);
  const [area, setArea] = useState(null);
  const [budget, setBudget] = useState(null);
  const [results, setResults] = useState(null);
  const [isDataNotFound, setIsDataNotFound] = useState(null);
  const [isBedroomsUnsure, setBedRoomsUnsure] = useState(null);
  const [isResultsFiltered, setIsResultsFiltered] = useState(false);
  const [rentalYield, setRentalYield] = useState("");
  const [growthInProperty, SetGrowthInProperty] = useState("");
  const [availabilityOfSupply, setAvailabilityOfSupply] = useState("");
  const [demandPrevMonth, setDemandPrevMonth] = useState("");
  // const [demandLastYear, setDemandLastYear] = useState("");
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
  const [greatForSchools, setGreatForSchools] = useState(false);
  const [greatForHospitals, setGreatForHospitals] = useState(false);
  const [greatForTransport, setGreatForTransport] = useState(false);

  const resultsContainerRef = useRef();

  // const { setIsUserValid } = useApplicationContext();
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

  const handleGreatForSchools = (e) => {
    if (e.target.checked) {
      setGreatForSchools(true);
    } else {
      setGreatForSchools(false);
    }
  };

  const handleGreatForHospital = (e) => {
    if (e.target.checked) {
      setGreatForHospitals(true);
    } else {
      setGreatForHospitals(false);
    }
  };

  const handleGreatForTransport = (e) => {
    if (e.target.checked) {
      setGreatForTransport(true);
    } else {
      setGreatForTransport(false);
    }
  };

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
    setIsLoading(true);

    setIsResultsFiltered(false);

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
        if (window.innerWidth < 912) {
          resultsContainerRef.current.scrollIntoView({ behavior: "smooth" });
        }
        console.log("results", JSON.stringify(data));
        console.log(data.length);
        setIsLoading(false);
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
    event,
    vacancyWeightage,
    familyWeightage,
    rentalYieldWeightage,
    growthInPropertyWeightage,
    rentVsOwnerRatioWeightage,
    availabilityOfSupplyWeightage,
    ratingsWeightage,
    demandPrevMonthWeightage,
    populationGrowthWeightage,
    australianBornWeightage,
    unemployedPeopleWeightage,
    weeklyIncomeWeightage
  ) => {
    event.preventDefault();
    console.log("great_for_schools", greatForSchools);
    console.log("great_for_hospitals", greatForHospitals);
    console.log("great_for_Transport", greatForTransport);

    console.log("vacancy", vacancyWeightage);
    console.log("family", familyWeightage);
    console.log("rental yield", rentalYieldWeightage);
    console.log("growth", growthInPropertyWeightage);
    console.log("rent_vs_owner", rentVsOwnerRatioWeightage);
    console.log("availability of supply", availabilityOfSupplyWeightage);
    console.log("ratings", ratingsWeightage);
    console.log("demand_prev_month", demandPrevMonthWeightage);
    console.log("population_growth", populationGrowthWeightage);
    console.log("Australian_born", australianBornWeightage);
    console.log("Unemployed_people", unemployedPeopleWeightage);
    console.log("weekly_income", weeklyIncomeWeightage);

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

    const maxDemandPrevMonth = Math.max(
      ...results.map((suburb) => suburb[demandPrevMonth])
    );
    console.log("max_demand_prev_month", maxDemandPrevMonth);

    // const maxDemandLastYear = Math.max(
    //   ...results.map((suburb) => suburb[demandLastYear])
    // );
    // console.log("max_demand_last_year", maxDemandLastYear);

    const maxPopulationGrowth = Math.max(
      ...results.map((suburb) => suburb.growth_population)
    );
    console.log("max_population_growth", maxPopulationGrowth);

    const maxAustralianBorn = Math.max(
      ...results.map((suburb) => suburb.country_of_birth_australia)
    );
    console.log("max_australian_born", maxAustralianBorn);

    const maxUnemployedPeople = Math.max(
      ...results.map((suburb) => suburb.employment_worked_unemployed)
    );
    console.log("max_unemployed_people", maxUnemployedPeople);

    const maxWeeklyIncome = Math.max(
      ...results.map((suburb) => suburb.median_weekly_income_family)
    );
    console.log("max_weekly_income", maxWeeklyIncome);

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
        (suburb.ratings / maxRatings) * ratingsWeightage +
        (suburb[demandPrevMonth] / maxDemandPrevMonth) *
          demandPrevMonthWeightage +
        (suburb.growth_population / maxPopulationGrowth) *
          populationGrowthWeightage +
        (suburb.country_of_birth_australia / maxAustralianBorn) *
          australianBornWeightage +
        (maxUnemployedPeople - suburb.employment_worked_unemployed) *
          unemployedPeopleWeightage +
        (suburb.median_weekly_income_family / maxWeeklyIncome) *
          weeklyIncomeWeightage +
        (greatForSchools ? suburb.great_for_schools_int : 0) +
        (greatForHospitals ? suburb.great_for_medical_facilities_int : 0) +
        (greatForTransport ? suburb.great_for_public_transport_int : 0),
    }));

    const maxRanking = Math.max(
      ...rankedSuburbs.map((suburb) => suburb.ranking)
    );

    const updatedRankedSuburbs = rankedSuburbs.map((suburb) => {
      const rankingPercentage = (suburb.ranking / maxRanking) * 100;
      return {
        ...suburb,
        rankingPercentage,
      };
    });

    // Sort the suburbs based on their ranking in descending order
    let temp = updatedRankedSuburbs.sort((a, b) => b.ranking - a.ranking);

    setIsResultsFiltered(true);

    setResults(temp);
    console.log("ranked", JSON.stringify(updatedRankedSuburbs));
    if (window.innerWidth < 912) {
      resultsContainerRef.current.scrollIntoView({ behavior: "smooth" });
    }
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
                <div className="search-filter">
                  <label>Area Classification</label>

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
                  <label>High Demand For Property</label>
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
                <div className="slider">
                  <label>Low Availability of Supply</label>
                  <Space
                    style={{
                      width: "30%",
                    }}
                    direction="vertical"
                  >
                    <IntegerStep onSliderChange={setDemandPrevMonthWeightage} />
                  </Space>
                </div>
                {/* Not Needed now */}

                {/* <div className="slider">
                  <label>High Demand for Property Last Year</label>
                  <Space
                    style={{
                      width: "30%",
                    }}
                    direction="vertical"
                  >
                    <IntegerStep onSliderChange={setDemandLastYearWeightage} />
                  </Space>
                </div> */}

                <div className="slider">
                  <label>Growth of Population</label>
                  <Space
                    style={{
                      width: "30%",
                    }}
                    direction="vertical"
                  >
                    <IntegerStep
                      onSliderChange={setPopulationGrowthWeightage}
                    />
                  </Space>
                </div>
                <div className="slider">
                  <label>Australian Born</label>
                  <Space
                    style={{
                      width: "30%",
                    }}
                    direction="vertical"
                  >
                    <IntegerStep onSliderChange={setAustralianBornWeightage} />
                  </Space>
                </div>
                <div className="slider">
                  <label>Lower Unemployed People</label>
                  <Space
                    style={{
                      width: "30%",
                    }}
                    direction="vertical"
                  >
                    <IntegerStep
                      onSliderChange={setUnemployedPeopleWeightage}
                    />
                  </Space>
                </div>
                <div className="slider">
                  <label>Weekly Income</label>
                  <Space
                    style={{
                      width: "30%",
                    }}
                    direction="vertical"
                  >
                    <IntegerStep onSliderChange={setWeeklyIncomeWeightage} />
                  </Space>
                </div>
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
              </div>
              <button type="submit">
                {isLoading ? <LoadingOutlined /> : "Search Suburbs"}
              </button>
              <button
                onClick={(e) =>
                  handleFilterFurther(
                    e,
                    vacancyRateWeightage,
                    familyWeightage,
                    rentalYieldWeightage,
                    growthInPropertyWeightage,
                    rentVsOwnerRatioWeightage,
                    availabilityOfSupplyWeightage,
                    ratingsWeightage,
                    demandPrevMonthWeightage,
                    populationGrowthWeightage,
                    australianBornWeightage,
                    unemployedPeopleWeightage,
                    weeklyIncomeWeightage
                  )
                }
                disabled={results === null}
                className={results === null ? "disabled-button" : ""}
              >
                <FilterOutlined /> Filter
              </button>
              {isAdmin === "true" ? (
                <button className="dash-btn" onClick={handleDashBoard}>
                  Dashboard
                </button>
              ) : (
                ""
              )}
            </form>
          </div>
          <div className="results-main-container" ref={resultsContainerRef}>
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
