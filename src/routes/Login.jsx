import React, { useContext } from "react";
import styles from "../components/Form.module.css";

import LoginForm from "../components/LoginForm";
import ThemeContext from "../context/ThemeContext";

export default function Login() {
  const { appTheme } = useContext(ThemeContext);

  return (
    <>
      <div className={appTheme}>
        <h1>Login</h1>
        <div
          className={`text-center card container ${styles.card} ${appTheme}`}
        >
          <div className={`card-body ${styles.CardBody}`}>
            <LoginForm />
          </div>
        </div>
      </div>
    </>
  );
}
