import React, { useState } from "react";
import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2024, 7, 14),
  },
  {
    id: "e2",
    title: "New TV",
    amount: 799.49,
    date: new Date(2024, 2, 12),
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2024, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2024, 5, 12),
  },
  {
    id: "e5",
    title: "New Laptop",
    amount: 650,
    date: new Date(2023, 5, 12),
  },
  {
    id: "e6",
    title: "New Washing Machine",
    amount: 850,
    date: new Date(2023, 3, 15),
  },
  {
    id: "e7",
    title: "New Car",
    amount: 15000,
    date: new Date(2022, 3, 1),
  },
];
const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const AddExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  return (
    <div>
      <NewExpense onAddExpense={AddExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
