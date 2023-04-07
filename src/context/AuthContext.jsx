import { createContext, useReducer } from "react";
import { initialContext, initialState, reducer } from "./utils/auth-context";

const AuthContext = createContext(initialContext);

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleLogin = ({ email }) => {
    dispatch({
      type: "login",
      payload: { isLogged: true, userLogged: email },
    });
    localStorage.setItem("auth", JSON.stringify(email));
  };

  const handleLogout = () => {
    dispatch({
      type: "login",
      payload: { isLogged: false, userLogged: "" },
    });
    localStorage.removeItem("auth");
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
