import React, { useContext } from "react";
import styles from "../componets/Form.module.css";
import ThemeContext from "../context/ThemeContext";
import ContactForm from "../componets/ContactForm";

// agregar inputs que faltan y validaciones, mostrar por consola mensaje
export default function Contact() {
  const { appTheme } = useContext(ThemeContext);

  return (
    <div className={appTheme}>
      <h1>Contact</h1>
      <div className={`text-center card container ${styles.card} ${appTheme}`}>
        <div className={`card-body ${styles.CardBody}`}>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
