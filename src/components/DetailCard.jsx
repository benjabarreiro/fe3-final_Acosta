import { useContext } from "react";
import styles from "./DetailCard.module.css";
import DentistsContext from "../context/DentistsContext";
import ThemeContext from "../context/ThemeContext";

const DetailCard = ({ dentist }) => {
  const { editFavsDentists, showFavButton } = useContext(DentistsContext);
  const { appTheme } = useContext(ThemeContext);

  return (
    <>
      <h1>Detalle sobre: {dentist.name} </h1>
      <section className={`card col-sm-12 col-lg-6 container ${appTheme}`}>
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
              <li className={`list-group-item ${appTheme}`}>
                Teléfono: {dentist?.phone}
              </li>
              <li className={`list-group-item ${appTheme}`}>
                Email: {dentist?.email}
              </li>
              <li className={`list-group-item ${appTheme}`}>
                Sitio web: {dentist?.website}
              </li>
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
