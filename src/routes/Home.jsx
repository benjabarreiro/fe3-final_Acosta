import React, { useContext } from "react";
import DentistsContext from "../context/DentistsContext";
import ThemeContext from "../context/ThemeContext";
import AuthContext from "../context/AuthContext";
import DentistsContainer from "../containers/DentistsContainer";

export default function Home() {
  const { dentists } = useContext(DentistsContext);
  const { appTheme } = useContext(ThemeContext);
  const { userLogged } = useContext(AuthContext);
  return (
    <div className={appTheme}>
      <h1>Inicio</h1>
      <h2>Bienvenido {userLogged.email}</h2>
      <DentistsContainer dentists={dentists} />
    </div>
  );
}
