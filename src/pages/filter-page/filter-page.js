import React, { useEffect, useState } from "react";
// import FilterItem from "../../components/filter-item";
import FilterContainer from "../../components/filter-container";
import { useApplicationContext } from "../../context/app-context";
import { FilterPageStyled } from "./filter-page-style";

const FilterPage = ({
  demandPrevMonth,
  availabilityOfSupply,
  growthInProperty,
  rentalYield,
}) => {
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

  const [movedFiltersCount, setMovedFiltersCount] = useState(0);

  const { results, setFilteredResults, setIsResultsFiltered } =
    useApplicationContext();

  const [filters, setFilters] = useState([
    "Low vacancy rate",
    "Family",
    "High rental yield",
    "Growth in property value",
    "Ratio of renters to owners",
    "High demand for property",
    "Ratings",
    "Low availability of supply",
    "Growth of population",
    "Lower unemployed people",
    "Weekly income",
    "Australian born",
    // Add your other filters here
  ]);

  const [categories, setCategories] = useState({
    veryImportant: [],
    important: [],
    notImportant: [],
  });

  const filterWeightages = {
    "Low vacancy rate": setVacancyRateWeightage,
    Family: setFamilyWeightage,
    "High rental yield": setRentalYieldWeightage,
    "Growth in property value": SetGrowthInPropertyWeightage,
    "Ratio of renters to owners": setRentVsOwnerRatioWeightage,
    "High demand for property": setAvailabilityOfSupplyWeightage,
    Ratings: setRatingsWeightage,
    "Low svailability of supply": setDemandPrevMonthWeightage,
    "Growth of population": setPopulationGrowthWeightage,
    "Lower unemployed people": setUnemployedPeopleWeightage,
    "Weekly income": setWeeklyIncomeWeightage,
    "Australian born": setAustralianBornWeightage,
  };

  const handleFilterMove = (filter, fromCategory, toCategory) => {
    const updatedCategories = { ...categories };
    const fromCategoryFilters = updatedCategories[fromCategory];
    const toCategoryFilters = updatedCategories[toCategory];

    console.log("totoCategoryFilters", toCategoryFilters);

    // Remove the filter from the source container
    if (fromCategoryFilters) {
      const filterIndex = fromCategoryFilters.indexOf(filter);
      if (filterIndex !== -1) {
        fromCategoryFilters.splice(filterIndex, 1);
      }
    }

    // Reset the filter's weightage to 0 when moving back to "Available Filters" container
    // if (toCategory === "available") {
    //   filterWeightages[filter](0);
    // }

    // Remove the filter from the "Available Filters" container
    if (fromCategory === "available") {
      setFilters((prev) => prev.filter((f) => f !== filter));
    }

    if (!toCategoryFilters) {
      updatedCategories[toCategory] = [];
    }

    // Add the filter to the target container or 'Available Filters'
    if (toCategory === "available") {
      setFilters((prev) => [...prev, filter]);
    } else {
      toCategoryFilters.push(filter);
    }

    console.log("Moving filter:", filter);
    console.log("From Category:", fromCategory);
    console.log("To Category:", toCategory);
    console.log("filterWeightages:", filterWeightages);

    // Update the filter's weightage based on the target category
    let weightage;
    switch (toCategory) {
      case "veryImportant":
        weightage = 3;
        break;
      case "important":
        weightage = 2;
        break;
      case "notImportant":
        weightage = 1;
        break;

      default:
        weightage = 0;
        break;
    }

    const weightageSetter = filterWeightages[filter];
    if (weightageSetter && typeof weightageSetter === "function") {
      // Check if the weightageSetter is a function before using it
      weightageSetter(weightage);
    } else {
      console.log(
        `Error: weightageSetter for filter '${filter}' is not a function.`
      );
    }

    setCategories(updatedCategories);

    // Increment the movedFiltersCount whenever a filter is moved
    setMovedFiltersCount((prev) => prev + 1);
  };

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
    console.log("ranked", JSON.stringify(updatedRankedSuburbs));
  };

  //Whenever movedFiltersCount changes, call handleFilterFurther if count is greater than or equal to 4
  useEffect(() => {
    if (movedFiltersCount >= 4) {
      handleFilterFurther();
    }
    // eslint-disable-next-line
  }, [movedFiltersCount]);

  return (
    <>
      <FilterPageStyled>
        <div className="filter-main-container">
          <div
            style={{
              display: "grid",
              placeItems: "center",
            }}
          >
            <p>Available Filters</p>
            <FilterContainer
              category="available"
              filters={filters}
              onFilterMove={handleFilterMove}
              style={{
                minHeight: "200px",
                border: "1px solid gray",
              }}
              className="available-container"
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: "10px",

              height: "100%",
            }}
          >
            <div className="bucket-container">
              <p>Very important</p>
              <FilterContainer
                category="veryImportant"
                filters={categories.veryImportant}
                onFilterMove={handleFilterMove}
                style={{
                  minWidth: "200px",
                  maxWidth: "260px",
                  minHeight: "120px",
                  borderRadius: "10px",

                  background: "white",
                  boxShadow: "0px 3px 3px 0px  gray",
                  "@media (max-width:912px)": {
                    background: "red",
                  },
                }}
              />
            </div>
            <div className="bucket-container">
              <p>Important</p>
              <FilterContainer
                category="important"
                filters={categories.important}
                onFilterMove={handleFilterMove}
                style={{
                  minWidth: "200px",
                  maxWidth: "260px",
                  minHeight: "120px",
                  borderRadius: "10px",

                  background: "white",
                  boxShadow: "0px 3px 3px 0px gray",
                }}
              />
            </div>
            <div className="bucket-container">
              <p>Not important</p>
              <FilterContainer
                category="notImportant"
                filters={categories.notImportant}
                onFilterMove={handleFilterMove}
                style={{
                  minWidth: "200px",
                  maxWidth: "260px",
                  minHeight: "120px",
                  borderRadius: "10px",

                  background: "white",
                  boxShadow: "0px 3px 3px 0px gray",
                }}
              />
            </div>
          </div>
        </div>
      </FilterPageStyled>
    </>
  );
};

export default FilterPage;
