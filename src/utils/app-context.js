const appTheme = sessionStorage.getItem("theme");

export const initialState = {
  appTheme: appTheme || "light",
  users: [],
  favorites: [],
};

export const initialContext = { ...initialState, themeHandler: () => {} };

export const reducer = (state, action) => {
  switch (action.type) {
    case "theme":
      return { ...state, appTheme: action.payload };
    case "getUsers":
      return { ...state, users: action.payload };
  }
};