import { createContext, useContext, useReducer } from "react";
import { initialContext, initialState, reducer } from "./utils/auth-context";
import ThemeContext from "./ThemeContext";
import DentistsContext from "./DentistsContext";

const AuthContext = createContext(initialContext);

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { themeHandler } = useContext(ThemeContext);
  const { deleteAllFavsDentits } = useContext(DentistsContext);

  const handleLogin = ({ email }) => {
    dispatch({
      type: "login",
      payload: { isLogged: true, userLogged: email },
    });
    localStorage.setItem("auth", JSON.stringify(email));
  };

  const handleLogout = () => {
    localStorage.clear();
    deleteAllFavsDentits();
    themeHandler("light");
    dispatch({
      type: "login",
      payload: { isLogged: false, userLogged: "" },
    });
  };

  const properties = {
    ...state,
    handleLogin,
    handleLogout,
  };
  return (
    <AuthContext.Provider value={properties}>{children}</AuthContext.Provider>
  );
};

export default AuthContext;
