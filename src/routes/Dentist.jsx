import React, { useContext } from "react";
import DetailCard from "../componets/DetailCard";
import AppContext from "../context/AppContext";

export default function Dentist() {
  const { appTheme } = useContext(AppContext);
  return (
    <div className={appTheme}>
      <DetailCard />
    </div>
  );
}
