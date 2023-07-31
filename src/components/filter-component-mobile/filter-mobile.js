import React, { useEffect, useState } from "react";
import { Dropdown, Menu } from "antd";
import { FilterMobileStyled } from "./filter-mobile-style";
import { useApplicationContext } from "../../context/app-context";

const FilterDropdown = ({
  filter,
  handleFilterChange,

  selectedOption,
}) => {
  const options = ["very important", "important", "not important"];

  const handleOptionClick = (option) => {
    handleFilterChange(filter, option);
  };

  const renderOptionCircle = (option) => {
    const colors = {
      "very important": "green",
      important: "yellow",
      "not important": "red",
    };

    return (
      <div
        className="option-circle"
        style={{
          width: "10px",
          height: "10px",
          borderRadius: "50%",
          backgroundColor: colors[option],
          marginLeft: "5px",
        }}
      />
    );
  };

  const menu = (
    <Menu>
      {options.map((option) => (
        <Menu.Item key={option} onClick={() => handleOptionClick(option)}>
          {option.toUpperCase()}
        </Menu.Item>
      ))}
    </Menu>
  );

  return (
    <Dropdown overlay={menu} trigger={["click"]} placement="bottom">
      <div className="filter-dropdown">
        {filter}
        {selectedOption && renderOptionCircle(selectedOption)}
      </div>
    </Dropdown>
  );
};

const FilterMobile = ({
  demandPrevMonth,
  availabilityOfSupply,
  growthInProperty,
  rentalYield,
}) => {
  const [selectedFilters, setSelectedFilters] = useState({});
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

  const { results, setFilteredResults, setIsResultsFiltered } =
    useApplicationContext();

  const filterWeightages = {
    "Low vacancy rate": setVacancyRateWeightage,
    "Family friendly": setFamilyWeightage,
    "High rental yield": setRentalYieldWeightage,
    "Growth in property": SetGrowthInPropertyWeightage,
    "Ratio of renters to owners": setRentVsOwnerRatioWeightage,
    "High demand": setAvailabilityOfSupplyWeightage,
    "High ratings": setRatingsWeightage,
    "Low supply": setDemandPrevMonthWeightage,
    "Growth of population": setPopulationGrowthWeightage,
    "Low unemployment": setUnemployedPeopleWeightage,
    "Higher weekly income": setWeeklyIncomeWeightage,
    "Australian born": setAustralianBornWeightage,
    // Add your other filters here
  };

  console.log("low vacancy", vacancyRateWeightage);
  console.log("Family", familyWeightage);

  const handleFilterChange = (filter, option) => {
    const weightageMap = {
      "very important": 3,
      important: 2,
      "not important": 1,
    };
    const weightage = weightageMap[option] || 0;
    setSelectedFilters((prevSelectedFilters) => ({
      ...prevSelectedFilters,
      [filter]: option,
    }));
    filterWeightages[filter](weightage);
  };

  const filters = [
    "Low vacancy rate",
    "Family friendly",
    "High rental yield",
    "Growth in property",
    "Ratio of renters to owners",
    "High demand",
    "High ratings",
    "Low supply",
    "Growth of population",
    "Low unemployment",
    "Higher weekly income",
    "Australian born",
    // Add your other filters here
  ];

  const handleFilterFurther = () => {
    // console.log("great_for_schools", greatForSchools);
    // console.log("great_for_hospitals", greatForHospitals);
    // console.log("great_for_Transport", greatForTransport);

    console.log("vacancy", vacancyRateWeightage);
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
        (maxVacancyRate - suburb.current_vacancy_rate) * vacancyRateWeightage +
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
          weeklyIncomeWeightage,
      // (greatForSchools ? suburb.great_for_schools_int : 0) +
      // (greatForHospitals ? suburb.great_for_medical_facilities_int : 0) +
      // (greatForTransport ? suburb.great_for_public_transport_int : 0),
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
    setFilteredResults(temp);
    // console.log("executing filter 2");
    console.log("ranked", JSON.stringify(updatedRankedSuburbs));
  };

  useEffect(() => {
    // Check if there are at least four selected filters
    const selectedCount = Object.values(selectedFilters).filter(
      (value) => value !== undefined
    ).length;
    if (results) {
      if (selectedCount >= 4) {
        handleFilterFurther();
      }
    }

    // eslint-disable-next-line
  }, [selectedFilters, results]);

  return (
    <>
      <FilterMobileStyled>
        <div className="filter-mobile-container">
          {filters.map((filter, index) => (
            <FilterDropdown
              key={index}
              filter={filter}
              handleFilterChange={handleFilterChange}
              filterWeightages={filterWeightages}
              selectedOption={selectedFilters[filter]}
            />
          ))}
        </div>
      </FilterMobileStyled>
    </>
  );
};

export default FilterMobile;
