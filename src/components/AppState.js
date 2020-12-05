import React, { createContext, useContext, useReducer } from "react";

const AppStateContext = createContext();

const initialState = {
  user: null,
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "SET_USER": {
      return {
        ...state,
        user: action.user,
      };
    }
    default: {
      return state;
    }
  }
};

export const AppStateProvider = ({children}) => (
  <AppStateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </AppStateContext.Provider>
);

 const useStateValue = () => useContext(AppStateContext);

 export default useStateValue