const appTheme = localStorage.getItem("theme");

export const initialState = {
  appTheme: appTheme || "light",
};

export const initialContext = {
  ...initialState,
  themeHandler: (theme) => {},
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "theme":
      return { ...state, appTheme: action.payload };
    default:
      return state;
  }
};
