import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
const Expenses = (prop) => {
  return (
    <Card className="expenses">
      <ExpenseItem
        title={prop.items[0].title}
        amount={prop.items[0].amount}
        date={prop.items[0].date}
      />
      <ExpenseItem
        title={prop.items[1].title}
        amount={prop.items[1].amount}
        date={prop.items[1].date}
      />
      <ExpenseItem
        title={prop.items[2].title}
        amount={prop.items[2].amount}
        date={prop.items[2].date}
      />
      <ExpenseItem
        title={prop.items[3].title}
        amount={prop.items[3].amount}
        date={prop.items[3].date}
      />
    </Card>
  );
}

export default Expenses;
