import { createContext, useEffect, useReducer, useState } from "react";
import axios from "axios";
import { initialContext, initialState, reducer } from "../utils/app-context";

const AppContext = createContext(initialContext);

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getUsers = async () => {
    try {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      dispatch({ type: "getUsers", payload: data });
    } catch (err) {
      console.err("Hubo un error", err);
    }
  };

  const themeHandler = (theme) => {
    sessionStorage.setItem("theme", theme);
    dispatch({ type: "theme", payload: theme });
  };

  useEffect(() => {
    getUsers();
    dispatch({ type: "theme", payload: "dark" });
  }, []);

  const properties = {
    ...state,
    themeHandler,
  };
  return (
    <AppContext.Provider value={properties}>{children}</AppContext.Provider>
  );
};

export default AppContext;
