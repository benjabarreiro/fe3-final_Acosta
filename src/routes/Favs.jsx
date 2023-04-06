import React, { useContext } from "react";
import AppContext from "../context/AppContext";
import Card from "../componets/Card";

export default function Favs() {
  const { favsDentists, appTheme } = useContext(AppContext);
  return (
    <div className={appTheme}>
      <h1>Favorites</h1>
      <div className="card-grid container">
        {favsDentists?.map((dentist) => (
          <Card {...dentist} key={dentist.id} />
        ))}
      </div>
    </div>
  );
}
