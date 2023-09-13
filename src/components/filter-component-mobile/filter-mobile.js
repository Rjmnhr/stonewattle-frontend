import React, { useEffect, useState } from "react";
import { Dropdown, Menu } from "antd";
import { useApplicationContext } from "../../context/app-context";

// const FilterDropdown = ({
//   filter,
//   handleFilterChange,

//   selectedOption,
// }) => {
//   const options = ["very important", "important", "not important"];
//   const [currentLabel, setCurrentLabel] = useState("NOT-IMP"); // Initialize with "select"
//   const { filteredResults } = useApplicationContext();

//   const colors = {
//     "very important": {
//       color: "green",
//       label: "V-IMP",
//     },
//     important: {
//       color: "orange",
//       label: "IMP",
//     },
//     "not important": {
//       color: "red",
//       label: "NOT-IMP",
//     },
//   };

//   const handleOptionClick = (option) => {
//     setCurrentLabel(colors[option]?.label || "select");
//     handleFilterChange(filter, option);
//   };

//   const menu = (
//     <Menu>
//       {options.map((option) => (
//         <Menu.Item key={option} onClick={() => handleOptionClick(option)}>
//           {option.toUpperCase()}
//         </Menu.Item>
//       ))}
//     </Menu>
//   );

//   return (
//     <Dropdown overlay={menu} trigger={["click"]}>
//       <div
//         className={`${
//           filteredResults
//             ? "filter-dropdown  p-1 p-lg-2  text-start d-flex align-items-center border col-12  col-lg-12 m-1 justify-content-between"
//             : "filter-dropdown  p-1 p-lg-2  text-start d-flex align-items-center border col-12  col-lg-3 m-1 justify-content-between "
//         }`}
//         style={{ cursor: "pointer" }}
//       >
//         {filter}
//         <div
//           className="option-circle"
//           style={{
//             // color: colors[option].color,
//             color: "gray",

//             width: "80px",
//             textAlign: "center",
//             paddingRight: "5px",
//           }}
//         >
//           <label>{currentLabel}</label>
//         </div>
//       </div>
//     </Dropdown>
//   );
// };

