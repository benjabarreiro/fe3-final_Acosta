export const email_regex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const invalid_email = "El email ingresado no es valido";

export const field_required = "Campo Obligatorio";

export const minCharacters = (field, num) =>
  `${field} debe tener al menos ${num} caracteres`;

export const objHasValues = (values) => Object.values(values).includes("");

export const objHasKeys = (keys) => !!Object.keys(keys).length;
