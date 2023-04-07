import styles from "./Form.module.css";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import AppContext from "../context/AppContext";
import { useContext } from "react";

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

const LoginForm = () => {
  const navigate = useNavigate();
  const { handleLogin } = useContext(AppContext);
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
    handleLogin(values);
    resetForm({ values: "" });
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
  );
};

export default LoginForm;
