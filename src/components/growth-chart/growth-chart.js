import React, { useEffect, useState } from "react";
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
  const [chartWidth, setChartWidth] = useState(500);
  const [chartHeight, setChartHeight] = useState(300);

  const growthRateData = [
    { year: "2019", growthRate: growthRate_2019 },
    { year: "2020", growthRate: growthRate_2020 },
    { year: "2021", growthRate: growthRate_2021 },
    { year: "2022", growthRate: growthRate_2022 },
    { year: "2023", growthRate: growthRate_2023 },
  ];

  useEffect(() => {
    const updateChartSize = () => {
      const screenWidth = window.innerWidth;

      if (screenWidth < 912) {
        setChartWidth(300);
        setChartHeight(200);
      } else if (screenWidth < 600) {
        setChartWidth(250);
        setChartHeight(150);
      } else {
        setChartWidth(500);
        setChartHeight(300);
      }
    };

    // Call the function to set initial size
    updateChartSize();

    // Add an event listener to check for window size changes
    window.addEventListener("resize", updateChartSize);

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener("resize", updateChartSize);
    };
  }, []);

  return (
    <div style={{ textAlign: "start", paddingLeft: "20px" }}>
      <h2>Growth Chart</h2>
      <LineChart width={chartWidth} height={chartHeight} data={growthRateData}>
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
