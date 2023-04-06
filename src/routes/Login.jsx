import React, { useContext } from "react";
import styles from "../componets/Form.module.css";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import AppContext from "../context/AppContext";

const inputs = [
  {
    id: 1,
    placeholder: "Email",
    name: "email",
    type: "email",
  },
  {
    id: 2,
    placeholder: "Password",
    name: "password",
    type: "password",
  },
];

export default function Login() {
  const navigate = useNavigate();
  const { handleLogin, appTheme } = useContext(AppContext);
  const getInitialValues = () => ({
    email: "",
    password: "",
  });

  const getValidationSchema = () =>
    Yup.lazy(() =>
      Yup.object().shape({
        email: Yup.string()
          .email()
          .trim("No debe tener espacios en blanco")
          .strict()
          .required("Campo Obligatorio"),

        password: Yup.string()
          .trim("No debe tener espacios en blanco")
          .strict()
          .min(6, "La contraseña debe tener al menos 6 caracteres")
          .required("Campo Obligatorio"),
      })
    );

  const onSubmit = (values, { resetForm }) => {
    resetForm({ values: "" });
    handleLogin();
    navigate("/home");
  };

  const { values, setFieldValue, errors, handleSubmit } = useFormik({
    initialValues: getInitialValues(),
    validationSchema: getValidationSchema(),
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit,
  });

  return (
    <>
      <div className={appTheme}>
        <h1>Login</h1>
        <div
          className={`text-center card container ${styles.card} ${appTheme}`}
        >
          <div className={`card-body ${styles.CardBody}`}>
            <form onSubmit={handleSubmit}>
              {inputs.map(({ id, placeholder, name, type }) => (
                <div key={id}>
                  <input
                    className={`form-control ${styles.inputSpacing}`}
                    placeholder={placeholder}
                    name={name}
                    type={type}
                    value={values[name]}
                    onChange={(e) => setFieldValue(name, e.target.value)}
                    required
                  />
                  {errors[name] && (
                    <p
                      style={{
                        margin: "0",
                        color: "#FF5555",
                        fontSize: "12px",
                        fontWeight: "bold",
                        textAlign: "left",
                      }}
                    >
                      {errors[name]}
                    </p>
                  )}
                </div>
              ))}
              <button className="btn btn-primary" type="submit">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
