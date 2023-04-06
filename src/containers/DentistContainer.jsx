import React, { useEffect, useState } from "react";
import DetailCard from "../componets/DetailCard";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function DentistContainer() {
  const { id } = useParams();
  const [dentist, setDentist] = useState({});

  const getDentist = async (dentistId) => {
    try {
      const { data } = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${dentistId}`
      );
      setDentist(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getDentist(id);
  }, [id]);

  return <DetailCard dentist={dentist} />;
}
