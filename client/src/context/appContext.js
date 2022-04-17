import React, { useState, useReducer, useContext } from "react";

import reducer from "./reducer";
import { CLEAR_ALERT, DISPLAY_ALERT } from "./actions";

const initialState = {
  isLoading: false,
  showAlert: false,
  alertText: "",
  alertType: "",
};

const AppContext = React.createContext();

//children would be the component which will be recieved in the tag
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  //dispatch will call reducer, state will be the initialstate
  //reducer will have initial state as the first paramter
  //second parameter will be the object sent in dispatch

  const displayAlert = () => {
    dispatch({ type: DISPLAY_ALERT });
    clearAlert();
  };

  const clearAlert = () => {
    setTimeout(() => {
      dispatch({ type: CLEAR_ALERT });
    }, 3000);
  };

  return (
    <AppContext.Provider value={{ ...state, displayAlert }}>
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider, initialState, useAppContext };
