import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import axios from 'axios';

// initial state
const initialState = {
  activities: [],
  error: null,
  loading: true
};

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  async function getActivities() {
    try {
      const res = await axios.get('/api/v1/activities');

      dispatch({
        type: 'GET_ACTIVITIES',
        payload: res.data.data
      })

    } catch (err) {
      dispatch({
        type: 'ACTIVITY_ERROR',
        payload: err.response.data.error
      })
    }
  }

  async function deleteActivity(id) {
    try {
      await axios.delete(`/api/v1/activities/${id}`)

      dispatch({
        type: "DELETE_ACTIVITY",
        payload: id,
      });
    } catch (err) {
      dispatch({
        type: 'ACTIVITY_ERROR',
        payload: err.response.data.error
      })
    }
  }

  async function addActivity(activity) {

    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    try {
      const res = await axios.post(`/api/v1/activities/`, activity, config)
      dispatch({
        type: "ADD_ACTIVITY",
        payload: res.data.data,
      });
    } catch (err) {
      dispatch({
        type: 'ACTIVITY_ERROR',
        payload: err.response.data.error
      })
    }
  }

  return (
    <GlobalContext.Provider
      value={{
        activities: state.activities,
        error: state.error,
        loading: state.loading,
        getActivities,
        deleteActivity,
        addActivity
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
