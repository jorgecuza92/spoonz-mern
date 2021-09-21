import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const EnergyExpenses = () => {
  const { activities } = useContext(GlobalContext);

  const amounts = activities.map((activity) => activity.amount);

  const surplus = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(0);

  const expense = (
    amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(0);

  return (
    <div className="energy-expense-container">
      <div>
        <h4>Energy</h4>
        <p className="energy plus">+{surplus}</p>
      </div>
      <div>
        <h4>Energy Expense</h4>
        <p className="energy minus">-{expense}</p>
      </div>
    </div>
  );
};
