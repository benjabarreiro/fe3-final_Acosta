import { useContext, useEffect, useState } from "react";
import styles from "./DetailCard.module.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import AppContext from "../context/AppContext";

const DetailCard = () => {
  const { id } = useParams();
  const [dentist, setDentist] = useState({});
  const { editFavsDentists, favsDentists } = useContext(AppContext);

  console.log(favsDentists);

  const getDentist = async () => {
    try {
      const { data } = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${id}`
      );
      setDentist(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getDentist();
  }, []);
  return (
    <>
      <h1>Detail about Dentist {"Nome do Dentista"} </h1>
      <section className="card col-sm-12 col-lg-6 container">
        <div className={`card-body row`}>
          <div className="col-sm-12 col-lg-6">
            <img
              className="card-img-top"
              src="/images/doctor.jpg"
              alt="doctor placeholder"
            />
          </div>
          <div className="col-sm-12 col-lg-6">
            <ul className="list-group">
              <li className="list-group-item">Name: {dentist?.name}</li>
              <li className="list-group-item">Phone: {dentist?.phone}</li>
              <li className="list-group-item">Email: {dentist?.email}</li>
              <li className="list-group-item">Sitio web: {dentist?.website}</li>
            </ul>
            <div className="text-center">
              <button
                className={`btn btn-light ${styles.button}`}
                onClick={() => editFavsDentists(dentist)}
              >
                Add to favorites
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DetailCard;
