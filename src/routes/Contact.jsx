import React, { useContext } from "react";
import styles from "../components/Form.module.css";
import ThemeContext from "../context/ThemeContext";
import ContactForm from "../components/ContactForm";

export default function Contact() {
  const { appTheme } = useContext(ThemeContext);

  return (
    <>
      <h1>Contact</h1>
      <div className={`text-center card container ${styles.card} ${appTheme}`}>
        <div className={`card-body ${styles.CardBody}`}>
          <ContactForm />
        </div>
      </div>
    </>
  );
}
