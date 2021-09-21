import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const Activity = ({ activity }) => {
  const { deleteActivity } = useContext(GlobalContext)

  const sign = activity.amount < 0 ? "-" : "+";

  return (
    <li className={activity.amount < 0 ? 'minus': 'plus'}>
      {activity.text}
      <span>
        {sign}
        {Math.abs(activity.amount)}
      </span>
      <button onClick={() => deleteActivity(activity._id)} className="delete-btn">x</button>
    </li>
  );
};
