import { createContext, useEffect, useReducer, useState } from "react";
import axios from "axios";

const getUsers = async () => {};

const initialState = {
  appTheme: "light",
  themeHandler: () => {},
  users: [],
  favorites: [],
};

const appTheme = sessionStorage.getItem("theme");
const themeHandler = (theme) => sessionStorage.setItem("theme", theme);
const reducer = (state, action) => {
  switch (action.type) {
    case "theme":
      return { ...state, appTheme: action.payload };
    case "getUsers":
      return { ...state, users: action.payload };
  }
};
const AppContext = createContext(null);

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then(({ data }) => {
      dispatch({ type: "getUsers", payload: data });
    });
    dispatch({ type: "theme", payload: "dark" });
  }, []);

  console.log("users", users, state);

  const properties = {
    appTheme,
    themeHandler,
    users,
  };
  return (
    <AppContext.Provider value={properties}>{children}</AppContext.Provider>
  );
};

export default AppContext;
