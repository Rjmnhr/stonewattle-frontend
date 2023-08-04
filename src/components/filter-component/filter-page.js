import React, { useEffect, useState } from "react";
// import FilterItem from "../../components/filter-item";
import FilterContainer from "./filter-container";
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
  const [greatForSchoolsWeightage, setGreatForSchoolsWeightage] = useState(0);
  const [greatForTransportWeightage, setGreatForTransportWeightage] =
    useState(0);
  const [greatForHospitalsWeightage, setGreatForHospitalsWeightage] =
    useState(0);

  const [movedFiltersCount, setMovedFiltersCount] = useState(0);
  const { availableFiltersCount } = useApplicationContext();

  const { results, setFilteredResults, setIsResultsFiltered } =
    useApplicationContext();

  // console.log("rental_yield", rentalYield);

  const [filters, setFilters] = useState([
    "Low vacancy rate",
    "Family friendly",
    "High rental yield",
    "Growth in property ",
    "Ratio of renters to owners",
    "High demand ",
    "High ratings",
    "Low supply",
    "Growth of population",
    "Low unemployment",
    "Higher weekly income",
    "Australian born",
    "Great for schools",
    "Great for transport",
    "Great for hospitals",
    // Add your other filters here
  ]);
  // eslint-disable-next-line
  const [initialFilters, setInitialFilters] = useState([
    "Low vacancy rate",
    "Family friendly",
    "High rental yield",
    "Growth in property ",
    "Ratio of renters to owners",
    "High demand ",
    "High ratings",
    "Low supply",
    "Growth of population",
    "Low unemployment",
    "Higher weekly income",
    "Australian born",
    "Great for schools",
    "Great for transport",
    "Great for hospitals",
  ]);

  const [categories, setCategories] = useState({
    veryImportant: [],
    important: [],
    notImportant: [],
  });

  const filterWeightages = {
    "Low vacancy rate": setVacancyRateWeightage,
    "Family friendly": setFamilyWeightage,
    "High rental yield": setRentalYieldWeightage,
    "Growth in property ": SetGrowthInPropertyWeightage,
    "Ratio of renters to owners": setRentVsOwnerRatioWeightage,
    "High demand ": setAvailabilityOfSupplyWeightage,
    "High ratings": setRatingsWeightage,
    "Low supply": setDemandPrevMonthWeightage,
    "Growth of population": setPopulationGrowthWeightage,
    "Low unemployment": setUnemployedPeopleWeightage,
    "Higher weekly income": setWeeklyIncomeWeightage,
    "Australian born": setAustralianBornWeightage,
    "Great for schools": setGreatForSchoolsWeightage,
    "Great for transport": setGreatForTransportWeightage,
    "Great for hospitals": setGreatForHospitalsWeightage,
  };

  const handleFilterMove = (filter, fromCategory, toCategory) => {
    const updatedCategories = { ...categories };
    const fromCategoryFilters = updatedCategories[fromCategory];
    const toCategoryFilters = updatedCategories[toCategory];

    // console.log("totoCategoryFilters", toCategoryFilters);

    // Remove the filter from the source container
    if (fromCategoryFilters) {
      const filterIndex = fromCategoryFilters.indexOf(filter);
      if (filterIndex !== -1) {
        fromCategoryFilters.splice(filterIndex, 1);
      }
    }

    // Remove the filter from the "Available Filters" container
    if (fromCategory === "available") {
      setFilters((prev) => prev.filter((f) => f !== filter));
    }

    if (!toCategoryFilters) {
      updatedCategories[toCategory] = [];
    }
    // Add the filter to the target container or 'Available Filters'
    if (toCategory === "available") {
      // Find the index of the filter in the initial order
      const filterIndex = initialFilters.indexOf(filter);
      // Insert the filter at the same position in the available container
      setFilters((prev) => [
        ...prev.slice(0, filterIndex),
        filter,
        ...prev.slice(filterIndex),
      ]);
    } else {
      toCategoryFilters.push(filter);
    }

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
    if (maxVacancyRate === 0) console.log("max_vacancy", maxVacancyRate);

    let maxFamily = Math.max(...results.map((suburb) => suburb.family));
    console.log("max_family", maxFamily);

    let maxRentalYield = Math.max(
      ...results.map((suburb) => suburb[rentalYield])
    );
    console.log("max_yeild", maxRentalYield);

    let maxGrowthInProperty = Math.max(
      ...results.map((suburb) => suburb[growthInProperty])
    );
    console.log("max_Growth", maxGrowthInProperty);

    let maxRentVsOwnerRatio = Math.max(
      ...results.map((suburb) => suburb.rental_population)
    );
    console.log("max_rent_vs_owner", maxRentVsOwnerRatio);

    let maxAvailabilityOfSupply = Math.max(
      ...results.map((suburb) => suburb[availabilityOfSupply])
    );
    console.log("max_availability_of_supply", maxAvailabilityOfSupply);

    let maxRatings = Math.max(...results.map((suburb) => suburb.ratings));
    console.log("max_ratings", maxRatings);

    let maxDemandPrevMonth = Math.max(
      ...results.map((suburb) => suburb[demandPrevMonth])
    );
    console.log("max_demand_prev_month", maxDemandPrevMonth);

    // const maxDemandLastYear = Math.max(
    //   ...results.map((suburb) => suburb[demandLastYear])
    // );
    // console.log("max_demand_last_year", maxDemandLastYear);

    let maxPopulationGrowth = Math.max(
      ...results.map((suburb) => suburb.growth_population)
    );
    console.log("max_population_growth", maxPopulationGrowth);

    let maxAustralianBorn = Math.max(
      ...results.map((suburb) => suburb.country_of_birth_australia)
    );
    console.log("max_australian_born", maxAustralianBorn);

    let maxUnemployedPeople = Math.max(
      ...results.map((suburb) => suburb.employment_worked_unemployed)
    );
    console.log("max_unemployed_people", maxUnemployedPeople);

    let maxWeeklyIncome = Math.max(
      ...results.map((suburb) => suburb.median_weekly_income_family)
    );
    console.log("max_weekly_income", maxWeeklyIncome);

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
    setFilteredResults(temp);
    // console.log("executing filter 2");
    console.log("ranked", JSON.stringify(updatedRankedSuburbs));
  };

  //Whenever movedFiltersCount changes, call handleFilterFurther if count is greater than or equal to 4
  useEffect(() => {
    // console.log(movedFiltersCount);
    if (results) {
      if (movedFiltersCount >= 4) {
        // console.log("executing filter");
        handleFilterFurther();
      }
    }

    // console.log("count", availableFiltersCount, filters.length);

    if (availableFiltersCount === 15) {
      setFilteredResults(null);
      return;
    }

    // eslint-disable-next-line
  }, [movedFiltersCount, availableFiltersCount, results]);

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
            <p>Available factors</p>
            <FilterContainer
              category="available"
              filters={filters}
              onFilterMove={handleFilterMove}
              style={{
                minHeight: "200px",
              }}
            />
          </div>
          <div className="bucket-main-container">
            <div className="bucket-container">
              <p>Very important</p>
              <FilterContainer
                category="veryImportant"
                filters={categories.veryImportant}
                onFilterMove={handleFilterMove}
                style={{
                  minWidth: "200px",
                  maxWidth: "260px",
                  height: "150px",
                  borderRadius: "10px",
                  overflowY: "auto",
                  background: "white",
                  border: "1px solid black",
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
                  height: "150px",
                  borderRadius: "10px",
                  overflowY: "auto",
                  background: "white",
                  border: "1px solid black",
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
                  minWidth: "260px",
                  maxWidth: "260px",
                  height: "150px",
                  borderRadius: "10px",
                  overflowY: "auto",
                  background: "white",
                  border: "1px solid black",
                }}
              />
            </div>
          </div>
        </div>
      </FilterPageStyled>
      <center>
        {movedFiltersCount >= 4 ? (
          ""
        ) : (
          <p>Select at least 4 factors to view ranked suburbs</p>
        )}
      </center>
    </>
  );
};

export default FilterPage;
