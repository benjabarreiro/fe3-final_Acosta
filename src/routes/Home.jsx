import React, { useContext } from "react";
import AppContext from "../context/AppContext";
import DentistsContainer from "../containers/DentistsContainer";

export default function Home() {
  const { dentists, appTheme } = useContext(AppContext);
  return (
    <div className={appTheme}>
      <h1>Inicio</h1>
      <DentistsContainer dentists={dentists} />
    </div>
  );
}
