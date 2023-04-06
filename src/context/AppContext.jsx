import { createContext, useEffect, useReducer, useState } from "react";
import axios from "axios";
import {
  getUserLoggedIn,
  initialContext,
  initialState,
} from "./utils/app-context";

const AppContext = createContext(initialContext);
// cambiar sessionstorage por localstorage para destacados
export const AppProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(getUserLoggedIn);

  const reducer = (state, action) => {
    switch (action.type) {
      case "theme":
        return { ...state, appTheme: action.payload };
      case "getAllDentists":
        return { ...state, dentists: action.payload };
      case "login":
        return { ...state, ...action.payload }; // isLogged: action.payload.isLogged, userLogged: action.payload.userLogged
      case "editFavsDentist":
        let favs = state.favsDentists;
        let newFavsList;
        const isInList = (id) => {
          return favs.find((item) => id === item.id);
        };
        if (!isInList(action.payload.id)) {
          newFavsList = [...state.favsDentists, action.payload];
          sessionStorage.setItem("favs", JSON.stringify(newFavsList));
          return { ...state, favsDentists: newFavsList };
        } else {
          newFavsList = favs.filter((fav) => fav.id !== action.payload.id);
          sessionStorage.setItem("favs", JSON.stringify(newFavsList));
          return { ...state, favsDentists: newFavsList };
        }
      case "deleteAllFavsDentits":
        return { ...state, favsDentists: [] };
      default:
        return state;
    }
  };
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
    sessionStorage.setItem("theme", theme);
    dispatch({ type: "theme", payload: theme });
  };

  // falata login con el useReducer
  const handleLogin = () => {
    //dispatch({ type: "login", payload: { isLogged: true, userLogged: body } })
    setLoggedIn(true);
    sessionStorage.setItem("auth", true);
  };

  const handleLogout = () => {
    setLoggedIn(false);
    sessionStorage.removeItem("auth");
  };

  const editFavsDentists = (dentist) =>
    dispatch({ type: "editFavsDentist", payload: dentist });

  // falta implementar metodo en la pantalla de favoritos
  const deleteAllFavsDentits = () => dispatch({ type: "deleteAllFavsDentits" });

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
    loggedIn,
  };
  return (
    <AppContext.Provider value={properties}>{children}</AppContext.Provider>
  );
};

export default AppContext;
