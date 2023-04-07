import React, { useContext, useState } from "react";
import styles from "../componets/Form.module.css";
import AppContext from "../context/AppContext";
import { useFormik } from "formik";
import * as Yup from "yup";

// agregar inputs que faltan y validaciones, mostrar por consola mensaje
export default function Contact() {
  const { appTheme } = useContext(AppContext);
  const [consultation, setConsultation] = useState({});

  const getInitialValues = () => ({
    email: "",
    consultation: "",
  });

  const getValidationSchema = () =>
    Yup.lazy(() =>
      Yup.object().shape({
        email: Yup.string()
          .email()
          .trim("No debe tener espacios en blanco")
          .strict()
          .required("Campo Obligatorio"),
      })
    );

  const onSubmit = (values, { resetForm }) => {
    resetForm({ values: "" });
    setConsultation(values);
  };

  const { values, setFieldValue, errors, handleSubmit } = useFormik({
    initialValues: getInitialValues(),
    validationSchema: getValidationSchema(),
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit,
  });

  return (
    <div className={appTheme}>
      <h1>Contact</h1>
      <div className={`text-center card container ${styles.card} ${appTheme}`}>
        <div className={`card-body ${styles.CardBody}`}>
          <form onSubmit={handleSubmit}>
            <input
              className={`form-control ${styles.inputSpacing} ${appTheme}`}
              placeholder="Email"
              name="email"
              type="email"
              required
              value={values["email"]}
              onChange={(e) => setFieldValue("email", e.target.value)}
            />
            <textarea
              className={`form-control ${styles.inputSpacing} ${appTheme}`}
              placeholder="Consultation"
              name="consultation"
              type="text"
              value={values["consultation"]}
              onChange={(e) => setFieldValue("consultation", e.target.value)}
              required
            />
            <button className="btn btn-primary" type="submit">
              Send
            </button>
          </form>
        </div>
      </div>
      {consultation && (
        <div>
          <h2>Su consulta fue enviada, lo contactaremos a la brevedad</h2>
          <h4>{consultation.email}</h4>
          <p>{consultation.consultation}</p>
        </div>
      )}
    </div>
  );
}
