import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const GrowthChart = ({
  growthRate_2019,
  growthRate_2020,
  growthRate_2021,
  growthRate_2022,
  growthRate_2023,
}) => {
  const growthRateData = [
    { year: "2019", growthRate: growthRate_2019 },
    { year: "2020", growthRate: growthRate_2020 },
    { year: "2021", growthRate: growthRate_2021 },
    { year: "2022", growthRate: growthRate_2022 },
    { year: "2023", growthRate: growthRate_2023 },
  ];

  return (
    <div style={{ textAlign: "start", paddingLeft: "20px" }}>
      <h2 style={{ textAlign: "start", paddingLeft: "70px" }}>Growth Chart</h2>
      <LineChart width={500} height={300} data={growthRateData}>
        <XAxis dataKey="year" />
        <YAxis />
        <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="growthRate" stroke="#8884d8" />
      </LineChart>
    </div>
  );
};

export default GrowthChart;
