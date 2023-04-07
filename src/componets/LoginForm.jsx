import styles from "./Form.module.css";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import AuthContext from "../context/AuthContext";
import { useContext } from "react";
import {
  email_regex,
  field_required,
  invalid_email,
  minCharacters,
  objHasKeys,
  objHasValues,
} from "../utils/form";

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
  const { handleLogin } = useContext(AuthContext);
  const getInitialValues = () => ({
    email: "",
    password: "",
  });

  const getValidationSchema = () =>
    Yup.lazy(() =>
      Yup.object().shape({
        email: Yup.string()
          .email(invalid_email)
          .matches(email_regex)
          .trim()
          .strict()
          .required(field_required),

        password: Yup.string()
          .trim()
          .strict()
          .min(6, minCharacters("La contraseña", 6))
          .required(field_required),
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
    validateOnChange: true,
    validateOnBlur: false,
    onSubmit,
  });

  return (
    <form onSubmit={handleSubmit} noValidate>
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
            <p className={styles.errorMessage}>{errors[name]}</p>
          )}
        </div>
      ))}
      <button
        className="btn btn-primary"
        type="submit"
        disabled={objHasValues(values) || objHasKeys(errors)}
      >
        Send
      </button>
    </form>
  );
};

export default LoginForm;
