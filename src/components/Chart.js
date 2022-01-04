import React from "react";

// chart
import { PieChart, Pie, Tooltip, Cell } from "recharts";

// style
import styles from "./Chart.module.css"

const Chart = ({ income, expense }) => {
  const data = [
    { name: "Income", value: income },
    { name: "expense", value: expense },
  ];

  const COLORS = ['#16a34a', '#dc2626']
  return (
    <div className={styles.container}>
        <h1>Chart</h1>
        <PieChart width={280} height={200} className={styles.chart}>
          <Pie
            dataKey="value"
            isAnimationActive={true}
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label
          >{data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}</Pie>
          <Tooltip />
        </PieChart>
    </div>
  );
};

export default Chart;
