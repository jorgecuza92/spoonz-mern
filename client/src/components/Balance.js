import React, { useContext } from 'react';
import { GlobalContext } from "../context/GlobalState";

export const Balance = () => {

  const { activities } = useContext(GlobalContext);
  const amounts = activities.map(activity => activity.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0)

  return (
    <div style={{textAlign: 'center'}}>
      <h4>My Energy Balance</h4>
      <h1>{total}</h1>
    </div>
  )
}
