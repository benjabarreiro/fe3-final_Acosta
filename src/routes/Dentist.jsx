import React, { useContext } from "react";
import AppContext from "../context/AppContext";
import DentistContainer from "../containers/DentistContainer";

export default function Dentist() {
  const { appTheme } = useContext(AppContext);
  return (
    <div className={appTheme}>
      <DentistContainer />
    </div>
  );
}
