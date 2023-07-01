import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [{ name: "Rent", value: 50 }];

const HorizontalBarChart = () => {
  return (
    <BarChart width={200} height={50} data={data} layout="vertical">
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis type="number" />
      <YAxis type="category" dataKey="name" />
      <Tooltip />
      <Legend />
      <Bar dataKey="value" fill="#ff0000" stackId="a" />
      <Bar dataKey="value" fill="#0000ff" stackId="a" />
    </BarChart>
  );
};

export default HorizontalBarChart;
