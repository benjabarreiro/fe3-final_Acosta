import React, { useContext } from "react";
import Card from "../componets/Card";
import AppContext from "../context/AppContext";

export default function Home() {
  const { dentists, appTheme } = useContext(AppContext);
  return (
    <div className={appTheme}>
      <h1>Home</h1>
      <div className="card-grid container">
        {dentists?.map((dentist) => (
          <Card {...dentist} key={dentist.id} />
        ))}
      </div>
    </div>
  );
}
