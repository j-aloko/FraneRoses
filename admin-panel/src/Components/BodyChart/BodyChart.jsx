import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import "./BodyChart.css";
import { userData } from "./../DummyData/DummyData";

function BodyChart() {
  return (
    <div className="bodyChart">
      <h3 className="chartTitle">User Analytics</h3>
      <ResponsiveContainer width="100%" aspect={4 / 0.5}>
        <LineChart data={userData}>
          <CartesianGrid stroke="#e0dfdf" strokeDasharray="3 3" />
          <XAxis dataKey="name" stroke="#5550bd" />
          <Tooltip />
          <Line type="monotone" dataKey="Active Users" stroke="#5550bd" />
          <Line type="monotone" dataKey="Active Users" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default BodyChart;
