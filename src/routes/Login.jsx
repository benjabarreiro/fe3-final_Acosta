import React, { useContext } from "react";
import styles from "../componets/Form.module.css";

import LoginForm from "../componets/LoginForm";
import AppContext from "../context/AppContext";

export default function Login() {
  const { appTheme } = useContext(AppContext);

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