const FilterDropdown = ({ filter, handleFilterChange, selectedOption }) => {
  const options = ["very important", "important", "not important"];
  const [currentLabel, setCurrentLabel] = useState(
    sessionStorage.getItem(filter) || "NOT-IMP"
  ); // Initialize with stored value or "NOT-IMP"
  const { filteredResults } = useApplicationContext();

  const colors = {
    "very important": {
      color: "green",
      label: "V-IMP",
    },
    important: {
      color: "orange",
      label: "IMP",
    },
    "not important": {
      color: "red",
      label: "NOT-IMP",
    },
  };

  const handleOptionClick = (option) => {
    const label = colors[option]?.label || "select";
    setCurrentLabel(label);
    handleFilterChange(filter, option);
    sessionStorage.setItem(filter, label); // Store selected label in sessionStorage
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
    <Dropdown overlay={menu} trigger={["click"]}>
      <div
        className={`${
          filteredResults
            ? "filter-dropdown  p-1 p-lg-2  text-start d-flex align-items-center border col-12  col-lg-12 m-1 justify-content-between"
            : "filter-dropdown  p-1 p-lg-2  text-start d-flex align-items-center border col-12  col-lg-3 m-1 justify-content-between "
        }`}
        style={{ cursor: "pointer" }}
      >
        {filter}
        <div
          className="option-circle"
          style={{
            color: "gray",
            width: "80px",
            textAlign: "center",
            paddingRight: "5px",
          }}
        >
          <label>{currentLabel}</label>
        </div>
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

  const {
    results,
    setFilteredResults,
    setIsResultsFiltered,
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
  } = useApplicationContext();

  const filterWeightages = {
    "Low vacancy rate": setVacancyRateWeightage,
    "Family friendly": setFamilyWeightage,
    "High rental yield": setRentalYieldWeightage,
    "Average days on market": setAvailabilityOfSupplyWeightage,
    "High rated by residents": setRatingsWeightage,
    "Low supply": setDemandPrevMonthWeightage,
    "Population growth": setPopulationGrowthWeightage,
    "Low unemployment": setUnemployedPeopleWeightage,
    "Australian born": setAustralianBornWeightage,
    "Crime rate": setAllCrimesWeightage,
    "Great for schools": setGreatForSchoolsWeightage,
    "Great for hospitals": setGreatForHospitalsWeightage,
    "Recent growth in properties": SetGrowthInPropertyWeightage,
    "Higher proportion of owners": setRentVsOwnerRatioWeightage,
    "Relative income of residents": setWeeklyIncomeWeightage,
    "Public transport": setGreatForTransportWeightage,

    // Add your other filters here
  };

  const handleFilterChange = (filter, option) => {
    const weightageMap = {
      "very important": 3,
      important: 2,
      "not important": 0,
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
    "Average days on market",
    "High rated by residents",
    "Low supply",
    "Population growth",
    "Low unemployment",
    "Australian born",
    "Crime rate",
    "Great for schools",
    "Great for hospitals",
    "Recent growth in properties",
    "Higher proportion of owners",
    "Relative income of residents",
    "Public transport",

    // Add your other filters here
  ];

  const handleFilterFurther = () => {
    // console.log("great_for_schools", greatForSchools);
    // console.log("great_for_hospitals", greatForHospitals);
    // console.log("great_for_Transport", greatForTransport);

    // console.log("vacancy", vacancyRateWeightage);
    // console.log("family", familyWeightage);
    // console.log("rental yield", rentalYieldWeightage);
    // console.log("growth", growthInPropertyWeightage);
    // console.log("rent_vs_owner", rentVsOwnerRatioWeightage);
    // console.log("availability of supply", availabilityOfSupplyWeightage);
    // console.log("ratings", ratingsWeightage);
    // console.log("demand_prev_month", demandPrevMonthWeightage);
    // console.log("population_growth", populationGrowthWeightage);
    // console.log("Australian_born", australianBornWeightage);
    // console.log("Unemployed_people", unemployedPeopleWeightage);
    // console.log("weekly_income", weeklyIncomeWeightage);

    let maxVacancyRate = Math.max(
      ...results.map((suburb) => suburb.current_vacancy_rate)
    );

    let maxFamily = Math.max(...results.map((suburb) => suburb.family));

    let maxRentalYield = Math.max(
      ...results.map((suburb) => suburb[rentalYield])
    );

    let maxGrowthInProperty = Math.max(
      ...results.map((suburb) => suburb[growthInProperty])
    );

    let maxRentVsOwnerRatio = Math.max(
      ...results.map((suburb) => suburb.rental_population)
    );

    let maxAvailabilityOfSupply = Math.max(
      ...results.map((suburb) => suburb[availabilityOfSupply])
    );

    let maxRatings = Math.max(...results.map((suburb) => suburb.ratings));

    let maxDemandPrevMonth = Math.max(
      ...results.map((suburb) => suburb[demandPrevMonth])
    );

    // let maxDemandLastYear = Math.max(
    //   ...results.map((suburb) => suburb[demandLastYear])
    // );

    let maxPopulationGrowth = Math.max(
      ...results.map((suburb) => suburb.growth_population)
    );

    let maxAustralianBorn = Math.max(
      ...results.map((suburb) => suburb.country_of_birth_australia)
    );

    let maxUnemployedPeople = Math.max(
      ...results.map((suburb) => suburb.employment_worked_unemployed)
    );

    let maxWeeklyIncome = Math.max(
      ...results.map((suburb) => suburb.median_weekly_income_family)
    );

    let maxAllCrimes = Math.max(...results.map((suburb) => suburb.all_crimes));

    maxVacancyRate = maxVacancyRate === 0 ? 1 : maxVacancyRate;
    maxFamily = maxFamily === 0 ? 1 : maxFamily;
    maxRentalYield = maxRentalYield === 0 ? 1 : maxRentalYield;
    maxGrowthInProperty = maxGrowthInProperty === 0 ? 1 : maxGrowthInProperty;
    maxRentVsOwnerRatio = maxRentVsOwnerRatio === 0 ? 1 : maxRentVsOwnerRatio;
    maxAvailabilityOfSupply =
      maxAvailabilityOfSupply === 0 ? 1 : maxAvailabilityOfSupply;
    maxRatings = maxRatings === 0 ? 1 : maxRatings;
    maxDemandPrevMonth = maxDemandPrevMonth === 0 ? 1 : maxDemandPrevMonth;
    maxPopulationGrowth = maxPopulationGrowth === 0 ? 1 : maxPopulationGrowth;
    maxAustralianBorn = maxAustralianBorn === 0 ? 1 : maxAustralianBorn;
    maxUnemployedPeople = maxUnemployedPeople === 0 ? 1 : maxUnemployedPeople;
    maxWeeklyIncome = maxWeeklyIncome === 0 ? 1 : maxWeeklyIncome;
    maxAllCrimes = maxAllCrimes === 0 ? 1 : maxAllCrimes;

    const rankedSuburbs = results.map((suburb) => ({
      ...suburb,
      ranking:
        ((maxVacancyRate - suburb.current_vacancy_rate) / maxVacancyRate) *
          vacancyRateWeightage +
        (suburb.family / maxFamily) * familyWeightage +
        (suburb[rentalYield] / maxRentalYield) * rentalYieldWeightage +
        (suburb[growthInProperty] / maxGrowthInProperty) *
          growthInPropertyWeightage +
        (suburb.rental_population / maxRentVsOwnerRatio) *
          rentVsOwnerRatioWeightage +
        ((maxAvailabilityOfSupply - suburb[availabilityOfSupply]) /
          maxAvailabilityOfSupply) *
          availabilityOfSupplyWeightage +
        (suburb.ratings / maxRatings) * ratingsWeightage +
        (suburb[demandPrevMonth] / maxDemandPrevMonth) *
          demandPrevMonthWeightage +
        (suburb.growth_population / maxPopulationGrowth) *
          populationGrowthWeightage +
        (suburb.country_of_birth_australia / maxAustralianBorn) *
          australianBornWeightage +
        ((maxUnemployedPeople - suburb.employment_worked_unemployed) /
          maxUnemployedPeople) *
          unemployedPeopleWeightage +
        (suburb.median_weekly_income_family / maxWeeklyIncome) *
          weeklyIncomeWeightage +
        ((maxAllCrimes - suburb.all_crimes) / maxAllCrimes) *
          allCrimesWeightage +
        suburb.great_for_schools_int * greatForSchoolsWeightage +
        suburb.great_for_medical_facilities_int * greatForHospitalsWeightage +
        suburb.great_for_public_transport_int * greatForTransportWeightage,
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
    sessionStorage.setItem("filteredResults", JSON.stringify(temp));
    setFilteredResults(temp);
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
      <div className="filter-mobile-container d-lg-flex flex-wrap justify-content-around container   ">
        {filters.map((filter, index) => (
          <FilterDropdown
            key={index}
            filter={filter}
            handleFilterChange={handleFilterChange}
            filterWeightages={filterWeightages}
            selectedOption={selectedFilters[filter]} // Pass the selected option from state
          />
        ))}
      </div>
    </>
  );
};

export default FilterMobile;
