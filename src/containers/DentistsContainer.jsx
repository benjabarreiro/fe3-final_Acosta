import React from "react";
import Card from "../componets/Card";

export default function DentistsContainer({ dentists }) {
  return (
    <div className="card-grid container">
      {dentists?.map((dentist) => (
        <Card {...dentist} key={dentist.id} />
      ))}
    </div>
  );
}
