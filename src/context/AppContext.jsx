import { createContext, useEffect, useReducer, useState } from "react";
import axios from "axios";
import {
  initialContext,
  initialState,
  isInList,
  reducer,
} from "../utils/app-context";

const AppContext = createContext(initialContext);

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getDentists = async () => {
    try {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      dispatch({ type: "getAllDentists", payload: data });
    } catch (err) {
      console.err("Hubo un error", err);
    }
  };

  const themeHandler = (theme) => {
    localStorage.setItem("theme", theme);
    dispatch({ type: "theme", payload: theme });
  };

  const handleLogin = (body) => {
    dispatch({ type: "login", payload: { isLogged: true, userLogged: body } });
    localStorage.setItem("auth", JSON.stringify(body));
  };

  const handleLogout = () => {
    dispatch({
      type: "login",
      payload: { isLogged: false, userLogged: { email: "", password: "" } },
    });
    localStorage.removeItem("auth");
  };

  const editFavsDentists = (dentist) =>
    dispatch({ type: "editFavsDentist", payload: dentist });

  const deleteAllFavsDentits = () => dispatch({ type: "deleteAllFavsDentits" });

  const showFavButton = (id) =>
    isInList(state.favsDentists, id)
      ? "Eliminar de favoritos"
      : "Agregar a favoritos";

  useEffect(() => {
    getDentists();
  }, []);

  const properties = {
    ...state,
    themeHandler,
    handleLogin,
    handleLogout,
    editFavsDentists,
    deleteAllFavsDentits,
    showFavButton,
  };
  return (
    <AppContext.Provider value={properties}>{children}</AppContext.Provider>
  );
};

export default AppContext;
