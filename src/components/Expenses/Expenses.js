import React, { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpenseChart from "./ExpenseChart";

const Expenses = (props) => {
  const currentYear = new Date().getFullYear();
  const [filteredYear, setFilteredYear] = useState(currentYear);

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(+selectedYear); // Ensure selectedYear is a number
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear() === filteredYear; // Compare with number
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpenseChart expense={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
