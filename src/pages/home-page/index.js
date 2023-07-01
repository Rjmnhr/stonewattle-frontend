import { Space } from "antd";
import React, { useState } from "react";
import { IntegerStep } from "../../components/slider";
import { HomePageStyled } from "./style";
import NavBar from "../../components/nav-bar/nav-bar";
import { statesOfAus } from "../../components/states-in-aus/states";
import axios from "axios";

const HomePage = () => {
  const [dwellingType, setDwellingType] = useState("");
  const [minBedrooms, setMinBedrooms] = useState(null);
  const [stateInAus, setStateInAus] = useState("");
  const [budget, setBudget] = useState(null);
  const [results, setResults] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("type", dwellingType);
    formData.append("bedrooms", minBedrooms);
    formData.append("state", stateInAus);
    formData.append("budget", budget);

    axios
      .post("http://localhost:8002/api/domain/filter", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then(async (response) => {
        const data = await response.data;
        console.log(data);
        setResults(data);
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <NavBar />
      <HomePageStyled>
        <h3>
          Welcome to the one-stop property search. Simply fil out the details
          below and let's get started on your property journey{" "}
        </h3>
        <div className="home-page-container">
          <form onSubmit={handleSubmit}>
            <h4>Property Characteristics</h4>
            <div className="search-box">
              <div className="search-filter">
                <label>Dwelling Type</label>
                <select onChange={(e) => setDwellingType(e.target.value)}>
                  <option value="">Select</option>
                  <option value={"Unit"}>Unit </option>
                  <option value={"House"}>House</option>
                </select>
              </div>

              <div className="search-filter">
                <label>Minimum Bedrooms</label>
                <input
                  onChange={(e) => setMinBedrooms(e.target.value)}
                  type="number"
                />
              </div>

              <div className="search-filter">
                {" "}
                <label>State</label>
                <select onChange={(e) => setStateInAus(e.target.value)}>
                  <option value="">Select</option>
                  {statesOfAus.map((item) => (
                    <option value={item.state} key={item.id}>
                      {item.state}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <h3>Financial and Growth Characteristics </h3>

            <div className="search-box">
              <div className="search-filter">
                <label>Budget</label>
                <input
                  type="number"
                  onChange={(e) => setBudget(e.target.value)}
                />
              </div>

              <h4>
                Which of the below describes your investment strategy the most?{" "}
              </h4>
              <div className="slider">
                <label>Great Investment</label>
                <Space
                  style={{
                    width: "30%",
                  }}
                  direction="vertical"
                >
                  <IntegerStep />
                </Space>

                <label>Great Capital Growth</label>
              </div>
              <div className="slider">
                <label>High Population Growth</label>
                <Space
                  style={{
                    width: "30%",
                  }}
                  direction="vertical"
                >
                  <IntegerStep />
                </Space>

                <label>Low Population Growth</label>
              </div>
              <div className="slider">
                <label>Demand from Renters</label>
                <Space
                  style={{
                    width: "30%",
                  }}
                  direction="vertical"
                >
                  <IntegerStep />
                </Space>

                <label>Demand From Owners</label>
              </div>
            </div>
            <button type="submit">Search Suburbs</button>
          </form>
          {results
            ? results.map((data) => (
                <p key={data.suburb_id}>{data.suburb_name}</p>
              ))
            : ""}
        </div>
      </HomePageStyled>
    </>
  );
};

export default HomePage;
