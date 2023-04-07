import React, { useContext, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  email_regex,
  field_required,
  invalid_email,
  minCharacters,
  objHasKeys,
  objHasValues,
} from "../utils/form";
import styles from "../componets/Form.module.css";
import ThemeContext from "../context/ThemeContext";

const initialState = {
  fullname: "",
  email: "",
  consultation: "",
};

export default function ContactForm() {
  const [consultation, setConsultation] = useState(initialState);
  const { appTheme } = useContext(ThemeContext);

  const getValidationSchema = () =>
    Yup.lazy(() =>
      Yup.object().shape({
        fullname: Yup.string()
          .min(5, minCharacters("El nombre", 5))
          .required(field_required),
        email: Yup.string()
          .email(invalid_email)
          .matches(email_regex)
          .trim()
          .strict()
          .required(field_required),
        consultation: Yup.string()
          .min(10, minCharacters("La consulta", 10))
          .required(field_required),
      })
    );

  const onSubmit = (values, { resetForm }) => {
    setConsultation(values);
    console.log(
      `Gracias ${consultation.fullname}, te contactaremos cuando antes vía mail`
    );
    resetForm({ values: "" });
  };

  const { values, setFieldValue, errors, handleSubmit } = useFormik({
    initialValues: initialState,
    validationSchema: getValidationSchema(),
    validateOnChange: true,
    validateOnBlur: false,
    onSubmit,
  });
  return (
    <>
      <form onSubmit={handleSubmit} noValidate>
        <input
          className={`form-control ${styles.inputSpacing} ${appTheme}`}
          placeholder="Nombre completo"
          name="fullname"
          required
          value={values["fullname"]}
          onChange={(e) => setFieldValue("fullname", e.target.value)}
        />
        {errors?.fullname && (
          <p className={styles.errorMessage}>{errors.fullname}</p>
        )}
        <input
          className={`form-control ${styles.inputSpacing} ${appTheme}`}
          placeholder="Email"
          name="email"
          type="email"
          required
          value={values["email"]}
          onChange={(e) => setFieldValue("email", e.target.value)}
        />
        {errors?.email && <p className={styles.errorMessage}>{errors.email}</p>}
        <textarea
          className={`form-control ${styles.inputSpacing} ${appTheme}`}
          placeholder="Consulta"
          name="consultation"
          type="text"
          value={values["consultation"]}
          onChange={(e) => setFieldValue("consultation", e.target.value)}
          required
        />
        {errors?.consultation && (
          <p className={styles.errorMessage}>{errors.consultation}</p>
        )}
        <button
          className="btn btn-primary"
          type="submit"
          disabled={objHasValues(values) || objHasKeys(errors)}
        >
          Send
        </button>
      </form>
      {objHasKeys(errors) && (
        <p>Por favor verifique su información nuevamente</p>
      )}
      {!!consultation.email.length && (
        <h2>
          Gracias {consultation.fullname}, te contactaremos cuando antes vía
          mail
        </h2>
      )}
    </>
  );
}
