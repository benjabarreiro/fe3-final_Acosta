import { Link } from "react-router-dom";
import styles from "./Card.module.css";
import { useContext, useState } from "react";
import DentistsContext from "../context/DentistsContext";
import ThemeContext from "../context/ThemeContext";

const Card = (props) => {
  const { id, name, username } = props;
  const { editFavsDentists, showFavButton } = useContext(DentistsContext);
  const { appTheme } = useContext(ThemeContext);
  const [showFullString, setShowFullString] = useState(false);
  const isTooLong = (str, num) => str.length + num >= 26;
  let stringModified = (str, num) =>
    isTooLong(str, num) ? str.slice(0, 10) + "..." : str;
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
            {showFullString && isTooLong(name, 8) && (
              <h5 className={styles.hoverMessage}>{name}</h5>
            )}
            <h5
              className={`card-title ${styles.title} ${appTheme}`}
              onMouseOver={() => setShowFullString(true)}
              onMouseOut={() => setShowFullString(false)}
            >
              Nombre: {stringModified(name, 8)}
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
