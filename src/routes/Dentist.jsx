import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import DentistContainer from "../containers/DentistContainer";

export default function Dentist() {
  const { appTheme } = useContext(ThemeContext);
  return (
    <div className={appTheme}>
      <DentistContainer />
    </div>
  );
}
