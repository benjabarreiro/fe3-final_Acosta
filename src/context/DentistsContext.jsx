import axios from "axios";
import { createContext, useEffect, useReducer } from "react";
import {
  initialContext,
  initialState,
  isInList,
  reducer,
} from "./utils/dentists-context";

const DentistsContext = createContext(initialContext);

export const DentistsProvider = ({ children }) => {
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
    editFavsDentists,
    deleteAllFavsDentits,
    showFavButton,
  };
  return (
    <DentistsContext.Provider value={properties}>
      {children}
    </DentistsContext.Provider>
  );
};

export default DentistsContext;
