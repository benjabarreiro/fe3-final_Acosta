import { Link } from "react-router-dom";
import styles from "./Card.module.css";
import { useContext } from "react";
import AppContext from "../context/AppContext";

const Card = (props) => {
  const { id, name, username } = props;
  const { appTheme, editFavsDentists, showFavButton } = useContext(AppContext);
  return (
    <>
      <div className={`card`}>
        <img
          className="card-img-top"
          src="/images/doctor.jpg"
          alt="doctor placeholder"
        />
        <div className={`card-body ${styles.CardBody} ${appTheme}`}>
          <Link to={`/dentist/${id}`} className={appTheme}>
            <h5 className={`card-title ${styles.title} ${appTheme}`}>
              Nombre: {name}
            </h5>
            <h5 className={`card-title ${styles.title} ${appTheme}`}>
              Usuario: {username}
            </h5>
          </Link>
          <button
            className="btn btn-light"
            onClick={() => editFavsDentists(props)}
          >
            {showFavButton(id)}
          </button>
        </div>
      </div>
    </>
  );
};

export default Card;
