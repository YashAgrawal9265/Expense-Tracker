import React from "react";

import Chart from "../Chart/Chart";

const ExpenseChart = (props) => {
  const chartDataPoints = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];

  props.expense.forEach((expense) => {
    const expenseMonth = expense.date.getMonth(); //return value starting at 0 => January is 0, February is 1 and so on
    chartDataPoints[expenseMonth].value += expense.amount;
  });
  return <Chart dataPoints={chartDataPoints} />;
};

export default ExpenseChart;
