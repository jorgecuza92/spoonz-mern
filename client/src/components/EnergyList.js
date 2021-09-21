import React, { useContext, useEffect } from "react";
import { Activity } from "./Activity";
import { GlobalContext } from "../context/GlobalState";

export const EnergyList = () => {
  const { activities, getActivities } = useContext(GlobalContext);

  useEffect(() => {
    getActivities();
  }, [])
  
  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {activities.map((activity) => (
          <Activity key={activity.id} activity={activity} />
        ))}
      </ul>
    </>
  );
};
