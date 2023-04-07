import React, { useContext } from "react";
import AppContext from "../context/AppContext";
import DentistsContainer from "../containers/DentistsContainer";

export default function Favs() {
  const { favsDentists, appTheme, deleteAllFavsDentits } =
    useContext(AppContext);
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
