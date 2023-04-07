import { createContext, useReducer } from "react";
import { initialContext, initialState, reducer } from "./utils/theme-context";

const ThemeContext = createContext(initialContext);

export const ThemeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const themeHandler = (theme) => {
    localStorage.setItem("theme", theme);
    dispatch({ type: "theme", payload: theme });
  };

  const properties = {
    ...state,
    themeHandler,
  };
  return (
    <ThemeContext.Provider value={properties}>{children}</ThemeContext.Provider>
  );
};

export default ThemeContext;
