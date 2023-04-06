import { useContext } from "react";
import styles from "./DetailCard.module.css";
import AppContext from "../context/AppContext";

const DetailCard = ({ dentist }) => {
  const { editFavsDentists, showFavButton } = useContext(AppContext);

  return (
    <>
      <h1>Detalle sobre: {dentist.name} </h1>
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
              <li className="list-group-item">Teléfono: {dentist?.phone}</li>
              <li className="list-group-item">Email: {dentist?.email}</li>
              <li className="list-group-item">Sitio web: {dentist?.website}</li>
            </ul>
            <div className="text-center">
              <button
                className={`btn btn-light ${styles.button}`}
                onClick={() => editFavsDentists(dentist)}
              >
                {showFavButton(dentist?.id)}
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DetailCard;
