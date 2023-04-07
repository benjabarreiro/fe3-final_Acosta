import React, { useContext } from "react";
import DentistsContext from "../context/DentistsContext";
import ThemeContext from "../context/ThemeContext";
import DentistsContainer from "../containers/DentistsContainer";

export default function Favs() {
  const { favsDentists, deleteAllFavsDentits } = useContext(DentistsContext);
  const { appTheme } = useContext(ThemeContext);
  return (
    <div className={appTheme}>
      <h1>Favoritos</h1>
      <div className="elements-container">
        <button onClick={deleteAllFavsDentits} className="btn btn-light">
          Borrar todos
        </button>
      </div>
      <DentistsContainer dentists={favsDentists} />
    </div>
  );
}
